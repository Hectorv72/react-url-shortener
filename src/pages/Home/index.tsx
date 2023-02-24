import React from 'react'
import InputCreate from './components/InputCreate'

const Home = () => {
  return (
    <div className='mt-3'>
      <h4 className='text-center'>Shorty - Manager</h4>
      <div className='container'>
        <InputCreate />
      </div>
    </div>
  )
}

export default Home