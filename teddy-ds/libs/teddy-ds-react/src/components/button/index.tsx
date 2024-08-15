
import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./styles";
import {ButtonProps} from "./../../../../shared/types";


interface ButtonPropsReact extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonProps>, ButtonProps  {
  tooltip?: string
}


export const Button = ({
  children,
  label = "",
  className = "",
  tooltip = "",
  onClick,
  size,
  ...props
}: ButtonPropsReact) => {

  return (
    <StyledButton
      size={size}
      onClick={onClick}
      {...props}
    >
      {label}

    </StyledButton>

  );
};
