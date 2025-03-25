import React from 'react'
import SingleBlog from '../Common/SingleBlog'
import CustomContainer from '../Common/CustomContainer'
import CustomGrid from '../Common/CustomGrid'
import CustomBox from '../Common/CustomBox'
import Title from '../Common/Title'
import Blog1 from '../Assets/jpg/Blog1.jpeg'
import Blog2 from '../Assets/jpg/Blog2.jpeg'
import Blog3 from '../Assets/png/Blog3.png'
import CallMadeIcon from '@mui/icons-material/CallMade'
import PatternBg from '../Assets/png/pattern-bg.png'
import CustomTypography from '../Common/CustomTypography'
const SingleBlogData = [
    {
        src: Blog1,
        backgroundSize: 'cover',
        title: 'back pain',
        date: '10 Nov 2024',
        PostTitleData:[
            'Your body injury discomfort might be relieved by exercising.',
        ],
        linkText:'Learn More',
        icon: <CallMadeIcon />,
    },
    {
        src: Blog2,
        backgroundSize: 'cover',
        title: 'Anxiety',
        date: '12 Nov 2024',
        PostTitleData:[
            'Understanding and Managing Anxiety Disorders',
        ],
        linkText:'Learn More',
        icon: <CallMadeIcon />,
    },
    {
        src: Blog3,
        backgroundSize: 'cover',
        title: 'Blof Test',
        date: '18 Nov 2024',
        PostTitleData:[
            'Blood test may predict cardiovascular disease',
        ],  
        linkText:'Learn More',
        icon: <CallMadeIcon />,
    },
]
const Blog = () => {
    return (
        <CustomTypography component='section' variant='section' sx={{background:`url(${PatternBg}), linear-gradient(303deg,rgba(88,132,175,0.3) 30%,rgba(125,185,232,0.3) 65%)`, backgroundPosition: 'center' }}>
            <CustomContainer>
                <CustomBox>
                    <Title title={'Our Blog'} subTitle={'Check Our Latest News'} textAlign={'center'} />
                </CustomBox>
            </CustomContainer>
            <CustomContainer>
                <CustomGrid container columnSpacing={2.4}>
                    {SingleBlogData.map((data, index) => (
                        <CustomGrid md={4} sm={6} lxs={12} key={index}>
                            <SingleBlog {...data} position={true} borderRadius={false} spacing={2} />
                        </CustomGrid>
                    ))}
                </CustomGrid>
            </CustomContainer>
        </CustomTypography>
    )
}

export default Blog
