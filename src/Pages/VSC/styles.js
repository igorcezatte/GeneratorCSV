import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    label {
        font-size: 16px;
        margin-top: 5px;
    }

    input, select {
        height: 23px;
        font-size: 16px;
        width: 250px;
        max-width: 250px;
    }

    button {
        border: 1px solid #eee;
        background-color: #00939A;
        color: white;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
        margin-top: 15px;
        height: 30px;

    }
`;

export const Table = styled.table`
    min-width: 500px;
    text-align: center;

    th {
        font-size: 18px;
        color: #77787B;
    }

    th, td {
        border-right: 1px solid #eee;
        border-bottom: 1px solid #eee;
        padding: 0 10px;
    }

    button {
        border: none;
        background: none;
        margin: auto;
        cursor: pointer;
    }

`;

export const DownloadButton = styled.div`
    border: 1px solid #eee;
    background-color: #00939A;
    color: white;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 15px;
    height: 30px;
    text-align: center;
    
    div {
        border: none;
        background: none;
        align-items: center;
        margin-top: 5px;
    }
`;