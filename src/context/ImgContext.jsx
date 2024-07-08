import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

export const ImgContext = createContext()

export const ImgProvider = ({ children }) => {
    const [imagen, setImagen] = useState([])
    const [imagenLike, setImagenLike] = useState([])
    const [filter, setFilter] = useState([])
    const likePhoto = '../src/assets/icons/heart-filled.svg'
    const notLikePhoto = '../src/assets/icons/heart.svg'
    
    const likeFuntion = (e) => {
        e.preventDefault()
        const idFoto = e.target.id
        console.log(idFoto)
        for (const key in imagen) {
            if (imagen[key].id == idFoto) {
                imagen[key].liked = true
            }
        }
        
        setImagen([...imagen])
        const capturaLike = () => {
            setImagenLike(imagen)
            console.log(imagenLike)
        }
        capturaLike()
        const toFilter = true
        const filterLike = imagenLike.filter((likes) => likes.liked == toFilter)
        setFilter(filterLike)
        console.log(filter)
    }
    const variableGlobalImagen = {
        imagen,
        setImagen,
        likeFuntion,
        likePhoto,
        notLikePhoto,
        setImagenLike,
        imagenLike,
        filter
        
    }
  return (
    
    <ImgContext.Provider value={variableGlobalImagen}>
        {children}
    </ImgContext.Provider>
    
  )
}

