import React from 'react'

const InputCreate = () => {
  return (
    <div className='d-flex flex-row gap-2'>
      <input type='url' className='form-control' />
      <button type='button' className='btn btn-primary'>Convertir</button>
    </div>
  )
}

export default InputCreate