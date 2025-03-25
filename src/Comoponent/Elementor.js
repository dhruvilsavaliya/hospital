import React from 'react'
import ElementorSingle from '../Common/ElementorSingle'
import CustomContainer from '../Common/CustomContainer'
import CustomTypography from '../Common/CustomTypography'

const Elementor = () => {
  return (
    <CustomTypography component="section" variant='section'>
      <CustomContainer>
          <ElementorSingle />
      </CustomContainer>
    </CustomTypography>
  )
}

export default Elementor
