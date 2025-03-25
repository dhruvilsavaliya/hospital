import React from 'react'
import CustomDoctor from '../Common/CustomDoctor'
import CustomBreadcrumb from '../Common/CustomBreadcrumb'
import BreadcrumbBg from '../Assets/png/BreadcrumbAboutBg.jpeg'
const Doctor = () => {
  return (
    <>
        <CustomBreadcrumb pageTitle={'Doctor'} backgroundImage={BreadcrumbBg} />
        <CustomDoctor />
    </>
  )
}

export default Doctor
