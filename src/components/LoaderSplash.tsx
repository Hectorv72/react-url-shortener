import React from 'react'

const LoaderSplash = () => {
  return (
    <div className='position-absolute top-50 start-50 translate-middle'>
      <div className="spinner-border" style={{ width: '5rem', height: '5rem' }} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default LoaderSplash