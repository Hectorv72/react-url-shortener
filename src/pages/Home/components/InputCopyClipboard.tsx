import React from 'react'
import { toast } from 'react-toastify'

interface propTypes {
  text: string
}

const InputCopyClipboard = ({ text }: propTypes) => {

  const notifyCopied = () => toast.info('¡Vinculo copiado!', { hideProgressBar: true, pauseOnHover: false })

  const handleCopyClipboard = () => {
    navigator.clipboard.writeText(text)
    notifyCopied()
  }

  return (
    <div className='my-5'>
      <span>Link creado correctamente:</span>
      <div className="input-group my-1">
        <span className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" >
          <a target='blank' href={text}>{text}</a>
        </span>
        <button onClick={handleCopyClipboard} className="btn btn-outline-secondary" type="button" id="button-addon2">copiar</button>
      </div>
    </div>
  )
}

export default InputCopyClipboard