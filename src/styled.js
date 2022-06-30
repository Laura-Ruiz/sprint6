import styled from "styled-components";
import imgInicio from "./images/img/inicio.jpg";

export const Parrafo = styled.div`
    padding: 10px;
    text-align: center;
    border-radius: 2rem;
    border: 1px solid black;
    margin:1rem;
    opacity: 0.9;
    background-color: ${props => props.active} 
`;

export const Imagen = styled.div`
    padding: 10px;
    background-image: url(${props => props.img});
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
`
export const Botones = styled.div`
    button{
        width: 49%;
        height: 4rem;

    }
    
    display:flex;
    justify-content:center;
    margin:5px;
`;

export const Inicio = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    font-family:initial;
    font-size: larger;
    color: white;
    gap: 0.8rem;
    
   
    height: 100vh;
    background-image: url(${imgInicio});
    background-repeat: no-repeat;
    background-size: cover;
    `
