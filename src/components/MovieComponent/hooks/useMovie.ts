import { useState, useEffect } from 'react';
import { http } from '../../../types/SearchResultType';

interface MovieInfo {
    Title?: string;
    Year?: string;
    Rated?: string;
    Released?: string;
    Genre?: string; 
    Director?: string;
    Writer?: string;
    Actors?: string;
    Plot?: string;
    Language?: string;
    Country?: string;
    Awards?: string;
    Poster?: string;
    Metascore?: string;
    imdbRating?: string;
    imdbVotes?: string;
    imdbID?: string;
    Type?: string;
}

interface FetchResponseInterface extends MovieInfo {
    Response: string;
}

interface MovieHookReturn {
    movieInfo: MovieInfo;
    status: string;
}

const ENUM_STATUS = {
    IDLE: 'idle',
    RESOLVED: 'resolved',
    ERROR: 'error',
    PEDDING: 'pedding'
}

const useMovie = (imdbID: string): MovieHookReturn => {
    const [status, setStatus] = useState<string>(ENUM_STATUS.IDLE);
    const [movieInfo, setMovieInfo] = useState<MovieInfo>({});

    async function fetchFirstRequest() {
        let response = await http<FetchResponseInterface>(`http://omdbapi.com/?i=${imdbID}&apikey=5d1a08fe`)
        if(response.parsedBody && response.parsedBody.Response !== "False") {
            setMovieInfo(response.parsedBody);
        } else {
            setStatus(ENUM_STATUS.ERROR);
        }
        setStatus(ENUM_STATUS.RESOLVED);
      }

    useEffect(() => {
        setStatus(ENUM_STATUS.PEDDING);
        fetchFirstRequest()
    }, []);


    return {
        movieInfo,
        status
    }
}

export default useMovie;