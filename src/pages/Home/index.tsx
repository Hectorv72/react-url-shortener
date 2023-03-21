import React, { useState } from 'react'
import InputCreate from './components/InputCreate'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import ShortenerModel from '@models/ShortenerModel';
import InputCopyClipboard from './components/InputCopyClipboard';

const server = import.meta.env.VITE_APP_SERVER_URL

const Home = () => {
  const [url, setUrl] = useState<string | undefined>()

  const handleOnSend = () => setUrl(undefined)

  const handleCreateLink = (shortener: ShortenerModel) => {
    setUrl(`${server}/${shortener.shortened_key}`)
  }

  return (
    <div className='mt-3'>
      <h5 className='text-center'>Acortador</h5>
      <div className='container'>
        <InputCreate onCreate={handleCreateLink} onSend={handleOnSend} />
        {url && <InputCopyClipboard text={url} />}
      </div>
      <ToastContainer />
    </div>
  )
}

export default Home