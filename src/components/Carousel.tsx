import { useState } from "react"

export const Carousel = ({images} : {images: string[]}) => {

  const [ imageIndex, setImageIndex] = useState(0)

  const selectNext = () => {
    setImageIndex((imageIndex +1) % images.length)
  }

  const selectPrev = () => {
    setImageIndex((imageIndex - 1 + images.length) % images.length)
  }

  console.log(imageIndex)

  return (
    <div>
      <h1>Carousel</h1>
      <img src={images[imageIndex]} alt="carousel"/>
      <button onClick={selectNext}>Next</button>
      <button onClick={selectPrev}>Prev</button>
    </div>
  )
}
