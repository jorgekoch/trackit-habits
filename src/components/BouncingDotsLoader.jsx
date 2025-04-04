import React from "react";
import styled from "styled-components";

export default function BouncingDotsLoader () {
  return (
      <BouncingLoader>
        <div></div>
        <div></div>
        <div></div>
      </BouncingLoader>
  );
};

const BouncingLoader = styled.div`
  display: flex;
  justify-content: center;

  div {
    width: 16px;
    height: 16px;
    margin: 3px 6px;
    border-radius: 50%;
    background-color: #a3a1a1;
    opacity: 1;
    animation: bouncing-loader 0.3s infinite alternate;
  }

  div:nth-child(2) {
    animation-delay: 0.1s;
  }

  div:nth-child(3) {
    animation-delay: 0.2s;
  }

  @keyframes bouncing-loader {
    to {
      opacity: 0.1;
      transform: translateY(-10px);
    }
  }
`

