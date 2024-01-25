import ScrollAnimation from "../ScrollAnimation";

const Servicios = () => {
  return (
    <>
      <section id="Servicios" className="bg-white mb-5 pb-10 mt-[200px] md:mt-[250px] ">
        <div className="container px-6  mb-4 pt-4 lg:my-20  mx-auto">
          <ScrollAnimation animationClasses={["animate-fade-left"]}>
            <h2 className="h1-style">
              Explora nuestro <br /> catalogo de vallas{" "}
              <span className="underline decoration-orange-500">2024</span>
            </h2>
          </ScrollAnimation>

          <ScrollAnimation animationClasses={["animate-fade-up"]}>
            <p className="p-style">
              Ampliamos nuestro catalogo para incluir opciones como tribunas,
              arcos de salida o meta, remolques podium, y ¡mucho más! <br /> Descubre
              todas las posibilidades que tenemos para ofrecerte.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            <div className="space-y-3">
              <h3 className="h2-style">Vallas inclinadas de rápido montaje</h3>

              <p className="text-black font-Roboto text-center lg:text-left lg:px-0  px-4">
                Explora nuestras vallas inclinadas de medidas 1.75 x 1.10 y 1.35
                x 1.80, fabricadas en acero galvanizado que garantiza
                resistencia y durabilidad. Su sistema de acople permite un
                montaje y desmontaje eficientes, convirtiéndolas en la elección
                ideal para eventos que requieren una instalación ágil.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="h2-style">
                Vallas modulares para Eventos de gran magnitud
              </h3>

              <p className="text-black font-Roboto text-center px-4 lg:px-0  lg:text-left">
                Vallas modulares adaptables a eventos de cualquier tamaño.
                Partiendo de unidades básicas de modulación estándar, ofrecemos
                soluciones versátiles para grandes, medianos y pequeños eventos.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="h2-style">
                Vallas de acero galvanizado para Obras de Construcción
              </h3>

              <p className="text-black font-Roboto text-center px-4 lg:px-0  lg:text-left">
                Elije nuestras vallas de acero galvanizado para proyectos de
                construcción. Estas vallas robustas ofrecen versatilidad y
                rigidez precisa para soportar cargas, incluso las generadas por
                equipos de iluminación y sonido en grandes instalaciones.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="h2-style">
                Vallas ajustables para diversos terrenos{" "}
              </h3>

              <p className="text-black font-Roboto text-center px-4 lg:px-0 lg:text-left">
                Explora nuestras vallas con diseño adaptable. Con medidas de
                1.75 x 1.10 y 1.35 x 1.80, estas vallas inclinadas de acero
                galvanizado son la elección perfecta para garantizar una
                delimitación estable y segura en eventos al aire libre. Su
                sistema de acople eficiente permite un montaje y desmontaje
                rápido, asegurando versatilidad y practicidad.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="h2-style">
                Vallas Estéticas y Funcionales para Eventos Exclusivos{" "}
              </h3>

              <p className="text-black font-Roboto text-center px-4 lg:px-0  lg:text-left">
                Más allá de cumplir con rigurosos estándares de calidad, estas
                vallas añaden un toque distintivo a la atmósfera del evento.
                Ofrecemos una solución que va más allá de la simple
                delimitación, creando una barrera visualmente atractiva que
                realza la experiencia del espectador.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="h2-style">Vallas para eventos deportivos </h3>

              <p className="text-black font-Roboto text-center px-4 lg:px-0  lg:text-left">
                Nuestras vallas están meticulosamente diseñadas para eventos
                deportivos, priorizando la seguridad tanto de los espectadores
                como de los participantes. Fabricadas con acero galvanizado,
                cumplen con los estándares de calidad necesarios para garantizar
                la integridad de la infraestructura en eventos deportivos de
                todas las dimensiones.
              </p>
            </div>
          </div>
        </div>
        <aside className=" flex justify-center items-center py-6 ">
          <ScrollAnimation animationClasses={["animate-fade-up"]}>
            <a href="/catalogo" className="font-days-one btn-primary">
              Ver Ficha técnica{" "}
            </a>
          </ScrollAnimation>
        </aside>
      </section>
    </>
  );
};

export default Servicios;
