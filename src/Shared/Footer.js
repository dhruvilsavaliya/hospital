import React from 'react'
import CustomBox from '../Common/CustomBox'
import CustomTypography from '../Common/CustomTypography'
import CustomContainer from '../Common/CustomContainer'
import CustomGrid from '../Common/CustomGrid'
import theme from '../Theme'
import { List, ListItem, ListItemText } from '@mui/material'
import FooterTop from '../Comoponent/FooterTop'
import { SecondCustomButton } from '../Common/CustomButton';
import CustomLink from '../Common/CustomLink'
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import Social from '../Common/Social'
import EBStyled from '../Common/EBStyled'
const ListItemStyled = EBStyled(ListItem)(({ theme }) => ({
    '& > .MuiLink-root,>li .MuiLink-root': {
        padding: 0,
        paddingBottom: '4px',
        color: theme.palette.common.white,
        textDecoration: 'none',
        transition: 'all .3s ease-in-out',
        "&:hover": {
            color: theme.palette.primary.main,
            paddingLeft: 6,
        },
        '& > .MuiListItemText-root > .MuiTypography-body1': {
            [theme.breakpoints.down('sm')]: {
                fontSize: 14,
            },
            [theme.breakpoints.down('xs')]: {
                fontSize: 12,
            }
        }
    }
}))
const TimeStyled = EBStyled(CustomGrid)(({ theme }) => ({
    padding: '8px 0',
    '& > .MuiTypography-li': {
        listStyle: 'none',
        paddingBottom: 10,
        marginBottom: 8,
        color: theme.palette.common.white,
        [theme.breakpoints.down('sm')]: {
            fontSize: 14,
            paddingBottom: 8,
            marginBottom: 6,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 12,
        },
        "> svg": {
            fontSize: 21,
            verticalAlign: 'middle',
            marginRight: 8,
            [theme.breakpoints.down('xs')]: {
                fontSize: 18,
                marginRight: 4,
            }
        },
        '& > .MuiTypography-body1': {
            display: 'inline-block',
            [theme.breakpoints.down('sm')]: {
                fontSize: 14,
            },
            [theme.breakpoints.down('xs')]: {
                fontSize: 12,
            }
        }
    }
}))
const WidgetTitle = EBStyled(CustomTypography)(({ theme, condition }) => ({
    position: 'relative',
    marginBottom: '1.5rem',
    color: condition ? theme.palette.secondary.main : theme.palette.common.white,
    fontWeight: theme.typography.fontWeight[600],
    display: 'inline-block',
    '&:before': {
        content: '" "',
        position: 'absolute',
        bottom: '-8px',
        left: '0',
        height: '2px',
        width: '100%',
        backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main}, transparent)`,
    },
    [theme.breakpoints.down('xs')]: {
        fontSize: 18,
        marginBottom: '0.8rem',
    },
    [theme.breakpoints.down('mxs')]: {
        fontSize: 16,
    },
}))
export const HeadWrapper = ({ titleText, condition }) => (
    <WidgetTitle variant="h6" component="h3" condition={condition}>
        {titleText}
    </WidgetTitle>
)
const TimeStyledData = [
    {
        time: 'Mon 9:00am - 6:00pm',
    },
    {
        time: 'Tue 9:00am - 6:00pm',
    },
    {
        time: 'Wed 9:00am - 6:00pm',
    },
    {
        time: 'Thu 9:00am - 6:00pm',
    },
    {
        time: 'Fri 9:00am - 6:00pm',
    },
]
const LinkData = [
    {
        link: 'Our services'
    },
    {
        link: 'Company history'
    },
    {
        link: 'Support center'
    },
    {
        link: 'Latest Projects'
    },
    {
        link: 'Contact Us'
    },
]
const Footer = () => {
    return (
        <>
            <CustomBox component='footer' sx={{
                background: theme.palette.secondary.main,
                backdropFilter: 'blur(6.5px)',
                padding: { md: '100px 0', sm: '60px 0', xs: '45px 0', mxs: '30px 0', lxs: '20px 0' }
            }}>
                <CustomContainer>
                    <FooterTop />
                    <CustomGrid container columnSpacing={{ xs: 3, lxs: 2 }} rowSpacing={{ md: 0, lxs: 3 }}>
                        <CustomGrid sm={3} xs={6} lxs={6}>
                            <HeadWrapper titleText={'About ospital'} />
                            <CustomTypography variant="body2" mb={1.5} color={theme.palette.common.white} sx={{ lineHeight: '28px', fontSize: { xs: 14, lxs: 12 } }}>
                                Here Is Main Text Quis Nostrud Exercitation Ullamco Laboris Nisi Here Is Itealic Aliquip Ex Ea Com
                            </CustomTypography>
                            <SecondCustomButton variant='outlined'
                                sx={{ marginTop: { xs: 3, lxs: 0 }, lineHeight: { xs: 1.75, lxs: 1.3 }, padding: (theme) => ({ padding: '10px 20px', [theme.breakpoints.down('xs')]: { padding: '10px 6px' } }) }}>
                                Book Appoinment
                            </SecondCustomButton>
                        </CustomGrid>
                        <CustomGrid sm={3} xs={6} lxs={6}>
                            <HeadWrapper titleText={'Useful Links'} />
                            <List>
                                <ListItemStyled disablePadding
                                    sx={{
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        padding: 0
                                    }}
                                >
                                    {LinkData.map((data, index) => (
                                        <CustomLink component="a" href="#" key={index}>
                                            <ListItemText primary={data.link} />
                                        </CustomLink>
                                    ))}
                                </ListItemStyled>
                            </List>
                        </CustomGrid>
                        <CustomGrid sm={3} xs={6} lxs={6}>
                            <HeadWrapper titleText={'Open Time'} />
                            <TimeStyled>
                                {TimeStyledData.map((data, index) => (
                                    <CustomTypography component="li" variant='li' key={index}>{data.time}</CustomTypography>
                                ))}
                            </TimeStyled>
                        </CustomGrid>
                        <CustomGrid sm={3} xs={6} lxs={6}>
                            <HeadWrapper titleText={'Contact Info'} />
                            <TimeStyled>
                                <CustomTypography component="li" variant='li' >
                                    <CustomTypography variant="body1">
                                        123 Street, Old Trafford, New South London , UK
                                    </CustomTypography>
                                </CustomTypography>
                                <CustomTypography component="li" variant='li' display={'flex'}>
                                    <MailIcon />
                                    <CustomTypography variant="body1" component="a" href="#" color={theme.palette.common.white} sx={{ textDecoration: 'none', transition: 'all .3s ease-in-out', '&:hover': { color: theme.palette.primary.main } }}>
                                        info@sitename.com
                                    </CustomTypography>
                                </CustomTypography>
                                <CustomTypography component="li" variant='li' display={'flex'}>
                                    <CallIcon />
                                    <CustomTypography variant="body1">
                                        +91 5698 0036 420
                                    </CustomTypography>
                                </CustomTypography>
                                <Social flexDirection={'row'} condition={false} sizeCondicition={false} margin={{ sm: '0 10px 0 0', lxs: '0 4px 0 0' }} />
                            </TimeStyled>
                        </CustomGrid>
                    </CustomGrid>
                </CustomContainer>
                <CustomBox>
                </CustomBox>
            </CustomBox>
            <CustomBox backgroundColor={'rgba(3,27,78,0.9)'} padding={'30px 0'}>
                <CustomContainer>
                    <CustomGrid container alignItems={'center'} justifyContent={'center'} rowSpacing={1}>
                        <CustomGrid md={6}>
                            <CustomTypography variant="body2" color={theme.palette.common.white}>© 2020 All Rights Reserved by Hospital</CustomTypography>
                        </CustomGrid>
                        <CustomGrid md={6}>
                            <ListItemStyled component='ul' sx={{ margin: 0, padding: 0, justifyContent: 'end', '& > li': { '& > a': { fontSize: { md: 16, sm: 14, lxs: 12 } } } }}>
                                <CustomBox component='li' display="inline-block" px={1}>
                                    <CustomLink component="a" href="#" pb={0}>Privacy Policy</CustomLink>
                                </CustomBox>
                                <CustomBox component='li' display="inline-block" px={1}>
                                    <CustomLink component="a" href="#" pb={0} sx={{ '&:hover': { paddingLeft: '0 !important' } }}>Terms & Conditions</CustomLink>
                                </CustomBox>
                            </ListItemStyled>
                        </CustomGrid>
                    </CustomGrid>
                </CustomContainer>
            </CustomBox>
        </>
    )
}

export default Footer;