import Footer from "../../components/Footer/Footer";
import Navegador from "../../components/Navegador/Navegador";
import Valla1 from "../../assets/VallaPeatonal.webp";
import Valla2 from "../../assets/VallaPeatonal2.webp";
import Valla3 from "../../assets/VallaInclinada.webp";
import Valla4 from "../../assets/VallaAlta.webp";
import Valla5 from "../../assets/VallaNewJersey.webp";
import Valla6 from "../../assets/Cono.webp";

import Valla7 from "../../assets/Remolquepodium.webp";
import Valla8 from "../../assets/PodiumdeSalida.webp";
import Valla9 from "../../assets/ArcoSalidaMeta.webp";

const CatalogoPage = () => {
  return (
    <>
      <Navegador />
      <main>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 lg:py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-[100px] overflow-hidden">
            <img
              alt="vallado para obras"
              className="object-cover object-center h-full w-full"
              src={Valla1}
            />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="h1-style text-black">Valla Peatonal</h2>
                <p className="text-black font-roboto max-w-xl text-xl">
                  La Valla Peatonal está elaborada en resistente polipropileno
                  de color azul, con anclaje machihembrado en ambos lados para
                  garantizar una mayor estabilidad y seguridad.
                </p>
                <p className="my-2 text-orange-600 font-roboto max-w-xl text-xl italic">
                  Logística en paquetes de 50 unidades capacidad en un camion
                  trailer de 450 unidades.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:items-start items-center"></div>
            <div className="flex flex-col lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="h2-style">Ficha técnica</h2>
                <p className="leading-relaxed text-lg">
                  <strong>Peso:</strong> 14 kg <br /> <strong>Medidas:</strong>{" "}
                  2 x 1m <br /> <strong>Material: </strong>Prolipropileno azul
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-10 lg:py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-[100px]  overflow-hidden lg:order-2">
            <img
              alt="Vallado para eventos"
              className="object-cover object-center h-full w-full"
              src={Valla2}
            />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="h1-style text-black">Valla Peatonal</h2>
                <p className="text-black font-roboto max-w-xl text-xl">
                  La Valla Peatonal está elaborada en acero galvanizado, con
                  anclaje machihembrado en ambos lados para garantizar una mayor
                  estabilidad y seguridad.
                </p>
                <p className="my-2 text-orange-600 font-roboto max-w-xl text-xl italic">
                  Logística en paquetes de 50 unidades capacidad en un camion
                  trailer de 500 unidades.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:items-start items-center"></div>
            <div className="flex flex-col lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="h2-style">Ficha técnica</h2>
                <p className="leading-relaxed text-lg">
                  <strong>Peso:</strong> 13 kg <br /> <strong>Medidas:</strong>{" "}
                  2,5 x 1m <br /> <strong>Material: </strong>Acero galvanizado
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 lg:py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-[100px] overflow-hidden">
            <img
              alt="vallado para conciertos"
              className="object-cover object-center h-full w-full"
              src={Valla3}
            />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="h1-style text-black">Valla Inclinada</h2>
                <p className="text-black font-roboto max-w-xl text-xl">
                  La Valla Inclinada está elaborada en acero galvanizado, con
                  anclaje machihembrado en ambos lados para garantizar una mayor
                  estabilidad y seguridad. <br /> Valla ideal para eventos
                  deportivos
                </p>
                <p className="my-2 text-orange-600 font-roboto max-w-xl text-xl italic">
                  Logística en paquetes de 50 unidades capacidad en un camión
                  trailer de 650 unidades.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:items-start items-center"></div>
            <div className="flex flex-col lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="h2-style">Ficha técnica</h2>
                <p className="leading-relaxed text-lg">
                  <strong>Peso:</strong> 12 kg <br /> <strong>Medidas:</strong>{" "}
                  1 x 2m <br /> <strong>Barrotes: </strong>16mm
                  <strong>
                    <br />
                    Material:{" "}
                  </strong>
                  Acero galvanizado
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-10 lg:py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-[100px] overflow-hidden lg:order-2">
            <img
              alt="Vallas para obras"
              className="object-cover object-center h-full w-full"
              src={Valla4}
            />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="h1-style text-black">Valla Alta</h2>
                <p className="text-black font-roboto max-w-xl text-xl">
                  La valla alta fabricada con tubo redondo guarnecido de mallazo
                  con anclaje machihembrado en ambos lados para garantizar una
                  mayor estabilidad y seguridad.
                </p>
                <p className="my-2 text-orange-600 font-roboto max-w-xl text-xl italic">
                  Protección contra la corrosión mediante galvanizado sendzimir.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:items-start items-center"></div>
            <div className="flex flex-col lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="h2-style">Ficha técnica</h2>
                <p className="leading-relaxed text-lg">
                  <strong>Peso:</strong> 13 kg <br /> <strong>Medidas:</strong>{" "}
                  2 x 2m <br /> <strong>Tubo: </strong>40cm x 1,5m <br />{" "}
                  <strong>Mallazo: </strong>100 x 50 x 4
                  <br /> <strong>Material: </strong>Acero galvanizado
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 lg:py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-[100px] overflow-hidden">
            <img
              alt="Vallas para proyectos"
              className="object-cover object-center h-full w-full"
              src={Valla5}
            />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="h1-style text-black">Valla New Jersey</h2>
                <p className="text-black font-roboto max-w-xl text-xl">
                La Valla New Jersey, fabricada con precisión en polietileno de alta resistencia, presenta un diseño modular y un anclaje machihembrado en ambos lados, asegurando una estabilidad robusta y niveles óptimos de seguridad. <br /> Esta valla no solo destaca por su durabilidad y diseño funcional, sino también por su capacidad para proporcionar una señalización clara y efectiva en diversas situaciones viales.
                </p>
           
              </div>
            </div>
            <div className="flex flex-col lg:items-start items-center"></div>
          
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-10 lg:py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-[100px] overflow-hidden lg:order-2">
            <img
              alt="Vallas de calidad para eventos"
              className="object-cover object-center h-full w-full"
              src={Valla6}
            />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="h1-style text-black">Cono</h2>
                <p className="text-black font-roboto max-w-xl text-xl">
                Ideal para señalizar recorridos y dividir calzadas, ya que dispone de una banda reflectante homologada (UNE 13422 Clase R1B).
                </p>
                <p className="my-2 text-orange-600 font-roboto max-w-xl text-xl italic">
                Frecuentemente usado para señalizar recorridos de carreras en áreas urbanas.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:items-start items-center"></div>
            <div className="flex flex-col lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="h2-style">Ficha técnica</h2>
                <p className="leading-relaxed text-lg">
                  <strong>Alto:</strong> 30cm <br /> <strong>Ancho de banda: </strong>10cm
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 lg:py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-[100px] overflow-hidden">
            <img
              alt="Vallas de calidad para eventos deportivos"
              className="object-cover object-center h-full w-full"
              src={Valla7}
            />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="h1-style text-black">Remolque podium</h2>
                <p className="text-black font-roboto max-w-xl text-xl">
                  Remolque de podium automatizado con pistones hidráulicos. En
                  cuestión de minutos, obtén un escenario de 20m² completo con
                  instalación de sonido e iluminación. <br /> Perfecto para la
                  entrega de premios en eventos deportivos, promociones de
                  productos, campañas electorales, y más.
                </p>
                <p className="my-2 text-orange-600 font-roboto max-w-xl text-xl italic">
                  Posibilidad de rotulación exterior e interior en función del
                  evento.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:items-start items-center"></div>
            <div className="flex flex-col lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="h2-style">Ficha técnica</h2>
                <p className="leading-relaxed text-lg">
                  <strong>Largo:</strong> 5m <br />{" "}
                  <strong>Ancho desplegado:</strong> 4m <br />{" "}
                  <strong>Alto interior: </strong>2,45m
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-10 lg:py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-[100px] overflow-hidden lg:order-2">
            <img
              alt="Vallas para carreras"
              className="object-cover object-center h-full w-full"
              src={Valla8}
            />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="h1-style text-black">Podium de salida</h2>
                <p className="text-black font-roboto max-w-xl text-xl">
                  Podium de salida para eventos de motor. Su estructura interior
                  cuenta con un sistema allround y un portico con viga celosía,
                  proporcionando un espacio donde se pueden montar los sistemas
                  de cronometraje con facilidad
                </p>
                <p className="my-2 text-orange-600 font-roboto max-w-xl text-xl italic">
                  Posibilidad de rotulación mediante panel de polipropileno
                  celular.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:items-start items-center"></div>
            <div className="flex flex-col lg:items-start items-center"></div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 lg:py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-[100px]  overflow-hidden">
            <img
              alt="Vallas de calidad para obras"
              className="object-cover object-center h-full w-full"
              src={Valla9}
            />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="h1-style text-black">Arco de salida y meta</h2>
                <p className="text-black font-roboto max-w-xl text-xl">
                  Arco de salida o entrada para eventos de motor. Su estructura
                  interior cuenta con un sistema allround y un portico con viga
                  celosía, proporcionando un espacio donde se pueden montar los
                  sistemas de cronometraje con facilidad
                </p>
                <p className="my-2 text-orange-600 font-roboto max-w-xl text-xl italic">
                  Posibilidad de rotulación mediante panel de polipropileno
                  celular.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:items-start items-center"></div>
            <div className="flex flex-col lg:items-start items-center">
            <div className="flex-grow bg-gray-100 p-6 rounded-2xl ">
  <h2 className="text-xl font-bold mb-4 font-days-one">Ficha técnica</h2>
  <table className="w-full border-collapse">
  <tbody>
    <tr className="font-roboto border-b">
      <td className=" py-2 px-4">
        <strong>Arco libre entre pilares:</strong>
      </td>
      <td className="py-2 px-4">
        <strong>Ancho de pilares:</strong>
      </td>
      <td className="py-2 px-4">
        <strong>Alto:</strong>
      </td>
    </tr>
    <tr className="">
      <td className="py-2 px-4">6,10m</td>
      <td className="py-2 px-4">0,90 x 0,90 x 0,90m</td>
      <td className="py-2 px-4">4m</td>
    </tr>
    <tr>
      <td className="py-2 px-4">4,10m</td>
      <td className="py-2 px-4">0,90 x 0,90 x 0,90m</td>
      <td className="py-2 px-4">4m</td>
    </tr>
    <tr>
      <td className="py-2 px-4">2,10m</td>
      <td className="py-2 px-4">0,90 x 0,90 x 0,90m	</td>
      <td className="py-2 px-4">4m</td>
    </tr>
  </tbody>
</table>


</div>


            </div>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
};

export default CatalogoPage;
