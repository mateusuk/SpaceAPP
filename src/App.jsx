import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Banner from "./components/Banner";
import bannerBackground from "./assets/banner.png";
import Gallery from "./components/Gallery";
import fotos from './fotos.json'
import { useState } from "react";
import ModalZoom from "./components/ModalZoom";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;
const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;


const ContentGallery = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria]=useState(fotos)
  const [fotoSelecionada, setFotoSelecionada] = useState(null)
  
  const aoAlternarFavorito = (foto) =>{
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    }
    setFotosDaGaleria(fotosDaGaleria.map(fotoDaGaleria => {
      return {
        ...fotoDaGaleria,
        favorita: fotoDaGaleria.id === foto.id ? !foto.favorita : fotoDaGaleria.favorita
      }
    }))
  }

  return (
    <FundoGradiente>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <MainContainer>
          <SideBar />
          <ContentGallery>
            <Banner
              texto="A galeria mais completa de fotos do espaço!"
              backgroundImage={bannerBackground}
            />
            <Gallery 
            aoFotoSelecionada ={foto => setFotoSelecionada(foto)} 
            fotos={fotosDaGaleria}
            aoAlternarFavorito={aoAlternarFavorito}
            />
          </ContentGallery>
        </MainContainer>
      </AppContainer>
      <ModalZoom 
        foto={fotoSelecionada} 
        aoFechar={() => setFotoSelecionada(null)}
        aoAlternarFavorito={aoAlternarFavorito}
      />
    </FundoGradiente>
  );
}

export default App;
