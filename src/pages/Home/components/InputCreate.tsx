import React, { ChangeEvent, FormEvent, useRef, useState } from 'react'
import { createShortener } from '@services/ShortenerServices';
import { isUri } from 'valid-url'

interface propsType {
  onCreate: Function;
}

const InputCreate = ({ onCreate }: propsType) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [link, setLink] = useState<string | undefined>(undefined)
  const [loading, setLoading] = useState(false)

  const handleVerifyUrl = async (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    event.target.className = `form-control ${isUri(value) ? 'text-success' : 'text-danger'}`
    isUri(value) ? setLink(value) : setLink(undefined)
  }

  const handleCreateShortener = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (link) {
      setLoading(true)
      const shortener = await createShortener(link)
      if (shortener) {
        if (inputRef.current?.value) { inputRef.current.value = '' }
        onCreate && onCreate(shortener)
      }
      setLoading(false)
    }
  }

  return (
    <div>
      <form className='d-flex flex-row gap-2' onSubmit={handleCreateShortener}>
        <input type='url' ref={inputRef} className='form-control' onChange={handleVerifyUrl} />
        <button type='submit' disabled={loading} className='btn btn-primary'>Convertir</button>
      </form>
    </div>
  )
}

export default InputCreate