import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import React from "react";

// eslint-disable-next-line react/display-name
export const BasePrimaryButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return <Button variant="contained" color="primary" ref={ref} {...props} />;
  }
);

// eslint-disable-next-line react/display-name
export const BasePrimaryOutlinedButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>((props, ref) => {
  return <Button variant="outlined" color="primary" ref={ref} {...props} />;
});

export const PrimaryButton = styled(BasePrimaryButton)<ButtonProps>(({ theme }) => ({
  fontSize: "1rem",
  padding: `${theme.spacing(1)} ${theme.spacing(4)}`,
})) as typeof Button;

export const PrimaryOutlinedButton = styled(BasePrimaryOutlinedButton)<ButtonProps>(
  ({ theme }) => ({
    fontSize: "1rem",
    padding: `${theme.spacing(1)} ${theme.spacing(4)}`,
    color: theme.palette.text.primary,
    borderColor: theme.palette.primary.light,
  })
) as typeof Button;

// eslint-disable-next-line react/display-name
export const PrimaryButtonLink = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ href, ...props }, ref) => {
    return <PrimaryButton href={href} {...props} ref={ref} />;
  }
);

// eslint-disable-next-line react/display-name
export const PrimaryOutlinedButtonLink = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ href, ...props }, ref) => {
  return <PrimaryOutlinedButton href={href} {...props} ref={ref} />;
});
