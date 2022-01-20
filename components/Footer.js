function Footer() {
  return (
    <div className="grid grid-cols-1 gap-y-6 px-12 py-6 bg-gray-100 lg:grid-cols-4 gap-x-12 lg:px-[100px] ">
      <div className="text-sm text-gray-800 border-b-[1px] pb-6 border-gray-300 lg:border-0">
        <h5 className="font-bold mb-2">Asistencia</h5>
        <div className="gap-y-2 gap-x-2 grid md:grid-cols-3 lg:grid-cols-1 ">
          <p>Centro de ayuda</p>
          <p>Información de seguridad</p>
          <p>Opciones de cancelación</p>
          <p>Nuestra respuesta frente a la covid</p>
          <p>Apoyo a las personas con discapacidad</p>
          <p>Denunciar un problema en el vecindario</p>
        </div>
      </div>
      <div className=" text-sm text-gray-800 border-b-[1px] pb-6 border-gray-300 lg:border-0">
        <h5 className="font-bold mb-2">Comunidad</h5>
        <div className="gap-y-2 gap-x-2 grid md:grid-cols-3 lg:grid-cols-1">
          <p>Airbnb.org: alojamiento de ayuda en caso de catástrofe</p>
          <p>Apoya a los refugiados afganos</p>
          <p>Celebramos la diversidad y el sentido de pertenencia</p>
          <p>Luchamos contra la discriminación</p>
        </div>
      </div>
      <div className="text-sm text-gray-800 border-b-[1px] pb-6 border-gray-300 lg:border-0">
        <h5 className="font-bold mb-2">Modo anfitrión</h5>
        <div className="gap-y-2 gap-x-2 grid md:grid-cols-3 lg:grid-cols-1">
          <p>Anímate a compartir tu espacio</p>
          <p>AirCover: protección para los anfitriones</p>
          <p>Recursos para anfitriones</p>
          <p>Visita el foro de la comunidad</p>
          <p>Cómo brindar servicios de anfitrión de forma responsable</p>
        </div>
      </div>
      <div className="text-sm text-gray-800 border-b-[1px] pb-6 border-gray-300 lg:border-0">
        <h5 className="font-bold mb-2">Acerca de</h5>
        <div className="gap-y-2 gap-x-2 grid md:grid-cols-3 lg:grid-cols-1">
          <p>Sala de prensa</p>
          <p>Más información sobre las nuevas funciones</p>
          <p>Carta de nuestros fundadores</p>
          <p>Carreras</p>
          <p>Inversionistas</p>
          <p>Airbnb Luxe</p>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Footer;
