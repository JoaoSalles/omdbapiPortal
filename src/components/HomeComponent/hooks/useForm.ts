import { useState, useEffect } from 'react';

interface FormState {
    onClickSubmit: () => void;
    onClickReturn: () => void;
    onChangeSearch: (URL: string) => void;
    status: string;
    search: string;
    searchResults: {[name: string]: string} | {};
    showList: boolean;
}

const ENUM_STATUS = {
    IDLE: 'idle',
    RESOLVED: 'resolved',
    PEDDING: 'pedding'
}

const useForm = (): FormState => {
    const [onSubmit, setOnSubmit] = useState<boolean>(false);
    const [search, setsearch] = useState<string>("");
    const [searchResults, setSearchResults] = useState<object>({});
    const [status, setStatus] = useState<string>(ENUM_STATUS.IDLE);
    const [showList, setshowList] = useState<boolean>(false);

    const onClickSubmit = (): void => {
        setOnSubmit(true);
    }

    const onClickReturn = (): void => {
        setshowList(false);
        setSearchResults({});
    }

    useEffect(() => {
        if (onSubmit) {
          fetchBook();
          setStatus(ENUM_STATUS.PEDDING);
          setOnSubmit(false);
          setshowList(true);
        }
    }, [onSubmit]);

    useEffect(() => {
        setStatus(ENUM_STATUS.RESOLVED);
    }, []);


    const onChangeSearch = (URL: string): void => {
        setsearch(URL);
    }

    async function fetchBook() {
      let response = await fetch(`http://www.omdbapi.com/?s=${search}&apikey=5d1a08fe`)
      let jsonBody = await response.json()
      setStatus(ENUM_STATUS.RESOLVED);
      setSearchResults(jsonBody)
    }  

    return {
        onClickSubmit,
        onClickReturn,
        onChangeSearch,
        searchResults,
        status,
        search,
        showList
    }
}

export default useForm;