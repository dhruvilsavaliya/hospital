import React from "react";
import SingleService from "../Common/SingleService";
import CustomContainer from "../Common/CustomContainer";
import ServiceBg from "../Assets/png/service-BG.png";
import CustomTypography from "../Common/CustomTypography";
const Services = () => {
  return (
    <CustomTypography
      component="section"
      variant="section"
      sx={{
        backgroundImage: `url(${ServiceBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(51,104,198,0.1)",
      }}
    >
      <CustomContainer>
        <SingleService />
      </CustomContainer>
    </CustomTypography>
  );
};

export default Services;
