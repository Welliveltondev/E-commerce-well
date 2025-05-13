import { BrowserRouter } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Hero from "../components/Hero/Hero"
import NewCollections from "../components/NewCollections/NewCollections"
import NewsLetter from "../components/NewsLetter/NewsLetter"
import Offers from "../components/Offers/Offers"
import Popular from "../components/Popular/Popular"

const Shop = () => {
  <div>
    <Hero />
    <Popular />
    <Offers />
    <NewCollections />
    <NewsLetter />
    <Footer />
  </div>
}

export default Shop

/* estao sendo renderizados no App */