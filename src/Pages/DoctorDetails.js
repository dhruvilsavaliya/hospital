import React from 'react'
import DoctorDetailSingle from '../Comoponent/DoctorDetailSingle'
import CustomBreadcrumb from '../Common/CustomBreadcrumb'
import BreadcrumbBg from '../Assets/png/BreadcrumbAboutBg.jpeg'
const DoctorDetails = () => {
  return (
    <div>
      <CustomBreadcrumb pageTitle={'Doctor Details'} backgroundImage={BreadcrumbBg} />
      <DoctorDetailSingle />
    </div>
  )
}

export default DoctorDetails
