import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";

const SelectNative = ({ label, value, onChange, children }) => {
  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <Chevron id="chevron-down" strokeWidth={2} size={16} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  /* max-width: fit-content; */
  width: max-content;
`;

const NativeSelect = styled.select`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  background-color: ${COLORS.transparentGray15};
  padding: 12px 48px 12px 12px;
  color: ${COLORS.gray700};
  border-radius: 6px;
  border: none;
  appearance: none;
  &:hover {
    color: ${COLORS.black};
  }
`;

const Chevron = styled(Icon)`
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 10px;
  width: 12px;
  height: 12px;
  margin: auto;
  pointer-events: none;
  color: ${COLORS.gray700};
  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

export default SelectNative;
