import React from 'react'
import BreadcrumbBg from '../Assets/png/BreadcrumbAboutBg.jpeg'
import CustomBreadcrumb from '../Common/CustomBreadcrumb'
import GetInTouch from '../Comoponent/GetInTouch'
import Map from '../Comoponent/Map'

const ContactUs = () => {
    return (
        <>
            <CustomBreadcrumb pageTitle={'Contact us'} backgroundImage={BreadcrumbBg} />
            <GetInTouch />
            <Map />
        </>
    )
}

export default ContactUs
