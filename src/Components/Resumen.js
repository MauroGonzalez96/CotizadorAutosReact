import React from 'react';
import styled from '@emotion/styled';
import {HacerMayuscula} from '../helper';
import PropTypes from 'prop-types';

const ContenedorResumen = styled.div`
    background-color: #00838F;
    color: #FFF;
    padding: 1rem;
    margin-top: 1rem;
    text-align: center;
`;


const Resumen = ({datos}) => {

    const {marca, year, plan} = datos

    if(marca === "" || year === "" || plan === "") return null;

    return ( 
        <ContenedorResumen>
            <h2>Resumen de cotización</h2>
            <ul>
                <li>Marca: {HacerMayuscula(marca)}</li>  
                <li>Plan: {HacerMayuscula(plan)}</li> 
                <li>Año del auto: {year}</li> 
            </ul>
        </ContenedorResumen>
        
     );
}
 
Resumen.propTypes = {
    datos : PropTypes.object.isRequired
}

export default Resumen;