import React, { useState } from 'react'
import CustomBox from './CustomBox'
import ElementClipPath from './ElementClipPath'
import { Divider } from '@mui/material'
import SubTitle from './SubTitle'
import CustomTypography from './CustomTypography'
import theme from '../Theme'
import CustomStack from './CustomStack'
import EastIcon from '@mui/icons-material/East';
import CustomButton from './CustomButton'
import Social from './Social'
import CustomNavLink from './CustomNavLink'
import EBStyled from './EBStyled'
const SingleBlogStyled = EBStyled(CustomBox)(({ position, boxShadow, imgHover }) => ({
    position: 'relative',
    transition: 'all .3s ease-in-out',
    marginBottom: boxShadow ? null : 70,
    boxShadow: boxShadow ? '0px 6px 30px rgba(0,0,0,0.1)' : null,
    ...(position && {
        "&:hover": {
            transform: 'translateY(-10px)',
        },
    }),
    ...(imgHover && {
        '&:hover': {
            'img': {
                transform: 'scale(1.1)'
            }
        }
    })
}))
const ContentStyled = EBStyled(CustomBox)(({ theme, hoverBlock, position, padding }) => ({
    position: position ? 'absolute' : 'relative',
    // background: position ? (hoverBlock ? 'rgba(3,13,45,0.8)' : 'rgb(0 0 0 / 45%)') : 'linear-gradient(to top, rgb(51 104 198 / 30%), transparent 80%)',
    background: position ? (hoverBlock ? 'rgba(3,13,45,0.8)' : 'rgb(0 0 0 / 45%)') : null,
    backdropFilter: position ? 'blur(6.5px)' : null,
    padding: padding ? '25px' : (position ? 20 : '35px 30px'),
    bottom: position ? (hoverBlock ? '-40px' : '-50px') : null,
    borderRadius: position ? 8 : 0,
    transition: 'all .3s ease-in-out',
    margin: position ? '0 20px' : null,
    width: '-webkit-fill-available',
    '& > .MuiStack-root ': {
        marginBottom: position ? 12 : 18,
        '> .MuiTypography-body2': {
            color: position ? theme.palette.common.white : theme.palette.secondary.main,
            fontWeight: 500,
            [theme.breakpoints.down('xs')]: {
                fontSize: 12,
            }
        },
        '> .MuiTypography-subtitle2': {
            color: theme.palette.secondary.main,
            [theme.breakpoints.down('xs')]: {
                fontSize: 12,
            }
        },
    },
    '& > blockquote': {
        margin: 0,
        padding: 30,
        backgroundColor: theme.palette.primary[50],
        borderBottom: `2.5px solid ${theme.palette.primary.main}`,
        borderRight: `2.5px solid ${theme.palette.primary.main}`,
        position: 'relative',
        [theme.breakpoints.down('xs')]: {
            padding: 20,
        },
        '& > img': {
            position: 'absolute',
            right: 0,
            bottom: 0,
            maxWidth: 45,
            padding: 10,
            opacity: 0.6,
        },
        '& > .MuiTypography-body1': {
            fontSize: 14,
            color: theme.palette.primary.dark,
            lineHeight: '1.7',
            marginBottom: 0,
            fontWeight: 600,
            fontStyle: 'italic'
        }
    },
    [theme.breakpoints.down('xs')]: {
        padding: 15,
    },
}))
const ContentWrapperStyled = EBStyled(CustomTypography)(({ theme, position }) => ({
    color: position ? theme.palette.common.white : theme.palette.primary.dark,
    fontWeight: position ? theme.typography.fontWeight[600] : theme.typography.fontWeight[500],
    display: position ? '-webkit-box' : null,
    lineHeight: position ? null : '28px',
    WebkitBoxOrient: position ? 'vertical' : null,
    WebkitLineClamp: position ? 2 : null,
    overflow: 'hidden',
    marginBottom: position ? null : 16,
    [theme.breakpoints.down('sm')]: {
        fontSize: 14,
    }
}))
const LinkStyled = EBStyled(CustomNavLink)(({ theme, position }) => ({
    display: 'block',
    marginTop: 10,
    color: position ? theme.palette.common.white : theme.palette.secondary.main,
    textDecoration: 'none',
    transition: 'all .3s ease-in-out',
    fontSize: 14,
    "& > svg": {
        fontSize: 16,
        marginLeft: 5,
        transition: 'all .3s ease-in-out',
    },
    '&:hover': {
        color: theme.palette.primary.main,
        "& > svg": {
            marginLeft: 9,
        },
    }
}))
const ImgSection = EBStyled(CustomBox)(({ theme }) => ({
    marginTop: 40,
    [theme.breakpoints.down('xs')]: {
        marginTop: 25,
    },
    '& > .MuiStack-root:first-child': {
        marginBottom: 20,
    },
    '& > .MuiStack-root': {
        '& > .MuiBox-root': {
            '> img': {
                maxWidth: '100%',
                verticalAlign: 'middle',
                borderRadius: 10,
            }
        }
    }
}))
const HeadingBlogWrapper = EBStyled(CustomTypography)(({ theme, text }) => ({
    fontSize: text ? 30 : null,
    fontWeight: 600,
    color: theme.palette.secondary.dark,
    marginBottom: 12,
    [theme.breakpoints.down('sm')]: {
        fontSize: text ? 24 : null,
    },
    [theme.breakpoints.down('xs')]: {
        fontSize: text ? 24 : 18,
    },
    '& > a': {
        textDecoration: 'none',
        color: theme.palette.secondary.dark,
        transition: 'all .3s ease-in-out',
        '&:hover': {
            color: theme.palette.primary.main,
        }
    }
}))
const TitleWrraper = ({ PostTitleData, position }) => (
    <>
        {PostTitleData.map((postTitle, index) => (
            <ContentWrapperStyled position={position} variant='body1' key={index}>
                {postTitle}
            </ContentWrapperStyled>
        ))}
    </>
)
const SingleBlog = ({ imgHover, text, spacing, padding, boxShadow, borderRadius, title, date, PostTitleData = [], PostTitleDataTwo, position, contentHead, contentHeadLink, linkText, blockquoteText, comment, src, blockquoteSrc, stackImg1, stackImg2, TagBtnTextData = [], tagTitle, tagTitleTwo }) => {

    const [hoverBlock, setHoverBlock] = useState(false)
    const hoverState = () => {
        setHoverBlock(position)
    }
    return (
        <SingleBlogStyled boxShadow={boxShadow} position={position} imgHover={imgHover} onMouseOver={() => hoverState()} onMouseLeave={() => setHoverBlock(false)}>
            <ElementClipPath src={src} background={'none'} size={position} overflow={true} borderRadius={borderRadius} />
            <ContentStyled hoverBlock={hoverBlock} position={position} padding={padding}>
                <CustomStack
                    direction={'row'}
                    spacing={spacing}
                    sx={{
                        alignItems: 'center',
                    }}
                >
                    <SubTitle title={title} fontWeight={theme.typography.fontWeight[600]} color={theme.palette.common.white} backgroundColor={theme.palette.secondary.main} />
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <CustomTypography component='span' variant='body2'>{date}</CustomTypography>
                    {
                        comment &&
                        <>
                            <Divider orientation="vertical" variant="middle" flexItem />
                            <CustomTypography component='body2' variant='subtitle2'>{comment}</CustomTypography>
                        </>

                    }
                </CustomStack>
                <HeadingBlogWrapper text={text} variant='h5' component='h4'>
                    {contentHead || (
                        <>
                            {contentHead}
                            <CustomNavLink to="/blog-detail" text={text}>{contentHeadLink}</CustomNavLink>
                        </>
                    )}
                </HeadingBlogWrapper>

                <TitleWrraper PostTitleData={PostTitleData} position={position} />
                {
                    blockquoteText &&
                    <blockquote>
                        <CustomBox component='img' src={blockquoteSrc} />
                        <CustomTypography paragraph={true}>
                            {blockquoteText}
                        </CustomTypography>
                    </blockquote>
                }
                {
                    linkText &&
                    <LinkStyled to="/blog-detail" position={position} >
                        {linkText}
                        <EastIcon sx={{ verticalAlign: 'middle' }} />
                    </LinkStyled>
                }
                {
                    stackImg1 &&
                    <ImgSection>
                        <CustomStack
                            direction={'row'}
                            spacing={2}
                        >
                            <CustomBox>
                                <CustomBox component='img' src={stackImg1} maxWidth='100%' />
                            </CustomBox>
                            <CustomBox>
                                <CustomBox component='img' src={stackImg2} maxWidth='100%' />
                            </CustomBox>
                        </CustomStack>
                        {
                            PostTitleDataTwo &&
                            <TitleWrraper PostTitleData={PostTitleDataTwo} position={position} />
                        }
                        {
                            tagTitle &&
                            <CustomStack direction={{ sm: 'row', lxs: 'column' }} spacing={{ sm: 0, lxs: 1.5 }} justifyContent={{ sm: 'space-between', lxs: 'center' }} sx={{ alignItems: 'center' }}>
                                <CustomBox>
                                    <CustomTypography variant='span' component='span' mr={{ sm: 1.5, lxs: 1 }} color={'secondary.dark'} fontSize={{ sm: 16, lxs: 14 }}>{tagTitle}</CustomTypography>
                                    <CustomStack
                                        direction={'row'}
                                        spacing={1}
                                        display={'inline-flex'}
                                    >
                                        {TagBtnTextData.map((tagBtnText) => (
                                            <CustomButton component='a' variant='outlined' href='#' sx={{ padding: { sm: '8px 18px', lxs: '4px 8px' } }}>{tagBtnText}</CustomButton>
                                        ))}
                                    </CustomStack>
                                </CustomBox>
                                <CustomStack
                                    direction='row'
                                    sx={{ alignItems: 'center' }}
                                >
                                    <CustomTypography variant='span' component='span' mr={{ sm: 1.5, lxs: 1 }} color={'secondary.dark'} fontSize={{ sm: 16, lxs: 14 }}>{tagTitleTwo}</CustomTypography>
                                    <Social flexDirection={'row'} condition={true} sizeCondicition={false} margin={'0 10px 0 0'} />
                                </CustomStack>
                            </CustomStack>
                        }
                    </ImgSection>
                }
            </ContentStyled>
        </SingleBlogStyled>
    )
}

export default SingleBlog
