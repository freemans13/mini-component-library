import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <FakeSelect>
        {displayedValue}
        <Chevron id="chevron-down" strokeWidth={2} size={16} />
      </FakeSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  /* max-width: fit-content; */
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  opacity: 0;
  appearance: none;
`;

const FakeSelect = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  background-color: ${COLORS.transparentGray15};
  padding: 12px 48px 12px 12px;
  color: ${COLORS.gray700};
  border-radius: 6px;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const Chevron = styled(Icon)`
  /* display: block; */
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 10px;
  width: 12px;
  height: 12px;
  margin: auto;
  pointer-events: none;
`;

export default Select;
