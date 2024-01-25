import ScrollAnimation from "../ScrollAnimation"; 
import NuestrosProductos1 from "../../assets/NuestrosProductos1.webp"
import NuestrosProductos2 from "../../assets/NuestrosProductos2.webp"
import NuestrosProductos3 from "../../assets/NuestrosProductos3.webp"
import NuestrosProductos4 from "../../assets/NuestrosProductos4.png"
import NuestrosProductos5 from "../../assets/NuestrosProductos5.webp"
import NuestrosProductos6 from "../../assets/NuestrosProductos6.webp"


const Galeria = () => {
  return (
    <section className="relative flex body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center my-2">
          <ScrollAnimation animationClasses={["animate-fade-left"]}>
            <h1 className="h1-style">Nuestros Productos</h1>
          </ScrollAnimation>
          <ScrollAnimation animationClasses={["animate-fade-up"]}>
            <p className="p-style lg:w-2/3">
              Con una trayectoria de más de 10 años en el sector, nos enorgullece
              ofrecer productos que destacan por su excepcional calidad y
              fiabilidad. Nuestra dedicación y compromiso nos permite seguir
              brindando soluciones confiables.
            </p>
          </ScrollAnimation>
        </div>
        <div className="flex flex-wrap">
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative ">
              <img
                alt="Vallas y tribunas en eventos deportivos"
                className="absolute inset-0 w-full h-full object-cover object-center rounded-3xl"
                src={NuestrosProductos1}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-orange-300 bg-white opacity-0 hover:opacity-100 rounded-3xl">
                <h2 className="h2-style px-2">Valla alta</h2>
                <h3 className="p-style font-bold">Medidas: 2 x 2m | Acero </h3>
                <p className="p-style">
                  Valla de tubo redondo con refuerzo de mallazo y anclaje
                  machihembrado.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="Infraestructura para eventos: vallas y tribunas de calidad"
                className="absolute inset-0 w-full h-full object-cover object-center rounded-3xl"
                src={NuestrosProductos2}
              />
              <div className=" rounded-3xl px-8 py-10 relative z-10 w-full border-4 border-orange-300 bg-white opacity-0 hover:opacity-100">
                <h2 className="h2-style px-2">Valla inclinada</h2>
                <p className="p-style font-bold">1 x 2m | 12kg | Acero</p>
                <p className="p-style">
                  Acero galvanizado con barrotes de 16mm y anclaje machihembrado.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="Soluciones de vallas y tribunas para eventos al aire libre"
                className="rounded-3xl absolute inset-0 w-full h-full object-cover object-center"
                src={NuestrosProductos3}
              />
              <div className="rounded-3xl px-8 py-10 relative z-10 w-full border-4 border-orange-300 bg-white opacity-0 hover:opacity-100">
                <h2 className="h2-style px-2">Valla peatonal</h2>
                <p className="p-style font-bold">2,5 x 1m | 13kg | Acero</p>
                <p className="p-style">
                  Valla peatonal de acero galvanizado y anclaje machihembrado.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="Elegantes vallas y cómodas tribunas para experiencias deportivas"
                className="absolute inset-0 w-full h-full object-cover object-center rounded-3xl"
                src={NuestrosProductos4}
              />
              <div className="rounded-3xl px-8 py-10 relative z-10 w-full border-4 border-orange-300 bg-white opacity-0 hover:opacity-100">
                <h2 className="h2-style px-2">Valla peatonal</h2>
                <p className="p-style font-bold">2 x 1m | 14kg | Polipropileno</p>
                <p className="p-style">
                  Valla peatonal de Polipropileno color azul con anclaje machiembrado.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="Disfruta de eventos con nuestras vallas y tribunas personalizadas"
                className="absolute inset-0 w-full h-full objefxct-cover object-center rounded-3xl"
                src={NuestrosProductos5}
              />
              <div className="rounded-3xl px-8 py-10 relative z-10 w-full border-4 border-orange-300 bg-white opacity-0 hover:opacity-100">
                <h2 className="h2-style px-2">Remolque podium automatizado</h2>
                <p className="p-style font-bold">20 m²</p>
                <p className="p-style">
                  Escenario con instalación de sonido e iluminación.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="Vallas resistentes y tribunas para todo tipo de eventos"
                className="absolute inset-0 w-full h-full object-cover object-center rounded-3xl"
                src={NuestrosProductos6}
              />
              <div className="rounded-3xl px-8 py-10 relative z-10 w-full border-4 border-orange-300 bg-white opacity-0 hover:opacity-100">
                <h2 className="h2-style">Arco de Salida o Meta</h2>
                <h3 className="p-style font-bold">2,10/4,10/6,10 x 4m</h3>
                <p className="p-style">
                  Estructura interior con sistema AllRound y pórtico con viga para sistema de cronometraje.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Galeria;
