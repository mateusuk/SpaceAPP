import styled from "styled-components"
import Title from "../Title"
import Populars from "./Populars"
import Tags from "./Tags"
import Imagem from "./images"


const GalleryConteiner =  styled.div`
    display: flex;
    gap: 24px;
`

const FluidSection = styled.section`
    flex-grow: 1;
`
const ImagensContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`


const Gallery =({ fotos = [], aoFotoSelecionada, aoAlternarFavorito })=>{
    return(
        <>
            <Tags />
            <GalleryConteiner >
                <FluidSection>
                    <Title>Navegue pela galeria</Title>
                    <ImagensContainer >
                    {fotos.map(foto => <Imagem 
                            aoZoomSolicitado={aoFotoSelecionada}
                            aoAlternarFavorito={aoAlternarFavorito}
                            key={foto.id} 
                            foto={foto}/>)
                        }
                    </ImagensContainer>
                </FluidSection>
                <Populars />
            </GalleryConteiner>
        </>
    )
}

export default Gallery