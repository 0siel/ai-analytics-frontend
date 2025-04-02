import React from "react";

export default function SoftwareProjectPitch() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Desarrollo de Software Personalizado
      </h1>
      <p className="mb-6 text-gray-700">
        Hola, Soy{" "}
        <span className="font-semibold">Osiel Alejandro Rubio Suárez</span>,
        estudiante de Ingeniería de Software en la UAQ. Mi equipo y yo ofrecemos
        soluciones de software personalizadas para mejorar tu negocio.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Servicios</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Páginas Web Personalizadas</li>
          <li>Desarrollo Backend</li>
          <li>Automatización de Procesos</li>
          <li>Integración de Servicios</li>
          <li>Manejo de Datos</li>
          <li>Proyectos Específicos a tu Medida</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          ¿Por qué Elegirnos?
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Equipo comprometido de estudiantes especializados.</li>
          <li>Asesoría experta con respaldo académico.</li>
          <li>Calidad profesional garantizada.</li>
          <li>Comunicación clara y personalizada en todo momento</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          ¿Qué Necesitamos?
        </h2>
        <p className="text-gray-700">
          Tu compromiso y comunicación constante para definir objetivos claros y
          tiempos de entrega realistas.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Contacto</h2>
        <p className="text-gray-700">
          Correo:{" "}
          <a
            href="mailto:osiel.rubio.suarez@gmail.com"
            className="text-blue-500 underline"
          >
            osiel.rubio.suarez@gmail.com
          </a>{" "}
          |{" "}
          <a
            href="mailto:orubio27@alumnos.uaq.mx"
            className="text-blue-500 underline"
          >
            orubio27@alumnos.uaq.mx
          </a>
          <br />
          WhatsApp: <span className="font-medium">442 870 3447</span>
          <br />
          Portafolio:{" "}
          <a
            href="https://0siel.github.io/Portfolio/"
            target="_blank"
            className="text-blue-500 underline"
          >
            Ver proyectos
          </a>
        </p>
      </section>

      <p className="mt-8 text-center text-gray-800 font-semibold">
        ¡Espero colaborar contigo para llevar tu negocio al siguiente nivel!
      </p>
    </div>
  );
}
