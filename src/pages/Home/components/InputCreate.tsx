import React, { ChangeEvent, FormEvent, useRef, useState } from 'react'
import { createShortener } from '@services/ShortenerServices';
import { isUri } from 'valid-url'
import { toast } from 'react-toastify';

interface propsType {
  onCreate: Function;
  onSend?: Function;
}

const InputCreate = ({ onCreate, onSend }: propsType) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [link, setLink] = useState<string | undefined>(undefined)
  const [loading, setLoading] = useState(false)

  const showNotifySuccess = () => toast.success("Acortador creado correctamente")
  const showNotifyError = () => toast.error("Error al crear el acortador")

  const handleVerifyUrl = async (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    event.target.className = `form-control ${isUri(value) ? 'text-success' : 'text-danger'}`
    isUri(value) ? setLink(value) : setLink(undefined)
  }

  const handleCreateShortener = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (link) {
      setLoading(true)
      onSend && onSend()
      const shortener = await createShortener(link)
      if (shortener) {
        if (inputRef.current?.value) { inputRef.current.value = '' }
        showNotifySuccess()
        onCreate && onCreate(shortener)
      } else {
        showNotifyError()
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