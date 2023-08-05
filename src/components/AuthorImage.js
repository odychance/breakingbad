import { useEffect, useState } from 'react'
import styled from '@emotion/styled' 

const Foto = styled.img`
    width: 400px;
    height: 550px;
    overflow: hidden;
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
        if (frase.author === "Badger") return "https://static.wikia.nocookie.net/breakingbad/images/5/5b/Cast_bb_800x600_badger.jpg/revision/latest?cb=20191101152834" 
        else if(frase.author === "Gustavo Fring") return "https://upload.wikimedia.org/wikipedia/en/6/69/Gustavo_Fring_BCS_S3E10.png"
        else if(frase.author === "Hank Schrader") return "https://upload.wikimedia.org/wikipedia/en/d/db/Hank_Schrader_S5B.png"
        else if(frase.author === "Jesse Pinkman") return "https://upload.wikimedia.org/wikipedia/en/c/c6/Jesse_Pinkman_S5B.png"
        else if(frase.author === "Mike Ehrmantraut") return "https://upload.wikimedia.org/wikipedia/en/e/ea/Mike_Ehrmantraut_BCS_S3.png"
        else if(frase.author === "Saul Goodman") return "https://upload.wikimedia.org/wikipedia/en/3/34/Jimmy_McGill_BCS_S3.png"
        else if(frase.author === "Skyler White") return "https://upload.wikimedia.org/wikipedia/en/f/fb/Skyler_White_S5B.png"
        else if(frase.author === "Walter White") return "https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png"
        else if(frase.author === "Walter White Jr") return "https://upload.wikimedia.org/wikipedia/en/c/ce/Walter_White_Jr_S5B.png"
        else if(frase.author !== "Badger" || "Gustavo Fring" || "Hank Schrader" || "Jesse Pinkman" || "Mike Ehrmantraut" || "Saul Goodman" || "Walter White" || "Skyler White" || "Walter White Jr") return consultarAPI()

    }
    
    // if(frase.author !== "Badger" || frase.author !== "Gustavo Fring" || frase.author !== "Hank Schrader" || frase.author !== "Jesse Pinkman" || frase.author !== "Mike Ehrmantraut" || frase.author !== "Saul Goodman" || frase.author !== "Walter White" || frase.author !== "Skyler White") 


  return (
    <>
            <Foto src={`${authorImg()}`} alt="Autor de la frase" />
    </>
  )
}

export default AuthorImage