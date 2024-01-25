import Testimonios from "../../components/Testimonios/Testimonios"
import HeaderComponent from "../../components/Header/Header"
import NuestraEmpresa from "../../components/NuestraEmpresa/NuestraEmpresa"
import Servicios from "../../components/Servicios/Servicios"
import Formulario from "../../components/Formulario/Formulario"
import Galeria from "../../components/Galeria/Galeria"
import Footer from "../../components/Footer/Footer"

const HomeComponent = () => {
  return (
<section>
    <HeaderComponent/>
    <NuestraEmpresa />
    <Servicios />
    <Testimonios />
    <Galeria/>
    <Formulario />
    <Footer/>
</section>
)
}

export default HomeComponent