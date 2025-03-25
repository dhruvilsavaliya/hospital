import React from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import CustomTypography from './CustomTypography';
import EBStyled from './EBStyled';
const Accordion = EBStyled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    '&:not(:last-child)': {
        marginBottom: 12,
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
    '& >.Mui-expanded': {
        backgroundColor: theme.palette.secondary.main,
    },
}));

const AccordionSummary = EBStyled((props) => (
    <MuiAccordionSummary
        expandIcon={<RemoveRedEyeIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : theme.palette.primary.main,
    color: theme.palette.primary.main,
    '& > .MuiAccordionSummary-content': {
        '&>.MuiTypography-body1': {
            color: theme.palette.primary[50],
            fontWeight: 500,
            [theme.breakpoints.down('sm')]: {
                fontSize: 14,
            }
        }
    },
    '& .MuiAccordionSummary-expandIconWrapper': {
        color: theme.palette.primary[50],
    },
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        color: theme.palette.primary[50],
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = EBStyled(MuiAccordionDetails)(({ theme }) => ({
    paddingInline: theme.spacing(7),
    paddingBlock: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
        paddingInline: theme.spacing(4),
        paddingBlock: theme.spacing(2),
    },
    '& > .MuiTypography-body1': {
        letterSpacing: 1.3,
        lineHeight: 1.7,
    }
}));

const CustomAccordian = ({ id, index, text, details }) => {
    const [expanded, setExpanded] = React.useState('1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <Accordion expanded={expanded === `${id}`} onChange={handleChange(id)}>
            <AccordionSummary aria-controls={`${index + id}`} id={`${index + id}`}>
                <CustomTypography>{text}</CustomTypography>
            </AccordionSummary>
            <AccordionDetails>
                <CustomTypography>{details}</CustomTypography>
            </AccordionDetails>
        </Accordion>
    )
}

export default CustomAccordian
