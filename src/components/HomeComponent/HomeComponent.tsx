import React from 'react';
import useForm from './hooks/useForm'
import ReturnIcon from '../../return-button.svg';
import { FormElement, ReturnButton } from './styles/styles';

function HomeComponent() {
    // let location = useLocation()
    const { onClickSubmit, onChangeSearch, search, searchResults, onClickReturn } = useForm();

    if (status === 'pedding' || status === "idle") {
        return <div>Loading...</div>
    }

    return (
        <FormElement onSubmit={(e) => {e.preventDefault(); onClickSubmit()}}>
            <input type="text" value={search} onChange={ (event) => onChangeSearch(event.target.value)} placeholder="Procure seu Filme" />
            <input type="submit" value="Buscar" />
        </FormElement>
    )
}


export default HomeComponent;
