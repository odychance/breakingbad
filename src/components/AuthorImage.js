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

const imagenes = {
    "Badger": "https://static.wikia.nocookie.net/breakingbad/images/5/5b/Cast_bb_800x600_badger.jpg/revision/latest?cb=20191101152834",
    "Gustavo Fring": "https://upload.wikimedia.org/wikipedia/en/6/69/Gustavo_Fring_BCS_S3E10.png",
    "Hank Schrader": "https://upload.wikimedia.org/wikipedia/en/d/db/Hank_Schrader_S5B.png",
    "Jesse Pinkman": "https://upload.wikimedia.org/wikipedia/en/c/c6/Jesse_Pinkman_S5B.png",
    "Mike Ehrmantraut": "https://upload.wikimedia.org/wikipedia/en/e/ea/Mike_Ehrmantraut_BCS_S3.png",
    "Saul Goodman": "https://upload.wikimedia.org/wikipedia/en/3/34/Jimmy_McGill_BCS_S3.png",
    "Skyler White": "https://upload.wikimedia.org/wikipedia/en/f/fb/Skyler_White_S5B.png",
    "Walter White": "https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png",
    "Walter White Jr": "https://upload.wikimedia.org/wikipedia/en/c/ce/Walter_White_Jr_S5B.png",
}

const name = Object.keys(imagenes)

const AuthorImage = (props) => {
    const { frase, consultarAPI } = props

    const authorImg = () => (!name.includes(frase.author)) ? consultarAPI() : imagenes[frase.author]

    return <Foto src={`${authorImg()}`} alt="Autor de la frase" />
}

export default AuthorImage