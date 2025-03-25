import { Button } from '@mui/material'
import EBStyled from './EBStyled';
const CommoButtonStyles = {
  borderRadius: 40,
  textTransform: 'capitalize',
  padding: '12px 20px',
}
const CustomButton = EBStyled(Button)(({ theme, variant }) => ({
  ...CommoButtonStyles,
  boxShadow: 'none',
  color: variant === 'contained' ? theme.palette.primary.light : theme.palette.secondary.main,
  '&:hover': {
    color: theme.palette.primary.light,
    boxShadow: 'none',
    backgroundColor: theme.palette.secondary.main
  },
  [theme.breakpoints.down('sm')]:{
    padding: '12px 18px',
    fontSize:12,
  },
  [theme.breakpoints.down('xs')]:{
    padding: '10px 14px',
  },
  [theme.breakpoints.down('mxs')]:{
    padding: '8px 12px',
  },
  [theme.breakpoints.down('lxs')]:{
    padding: '6px 12px',
  }
}))
const SecondCustomButton = EBStyled(CustomButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.light,
  },
}));

export default CustomButton;
export { SecondCustomButton };