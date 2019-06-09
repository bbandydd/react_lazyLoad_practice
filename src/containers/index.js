import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';

import data from './data';

const CardContainer = styled.div`
  display: flex;
  border: 1px solid #000;
  border-radius: 5px;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 20px;

  h4 {
    margin: 0 0 10px 0;
  }

  p {
    margin: 0;
  }
`;

const Card = ({ title, body }) => (
  <CardContainer>
    <h4>{title}</h4>
    <p>{body}</p>
  </CardContainer>
);

const Main = () => {
  useEffect(() => {
    console.log('componentDidMount');
  });
  return (
    <div>
      {data.map(o => (
        <Card {...o} />
      ))}
    </div>
  );
};

export default hot(Main);
