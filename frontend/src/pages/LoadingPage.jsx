import { CircularProgress } from '@mui/material'
import React from 'react'

const LoadingPage = () => {
  return (
    <div className='h-full w-full flex items-center justify-center'>
      <CircularProgress />
    </div>
  )
}

export default LoadingPage
