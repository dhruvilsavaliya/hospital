import React from 'react';
import CustomBox from './CustomBox';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';  
import CustomDialog from './CustomDialog';
import EBStyled from './EBStyled';
const IframeStyled = EBStyled('iframe')(({ theme }) => ({
    minWidth: '760px',
    height: '400px',
    [theme.breakpoints.down('md')]: {
        minWidth: '560px',
        height: '300px',
    },
    [theme.breakpoints.down('sm')]: {
        minWidth: '520px',
        height: '250px',
    },
    [theme.breakpoints.down('lxs')]: {
        minWidth: '100%',
        height: '100%',
    },
}));
const RippleEffect = EBStyled(CustomBox)(({ theme, condition }) => {
    return {
        position: 'relative',
        lineHeight: '60px',
        height: condition ? 75 : 50,
        width: condition ? 75 : 50,
        textAlign: 'center',
        color: condition ? theme.palette.primary.main : theme.palette.primary.light,
        backgroundColor: condition ? theme.palette.primary.light : theme.palette.primary.main,
        borderRadius: '50%',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            height: condition ? 60 : 40,
            width: condition ? 60 : 40,
            lineHeight: '50px',
        },
        '&>svg': {
            height: condition ? 44 : null,
            width: condition ? 44 : null,
            [theme.breakpoints.down('xs')]: {
                height: condition ? 34 : null,
                width: condition ? 34 : null,
            },
        },
        '&:before': {
            content: "''",
            position: 'absolute',
            borderRadius: '100%',
            backgroundColor: condition ? theme.palette.primary.light : theme.palette.primary.main,
            height: condition ? 75 : 50,
            width: condition ? 75 : 50,
            left: 0,
            top: 0,
            zIndex: '-1',
            animation: 'ripple 1.2s infinite',
            [theme.breakpoints.down('sm')]: {
                height: condition ? 60 : 40,
                width: condition ? 60 : 40,
                lineHeight: '50px',
            },
        },
        '&:after': {
            content: "''",
            position: 'absolute',
            borderRadius: '100%',
            height: condition ? 75 : 50,
            width: condition ? 75 : 50,
            backgroundColor: condition ? theme.palette.primary.light : theme.palette.primary.main,
            left: 0,
            top: 0,
            zIndex: '-1',
            animation: 'ripple 1.8s infinite',
            [theme.breakpoints.down('sm')]: {
                height: condition ? 60 : 40,
                width: condition ? 60 : 40,
                lineHeight: '50px',
            },
        },
        '@keyframes ripple': {
            '0%': {
                opacity: '0',
                transform: 'scale(0)',
            },
            '50%': {
                opacity: '0.5',
            },
            '100%': {
                opacity: '0',
                transform: 'scale(1.8)',
            }
        }
    }
});

const Video = ({ src, condition }) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <CustomBox position="relative" sx={{ zIndex: 1 }} >
            <RippleEffect onClick={handleClickOpen} condition={condition}>
                <PlayArrowIcon />
            </RippleEffect>
            <CustomDialog open={open} content={<IframeStyled src={src} title="YouTube video player" frameborder="0" allow="accelerometer;  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />} handleClose={handleClose} />
        </CustomBox>
    );
};

export default Video;
