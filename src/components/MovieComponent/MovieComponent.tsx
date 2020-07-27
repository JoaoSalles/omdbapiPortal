import React from 'react';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import { GridContainer, MovieInfoContainer, InfoElement, LinkElement } from './styles/styles';
import useMovie from './hooks/useMovie';

interface Props {
    match: any;
}

function MovieComponent(props: Props) {
    const { match: { params } } = props;

    const {status, movieInfo } = useMovie(params.imdbID);

    if (status === "idle" || status === "pedding") {
        return <div>Loading...</div>
    }

    return (
        <MovieInfoContainer>
            <GridContainer>
                <div className="main-info-area">
                    <LinkElement to={`/`}>
                        <button><KeyboardReturnIcon/></button>
                    </LinkElement>
                    <InfoElement><b>Title:</b> {movieInfo.Title}</InfoElement>
                    <InfoElement><b>Genre:</b> {movieInfo.Genre}</InfoElement>
                    <InfoElement><b>Director:</b> {movieInfo.Director}</InfoElement>
                    <InfoElement><b>Actors:</b> {movieInfo.Actors}</InfoElement>
                    <InfoElement><b>Writer:</b> {movieInfo.Writer}</InfoElement>
                    <InfoElement><b>Type:</b> {movieInfo.Type}</InfoElement>
                    <InfoElement><b>Rated:</b> {movieInfo.Rated}</InfoElement>
                    <InfoElement><b>Released:</b> {movieInfo.Released}</InfoElement>
                    <InfoElement><b>Year:</b> {movieInfo.Year}</InfoElement>
                    <InfoElement><b>Language:</b> {movieInfo.Language}</InfoElement>
                    <InfoElement><b>Country:</b> {movieInfo.Country}</InfoElement>
                    <InfoElement><b>imdbRating:</b> {movieInfo.imdbRating}</InfoElement>
                    <InfoElement><b>imdbVotes:</b> {movieInfo.imdbVotes}</InfoElement>
                    <InfoElement><b>Awards:</b> {movieInfo.Awards}</InfoElement>
                    <InfoElement><b>Metascore:</b> {movieInfo.Metascore}</InfoElement>
                    <InfoElement><b>imdbID:</b> {movieInfo.imdbID}</InfoElement>
                </div>
                <div className="image-area" key={movieInfo.Title}> 
                    <img src={`${movieInfo.Poster}`} alt={`Movie: ${movieInfo.Title}`}/>
                </div>
                <div className="sub-info-area">
                    <InfoElement><b>Plot:</b> {movieInfo.Plot}</InfoElement>
                </div>
            </GridContainer>
        </MovieInfoContainer>
    )
}


export default MovieComponent;
