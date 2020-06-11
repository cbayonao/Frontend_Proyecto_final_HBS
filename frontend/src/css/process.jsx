import styled, { createGlobalStyle } from "styled-components";

export const Process = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  position: relative;
  width: 100%;
  z-index: 2;
  margin: 5% auto;
  &:hover ${Process} .buttons {
    display: flex;
    z-index: 1;
    height: 100%;
    justify-content: flex-end;
    align-items: center;
    animation: height-animation 0.5s;
    top: 0;
  }

  @keyframes height-animation {
    0% {
      height: 0%;
    }

    25% {
      height: 25%;
    }

    50% {
      height: 50%;
    }

    75% {
      height: 75%;
    }

    100% {
      height: 100%;
    }
  }
`;

export const Buttons = styled.div`
  display: none;
  position: absolute;
  z-index: -1;
  background: rgba(234, 221, 221, 0.57);
  width: 100%;
`;

export const Button = styled.button`
  width: 90px;
  height: 50px;
  color: whitesmoke;
  font-weight: bolder;
  margin: 1%;
  border: none;
  border-radius: 5%;
  cursor: pointer;
`;

export const Responsive = createGlobalStyle`
table {
    width: 100%;
    border-collapse: collapse;  
}
th {
background: #333;
  color: white;
  font-weight: bold;
}
td, th {
    padding: 6px;
    border: 1px solid #ccc;
    text-align: left;
}
tr:nth-of-type(odd) {
    background: #eee;
}

td:nth-child(2), td:nth-child(3) {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 150px;
}

.buttons button:nth-child(1) {
    background-color: rgba(111, 224, 40, 0.96);
}

.buttons button:nth-child(2) {
    display: none;
    background-color: rgba(251, 189, 33, 0.96);
}

.buttons button:nth-child(3)  {
    background-color: rgba(234, 40, 14, 0.96);
}

  @media only screen and (max-width: 760px),
    (min-device-width: 768px) and (max-device-width: 1024px) {
    /* Force table to not be like tables anymore */
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    /* Hide table headers (but not display: none;, for accessibility) */
    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tr {
      border: 1px solid #ccc;
    }

    td {
      /* Behave  like a "row" */
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
      padding-left: 50%;
    }

    td:before {
      /* Now like a table header */
      position: absolute;
      /* Top/left values mimic padding */
      top: 6px;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
    }

    
    td:nth-child(2), td:nth-child(3) {
      max-width: inherit;
    }
    .process:hover .buttons {
      display: flex;
      z-index: 1;
      height: 157.6px;
      justify-content: center;
      animation: height-animation 0.5s;
    }

    /*
    Label the data
    */
    td:nth-of-type(1):before {
      content: "Numero de Proceso";
    }

    td:nth-of-type(2):before {
      content: "Demandante";
    }

    td:nth-of-type(3):before {
      content: "Demandado";
    }

    td:nth-of-type(4):before {
      content: "Fecha de Radicacion";
    }

    td:nth-of-type(5):before {
      content: "Tipo de Proceso";
    }
  }
`;
