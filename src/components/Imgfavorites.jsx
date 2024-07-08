import { useContext } from 'react'
import { ImgContext } from '../context/ImgContext'
import Card from 'react-bootstrap/Card'

const Imgfavorites = () => {
    const {filter} = useContext(ImgContext)
  return (
    <div className='p-3 gallery grid-columns-4'>
        {filter.map((fill)=>(
        <Card style={{ width: '16rem' }} key={fill.id} >
            <Card.Img variant='top' src={fill.src.tiny} id={fill.id}/>
            <Card.Text>{fill.alt}</Card.Text>
        </Card>
        ))}

    </div>
  )
}

export default Imgfavorites
