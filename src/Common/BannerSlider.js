import React from "react";
import CustomBox from "./CustomBox";
import CustomTypography from "./CustomTypography";
import CustomButton from "./CustomButton";
import CustomGrid from "./CustomGrid";
import CustomContainer from "./CustomContainer";
import SubTitle from "./SubTitle";
import theme from "../Theme";
import EBStyled from "./EBStyled";
const SliderImageStyle = EBStyled(CustomBox)(({ theme, backgroundImage }) => ({
  backgroundImage: `url(${backgroundImage})`,
  width: "100%",
  height: "100vh",
  minHeight: "45rem",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  position: "relative",
  [theme.breakpoints.down("xs")]: {
    height: "90vh",
  },
  "&:before": {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: `${theme.palette.secondary.dark}`,
    opacity: ".3",
  },
}));

const SliderContent = EBStyled(CustomBox)(({ theme }) => ({
  position: "relative",
  "& > .MuiTypography-root.MuiTypography-h1": {
    fontSize: 46,
    color: theme.palette.common.white,
    fontWeight: 600,
    lineHeight: "56px",
    position: "relative",
    marginBottom: 25,
    [theme.breakpoints.down("md")]: {
      fontSize: 40,
      lineHeight: "46px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 34,
      marginBottom: 14,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 28,
      marginBottom: 10,
      lineHeight: "1.5",
    },
    "> img": {
      position: "absolute",
      maxWidth: 100,
      bottom: "0",
      right: "0",
      animation: `spin 3s forwards infinite alternate`,
      zIndex: -1,
      [theme.breakpoints.down("md")]: {
        bottom: "70%",
        right: "-10%",
      },
      [theme.breakpoints.down("sm")]: {
        bottom: "90%",
        right: "10%",
        maxWidth: 90,
      },
    },
  },
  "& > .MuiTypography-root.MuiTypography-body2": {
    color: theme.palette.primary.light,
    marginBottom: "30px",
    letterSpacing: "0.6px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "20px",
      fontSize: 12,
    },
  },
}));
const BannerSlider = ({
  images,
  title,
  sliderHeading,
  src,
  alt,
  sliderParagraph,
  btnText,
}) => {
  return (
    <SliderImageStyle backgroundImage={images}>
      <CustomBox
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "100%",
        }}
      >
        <CustomContainer>
          <CustomGrid
            container
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <CustomGrid md={8} sm={8} xs={12}>
              <SliderContent>
                <SubTitle
                  title={title}
                  mb={2}
                  backgroundColor={theme.palette.primary.light}
                  color={theme.palette.primary.main}
                  src={src}
                  alt={alt}
                />
                <CustomTypography variant="h1">
                  {sliderHeading}
                </CustomTypography>
                <CustomTypography variant="body2">
                  {sliderParagraph}
                </CustomTypography>
                <CustomButton variant={"contained"}>{btnText}</CustomButton>
              </SliderContent>
            </CustomGrid>
          </CustomGrid>
        </CustomContainer>
      </CustomBox>
    </SliderImageStyle>
  );
};

export default BannerSlider;
