import { useContext } from 'react'
import { ImgContext } from '../context/ImgContext'
import Card from 'react-bootstrap/Card'
import IconHeart from './IconHeart'



const Gallery = () => {
  const {imagen, likeFuntion} = useContext(ImgContext)

  return (
    <div className='gallery grid-columns-5 p-3'>
      {imagen.map((img) => (
        <Card style={{ width: '16rem' }} key={img.id} >
          <IconHeart filled={img.liked}/>
          <Card.Img variant='top' src={img.src.tiny} id={img.id}
          onClick={likeFuntion} />
          <Card.Text className='zindexText'>{img.alt}</Card.Text>
        </Card>
        
      ))}

    </div>
  )
};
export default Gallery;
