import ScrollAnimation from '../ScrollAnimation';
import ImagenCompleta from '../../assets/Completa.webp';
import SemiCirculo from '../../assets/SemiCirculo.svg';

const NuestraEmpresa = () => {
  return (
    <>
        <section className=" container flex flex-col justify-center items-center px-6 mt-16 py-8 mx-auto relative">
        <ScrollAnimation animationClasses={['animate-fade-right']}>

          <h1 id="Nosotros" className="h1-style text-center mb-4">
            Nuestra empresa
          </h1>
          </ScrollAnimation>
          <ScrollAnimation animationClasses={['animate-fade-up']}>
<div className='lg:max-w-screen-lg'>
          <p className="font-roboto text-black text-lg mb-6 text-center leading-relaxed ">
            Nos destacamos por nuestra experiencia en <strong>alquiler</strong>, <strong>montaje</strong> y <strong>desmontaje</strong> de eventos y espectáculos deportivos, culturales, pasacalles, desfiles, y más. También ofrecemos servicios de coordinación integral para Actos Públicos. <br /> Utilizamos unidades básicas de modulación estándar para crear escenarios visualmente impactantes y funcionales.
          </p>
          </div>
          </ScrollAnimation>

        </section>
        <section className="relative">
  <img
    src={ImagenCompleta}
    alt="Vallas para carreras, vallas para eventos"
    className="w-full z-20 h-[700px] object-cover"
    style={{ zIndex: 1 }}
  />
  <img
    src={SemiCirculo}
    alt="vallas y tribunas para eventos"
    className="absolute bottom-[-330px] lg:bottom-[-350px] left-1/2 transform -translate-x-1/2 z-10 w-[450px] h-[475px]"
    style={{ zIndex: -1 }}
  />
</section>





    </>
  );
};

export default NuestraEmpresa;
