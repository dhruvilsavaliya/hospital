import React, { useState } from "react";
import CustomBox from "./CustomBox";
import CustomTypography from "./CustomTypography";
import { SecondCustomButton } from "./CustomButton";
import EBStyled from "./EBStyled";
const ServiceCardStyled = EBStyled(CustomBox)(({ theme, backgroundImage }) => ({
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  zIndex: "1",
  boxShadow: "0px 2px 20px rgba(0,0,0,0.06)",
  borderRadius: "20px",
  overflow: "hidden",
  padding: "30px 8px",
  ":before": {
    content: "''",
    position: "absolute",
    bottom: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "rgb(3 27 78 / 60%)",
    zIndex: -1,
    transition: "all .5s ease-in-out ",
  },
  ":after": {
    position: "absolute",
    content: "''",
    bottom: "100%",
    left: 0,
    height: "100%",
    width: "100%",
    zIndex: -1,
    transition: "all .5s ease-in-out ",
    backgroundColor: "rgb(51 104 198 / 40%)",
  },
  "& > .MuiTypography-h5": {
    fontWeight: 600,
    color: theme.palette.common.white,
    transition: "all 0.4s ease-in-out",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      transition: "all 0.4s ease-in-out",
      fontSize: 20,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    },
  },
  "& > .MuiTypography-subtitle1": {
    color: theme.palette.common.white,
    transition: "all 0.4s ease-in-out",
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
    },
  },
  "&:hover": {
    "&:before": {
      bottom: "-100%",
    },
    "&:after": {
      bottom: "0",
    },
  },
}));

const StyledBoxIcon = EBStyled(CustomBox)(({ theme, hoverBlock }) => ({
  height: 80,
  width: 80,
  backgroundColor: theme.palette.primary.light,
  borderRadius: "50%",
  transition: "all .4s ease-in-out",
  textAlign: "center",
  verticalAlign: "middle",
  lineHeight: "120px",
  margin: "0 auto 16px auto",
  [theme.breakpoints.down("sm")]: {
    height: 65,
    width: 65,
    lineHeight: "90px",
    marginBottom: 20,
  },
  "& > img": {
    height: "auto",
    maxWidth: 45,
    transform: hoverBlock ? "" : "rotateY(180deg)",
    [theme.breakpoints.down("sm")]: {
      maxWidth: 35,
    },
  },
}));

const ServiceCard = ({
  backgroundImage,
  BoxIcon,
  Iconalt,
  BoxTitle,
  subTitle,
  btnText,
}) => {
  const [hoverBlock, setHoverBlock] = useState(false);

  return (
    <ServiceCardStyled
      backgroundImage={backgroundImage}
      onMouseEnter={() => setHoverBlock(true)}
      onMouseLeave={() => setHoverBlock(false)}
    >
      <StyledBoxIcon hoverBlock={hoverBlock}>
        <CustomBox
          component="img"
          src={BoxIcon}
          alt={Iconalt}
          sx={{ transition: "all .4s ease-in-out" }}
        />
      </StyledBoxIcon>
      <CustomTypography component="h3" variant="h5" textAlign="center" mb={1}>
        {BoxTitle}
      </CustomTypography>
      <CustomTypography
        variant="subtitle1"
        textAlign="center"
        mb={1.2}
        sx={{ transition: "all 0.4s ease-in-out" }}
      >
        {subTitle}
      </CustomTypography>
      <SecondCustomButton
        variant="contained"
        sx={{ margin: "auto", display: "block", padding: "8px 20px" }}
      >
        {btnText}
      </SecondCustomButton>
    </ServiceCardStyled>
  );
};

export default ServiceCard;
