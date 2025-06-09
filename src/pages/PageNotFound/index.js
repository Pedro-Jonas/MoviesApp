import styles from "./PageNotFound.module.css";
import Header from "../../components/Header";
import erro404 from "./erro404.png";
import Footer from "../../components/Footer";


function PageNotFound() {
    return(
        <>
        <Header/>
        <section className={styles.container}>
            <h2>Ops! Conteúdo Não Localizado!</h2>
            <img src={erro404} alt="Logo da página não localizada" />
        </section>
        <Footer/>
        </>
    )

}

export default PageNotFound;