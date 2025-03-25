import React from 'react'
import CustomBreadcrumb from '../Common/CustomBreadcrumb'
import BreadcrumbBg from '../Assets/png/BreadcrumbAboutBg.jpeg'
import BlogPageSection from '../Comoponent/BlogPageSection'
const BlogPage = () => {
  return (
    <>
        <CustomBreadcrumb pageTitle={'Blog'} backgroundImage={BreadcrumbBg}/>
        <BlogPageSection />
    </>
  )
}
export default BlogPage
