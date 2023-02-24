/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  let Bar;
  switch (size) {
    case "small":
      Bar = Small;
      break;
    case "medium":
      Bar = Medium;
      break;
    default:
      Bar = Large;
  }
  return (
    <Bar
      role="progressbar"
      value={value}
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuetext={`Download progress: ${value}%`}
      aria-valuemax={100}
    >
      <WrappedValue>
        <ProgressValue value={value}>
          <VisuallyHidden>{value}%</VisuallyHidden>
        </ProgressValue>
      </WrappedValue>
    </Bar>
  );
};

const Base = styled.div`
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
`;

const Large = styled(Base)`
  height: 24px;
  padding: 3px;
`;
const Medium = styled(Base)`
  height: 12px;
`;
const Small = styled(Base)`
  height: 8px;
`;

const WrappedValue = styled.div`
  border-radius: 4px;
  height: 100%;
  background-color: transparent;
  overflow: hidden; /* ensure rounded corners */
`;

const ProgressValue = styled.div`
  background-color: ${COLORS.primary};
  width: ${(p) => p.value}%;
  height: 100%;
  border-radius: 4px 0px 0px 4px;
`;

export default ProgressBar;
