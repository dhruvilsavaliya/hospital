import React from 'react'
import CustomBox from './CustomBox'
import CustomStack from './CustomStack' 
import TestimonialImg1 from '../Assets/jpg/aboutUs/testimonial1.jpeg'
import TestimonialImg2 from '../Assets/jpg/aboutUs/testimonial2.jpeg'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CustomTypography from './CustomTypography'
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import CustomButton from './CustomButton'
import CustomAvatar from './CustomAvatar'
import EBStyled from './EBStyled'
const BlogCommentWrapData = [
    {
        src: TestimonialImg1,
        title: 'John Doe',
        icon: <CalendarMonthIcon />,
        date: '21-08-2024',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium eius, sunt porro corporis maiores ea, voluptatibus omnis maxime.',
        linkText: 'Reply',
    },
    {
        src: TestimonialImg2,
        title: 'John Doe',
        icon: <CalendarMonthIcon />,
        date: '21-08-2024',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium eius, sunt porro corporis maiores ea, voluptatibus omnis maxime.',
        linkText: 'Reply',
    },
]
const BlogCommentWrapStyled = EBStyled(CustomBox)(({ theme }) => ({
    boxShadow: '0px 6px 30px rgba(0,0,0,0.1)',
    padding: '30px 40px',
    marginBottom: '30px',
    borderRadius: 2,
    [theme.breakpoints.down('sm')]: {
        padding: '20px 30px',
    },
    [theme.breakpoints.down('xs')]: {
        padding: '25px',
        marginBottom: '20px',
    }
}))
const BlogContentWrapper = EBStyled(CustomBox)(({ theme }) => ({
    '& > .MuiStack-root': {
        marginBottom: 12,
        [theme.breakpoints.down('sm')]: {
            marginBottom: 8,
        },
        '& >.MuiTypography-h5': {
            fontSize: 22,
            fontWeight: 600,
            color: theme.palette.primary.main,
            [theme.breakpoints.down('sm')]: {
                fontSize: 18,
            },
            [theme.breakpoints.down('xs')]: {
                fontSize: 16,
            }
        },
        '& > .MuiTypography-link': {
            fontSize: 14,
            color: theme.palette.secondary.main,
            textDecoration: 'none',
            transition: 'all .3s ease-in-out',
            [theme.breakpoints.down('xs')]: {
                fontSize: 12,
            },
            '& > svg': {
                verticalAlign: 'middle',
                fontSize: 18,
                marginBottom: 3,
            },
            '&:hover': {
                color: theme.palette.primary.main,
            }
        }
    },
    '& > .MuiTypography-body1': {
        fontWeight: 500,
        color: theme.palette.primary.dark,
        [theme.breakpoints.down('sm')]: {
            fontSize: 14,
        }
    },
    '& > .MuiButton-root': {
        marginTop: 10,
        textDecoration: 'none',
        padding: '5px 20px',
        '& > .MuiButton-startIcon>*:nth-of-type(1)': {
            fontSize: 14,
        }
    }
}))
const BlogCommentWrap = () => {
    return (
        <CustomBox sx={{ boxShadow: '0px 6px 30px rgba(0,0,0,0.1)', padding: { xs: '20px 40px', lxs: '20px 25px' }, marginBottom: 5, }}>
            <CustomTypography variant='h4' component='h5' color="primary.main" fontWeight={600} fontSize={{md:34,sm:28,xs:24,lxs:22}} mb={{md:4,lxs:2}}>Comments</CustomTypography>
            {BlogCommentWrapData.map((data, index) => (
                <BlogCommentWrapStyled key={index}>
                    <CustomStack direction={{ sm: 'row', xs: 'column' }} spacing={{ xs: 4, lxs: 2 }}>
                        <CustomAvatar
                            alt="Remy Sharp"
                            src={data.src}
                            sx={{ width: { md: 100, xs: 90, lxs: 80 }, height: { md: 100, xs: 90, lxs: 80 }, margin: { lxs: 'auto !important' } }}
                        />
                        <BlogContentWrapper>
                            <CustomStack
                                direction={{ mxs: 'row', lxs: 'column' }}
                                sx={{ alignItems: 'center', flexWrap: 'wrap' }}
                                justifyContent={'space-between'}
                                spacing={{ lxs: 0.5 }}
                            >
                                <CustomTypography variant='h5' component='h3'>{data.title}</CustomTypography>
                                <CustomTypography component='a' variant='link' href='#'>{data.icon} {data.date}</CustomTypography>
                            </CustomStack>
                            <CustomTypography>{data.text}</CustomTypography>
                            <CustomButton startIcon={<ReplyAllIcon />} variant='outlined' component='a' href='#'>{data.linkText}</CustomButton>
                        </BlogContentWrapper>
                    </CustomStack>
                </BlogCommentWrapStyled>
            ))}
        </CustomBox>
    )
}

export default BlogCommentWrap
