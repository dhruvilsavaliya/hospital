import React from 'react'
import CustomTypography from '../Common/CustomTypography'
import CustomBox from '../Common/CustomBox'
import CustomBlogSection from '../Common/CustomBlogSection'
import CustomContainer from '../Common/CustomContainer'
import CustomGrid from '../Common/CustomGrid'
import BlogCommentWrap from '../Common/BlogCommentWrap'
import CustomForm from '../Common/CustomForm'
import CommonInputAndButton from '../Common/InputFields/CommonInputAndButton'
import { Divider } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import CustomList from '../Common/CustomList'
import CustomListItem from '../Common/CustomListItem'
import CustomLink from '../Common/CustomLink'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CustomAvatar from '../Common/CustomAvatar'
import blogInnerImg1 from '../Assets/jpg/BlogPage/blog_inner_1.jpeg'
import blogInnerImg2 from '../Assets/jpg/BlogPage/blog_inner_2.jpeg'
import Blog1 from '../Assets/jpg/Blog1.jpeg'
import CustomButton from '../Common/CustomButton'
import { HeadWrapper } from '../Shared/Footer'
import EBStyled from '../Common/EBStyled'
const TextFieldData = [
    {
        placeholder: 'Name',
        type: 'text',
    },
    {
        placeholder: 'Email',
        type: 'text',
    },
]
const BoxWrraper = EBStyled(CustomBox)(({ theme }) => ({
    marginBottom: 30,
    boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.05)',
    padding: '40px 32px 32px',
    backgroundColor: theme.palette.primary[50],
    [theme.breakpoints.down('sm')]: {
        padding: '30px 22px 22px',
        marginBottom: 20,
    },
    [theme.breakpoints.down('xs')]: {
        marginBottom: 15,
    },
    '& > .MuiTypography-h5': {
        fontWeight: 700,
        letterSpacing: '1.2px',
        color: theme.palette.secondary.main,
        marginBottom: 10,
    }
}))
const CategoriesItemData = [
    {
        icon: <ArrowForwardIosIcon />,
        linkData: 'Cardiology',
        number: '10'
    },
    {
        icon: <ArrowForwardIosIcon />,
        linkData: 'Denitist',
        number: '9'
    },
    {
        icon: <ArrowForwardIosIcon />,
        linkData: 'Nurologist',
        number: '14'
    },
    {
        icon: <ArrowForwardIosIcon />,
        linkData: 'Dental',
        number: '12'
    },
    {
        icon: <ArrowForwardIosIcon />,
        linkData: 'Our Health',
        number: '16'
    },
    {
        icon: <ArrowForwardIosIcon />,
        linkData: 'Health care',
        number: '17'
    },
]
const ListBoxWrraperStyled = EBStyled(CustomList)(({ theme }) => ({
    '& > .MuiListItem-root': {
        paddingTop: '13px',
        paddingBottom: '13px',
        borderBottom: `1px solid ${theme.palette.primary[50]}`,
        backgroundColor: theme.palette.common.white,
        display: 'block',
        [theme.breakpoints.down('xs')]: {
            padding: '10px'
        },
        '& > .MuiLink-root': {
            display: 'block',
            textDecoration: 'none',
            transition: 'all .3s ease-in-out',
            color: theme.palette.primary.dark,
            '& > svg': {
                fontSize: 14,
                marginBottom: '4px',
                marginRight: 6,
                verticalAlign: 'middle',
                color: theme.palette.primary.main
            },
            '& > .MuiTypography-span': {
                fontWeight: 500,
                [theme.breakpoints.down('sm')]: {
                    fontSize: 14,
                }
            },
            '&:hover': {
                color: theme.palette.primary.main
            }
        }
    }
}))
const AvatarContentStyled = EBStyled(CustomLink)(({ theme }) => ({
    textDecoration: 'none',
    marginLeft: 16,
    '& span': {
        display: 'block',
    },
    '& > .MuiTypography-body1': {
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2,
        overflow: 'hidden',
        color: theme.palette.primary.main,
        fontWeight: 600,
        transition: 'all .3s ease-in-out',
        '&:hover': {
            color: theme.palette.secondary.main,
        }
    },
    '& > .MuiTypography-subtitle2': {
        fontWeight: 500,
        color: theme.palette.secondary.main,
        textTransform: 'uppercase',
    }
}))
const NewPostItemData = [
    {
        src: blogInnerImg1,
        alt: 'blogInnerImg',
        link: '30 January 2024',
        text: 'Lifestyle conditions to have today’s all',
    },
    {
        src: blogInnerImg2,
        alt: 'blogInnerImg',
        link: '30 January 2024',
        text: 'The Most Important Ventilator Equipment Available',
    },
    {
        src: Blog1,
        alt: 'Blog',
        link: '30 January 2024',
        text: 'The Most Important Ventilator Equipment Available',
    },
]
const TagBtnData = [
    { tagBtnText: 'Hospital' }, { tagBtnText: 'body' }, { tagBtnText: 'Health' }, { tagBtnText: 'Care' }, { tagBtnText: 'Cardiac', }
]
const AvatatWrapperStyled = EBStyled(CustomListItem)(({ theme }) => ({
    borderBottom: `1px solid rgba(${parseInt(theme.palette.primary.main.slice(1, 3), 16)}, ${(theme.palette.primary.main, 16)}, ${(theme.palette.primary.main, 16)}, 0.1)`,
    paddingBlock: '16px',
    paddingInline: '14px',
    [theme.breakpoints.down('xs')]: {
        paddingBlock: '12px',
        paddingInline: '10px',
    },
    '& > .MuiAvatar-root': {
        position: 'relative',
        '&:before': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            height: '100%',
            width: '100%',
            backgroundColor: theme.palette.primary.main,
            opacity: 0,
            transform: 'scale(0.1)',
            transition: 'all .4s ease-in-out',
            borderRadius: '50%',
        },
    },
    '& > .MuiLink-root': {
        '& > .MuiTypography-body1': {
            fontSize: 14,
        },
        '& > .MuiTypography-subtitle2': {
            fontSize: 12,
        }
    },
    '&:hover': {
        '& > .MuiAvatar-root': {
            '&:before': {
                opacity: .6,
                transform: 'scale(1)',
                borderRadius: '8px',
            }
        }
    }
}))
const BlogPageSection = () => {
    return (
        <CustomTypography component='section' variant="section">
            <CustomContainer>
                <CustomGrid container spacing={2}>
                    <CustomGrid md={8} lxs={12}>
                        <CustomBlogSection />
                        <BlogCommentWrap />
                        <CustomForm TextFieldData={TextFieldData} title={'Leave a Reply'} subTitle={'Free Consultation'} textAreaPlaceholder={'Message....'} textAreaName={'placeholder'} btnText={'Post Comment'} condition={false} />
                    </CustomGrid>
                    <CustomGrid md={4} lxs={12}>
                        <CustomBox sx={{ position:'sticky', top:'100px', }}>
                            <BoxWrraper>
                                <HeadWrapper titleText={'Seacrh Here'} condition={true} marginBottom={3} />
                                <CommonInputAndButton type={'search'} placeholder={'Email Address'} btnText={<SearchIcon />} condition={true} padding={{sm:'10px 20px',xs:'10px 14px',lxs:'7px 14px'}} conditionTwo={false} />
                            </BoxWrraper>
                            <BoxWrraper>
                                <HeadWrapper titleText={'Categories'} condition={true} />
                                <ListBoxWrraperStyled>
                                    {CategoriesItemData.map((data, index) => (
                                        <CustomListItem key={index}>
                                            <CustomLink href="#">
                                                {data.icon}
                                                <CustomTypography component='span' variant='span'>{data.linkData}</CustomTypography>
                                                <CustomTypography component='span' variant='span' sx={{ float: 'right' }}><Divider orientation="vertical" variant="middle" sx={{ display: 'inline', marginRight: 1, }} /> {data.number}</CustomTypography>
                                            </CustomLink>
                                        </CustomListItem>
                                    ))}
                                </ListBoxWrraperStyled>
                            </BoxWrraper>
                            <BoxWrraper>
                                <HeadWrapper titleText={'New Post'} condition={true} />
                                <CustomList>
                                    {NewPostItemData.map((data, index) => (
                                        <AvatatWrapperStyled key={index}>
                                            <CustomAvatar src={data.src} alt={data.alt} sx={{ height: { sm: 75, lxs: 65 }, width: { sm: 75, lxs: 65 }, borderRadius: 2 }} />
                                            <AvatarContentStyled href='#'>
                                                <CustomTypography component='span' variant='body1'>{data.text}</CustomTypography>
                                                <CustomTypography component='span' variant='subtitle2'>{data.link}</CustomTypography>
                                            </AvatarContentStyled>
                                        </AvatatWrapperStyled>
                                    ))}
                                </CustomList>
                            </BoxWrraper>
                            <BoxWrraper>
                                <HeadWrapper titleText={'Popular Tag'} condition={true} />
                                <CustomBox sx={{marginTop:{xs:0,lxs:1}}}>
                                    {TagBtnData.map((data, index) => (
                                        <CustomButton component='a' variant='outlined' href='#' sx={{ padding: '8px 18px', margin: '4px' }} key={index}>{data.tagBtnText}</CustomButton>
                                    ))}
                                </CustomBox>
                            </BoxWrraper>
                        </CustomBox>
                    </CustomGrid>
                </CustomGrid>
            </CustomContainer>
        </CustomTypography>
    )
}

export default BlogPageSection

