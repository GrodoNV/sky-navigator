import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SocialMedia from "./SocialMedia"; // Importa el componente SocialMedia

const AboutUsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Navbar />
      <main className="flex-grow container mx-auto py-8 px-0">
        <h1 className="text-4xl font-extrabold text-center mt-20 mb-10">Sobre Nosotros</h1>

        <div className="bg-gray-800 shadow-lg rounded-lg p-6 space-y-6">
          <p className="text-lg">
            Sky Navigator es una aerolínea comprometida con brindar la mejor experiencia de vuelo a nuestros pasajeros. 
            Fundada en 2010, hemos crecido hasta convertirnos en una de las aerolíneas líderes en la región, 
            ofreciendo vuelos nacionales e internacionales a destinos populares.
          </p>

          <p className="text-lg">
            Nuestra misión es conectar personas y culturas a través de viajes seguros, cómodos y accesibles. 
            Nos esforzamos por ofrecer un servicio excepcional en cada etapa del viaje, desde la reserva hasta 
            la llegada a su destino.
          </p>

          <p className="text-lg">
            Nuestra visión es ser la aerolínea preferida, reconocida por su excelencia en servicio, compromiso 
            con la seguridad y sostenibilidad, mejorando constantemente la experiencia del cliente.
          </p>

          <p className="text-lg">
            En Sky Navigator, la seguridad es nuestra prioridad número uno. Operamos con una flota moderna y 
            bien mantenida, y nuestro personal altamente capacitado está dedicado a garantizar que su viaje 
            sea lo más seguro y placentero posible.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Conéctate con Nosotros</h2>
          <SocialMedia />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUsPage;