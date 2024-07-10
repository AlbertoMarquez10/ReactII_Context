import { useContext, useEffect } from 'react'
import { ImgContext } from '../context/ImgContext'
import Card from 'react-bootstrap/Card'
import IconHeart from './IconHeart'

const PHOTO_URL = '/photos.json'

const Gallery = () => {
  const {imagen, setImagen, likeFuntion} = useContext(ImgContext)

  const basePhotos = async () => {
    const consultaPhotos = await fetch(PHOTO_URL)
    const respuestaPhotos = await consultaPhotos.json()
    setImagen(respuestaPhotos.photos)
  }
  useEffect(() => {
    basePhotos()
    
  }, [])

  return (
    <div className='gallery grid-columns-5 p-3'>
      {imagen.map((img) => (
        <Card style={{ width: '16rem' }} key={img.id} >
          <IconHeart filled={img.liked}/>
          <Card.Img variant='top' src={img.src.tiny} id={img.id}
          onClick={likeFuntion} />
          <Card.Text>{img.alt}</Card.Text>
        </Card>
        
      ))}

    </div>
  )
};
export default Gallery;
