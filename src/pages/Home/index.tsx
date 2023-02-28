import React from 'react'
import InputCreate from './components/InputCreate'
import { useNavigate } from 'react-router-dom'
import { RouterPages } from '@models/enums/RouterEnums'

const Home = () => {
  const navigate = useNavigate()

  const handleNavigateLogin = () => navigate(RouterPages.login)

  return (
    <div className='mt-3'>
      <div className='d-flex justify-content-end me-2'>
        <button className='btn btn-primary' onClick={handleNavigateLogin}>Ingresar</button>
      </div>
      <h4 className='text-center'>Shorty - Manager</h4>
      <div className='container'>
        <InputCreate />
      </div>
    </div>
  )
}

export default Home