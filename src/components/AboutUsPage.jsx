import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
const AboutUsPage = () => {
  const teamMembers = [
    {
      name: "Carlos Rodríguez",
      role: "Fundador & CEO",
      bio: "Con más de 15 años de experiencia en tecnología, Carlos ha liderado nuestra visión desde el principio.",
      image: "https://i1.sndcdn.com/artworks-000012658138-jgjuck-t500x500.jpg"
    },
    {
      name: "María González",
      role: "Directora de Operaciones",
      bio: "Experta en optimización de procesos y desarrollo estratégico.",
      image: "https://pbs.twimg.com/media/FuWkQ9EXwAMOmxu.png"
    },
    {
      name: "Luis Martínez",
      role: "Director de Tecnología",
      bio: "Innovador tecnológico con pasión por soluciones de vanguardia.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTP0wS_EALQMXH7teWiD6xNL9g32jXq52ZcA&s"
    }
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-900 to-indigo-900 py-20 px-4 custom-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mt-8 mb-6">Nuestra Historia</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Fundada en 2010, nuestra empresa nació con la visión de transformar desafíos en oportunidades, 
            combinando innovación tecnológica con un compromiso profundo hacia nuestros clientes.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-4xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-purple-400 mb-6">Nuestra Misión</h2>
          <p className="text-gray-300 leading-relaxed">
            Empoderar a empresas y profesionales mediante soluciones tecnológicas innovadoras 
            que impulsen su crecimiento y transformen sus desafíos en éxitos.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-purple-400 mb-6">Nuestra Visión</h2>
          <p className="text-gray-300 leading-relaxed">
            Ser el socio tecnológico líder que inspire y acelere la transformación digital, 
            creando valor sostenible para nuestros clientes, colaboradores y comunidad.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-purple-400 mb-12">Nuestro Equipo</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-gray-700 rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-105"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-purple-300 mb-2">{member.name}</h3>
                  <p className="text-gray-400 mb-4">{member.role}</p>
                  <p className="text-gray-300">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-purple-400 mb-6">Contáctanos</h2>
          <p className="text-gray-300 mb-8">
            ¿Tienes preguntas o quieres colaborar? Estamos aquí para escucharte.
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="./ContactForm" 
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Enviar Correo
            </a>
            <a 
              href="tel:+1234567890" 
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Llamar
            </a>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutUsPage;

