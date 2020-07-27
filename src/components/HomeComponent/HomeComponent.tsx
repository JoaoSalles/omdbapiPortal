import React, { useMemo } from 'react';
import useForm from './hooks/useForm';
import classNames from 'classnames';
import { FormElement, InputElement } from './styles/styles';
import MoviesList from '../MoviesList';

function HomeComponent() {
    const { 
        onClickSubmit,
        onChangeSearch,
        search,
        searchResults,
        showList,
        status,
        currentPage,
        maxPage,
        onChangePagination
    } = useForm();

    // prevent rerender when typing in input
    const memoizedErrors = useMemo(() => 
        <MoviesList 
            status={status}
            showList={showList}
            searchResults={searchResults}
            currentPage={currentPage}
            maxPage={maxPage}
            onChangePagination={onChangePagination} 
        />
    , [status, showList, searchResults, currentPage, maxPage]);

    if (status === "idle") {
        return <div>Loading...</div>
    }

    return (
        <>
        <FormElement className={classNames({ 'moveUp': showList})} onSubmit={(e) => {e.preventDefault(); onClickSubmit()}}>
            <InputElement data-testid="form-textInput" type="text" value={search} onChange={ (event) => onChangeSearch(event.target.value)} placeholder="Procure seu Filme" />
            <InputElement data-testid="form-submit" type="submit" value="Buscar" disabled={!search}/>
        </FormElement>
        {memoizedErrors}
        </>
    )
}


export default HomeComponent;
