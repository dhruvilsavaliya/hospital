import React from "react";
import { Container } from "@mui/material";
const CustomContainer = ({ children, className, FullWidth, ...rest }) => {
  return (
    <Container maxWidth={FullWidth ? "xl" : "lg"} {...rest}>
      {children}
    </Container>
  );
};

export default CustomContainer;
