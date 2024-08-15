import { common } from "../styles-global";

export interface StyledButtonProps {
  size: "small" | "large";
}


interface ButtonBaseStyleProps {
  size: Record<
    "small" | "large",
    {
      width: string;
      height: string;
    }
  >;
  backgroundColor: string;
  color: string;
  borderRadius: string;
  fontFamily: string;
  fontSize: string
  border: string
}

export const ButtonBaseStyle: ButtonBaseStyleProps = {
  size: {
    small: {
      height: "38px",
      width: "200px"
    },
    large: {
       height: "48px",
       width: "320px"
    }
  },
  backgroundColor: common.colors.orange,
  color: "#FFF",
  borderRadius: "8px",
  fontFamily: `"Geologica", sans-serif`,
  fontSize: "20px",
  border: `2px solid ${common.colors.orange}`

}
