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
    }

    .options ul {
        list-style: none;
        margin: 0 auto;
    }

    .options li {
        border-bottom: 1px solid;
        padding: 1%;
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
