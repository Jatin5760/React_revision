import React, { useContext } from 'react'
import PixabayContext from '../Context/PixabayContext'

const Images = () => {

    const {imageData} = useContext(PixabayContext)
  return (
    <div>
      {imageData.map((image)=><div key={image.id}>
      <div className='item'>
            <img src={image.largeImageURL}/>
      </div>
      </div>)}
    </div>
  )
}

export default Images
