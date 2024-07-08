import { useContext, useEffect } from 'react'
import { ImgContext } from '../context/ImgContext'
import Card from 'react-bootstrap/Card'
import Figure from 'react-bootstrap/Figure'

const PHOTO_URL = '/photos.json'

const Gallery = () => {
  const {imagen, setImagen, likeFuntion, likePhoto, notLikePhoto } = useContext(ImgContext)

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
          <Card.Img variant='top' src={img.src.tiny} id={img.id}
          onClick={likeFuntion}/>
          <Card.Text>{img.alt}</Card.Text>
          <Card.Text>{img.liked}</Card.Text>
          <Figure>
            <Figure.Image
              width={27}
              height={28}
              src={img.liked === true ? likePhoto : notLikePhoto}
            />
          </Figure>
        </Card>
      ))}

    </div>
  )
};
export default Gallery;
