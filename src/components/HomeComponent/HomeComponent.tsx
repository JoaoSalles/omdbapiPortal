import React from 'react';
import useForm from './hooks/useForm';
import classNames from 'classnames';
import { FormElement, InputElement } from './styles/styles';

function HomeComponent() {
    // let location = useLocation()
    const { onClickSubmit, onChangeSearch, search, searchResults, onClickReturn, showList, status } = useForm();

    if (status === "idle") {
        return <div>Loading...</div>
    }

    return (
        <>
        <FormElement className={classNames({ 'moveUp': showList})} onSubmit={(e) => {e.preventDefault(); onClickSubmit()}}>
            <InputElement data-testid="form-textInput" type="text" value={search} onChange={ (event) => onChangeSearch(event.target.value)} placeholder="Procure seu Filme" />
            <InputElement data-testid="form-submit" type="submit" value="Buscar" />
        </FormElement>
        { status === 'pedding' ?  <div>Loading...</div> : null }
        </>
    )
}


export default HomeComponent;
