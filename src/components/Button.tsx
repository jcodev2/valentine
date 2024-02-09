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

const images = [
  'image-1',
  'image-2',
  'image-3',
  'image-4',
  'image-5',
  'image-6',
  'image-7',
  'image-8'
]

export default function Button() {
  const [noCount, setNoCount] = useState(0)
  const [yesPressed, setYesPressed] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)

  const yesButtonSize = noCount * 20 + 16

  const handleNoClick = () => {
    setNoCount(noCount + 1)
    setImageIndex((imageIndex + 1) % images.length)

    if (noCount === 1) {
      images.shift()
    }
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
          <div className='flex max-w-xs rounded-md'>
            <img
              src={`${images[imageIndex]}.jpg`}
              alt='Peticion'
              className='mx-auto rounded-md w-full'
            />
          </div>

          <h1 className='text-4xl text-center md:text-5xl xl:text-5xl font-bold text-pink-600'>
            ¿Quieres ser mi San Valentín?
          </h1>

          <div className='flex justify-center items-center gap-x-2 mt-4'>
            <button
              onClick={handleYesClick}
              className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded'
              style={{ fontSize: `${yesButtonSize}px` }}
            >
              Sí
            </button>
            <button
              onClick={handleNoClick}
              className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
            >
              {getNoButtonPhrase()}
            </button>
          </div>
        </>
      )}

      {yesPressed && (
        <>
          <h1 className='text-4xl md:text-6xl xl:text-7xl font-bold text-center text-pink-600'>
            Yey, Sabía que dirías que sí! 🥳
          </h1>
          <div className='max-w-xs mt-4'>
            <img
              src='/love.jpg'
              alt="Valentine's Day"
              className='mx-auto rounded-md w-full'
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
