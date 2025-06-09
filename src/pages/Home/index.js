import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Card from "../../components/Card";
import Category, {categories, filterCategory} from "../../components/Category";

function Home() {

  function pegarNome(e) {
    console.log(e.target.value)
    setNome(e.target.value)
  }

  const [nome, setNome] = useState()

  return (
    <>
      <Header/>
      <Banner image="assistir"/>
      <Container>
        <input
          type="text"
          placeholder="nome"
          onChange={pegarNome}
        />

        <h2>{nome}</h2>
  
        {categories.map((category, index) => 
          <Category category={category}>
          {filterCategory(index).map(video =>  <Card id={video.id} key={video.id}/>)}
          </Category>)
        }
      </Container>
      <Footer/>
    </>
  );
}

export default Home;
