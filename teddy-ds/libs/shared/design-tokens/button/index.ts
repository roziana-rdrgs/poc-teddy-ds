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
  fontFamily: string
}

export const ButtonBaseStyle: ButtonBaseStyleProps = {
  size: {
    small: {
      height: "30px",
      width: "200px"
    },
    large: {
       height: "30px",
       width: "320px"
    }
  },
  backgroundColor: "#043533",
  color: "#FFF",
  borderRadius: "12px",
  fontFamily: `"Geologica", sans-serif`

}
