import { Dialog, DialogActions, DialogContent } from '@mui/material'
import React from 'react'
import CustomBox from './CustomBox'
import CustomButton from './CustomButton'
const CustomDialog = ({content,handleClose, ...props}) => {
    return (
        <>
            <Dialog
               {...props}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{overflow:'visible'}}
            >
                
                <DialogContent id="alert-dialog-title" sx={{padding:0}}>
                    <CustomBox>
                    {content}
                    </CustomBox>    
                </DialogContent>
                <DialogActions sx={{background:'transparent'}}>
                    <CustomButton sx={{padding:'8px 20px'}} variant='contained' onClick={handleClose}>Close</CustomButton>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default CustomDialog