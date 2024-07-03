import { StyledButtonProps, ButtonBaseStyle } from './../../../../shared/design-tokens';
import styled, { css } from "styled-components";

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ size }) => css`
    width: ${ButtonBaseStyle.size[size].width};
    height: ${ButtonBaseStyle.size[size].height};
    background-color: ${ButtonBaseStyle.backgroundColor};
    color: ${ButtonBaseStyle.color};
    border-radius: ${ButtonBaseStyle.borderRadius};
  `}
`;
