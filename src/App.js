import React from "react";
import {useState, useEffect} from "react";
import styled from "@emotion/styled";
import Frase from "./components/Frase";
import AuthorImage from "./components/AuthorImage";

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  /* padding-top: 5rem; */
  flex-direction: column;
`

const Boton = styled.button`
  /* background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 110%); */
  /* transition: background-size .8s ease; */
  background-color: #007d35;
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 0;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  border: 2px solid black;
  border-radius: 10px;
  transition-duration: .3s;

  position: absolute;
  bottom: 10%;
  right: 2%;
  opacity: .3;
  
  :hover {
    cursor: pointer;
    background-size: 400px;
    background-color: #007531;
    opacity: 1;
  }
`

function App() {

  const [frase, setFrase] = useState({})
  const [ author, setAuthor ] = useState(frase.author)


  const consultarAPI = async () => {
    const api = await fetch('https://api.breakingbadquotes.xyz/v1/quotes/100')
    const frase = await api.json()
    setFrase(frase[0])
  }

  useEffect(() => {
    consultarAPI()
    setAuthor(frase.author)
  }, [])



  return (  
    <Contenedor>
      <Frase 
      frase={frase}
      />
      <Boton
        onClick={consultarAPI}
      >
        GET PHRASE
      </Boton>

      <AuthorImage frase={frase} author={author} consultarAPI={consultarAPI}/>
    </Contenedor>

  )
}

export default App;
