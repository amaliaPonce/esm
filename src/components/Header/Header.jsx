import { useState, useRef } from "react";
import Navegador from "../Navegador/Navegador";
import imagenUno from "../../assets/Banner1.webp";
import imagenDos from "../../assets/Banner2.webp";
import imagenTres from "../../assets/Banner3.webp";
import imagenCuatro from "../../assets/Banner4.webp";
import imagenCinco from "../../assets/Banner5.webp";

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [imagenUno, imagenDos, imagenTres, imagenCuatro, imagenCinco];

  const containerRef = useRef(null);
  const touchStartX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (touchStartX.current === null) return;

    const touchEndX = e.touches[0].clientX;
    const deltaX = touchEndX - touchStartX.current;

    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0 && currentImageIndex > 0) {
        setCurrentImageIndex(currentImageIndex - 1);
      } else if (deltaX < 0 && currentImageIndex < images.length - 1) {
        setCurrentImageIndex(currentImageIndex + 1);
      }

      touchStartX.current = null;
    }
  };

  const handleMouseDown = (e) => {
    touchStartX.current = e.clientX;
    containerRef.current.addEventListener("mousemove", handleMouseMove);
  };

  const handleMouseMove = (e) => {
    const touchEndX = e.clientX;
    const deltaX = touchEndX - touchStartX.current;

    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0 && currentImageIndex > 0) {
        setCurrentImageIndex(currentImageIndex - 1);
      } else if (deltaX < 0 && currentImageIndex < images.length - 1) {
        setCurrentImageIndex(currentImageIndex + 1);
      }

      touchStartX.current = null;
      containerRef.current.removeEventListener("mousemove", handleMouseMove);
    }
  };

  const handleMouseUp = () => {
    touchStartX.current = null;
    containerRef.current.removeEventListener("mousemove", handleMouseMove);
  };

  const handleButtonClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <header className="bg-white ">
      <Navegador />

      <section
        className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:my-10 lg:flex-row lg:items-center"
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <section
          className="
 flex flex-col items-center  w-full lg:flex-row lg:w-1/2"
        >
          <figure className="flex justify-center order-2 mt-6 lg:mt-0 lg:space-y-3 lg:flex-col">
            {images.map((image, index) => (
              <button
                key={index}
                className={`w-3 h-3 mx-2 rounded-full focus:outline-none ${
                  index === currentImageIndex
                    ? "bg-orange-600"
                    : "bg-gray-300 hover:bg-orange-700"
                }`}
                onClick={() => handleButtonClick(index)}
              ></button>
            ))}
          </figure>

          <section className="max-w-lg lg:mx-16 lg:order-2">
            <h1 className="h1-style animate-fade-right animate-once animate-duration-1000 animate-delay-300 animate-ease-in-out ">
             Equipamiento y Seguridad para Montajes y Obras
            </h1>
            <h2 className="h2-style animate-fade-up animate-once animate-duration-1000 animate-delay-300 animate-ease-in-out  ">
            Vallas y Equipamiento Especializado para Eventos y Proyectos de Construcción
            </h2>
            <p className="p-style">
            Nos enfocamos en hacer tus eventos seguros, cuidar tus obras y realizar tus proyectos. Ofrecemos soluciones efectivas y prácticas para mantener la seguridad siempre. Contáctanos para asegurar el éxito y tranquilidad en todos tus eventos y proyectos.
            </p>

            <aside className="mt-6 flex justify-center items-center lg:justify-start">
              <a
                href="#Contacto"
                className="font-days-one btn-primary animate-fade-right animate-once animate-duration-1000 animate-delay-300 animate-ease-in-out "
              >
                Contáctanos
              </a>
            </aside>
          </section>
        </section>

        <figure className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            className="lg:animate-fade-up object-cover w-full h-[500px] mt-16 md:mt:20 md:object-contain lg:mt-0 lg:object-contain"
            src={images[currentImageIndex]}
            alt={`Vallas para obras, vallas para eventos, vallas para proyectos ${
              currentImageIndex + 1
            } - Esm2020`}
          />
        </figure>
      </section>
    </header>
  );
};

export default Header;
