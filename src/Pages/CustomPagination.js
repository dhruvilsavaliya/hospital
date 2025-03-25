import React from 'react'
import CustomStack from '../Common/CustomStack'
import { Pagination } from '@mui/material'
const CustomPagination = ({configs}) => {
    return (
            <CustomStack sx={{marginTop:4}}>
                {configs.map((item,index) => (
                    <Pagination sx={{margin:'auto'}} key={index} {...item}/>
                ))}
            </CustomStack>
    )
}

export default CustomPagination
