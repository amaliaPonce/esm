const Formulario = () => {
  const mailtoLink =
    "mailto:comercial@esm2020.com?subject=Contacto%20con%20nosotros&body=Escribe%20tu%20mensaje%20aquí";

  return (
    <section id="Contacto" className="text-gray-800 body-font relative">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          title="map"
          width="100%"
          height="100%"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Pol%20Ins%20Los%20Llanos%20de%20San%20Andres%20s/n%2014720,%20Almodovar%20del%20R%C3%ADo,%20C%C3%B3rdoba&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
        ></iframe>
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="font-days-one text-center lg:text-start lg:text-4xl md:text-2xl text-xl">Contáctanos</h2>
          <p className="p-style">
            Si tienes alguna pregunta y necesitas que te ayudemos ¡Estamos aquí para tí!
          </p>
          <a
            href={mailtoLink}
            className="font-days-one btn-primary border-0 py-2 px-6 focus:outline-none text-xl rounded "
          >
            Contactar
          </a>
          <p className="text-xs text-gray-500 mt-3">
            Tus datos serán tratados de manera confidencial.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Formulario;
