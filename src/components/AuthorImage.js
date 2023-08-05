import { useEffect, useState } from 'react'
import styled from '@emotion/styled' 

const Foto = styled.img`
    width: 400px;
    position: absolute;
    top: 100px;
    right: 2%;
    z-index: -100;
    border-radius: 10px;
    opacity: .85;
`


const AuthorImage = (props) => {

    const { frase, consultarAPI } = props

    const authorImg = () => {
        if (frase.author === "Badger") return "/image/badger.webp" 
        else if(frase.author === "Gustavo Fring") return "/image/gustavoFring.webp"
        else if(frase.author === "Hank Schrader") return "/image/hankSchrader.webp"
        else if(frase.author === "Jesse Pinkman") return "/image/jessePinkman.webp"
        else if(frase.author === "Mike Ehrmantraut") return "/image/mikeEhrmantraut.webp"
        else if(frase.author === "Saul Goodman") return "/image/saulGoodman.webp"
        else if(frase.author === "Walter White") return "/image/walterWhite.webp"
        else if(frase.author === "Skyler White") return "/image/skylerWhite.webp"
        else if(frase.author === "Walter White Jr") return "/image/walterWhiteJr.webp"
        else if(frase.author !== "Badger" || "Gustavo Fring" || "Hank Schrader" || "Jesse Pinkman" || "Mike Ehrmantraut" || "Saul Goodman" || "Walter White" || "Skyler White" || "Walter White Jr") return consultarAPI(), console.log(frase)

    }
    
    // if(frase.author !== "Badger" || frase.author !== "Gustavo Fring" || frase.author !== "Hank Schrader" || frase.author !== "Jesse Pinkman" || frase.author !== "Mike Ehrmantraut" || frase.author !== "Saul Goodman" || frase.author !== "Walter White" || frase.author !== "Skyler White") 

  return (
    <>
        <div>
            <Foto src={authorImg()} alt="walterWhite" />
        </div>
    </>
  )
}

export default AuthorImage