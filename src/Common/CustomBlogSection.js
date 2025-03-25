import React from 'react'
import CustomBox from './CustomBox'
import SingleBlog from './SingleBlog'
import Blog1 from '../Assets/jpg/Blog1.jpeg'
import quotesImg from '../Assets/png/BlogPage/quote (1).png'
import blogInnerImg1 from '../Assets/jpg/BlogPage/blog_inner_1.jpeg'
import blogInnerImg2 from '../Assets/jpg/BlogPage/blog_inner_2.jpeg'
const SingleBlogData = [
    {
        src: Blog1,
        elementSrc: Blog1,
        contentHead: 'Back pain manifests in various ways',
        contentHeadTwo: 'Morden Strategy for Your Security',
        comment: '9 comment',
        backgroundSize: 'cover',
        title: 'back pain',
        date: '10 Nov 2024',
        PostTitleData: [
            'Your body injury discomfort might be relieved by exercising.Your body injury discomfort might be relieved by exercising.Your body injury discomfort might be relieved by exercising.Your body injury discomfort might be relieved by exercising.',
            'Your body injury discomfort might be relieved by exercising.Your body injury discomfort might be relieved by exercising.Your body injury discomfort might be relieved by exercising.Your body injury discomfort might be relieved by exercising.',
        ],
        PostTitleDataTwo: [
            'Your body injury discomfort might be relieved by exercising.Your body injury discomfort might be relieved by exercising.Your body injury discomfort might be relieved by exercising.Your body injury discomfort might be relieved by exercising.',
            'Your body injury discomfort might be relieved by exercising.Your body injury discomfort might be relieved by exercising.Your body injury discomfort might be relieved by exercising.Your body injury discomfort might be relieved by exercising.',
        ],
        blockquoteText: 'Integer is metus site turpis facilisis customers. elementum an mauris in venenatis consectetur east. Praesent condimentum bibendum Morbi sit amet commodo pellentesque at fringilla tincidunt risus Interdum et malesuada fames ac ante ipsum.',
        blockquoteSrc: quotesImg,
        stackImg1: blogInnerImg1,
        stackImg2: blogInnerImg2,
        tagTitle: 'Tag Here :',
        tagTitleTwo: 'Social:',
        TagBtnTextData: [
            'Adventures',
            'Health',
        ]
    },
]
const CustomBlogSection = () => {
    return (
        <CustomBox sx={{ boxShadow: '0px 6px 30px rgba(0,0,0,0.1)' }}>
            {SingleBlogData.map((data, index) => (
                <CustomBox key={index}>
                    <SingleBlog {...data} position={false} spacing={{ xs: 2, lxs: 1.5, mxs: 1 }} text={true} />
                </CustomBox>
            ))}
        </CustomBox>
    )
}

export default CustomBlogSection
