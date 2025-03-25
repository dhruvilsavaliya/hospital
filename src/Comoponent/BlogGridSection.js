import React from 'react'
import Blog1 from '../Assets/jpg/Blog1.jpeg'
import SingleBlog from '../Common/SingleBlog'
import CustomContainer from '../Common/CustomContainer'
import CustomGrid from '../Common/CustomGrid'
import CustomTypography from '../Common/CustomTypography'
import CustomPagination from '../Pages/CustomPagination'
import CustomBreadcrumb from '../Common/CustomBreadcrumb'
import BreadcrumbBg from '../Assets/png/BreadcrumbAboutBg.jpeg'
const SingleBlogData = [
    {
        src: Blog1,
        elementSrc: Blog1,
        contentHeadLink: 'Back pain manifests in various ways',
        comment: '9 comment',
        backgroundSize: 'cover',
        title: 'back pain',
        date: '10 Nov 2024',
        PostTitleData: [
            'Your body injury discomfort might be relieved by exercising.Your body injury discomfort ',
        ],
        linkText: 'Learn More',
    },
    {
        src: Blog1,
        elementSrc: Blog1,
        contentHeadLink: 'Back pain manifests in various ways',
        comment: '9 comment',
        backgroundSize: 'cover',
        title: 'back pain',
        date: '10 Nov 2024',
        PostTitleData: [
            'Your body injury discomfort might be relieved by exercising.Your body injury discomfort ',
        ],
        linkText: 'Learn More',
    },
    {
        src: Blog1,
        elementSrc: Blog1,
        contentHeadLink: 'Back pain manifests in various ways',
        comment: '9 comment',
        backgroundSize: 'cover',
        title: 'back pain',
        date: '10 Nov 2024',
        PostTitleData: [
            'Your body injury discomfort might be relieved by exercising.Your body injury discomfort ',
        ],
        linkText: 'Learn More',
    },
    {
        src: Blog1,
        elementSrc: Blog1,
        contentHeadLink: 'Back pain manifests in various ways',
        comment: '9 comment',
        backgroundSize: 'cover',
        title: 'back pain',
        date: '10 Nov 2024',
        PostTitleData: [
            'Your body injury discomfort might be relieved by exercising.Your body injury discomfort ',
        ],
        linkText: 'Learn More',
    },
    {
        src: Blog1,
        elementSrc: Blog1,
        contentHeadLink: 'Back pain manifests in various ways',
        comment: '9 comment',
        backgroundSize: 'cover',
        title: 'back pain',
        date: '10 Nov 2024',
        PostTitleData: [
            'Your body injury discomfort might be relieved by exercising.Your body injury discomfort ',
        ],
        linkText: 'Learn More',
    },
    {
        src: Blog1,
        elementSrc: Blog1,
        contentHeadLink: 'Back pain manifests in various ways',
        comment: '9 comment',
        backgroundSize: 'cover',
        title: 'back pain',
        date: '10 Nov 2024',
        PostTitleData: [
            'Your body injury discomfort might be relieved by exercising.Your body injury discomfort ',
        ],
        linkText: 'Learn More',
    },

]
const BlogGridSection = () => {
    return (
        <>
            <CustomBreadcrumb pageTitle={'Blog Grid'} backgroundImage={BreadcrumbBg} />
            <CustomTypography component='section' variant='section'>
                <CustomContainer>
                    <CustomGrid container spacing={3}>
                        {SingleBlogData.map((data, index) => (
                            <CustomGrid key={index} md={4} sm={6} lxs={12}>
                                <SingleBlog {...data} boxShadow={true} padding={true} spacing={0.8} imgHover={true} />
                            </CustomGrid>
                        ))}
                    </CustomGrid>
                    <CustomPagination configs={[{ count: 3, color: "primary" }]} />
                </CustomContainer>
            </CustomTypography>
        </>
    )
}

export default BlogGridSection
