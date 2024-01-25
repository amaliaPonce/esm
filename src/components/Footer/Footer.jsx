import Logo from "../../assets/LogoESM.svg";

const Footer = () => {
  return (
    <footer>
      <div className="max-w-screen-3xl px-2 lg:px-4 py-16 mx-auto">
        <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <div className="rounded-2xl border-4 border-gray-200 w-full lg:w-3/4 p-8 space-y-6">
            <h2 className="h1-style">¿Cómo podemos ayudarte?</h2>

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="mb-4 lg:mb-0">
                <table className="text-lg font-bold font-roboto">
                  <tbody>
                    <tr>
                      <th className="text-orange-600 px-2 py-2">Email:</th>
                      <td className="text-gray-900 px-2 py-2">comercial@esm2020.com</td>
                    </tr>
                    <tr>
                      <th className="text-orange-600 px-2 py-2">Dirección:</th>
                      <td className="text-gray-900 px-2 py-2">
                        Pol Ins Los Llanos de San Andres s/n
                        <br />
                        14720, Almodovar del Río, Córdoba
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex items-center justify-end lg:mr-4">
                <img src={Logo} alt="Logo de ESM2020 - Soluciones de vallas para eventos, obras y proyectos." className="w-24 h-24" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border-4 border-orange-200 w-full lg:w-2/4 p-8">
            <div className="flex flex-row justify-between">
              <div className="w-1/2">
                <p className="font-medium text-lg font-roboto">Enlaces rápidos</p>
                <nav className="flex flex-col mt-4 space-y-2 text-gray-700">
                  <a className="hover:underline font-roboto" href="#Nosotros">Sobre Nosotros</a>
                  <a className="hover:underline font-roboto" href="#Servicios">Servicios</a>
                  <a className="hover:underline font-roboto" href="/catalogo">Catálogo</a>
                  <a className="hover:underline font-roboto" href="#Contacto">Contacto</a>
                </nav>
              </div>
              <div className="w-1/2">
                <p className="font-medium text-lg font-roboto">Legal</p>
                <nav className="flex flex-col mt-4 space-y-2 text-gray-700">
                  <a className="hover:underline font-roboto" href="#">Términos y Condiciones</a>
                  <a className="hover:underline font-roboto" href="#">Política de Privacidad</a>
                  <a className="hover:underline font-roboto" href="#">Aviso Legal (LSSICE)</a>
                  <a className="hover:underline font-roboto" href="#">Política de Cookies</a>
                </nav>
              </div>
            </div>
            <p className="mt-8 text-lg text-gray-900 font-roboto">
              © 2024 ESM2020, Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
