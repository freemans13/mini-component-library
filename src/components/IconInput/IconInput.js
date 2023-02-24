import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const textRef = React.useRef();
  return (
    <Wrapper>
      <NativeInput
        style={{
          "--fontSize": size === "large" ? "18px" : "14px",
          "--lineHeight": size === "large" ? "21px" : "16px",
          "--width": width + "px",
          "--iconSize": size === "large" ? "21px" : "16px",
        }}
        ref={textRef}
        type="text"
        {...delegated}
      />
      {size === "small" && <IconWrapper id={icon} size={16} />}
      {size === "large" && <IconWrapper id={icon} size={21} strokeWidth={2} />}
      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  width: fit-content;
  height: fit-content;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

const NativeInput = styled.input`
  padding-left: 2rem;
  left: var(--iconSize);
  top: 0px;
  width: var(--width);
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: var(--fontSize);
  line-height: var(--lineHeight);
  border: none;
  border-bottom: 1px solid black;
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const IconWrapper = styled(Icon)`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  width: fit-content;
  height: fit-content;
  margin: auto 0;
  color: inherit;
`;

export default IconInput;
