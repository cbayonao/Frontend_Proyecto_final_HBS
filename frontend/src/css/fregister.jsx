import styled, { createGlobalStyle } from "styled-components";

export const FregisterStyle = createGlobalStyle`
    .form-style {
        display: flex;
        width: 100%;
        justify-content: center;
    }

    .options {
        width: 35%;
        display: flex;
        flex-flow: column wrap;
        -webkit-align-items: baseline;
        background-color: #D3D3D3;
    }

    .options button {
        margin: 10% auto;;
        padding: 5%;
        width: 100px;
        height: 50px;
        border-radius: 5%;
        color: white;
        font-weight: 600;
        border: none;
        cursor: pointer;
    }

    .options li:nth-child(1) button {
        background: linear-gradient(45deg,#c11338 30%,#744241 90%);
        background-color: rgba(0, 0, 0, 0);
        box-shadow: 0 3px 5px 2px rgba(9, 10, 10, 0.3);
    }

    .options li:nth-child(1) button:hover {
        background: linear-gradient(45deg,#c11338 30%,#e1302c 90%);
    }

    .options li:nth-child(2) button:hover {
        background: linear-gradient(45deg,#0c62a6 30%,#2799fe 90%);
    }

    .options li:nth-child(2) button {
        background: linear-gradient(45deg,#0C62A6 30%,#1E8AA3 90%);
        background-color: rgba(0, 0, 0, 0);
        box-shadow: 0 3px 5px 2px rgba(9, 10, 10, 0.3);
    }

    .options ul {
        list-style: none;
        margin: 0 auto;
    }

    .options li {
        padding: 2%;
    }

    .views {
        width: 80%;
        display: flex;
        flex-flow: column wrap;
    }

    .views div {
        max-width: 100%;
    }

    #back-home {
        margin-bottom: 5%;
    }

    .update-data {
        display: none;
    }

    @media (max-width: 435px) {
        .form-style {
            flex-flow: column wrap;
        }

        .views {
            width: 100%;
        }

        .options {
            flex-flow: row nowrap;
            width: 100%;
        }

        .options ul {
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin: 0 auto;
        }
        .options li {
            border-bottom: none;
        }
    }
`;
