import React from 'react';
import styled from 'styled-components';

const EventCard = () => {
  return (
    <StyledWrapper>
      <div className="flip-card h-96">
        <div className="flip-card-inner">
          <div className="flip-card-front bg-base-200 text-primary-content border-primary-content border-2">
            <p className="title">FLIP CARD</p>
            <p>Hover Me</p>
          </div>
          <div className="flip-card-back bg-base-100 text-primary-content border-primary-content border-2">
            <p className="title">BACK</p>
            <p>Leave Me</p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .flip-card {
    background-color: transparent;
    perspective: 1000px;
    font-family: sans-serif;
  }

  .title {
    font-size: 1.5em;
    font-weight: 900;
    text-align: center;
    margin: 0;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front, .flip-card-back {
    box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 1rem;
  }

 

  .flip-card-back {
    transform: rotateY(180deg);
  }`;

export default EventCard;
