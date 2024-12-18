import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Carousel from './Carousel';

const FAQsPage = () => {
  const faqs = [
    { question: "¿Cómo puedo reservar un vuelo?", answer: "Puede reservar un vuelo a través de nuestra página de inicio, seleccionando su origen, destino y fechas de viaje." },
    { question: "¿Cuál es la política de equipaje?", answer: "Nuestra política de equipaje varía según el tipo de tarifa. Generalmente, se permite una maleta de mano y una maleta facturada por pasajero." },
    { question: "¿Cómo puedo hacer el check-in?", answer: "Puede hacer el check-in en línea a través de nuestro sitio web o aplicación móvil, o en el aeropuerto en nuestros mostradores de check-in." },
    { question: "¿Qué hago si mi vuelo se retrasa o cancela?", answer: "En caso de retraso o cancelación, le notificaremos por correo electrónico o SMS. Por favor, consulte con nuestro personal en el aeropuerto para obtener más información y asistencia." },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Navbar />
      <main className="flex-grow container mx-auto py-8 px-4">
        <h1 className="text-4xl font-extrabold text-center mt-20 mb-10">Preguntas Frecuentes</h1>

        {/* Carrusel */}
        <Carousel />

        {/* Preguntas Frecuentes */}
        <div className="space-y-6 mt-10">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800 shadow-lg rounded-lg p-6">
              <div
                className="flex justify-between items-center cursor-pointer hover:underline"
                onClick={() => toggleOpen(index)}
              >
                <h2 className="text-2xl font-bold">{faq.question}</h2>
                <span className="text-gray-400">{openIndex === index ? '-' : '^'}</span>
              </div>
              {openIndex === index && <p className="mt-4 text-gray-300">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQsPage;
