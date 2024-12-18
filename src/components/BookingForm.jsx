import React, { useState } from "react";
import { FaCreditCard } from "react-icons/fa";
import Spinner from "./Spinner";

const BookingForm = ({ onClose }) => {
  const [bookingDetails, setBookingDetails] = useState({
    fullName: "",
    email: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    postalCode: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    postalCode: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    let tempErrors = { ...errors };
    switch (name) {
      case "email":
        tempErrors.email = /\S+@\S+\.\S+/.test(value)
          ? ""
          : "Correo electrónico inválido.";
        break;
      case "cardNumber":
        tempErrors.cardNumber = /^\d{16}$/.test(value)
          ? ""
          : "Debe contener 16 dígitos.";
        break;
      case "expirationDate":
        tempErrors.expirationDate = /^\d{2}\/\d{2}$/.test(value)
          ? ""
          : "Formato inválido (MM/AA).";
        break;
      case "cvv":
        tempErrors.cvv = /^\d{3}$/.test(value)
          ? ""
          : "Debe contener 3 dígitos.";
        break;
      case "postalCode":
        tempErrors.postalCode = /^\d+$/.test(value)
          ? ""
          : "Debe contener solo números.";
        break;
      case "fullName":
        tempErrors.fullName = /^[a-zA-Z\s]{2,}$/.test(value)
          ? ""
          : "Ingrese un nombre válido (mínimo 2 caracteres, solo letras y espacios).";
        break;
      default:
        tempErrors[name] = value.trim() ? "" : "Este campo es obligatorio.";
        break;
    }

    setBookingDetails({ ...bookingDetails, [name]: value });
    setErrors(tempErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulamos el proceso de envío
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
        <div className="mensaje-reserva w-full gap-6 bg-gray-800 rounded-lg ">
          <h2 className="text-white text-center pt-4 font-semibold text-lg mb-3">
            ¡Reserva Exitosa!
          </h2>
          <button
            className="form-submit-btn mt-4 w-full bg-purple-900 text-white px-4 py-2 rounded hover:bg-purple-700"
            onClick={onClose}
          >
            Cerrar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center left-0 items-start z-50 overflow-y-auto">
      <div className="w-full max-w-sm mx-auto my-4">
        {isSubmitting && (
          <div className=" centrar absolute inset-0 bg-black bg-opacity-50 flex  items-center z-50">
            <Spinner />
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className={`form-container bg-gray-800 rounded-lg p-4 absolute top-20 ${
            isSubmitting ? "pointer-events-none opacity-50" : ""
          }`}
        >
          <h2 className="text-xl font-bold text-white mb-4">Formulario de Reserva</h2>
          {/* Nombre Completo */}
          <div className="form-group mb-3">
            <label htmlFor="fullName" className="block text-white text-sm font-semibold mb-1">
              Nombre Completo:
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={bookingDetails.fullName}
              onChange={handleInputChange}
              className={`form-input w-full text-sm ${errors.fullName ? "border-red-500" : "border-white/10"}`}
              required
            />
            {errors.fullName && (
              <span className="text-red-500 text-xs mt-1 block">{errors.fullName}</span>
            )}
          </div>

          {/* Email */}
          <div className="form-group mb-3">
            <label htmlFor="email" className="block text-white text-sm font-semibold mb-1">
              Correo Electrónico:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={bookingDetails.email}
              onChange={handleInputChange}
              className={`form-input w-full text-sm ${errors.email ? "border-red-500" : "border-white/10"}`}
              required
            />
            {errors.email && (
              <span className="text-red-500 text-xs mt-1 block">{errors.email}</span>
            )}
          </div>

          {/* Card Number */}
          <div className="form-group mb-3">
            <label htmlFor="cardNumber" className="block text-white text-sm font-semibold mb-1">
              Número de tarjeta:
            </label>
            <div className="flex items-center">
              <FaCreditCard className="text-white mr-2" />
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={bookingDetails.cardNumber}
                onChange={handleInputChange}
                className={`form-input w-full text-sm ${errors.cardNumber ? "border-red-500" : "border-white/10"}`}
                maxLength="16"
                required
              />
            </div>
            {errors.cardNumber && (
              <span className="text-red-500 text-xs mt-1 block">{errors.cardNumber}</span>
            )}
          </div>

          {/* Expiration Date and CVV */}
          <div className="flex flex-wrap -mx-2 mb-3">
            <div className="w-1/2 px-2 mb-3">
              <label
                htmlFor="expirationDate"
                className="block text-white text-sm font-semibold mb-1"
              >
                Fecha de expiración:
              </label>
              <input
                type="text"
                id="expirationDate"
                name="expirationDate"
                value={bookingDetails.expirationDate}
                onChange={handleInputChange}
                className={`form-input w-full text-sm ${errors.expirationDate ? "border-red-500" : "border-white/10"}`}
                placeholder="MM/AA"
                maxLength="5"
                required
              />
              {errors.expirationDate && (
                <span className="text-red-500 text-xs mt-1 block">{errors.expirationDate}</span>
              )}
            </div>
            <div className="w-1/2 px-2">
              <label htmlFor="cvv" className="block text-white text-sm font-semibold mb-1">
                CVV:
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={bookingDetails.cvv}
                onChange={handleInputChange}
                className={`form-input w-full text-sm ${errors.cvv ? "border-red-500" : "border-white/10"}`}
                maxLength="3"
                required
              />
              {errors.cvv && (
                <span className="text-red-500 text-xs mt-1 block">{errors.cvv}</span>
              )}
            </div>
          </div>

          {/* Postal Code */}
          <div className="form-group mb-4">
            <label htmlFor="postalCode" className="block text-white text-sm font-semibold mb-1">
              Código Postal:
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={bookingDetails.postalCode}
              onChange={handleInputChange}
              className={`form-input w-full text-sm ${errors.postalCode ? "border-red-500" : "border-white/10"}`}
              required
            />
            {errors.postalCode && (
              <span className="text-red-500 text-xs mt-1 block">{errors.postalCode}</span>
            )}
          </div>

          {/* Botones */}
          <div className="flex flex-col gap-2">
            <button
              type="submit"
              className="w-full bg-purple-900 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-purple-700"
              disabled={isSubmitting || Object.values(errors).some((error) => error)}
            >
              Confirmar Reserva
            </button>
            <button
              type="button"
              className="w-full bg-gray-600 px-4 py-2 rounded text-sm font-semibold text-white hover:bg-gray-500"
              onClick={onClose}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;

