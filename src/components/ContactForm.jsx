import React, { useState } from 'react';

const AboutUsPage = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
      setShowContactForm(false);
    }, 3000);
  };

  const teamMembers = [
    {
      name: "Carlos Rodríguez",
      role: "Fundador & CEO",
      bio: "Con más de 15 años de experiencia en tecnología, Carlos ha liderado nuestra visión desde el principio.",
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      name: "María González",
      role: "Directora de Operaciones",
      bio: "Experta en optimización de procesos y desarrollo estratégico.",
      image: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      name: "Luis Martínez",
      role: "Director de Tecnología",
      bio: "Innovador tecnológico con pasión por soluciones de vanguardia.",
      image: "https://randomuser.me/api/portraits/men/3.jpg"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen relative">
      {/* Overlay Contact Form */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="bg-gradient-to-br from-purple-700 to-indigo-800 text-white p-6 rounded-t-lg">
              <h2 className="text-2xl font-bold">Contáctanos</h2>
              <button 
                onClick={() => setShowContactForm(false)}
                className="absolute top-4 right-4 text-white hover:text-gray-200"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              {submitted ? (
                <div className="bg-green-600 text-white p-4 rounded-lg text-center">
                  ¡Gracias por tu mensaje! Nos pondremos en contacto pronto.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nombre" 
                    required
                    className="w-full bg-gray-100 border border-gray-300 text-gray-900 p-2 rounded" 
                  />
                  <input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Número de Teléfono" 
                    required
                    className="w-full bg-gray-100 border border-gray-300 text-gray-900 p-2 rounded" 
                  />
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Correo Electrónico" 
                    required
                    className="w-full bg-gray-100 border border-gray-300 text-gray-900 p-2 rounded" 
                  />
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mensaje" 
                    required
                    rows={4} 
                    className="w-full bg-gray-100 border border-gray-300 text-gray-900 p-2 rounded" 
                  />
                  <button 
                    type="submit" 
                    className="w-full bg-purple-600 hover:bg-purple-700 transition-colors duration-300 text-white p-2 rounded"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-700 to-indigo-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestra Historia</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Fundada en 2010, nuestra empresa nació con la visión de transformar desafíos en oportunidades, 
            combinando innovación tecnológica con un compromiso profundo hacia nuestros clientes.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-4xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-purple-800 mb-6">Nuestra Misión</h2>
          <p className="text-gray-700 leading-relaxed">
            Empoderar a empresas y profesionales mediante soluciones tecnológicas innovadoras 
            que impulsen su crecimiento y transformen sus desafíos en éxitos.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-purple-800 mb-6">Nuestra Visión</h2>
          <p className="text-gray-700 leading-relaxed">
            Ser el socio tecnológico líder que inspire y acelere la transformación digital, 
            creando valor sostenible para nuestros clientes, colaboradores y comunidad.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">Nuestro Equipo</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-gray-100 rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-105"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-purple-800 mb-2">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-purple-800 mb-6">Contáctanos</h2>
          <p className="text-gray-700 mb-8">
            ¿Tienes preguntas o quieres colaborar? Estamos aquí para escucharte.
          </p>
          <div className="flex justify-center space-x-6">
            <button 
              onClick={() => setShowContactForm(true)}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Enviar Correo
            </button>
            <a 
              href="tel:+1234567890" 
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Llamar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;