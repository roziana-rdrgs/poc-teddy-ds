
import { StyledButtonProps, ButtonBaseStyle, common } from './../../../../shared/design-tokens';
import styled, { css } from "styled-components";

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ size }) => css`
    width: ${ButtonBaseStyle.size[size].width};
    height: ${ButtonBaseStyle.size[size].height};
    background-color: ${ButtonBaseStyle.backgroundColor};

    border-radius: ${ButtonBaseStyle.borderRadius};
    font-family: ${ButtonBaseStyle.fontFamily};
    font-size: ${ButtonBaseStyle.fontSize};
    border: ${ButtonBaseStyle.border};
    &:hover {
      color: ${common.colors.primary100};
      background-color: ${common.colors.orange};
      box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
    }

  `}
`;
