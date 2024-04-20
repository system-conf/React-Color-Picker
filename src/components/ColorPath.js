// src/components/ColorPath.js

import React from 'react';
import styled from 'styled-components';

const PathContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
`;

const PathSegment = styled.div`
  flex: 1;
  background-color: ${props => props.color};
`;

const ColorPath = ({ colors }) => {
  return (
    <PathContainer>
      {colors.map((color, index) => (
        <PathSegment key={index} color={color} />
      ))}
    </PathContainer>
  );
};

export default ColorPath;
