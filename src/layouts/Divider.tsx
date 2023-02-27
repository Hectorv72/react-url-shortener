import React from 'react'

const Divider = ({ label = '' }) => {
  return (
    <div className='divider d-flex align-items-center my-4'>
      <p className='text-center fw-bold mx-3 mb-0 text-muted'>{label}</p>
    </div>
  )
}

export default Divider