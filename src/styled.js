import styled from "styled-components";

export const Parrafo = styled.div`
    padding: 10px;
    text-align: center;
    border-radius: 2rem;
    border: 1px solid black;
    margin:1rem;
    
    background-color: ${props=>props.active } 
  
    
    
`;

export const Botones = styled.div`
    button{
        width: 49%;
        height: 3rem;

    }

    display:flex;
    justify-content:center;
    margin:5px;
`;