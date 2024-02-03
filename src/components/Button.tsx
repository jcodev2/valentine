import { useState } from 'react'

const phrases = [
  'No',
  '¿Por qué no?',
  '¿En serio?',
  '¿Estás segur@?',
  '¿No me quieres?',
  'Vamos, di que sí',
  '¡Dilo ya!',
  'Por favor'
]

export default function Button() {
  const [noCount, setNoCount] = useState(0)
  const [yesPressed, setYesPressed] = useState(false)
  const yesButtonSize = noCount * 20 + 16

  const handleNoClick = () => {
    setNoCount(noCount + 1)
  }

  const getNoButtonPhrase = () => {
    return phrases[Math.min(noCount, phrases.length - 1)]
  }

  const handleYesClick = () => {
    setYesPressed(true)
    setNoCount(0)
  }

  return (
    <>
      {!yesPressed && (
        <>
          <h1 className='text-4xl md:text-6xl xl:text-7xl font-bold'>
            ¿Quieres ser mi San Valentín?
          </h1>

          <div className='flex max-w-3xl'>
            <img
              src='/valentine.gif'
              alt="Valentine's Day"
              className='mx-auto'
            />
          </div>

          <div className='flex justify-center items-center gap-x-2 mt-4'>
            <button
              onClick={handleNoClick}
              className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
            >
              {getNoButtonPhrase()}
            </button>
            <button
              onClick={handleYesClick}
              className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
              style={{ fontSize: `${yesButtonSize}px` }}
            >
              Sí
            </button>
          </div>
        </>
      )}

      {yesPressed && (
        <>
          <h1 className='text-4xl md:text-6xl xl:text-7xl font-bold'>
            Yey, Sabía que dirías que sí! 🥳
          </h1>
          <div className='max-w-3xl'>
            <img
              src='/output-onlinegiftools.gif'
              alt="Valentine's Day"
              className='mx-auto'
            />
          </div>

          <p className='text-xl md:text-2xl font-semibold xl:text-3xl mt-4'>
            love u 💖
          </p>
        </>
      )}
    </>
  )
}
