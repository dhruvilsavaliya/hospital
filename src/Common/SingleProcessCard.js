import React from "react";
import CustomBox from "./CustomBox";
import CustomTypography from "./CustomTypography";
import theme from "../Theme";
import EBStyled from "./EBStyled";
const ProcessCardstyled = EBStyled(CustomBox)(({ theme, backgroundImage }) => ({
  position: "relative",
  "& .MuiTypography-span": {
    position: "absolute",
    fontSize: 55,
    fontWeight: theme.typography.fontWeight[800],
    color: theme.palette.primary.dark,
    top: "10%",
    left: "-42%",
    opacity: 0.4,
    [theme.breakpoints.down("md")]: {
      fontSize: 25,
      padding: "15px",
      background: theme.palette.primary.main,
      opacity: 1,
      left: 0,
      top: "-6%",
      color: theme.palette.common.white,
      borderRadius: "50%",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
      padding: "14px",
      top: "-3%",
    },
  },
  "& > .MuiTypography-h4": {
    fotnSize: 40,
  },
  "&:after": {
    content: `url(${backgroundImage})`,
    top: "-40px",
    left: "100%",
    position: "absolute",
    transform: "rotate(12deg)",
    zIndex: -1,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));
const ImageStyled = EBStyled(CustomBox)(({ theme }) => ({
  borderRadius: 54,
  boxShadow: "0 2px 70px rgba(0,0,0,.1)",
  padding: 10,
  background: theme.palette.common.white,
  height: 180,
  "> img": {
    borderRadius: 44,
    verticalAlign: "middle",
    objectFit: "cover",
  },
}));
const SingleProcessCard = ({
  backgroundImageArrow,
  counterNumber,
  srcCard,
  altCard,
  title,
  pragraph,
}) => {
  return (
    <ProcessCardstyled backgroundImage={backgroundImageArrow}>
      <CustomTypography variant="span">{counterNumber}</CustomTypography>
      <ImageStyled>
        <CustomBox
          component="img"
          src={srcCard}
          alt={altCard}
          sx={{ height: "100%", width: "100%" }}
        />
      </ImageStyled>
      <CustomBox px={2} py={3} textAlign={"center"}>
        <CustomTypography
          variant="h5"
          component="h3"
          color={"primary.main"}
          fontWeight={theme.typography.fontWeight[600]}
          mb={1}
        >
          {title}
        </CustomTypography>
        <CustomTypography
          variant="subtitle2"
          color={theme.palette.secondary.dark}
        >
          {pragraph}
        </CustomTypography>
      </CustomBox>
    </ProcessCardstyled>
  );
};

export default SingleProcessCard;
