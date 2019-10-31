import styled from 'styled-components';

export const PageHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 5px 20px;
    color: #fff;
    border-bottom: 1px solid #fff;

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
    }

    p {
        font-weight: bold;
        margin-right: 10px;
    }
`;