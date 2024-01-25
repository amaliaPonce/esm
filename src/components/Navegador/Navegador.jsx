import Logo from "../../assets/LogoESM.svg";
const Navegador = () => {
  return (
    <nav className="bg-white ">
      <section className="container flex flex-col items-center p-8 mx-auto">
        <a href="/">
        <img src={Logo} alt="Logo de ESM2020 - vallas y tribunas para eventos" className="w-[100px]" />
        </a>
        <section className="flex text-xs items-center justify-center mt-6 text-black lg:text-2xl capitalize ">
          <a href="/" className="a-nav-style ">
            Inicio
          </a>

          <a href="./#Nosotros" className="a-nav-style">
            Nosotros
          </a>

          <a href="./#Servicios" className="a-nav-style">
            Servicios
          </a>
          <a href="/catalogo" className="a-nav-style">
            Catálogo{" "}
          </a>
          <a
            href="./#Contacto"
            className="a-nav-style hover:text-orange-500 font-bold"
          >
            Contacto
          </a>
        </section>
      </section>
    </nav>
  );
};

export default Navegador;
