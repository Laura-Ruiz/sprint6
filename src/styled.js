import styled from "styled-components";

export const Parrafo = styled.div`
    padding: 10px;
    text-align: center;
    border-radius: 2rem;
    border: 1px solid black;
    margin:1rem;
    
    background-color: ${props=>props.active } 
`;
// background: url(./imagenes/img/${props=>props.background }.jpg)
export const Imagen = styled.div `
    padding: 10px;
    background-image: ${props=>props.background }

`
export const Botones = styled.div`
    button{
        width: 49%;
        height: 3rem;

    }

    display:flex;
    justify-content:center;
    margin:5px;
`;

export const Inicio = styled.div `
    display:flex;
    flex-direction:column;
    align-items:center;
    font-family:initial;
    gap: 1rem;
    margin-top: 2rem;
    
`