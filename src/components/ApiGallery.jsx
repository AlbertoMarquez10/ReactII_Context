import { useContext, useEffect } from 'react'
import { ImgContext } from '../context/ImgContext'

const PHOTO_URL = '/photos.json'
const ApiGallery = () => {

  const {setImagen} = useContext(ImgContext)
  const basePhotos = async () => {
    const consultaPhotos = await fetch(PHOTO_URL)
    const respuestaPhotos = await consultaPhotos.json()
    setImagen(respuestaPhotos.photos)
  }
  useEffect(() => {
    basePhotos()
    
  }, [])
  return (
    <>
    </>
  )
}

export default ApiGallery