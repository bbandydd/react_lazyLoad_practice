import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

import data from './data';
import { pseudoRandomBytes } from 'crypto';

const Container = styled.div`
  width: 800px;
  margin: 0 auto;
`;

const CardContainer = styled.div`
  display: flex;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;

  img {
    margin-right: 20px;
  }

  .cardBody {
    display: flex;
    flex-direction: column;

    h4 {
      margin: 0 0 10px 0;
    }

    p {
      margin: 0;
    }
  }
`;

const CardImg = styled.img`

`;

const Loading = () => (
  <CardContainer>
    <h5>Loading...</h5>
  </CardContainer>
)

const Card = ({ id, title, body }) => (
  <CardContainer>
    <LazyLoad
      once
      placeholder={<img src={`https://picsum.photos/id/${id}/5/5`} alt="..." />}
    >
      <CardImg src={`https://picsum.photos/id/${id}/200/200`} alt="..." />
    </LazyLoad>
    <div className="cardBody">
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  </CardContainer>
);

const Main = () => {
  useEffect(() => {
    console.log('componentDidMount');
  });
  return (
    <Container>
      {data.map(o => (
        <LazyLoad
          key={o.id}
          height={100}
          offset={[-100, 100]}
          throttle={1000}
          placeholder={<Loading />}
        >
          <Card {...o} />
        </LazyLoad>
      ))}
    </Container>
  );
};

export default hot(Main);
