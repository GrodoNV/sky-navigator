import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Sobre Nosotros</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="mb-4">
            Sky Navigator es una aerolínea comprometida con brindar la mejor experiencia de vuelo a nuestros pasajeros. 
            Fundada en 2010, hemos crecido hasta convertirnos en una de las aerolíneas líderes en la región, 
            ofreciendo vuelos nacionales e internacionales a destinos populares.
          </p>
          <p className="mb-4">
            Nuestra misión es conectar personas y culturas a través de viajes seguros, cómodos y accesibles. 
            Nos esforzamos por ofrecer un servicio excepcional en cada etapa del viaje, desde la reserva hasta 
            la llegada a su destino.
          </p>
          <p>
            En Sky Navigator, la seguridad es nuestra prioridad número uno. Operamos con una flota moderna y 
            bien mantenida, y nuestro personal altamente capacitado está dedicado a garantizar que su viaje 
            sea lo más seguro y placentero posible.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUsPage;

