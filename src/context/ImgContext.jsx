import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

export const ImgContext = createContext()

export const ImgProvider = ({ children }) => {
    const [imagen, setImagen] = useState([])
    const [filter, setFilter] = useState([])
    const [heart, setHeart] = useState([])
   
    const likeFuntion = (e) => {
        e.preventDefault()
        
        const idFoto = e.target.id
        for (const key in imagen) {
            if (imagen[key].id == idFoto) {
                imagen[key].liked = !imagen[key].liked
            }
        }
        
        setImagen([...imagen])
     
        const toFilter = true
        const filterLike = imagen.filter((likes) => likes.liked == toFilter)
        setFilter(filterLike)
    }
    const variableGlobalImagen = {
        imagen,
        setImagen,
        likeFuntion,
        filter,
        heart   
    }
  return (
    
    <ImgContext.Provider value={variableGlobalImagen}>
        {children}
    </ImgContext.Provider>
    
  )
}

