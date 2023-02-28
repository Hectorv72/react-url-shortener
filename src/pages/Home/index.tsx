import React from 'react'
import InputCreate from './components/InputCreate'
import { useNavigate } from 'react-router-dom'
import { RouterPages } from '@models/enums/RouterEnums'

const Home = () => {
  const navigate = useNavigate()

  const handleNavigateLogin = () => navigate(RouterPages.login)

  return (
    <div className='mt-3'>
      <h5 className='text-center'>Convertidor</h5>
      <div className='container'>
        <InputCreate />
      </div>
    </div>
  )
}

export default Home