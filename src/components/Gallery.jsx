import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Gallery() {
  const [imgArray, setImgArray] = useState([])
  useEffect(() => {
    //api fetch
    axios.get('https://picsum.photos/v2/list')
      .then((res) => {
        setImgArray(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div className='md:columns-2 xl:columns-3'>
      {imgArray.map((e, index) => {
        return (
          <div key={index}>
            <img src={e.download_url} alt={`image_${e.id}`} className='p-4 mx-auto' />
          </div>
        )
      })}
    </div>
  )
}

export default Gallery