import React from 'react';
import styled from '@emotion/styled'; 

const ContenedorHeader = styled.header`
  background-color: #26C6DA;
  padding: 10px;
  font-weight: bold;
  color: #ffffff;
`;

const TextoHeader = styled.h1`
    text-align: center;
    margin: 0;
    font-family: 'Slabo 27px';
    font-size: 2rem;
`;

const Header = ({titulo}) => {
    return ( 
        <ContenedorHeader>
            <TextoHeader>{titulo}</TextoHeader>
        </ContenedorHeader>
     );
}
 
export default Header;