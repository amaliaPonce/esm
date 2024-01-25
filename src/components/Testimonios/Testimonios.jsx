import stats1 from '../../assets/stats.webp'
import stats2 from '../../assets/stats1.webp'
import stats3 from '../../assets/stats2.webp'
import ScrollAnimation from "../ScrollAnimation";

const Testimonios = () => {
  return (

    <section className="bg-white ">
      <div className=" px-4 py-8 mx-auto sm:py-16 lg:px-20 lg:mx-20">
        <div className="flex flex-col items-center justify-between mb-8 md:flex-row text-start">
        </div>
        <div className="space-y-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 md:space-y-0">
        <ScrollAnimation animationClasses={["animate-fade-right"]}>
          <div>
            <img
              className="object-cover rounded-2xl h-[362px]"
              src={stats1}
              alt="Vallas en eventos deportivos para seguridad y delimitación"
            />
          </div>
          </ScrollAnimation>

          <ScrollAnimation animationClasses={["animate-fade-left"]}>

          <div className="px-8 py-20  bg-gray-100 rounded-2xl">
            <div className='flex justify-center lg:justify-start'>
            <div className=" mb-4 w-14 h-14 rounded-full bg-orange-400 lg:h-12 lg:w-12 ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="check"><path fill="#FFFF" d="M18.71,7.21a1,1,0,0,0-1.42,0L9.84,14.67,6.71,11.53A1,1,0,1,0,5.29,13l3.84,3.84a1,1,0,0,0,1.42,0l8.16-8.16A1,1,0,0,0,18.71,7.21Z"></path></svg>
            </div>
            </div>
            <h3 className="h1-style">1000+</h3>
            <p className="p-style">Proyectos realizados</p>
          </div>
          </ScrollAnimation>
          <ScrollAnimation animationClasses={["animate-fade-right"]}>
          <div>
            <img
              className="object-cover rounded-2xl h-[362px]"
              src={stats2}
              alt="Barreras de vallado"
            />
          </div>
          </ScrollAnimation>

          <ScrollAnimation animationClasses={["animate-fade-left"]}>

          <div className="px-8 py-20 border bg-orange-100 rounded-2xl">
          <div className='flex justify-center lg:justify-start'>
            <div className=" mb-4 w-14 h-14 rounded-full bg-orange-400 lg:h-12 lg:w-12 ">
              
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="check"><path fill="#FFFF" d="M18.71,7.21a1,1,0,0,0-1.42,0L9.84,14.67,6.71,11.53A1,1,0,1,0,5.29,13l3.84,3.84a1,1,0,0,0,1.42,0l8.16-8.16A1,1,0,0,0,18.71,7.21Z"></path></svg>
            </div>
            </div>
            <h3 className="h1-style">+10 años</h3>
            <p className="p-style">De experiencia en el sector</p>
          </div>
          </ScrollAnimation>
          <ScrollAnimation animationClasses={["animate-fade-right"]}>

          <div >
            <img
              className="object-cover rounded-2xl h-[362px]"
              src={stats3}
              alt="Vallas de calidad"
                        />
          </div>
          </ScrollAnimation>

          <ScrollAnimation animationClasses={["animate-fade-left"]}>

          <div className="px-8 py-20 bg-gray-100 rounded-2xl">
          <div className='flex justify-center lg:justify-start'>
            <div className=" mb-4 w-14 h-14 rounded-full bg-orange-400 lg:h-12 lg:w-12 ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="check"><path fill="#FFFF" d="M18.71,7.21a1,1,0,0,0-1.42,0L9.84,14.67,6.71,11.53A1,1,0,1,0,5.29,13l3.84,3.84a1,1,0,0,0,1.42,0l8.16-8.16A1,1,0,0,0,18.71,7.21Z"></path></svg>
            </div>
            </div>
            <h3 className="h1-style">200+</h3>
            <p className="p-style">Clientes satisfechos</p>
          </div>
          </ScrollAnimation>

  
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
