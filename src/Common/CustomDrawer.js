import React from 'react'
import CustomBox from './CustomBox'
import { Drawer, IconButton } from '@mui/material'
import CustomButton from './CustomButton';
import HeaderMenu from './HeaderMenu';
import Logo from './Logo';
import CloseIcon from '@mui/icons-material/Close';
import EBStyled from './EBStyled';
const DrawerStyled = EBStyled(Drawer)(({ theme }) => ({
    position: 'relative',
    display: { lxs: 'block', md: 'none' },
    '& > .MuiPaper-root': {
        flexDirection: 'column',
        zIndex: 9999,
        backgroundColor: theme.palette.common.white,
        width: 350,
        [theme.breakpoints.down('xs')]: {
            maxWidth: 300,
        },
        '& > .MuiBox-root': {
            '& > a': {
                padding: '14px 14px',
                '& > :before': {
                    bottom: '8%',
                }
            }
        }
    }
}))
const pages = [
    {
        link: '/home',
        page: 'Home',
    },
    {
        link: '/about',
        page: 'About',
    },
    {
        link: '/services',
        page: 'Services',
    },
    {
        page: 'Doctors',
        subMenu: [
            {
                link:'/doctor',
                page:'Doctors'
            },
            {
                link:'/doctor-details',
                page:'Doctor Details'
            },
        ]
    },
    {
        link: null,
        page: 'Blog',
        subMenu: [
            {
                link: '/blog-detail',
                page: 'Blog Detail',
            },
            {
                link: '/Blog-Grid',
                page: 'Blog Grid',
            },  
        ]
    },
    {
        link: '/contact',
        page: 'Contact',
    },
];

const DrawerList = () => (
    <>
        <CustomBox sx={{ flexDirection: 'column', flexGrow: 1, display: 'flex' }} padding={3}>
            <Logo mb={2} sx={{ maxWidth: '150px' }} />
            {pages.map((data, index) => (
                <HeaderMenu
                    key={index}
                    to={data.link}
                    submenu={data.subMenu}
                >
                    {data.page}
                </HeaderMenu>
            ))}
            <CustomButton variant='contained' sx={{ marginTop: '22px', }}>Appoinment</CustomButton>
        </CustomBox>
    </>
)
const CloseButtonStyled = EBStyled(IconButton)(({ theme }) => ({
    position: 'absolute',
    right: 10,
    top: 10,
    padding: 10,
    transition: 'all .4s ease-in-out',
    '> svg': {
        fill: theme.palette.primary.dark,
        fontSize: 28,
    },
    '&:hover': {
        transform: 'rotate(90deg)'
    }
}))
const CustomDrawer = ({ open, onClose }) => {
    return (
        <DrawerStyled open={open} anchor="left" onClose={onClose}>
            <DrawerList onClose={onClose} />
            <CloseButtonStyled onClick={onClose}>
                <CloseIcon />
            </CloseButtonStyled>
        </DrawerStyled>
    )
}

export default CustomDrawer
