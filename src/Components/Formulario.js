import React, {useState} from 'react';
import styled from '@emotion/styled';
import { obtenerDiferenciaYear } from '../helper';
import { calcularMarca } from '../helper';
import { obtenerPlan } from '../helper';
import PropTypes from 'prop-types';

const Campo = styled.div`
    display:flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display:block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Boton = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color 0.3s ease;
    margin-top: 2rem;

    &:hover{
        background-color: #26C6DA;
        cursor: pointer;
    }
`;

const Error = styled.div`
    background-color: red;
    color : white;
    padding : 1rem;
    width : 100%;
    text-align : center;
    margin-bottom : 2rem;
`;

const Formulario = ({guardarResumen, guardarCargando}) => {

    //Elaborando useState para almacenar los valores de los campos del formulario
    const [datos, guardarDatos] = useState({
        marca : "",
        year : "",
        plan : ""
    })

    //Validar que el formulario se lleno correctamente
    const [error, guardarError] = useState(false)

    //Extrayendo los valores del objeto del useState
    const {marca, year, plan} = datos

    //Actualizando el useState con los valores seleccionados en el formulario
    const ObtenerDatos = e => {
        guardarDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    //Cuando el usuario presiona submit
    const cotizarSeguro =  e => {
        e.preventDefault();

        if(marca.trim() === "" || year.trim() === "" || plan.trim() ===""){
            guardarError(true)
            return
        }
        guardarError(false)

        //Partiendo de una base de 2000
        let resultado = 2000

        //Obteniendo la diferencia de años
        const Diferencia = obtenerDiferenciaYear(year)

        //Por cada año resultado disminuye el 3%
        resultado -= ((Diferencia * 3)*resultado / 100)

        //Americano aumentar 15%
        //Asiatico aumentar 5%
        //Europeo aumentar 20%
        resultado = resultado * calcularMarca(marca)

        //Básico aumenta 20%
        //Completo aumenta 50%
        resultado = parseFloat(resultado * obtenerPlan(plan)).toFixed(2)

        guardarCargando(true)

        setTimeout(() => {

            guardarCargando(false)

            guardarResumen({
                cotizacion : Number(resultado),
                datos
            })
        }, 3000)

        //Total

    }

    return (  
        <form
            onSubmit = {cotizarSeguro}
        >
            { error ? <Error> Llene todos los datos del formulario </Error> : null }
            <Campo>
                <Label>Marca</Label>
                <Select
                    name = "marca"
                    value = {marca}
                    onChange = {ObtenerDatos}
                >
                    <option value = "">"---------Seleccione----------"</option>
                    <option value = "Americano">Americano</option>
                    <option value = "Europeo">Europeo</option>
                    <option value = "Asiatico">Asiatico</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Año</Label>
                <Select
                    name = "year"
                    value = {year}
                    onChange = {ObtenerDatos}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Plan</Label>
                <InputRadio
                    type="radio"
                    name="plan"
                    value="basico"
                    checked = {plan === "basico"}
                    onChange = {ObtenerDatos}
                />Básico
                <InputRadio
                    type="radio"
                    name="plan"
                    value="completo"
                    checked = {plan === "completo"}
                    onChange = {ObtenerDatos}
                />Completo
            </Campo>
            <Boton type="submit">Cotizar</Boton>
        </form>
    );
}
 
Formulario.propTypes = {
    guardarResumen : PropTypes.func.isRequired,
    guardarCargando : PropTypes.func.isRequired
}

export default Formulario;