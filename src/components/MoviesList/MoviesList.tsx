import React from 'react';
import SkipNextOutlinedIcon from '@material-ui/icons/SkipNextOutlined';
import SkipPreviousOutlinedIcon from '@material-ui/icons/SkipPreviousOutlined'; 
import classNames from 'classnames';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap_white.css';
import TooltipComponent from '../TooltipComponent';
import { ListMovieContainer, MoviesDisplay, GridContainer, PaginationButton } from './styles/styles';
import { SearchResultType, MovieType } from '../../types/SearchResultType';

interface Props {
    status: string;
    showList: boolean;
    searchResults: SearchResultType;
    currentPage: number;
    maxPage: number;
    onChangePagination: (newPage: number) => void;
}

function MoviesList(props: Props) {
    const { status, showList, searchResults, currentPage, maxPage, onChangePagination } = props;

    if (status === "pedding") {
        return <div>Loading...</div>
    }

    return (
        <ListMovieContainer className={classNames({ 'show': showList})}>
            <PaginationButton onClick={ () => {onChangePagination(currentPage-1)}} disabled={currentPage === 0}><SkipPreviousOutlinedIcon /></PaginationButton>
                <GridContainer>
                <MoviesDisplay>
                    { searchResults.slice(currentPage*6,(currentPage+1)*6).map( (movie: MovieType) => {
                        return movie && (
                            <Tooltip mouseEnterDelay={0.1} trigger={'hover: 1'} mouseLeaveDelay={0.1} align={{ offset: [-70, 0]}} placement="right" transitionName={'rc-tooltip-zoom'} overlay={<TooltipComponent movie={movie}/>} key={`tooltip_${movie.Title}`}>
                                <div data-tip='test' className="image-container" key={movie.Title}> <img src={`${movie.Poster}`} alt={`Movie: ${movie.Title}`}/></div>
                            </Tooltip>
                        )
                    })}
                </MoviesDisplay>
            </GridContainer>
            <PaginationButton onClick={ () => {onChangePagination(currentPage+1)}} disabled={maxPage <= currentPage}><SkipNextOutlinedIcon /></PaginationButton>
        </ListMovieContainer>
    )
}

export default MoviesList;
