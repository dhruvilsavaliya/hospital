import React from 'react'
import CustomBreadcrumb from '../Common/CustomBreadcrumb'
import BreadcrumbBg from '../Assets/png/BreadcrumbAboutBg.jpeg'
import Services from '../Comoponent/Services'
import SerivceVideo from '../Comoponent/SerivceVideo'
import SerivecReview from '../Comoponent/SerivecReview'
const Service = () => {
    return (
        <>
            <CustomBreadcrumb pageTitle={'Services'} backgroundImage={BreadcrumbBg} />
            <Services />
            <SerivceVideo />
            <SerivecReview />
        </>
    )
}

export default Service
