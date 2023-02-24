/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar2 = ({ value, size }) => {
  let Progress;
  switch (size) {
    case "small":
      Progress = Small;
      break;
    case "medium":
      Progress = Medium;
      break;
    default:
      Progress = Large;
  }
  return (
    <Progress
      style={{ "--value": `${value}%` }}
      value={value}
      max={100}
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuetext={`Download progress: ${value}%`}
      aria-valuemax={100}
    />
  );
};

const Base = styled.progress`
  border: none;

  &::-webkit-progress-bar {
    box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
    border-radius: 4px;
    background-color: ${COLORS.transparentGray15};
  }

  &::-webkit-progress-value {
    border-radius: 4px ${(p) => (p.value > 98 ? "4px 4px" : "0px 0px")} 4px;
    background-color: ${COLORS.primary};
  }
`;

const Large = styled(Base)`
  height: 24px;
  &::-webkit-progress-bar {
    padding: 3px;
  }

  &::-webkit-progress-value {
  }
`;
const Medium = styled(Base)`
  height: 12px;
`;
const Small = styled(Base)`
  height: 8px;
`;

export default ProgressBar2;
