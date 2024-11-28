import React from 'react'
import { CircularProgress } from '@mui/material'

const Spinner = () => {
  return (
    <div className='flex justify-center items-center'>
      <CircularProgress size="0.8rem" /> 
      <p className="text-xs ml-2">Saving...</p>
    </div>
  )
}

export default Spinner
