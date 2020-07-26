import { useState, useEffect, useContext } from 'react';
import { SearchResultType, http } from '../../../types/SearchResultType';
import { INITIAL_FETCH, FETCH_MORE_MOVIES } from './../../../store/actions/movieActions';
import Context from './../../../utils/context';

interface FormState {
    onClickSubmit: () => void;
    onChangeSearch: (URL: string) => void;
    onChangePagination: (newPage: number) => void;
    status: string;
    search: string;
    searchResults: SearchResultType;
    showList: boolean;
    currentPage: number;
    maxPage: number;
}

interface FetchResponseInterface {
    Search?: any;
    Response?: string;
    totalResults?: number,
}

const ENUM_STATUS = {
    IDLE: 'idle',
    RESOLVED: 'resolved',
    PEDDING: 'pedding'
}

const useForm = (): FormState => {
    const [onSubmit, setOnSubmit] = useState<boolean>(false);
    const [search, setsearch] = useState<string>("");
    const [status, setStatus] = useState<string>(ENUM_STATUS.IDLE);
    const [showList, setshowList] = useState<boolean>(false);

    const { state, dispatch } = useContext(Context);

    const [currentPage, setCurrentPage] = useState<number>(0);
    const [pageSearch, setPageSearch] = useState<number>(1);
    const [maxPage, setMaxPage] = useState<number>(0); // portal pagination is multiple of 6
    const [maxPageDecimal, setMaxPageDecimal] = useState<number>(0); // api pagination is multiple of 10

    const onClickSubmit = (): void => {
        setOnSubmit(true);
    }

    useEffect(() => {
        if (onSubmit) {
          fetchFirstRequest();
          setStatus(ENUM_STATUS.PEDDING);
          setshowList(true);
          setOnSubmit(false);
          setCurrentPage(0);
        }
    }, [onSubmit]);

    useEffect(() => {
        setStatus(ENUM_STATUS.RESOLVED);
        const auxTotalResults = state.totalResults || 0;
        setMaxPage(Math.floor(auxTotalResults / 6))
        setMaxPageDecimal(Math.floor(auxTotalResults / 10))
    }, []);

    const onChangeSearch = (URL: string): void => {
        setsearch(URL);
    }

    async function fetchFirstRequest() {
      let response = await http<FetchResponseInterface>(`http://www.omdbapi.com/?s=${search}&apikey=5d1a08fe`)
      if(response.parsedBody && response.parsedBody.Response !== "False") {
        dispatch({ type: INITIAL_FETCH, payload: { movies: response.parsedBody.Search, totalResults: response.parsedBody.totalResults }})
        const auxTotalResults = response.parsedBody.totalResults || 0;
        setPageSearch(2);
        setMaxPage(Math.floor(auxTotalResults / 6))
        setMaxPageDecimal(Math.floor(auxTotalResults / 10))
      }
      setStatus(ENUM_STATUS.RESOLVED);
    }

    async function fetchNextPage() {
        let response = await http<FetchResponseInterface>(`http://www.omdbapi.com/?s=${search}&apikey=5d1a08fe&page=${pageSearch}`)
        if(response.parsedBody && response.parsedBody.Response !== "False") {
            const newResults = response.parsedBody.Search || [];
            dispatch({ type: FETCH_MORE_MOVIES, payload: response.parsedBody.Search })
            setPageSearch(pageSearch + 1);
        }
        setStatus(ENUM_STATUS.RESOLVED);
      } 

    const onChangePagination = (newPage: number): void => {
        setCurrentPage(newPage);
    }

    useEffect(() => {
        if (pageSearch <= 100 && ((pageSearch-1) * 10 - currentPage * 6) < 10 && maxPageDecimal >= pageSearch && currentPage != 0) {
            setStatus(ENUM_STATUS.PEDDING);
            fetchNextPage()
        }
    }, [currentPage]);

    return {
        onClickSubmit,
        onChangeSearch,
        searchResults: state.movies,
        status,
        search,
        currentPage,
        showList,
        maxPage,
        onChangePagination,
    }
}

export default useForm;