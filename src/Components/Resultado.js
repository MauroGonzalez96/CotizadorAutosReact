import React from 'react';
import styled from '@emotion/styled';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import PropTypes from 'prop-types';

const Mensaje = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const ResultadoContenedor = styled.div`
    text-align: center;
    padding: 0.5rem;
    border: 1px solid #26C6DA;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`;

const TextoCotizacion = styled.p`
    color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;


const Resultado = ({cotizacion}) => {
    return ( 
    
        (cotizacion === 0) ? 
            <Mensaje>Ingresa la marca, año y plan del automóvil.</Mensaje> : 
            (
                <ResultadoContenedor>
                    <TransitionGroup
                        className = "resultado"
                        component = "span"
                    >
                        <CSSTransition
                            classNames = "resultado"
                            key = {cotizacion}
                            timeout = {{enter: 500, exit: 500}}
                        >
                            <TextoCotizacion>El total es: $ <span>{cotizacion}</span></TextoCotizacion>
                        </CSSTransition>
                    </TransitionGroup>
                </ResultadoContenedor>
            )
     );
}
 
Resultado.propTypes = {
    cotizacion : PropTypes.number.isRequired
}

export default Resultado;