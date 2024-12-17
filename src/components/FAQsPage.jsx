import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const FAQsPage = () => {
  const faqs = [
    { question: "¿Cómo puedo reservar un vuelo?", answer: "Puede reservar un vuelo a través de nuestra página de inicio, seleccionando su origen, destino y fechas de viaje." },
    { question: "¿Cuál es la política de equipaje?", answer: "Nuestra política de equipaje varía según el tipo de tarifa. Generalmente, se permite una maleta de mano y una maleta facturada por pasajero." },
    { question: "¿Cómo puedo hacer el check-in?", answer: "Puede hacer el check-in en línea a través de nuestro sitio web o aplicación móvil, o en el aeropuerto en nuestros mostradores de check-in." },
    { question: "¿Qué hago si mi vuelo se retrasa o cancela?", answer: "En caso de retraso o cancelación, le notificaremos por correo electrónico o SMS. Por favor, consulte con nuestro personal en el aeropuerto para obtener más información y asistencia." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Preguntas Frecuentes</h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQsPage;

