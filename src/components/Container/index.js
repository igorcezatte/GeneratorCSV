import styled from 'styled-components';

const Container = styled.div`
  max-width: 1000px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 50px auto;
  margin-bottom: 0px;
  display:flex;
  flex-direction: column;
  height:470px;
  max-height:470px;
  overflow: auto;

  h1 {
    font-size: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: center;
    color: #77787B;
  }

  img {
    width: 200px;
    height: auto;
    align-self: center;
    margin-top: 20px;
    margin-bottom: 30px;
  }
`;

export default Container;