import styled from 'styled-components';

export const VButton = styled.button`
    width: 90%;
    border: none;
    height: 60px;
    margin: 5%;
    background-color: #39A312;
    overflow: visible;
    border-radius: 5px;
    color: #fff;
    font-family: 'Roboto' sans-serif;
    font-size: 14px;
    text-transform: uppercase;
    &:hover ${VButton} {
        background-color: #44B919;
    }
`;
export const RButton = styled.button`
    width: 90%;
    border: none;
    height: 60px;
    margin: 5%;
    background-color:#22a1a1;
    overflow: visible;
    border-radius: 5px;
    color: #fff;
    font-family: 'Roboto' sans-serif;
    font-size: 14px;
    text-transform: uppercase;
    &:hover ${RButton} {
        background-color: #22aeae;
    }
`;