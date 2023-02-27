import useSession from '@hooks/useSession'
import React, { useEffect } from 'react'

const Login = () => {
  const { session, login } = useSession()

  useEffect(() => {
    login('hector2@gmail.com', 'probando')
  }, [])

  return (
    <div>{session?.user?.username || 'no hay usuario'}</div>
  )
}

export default Login