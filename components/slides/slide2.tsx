import Image from "next/image"; // Importar next/image para optimización

const Slide2 = () => {
  return (
    <section // Cambiado de div a section para semántica
      id="home"
      aria-label="Servicios de eliminación de cuentas y desbloqueos profesionales"
      className="relative w-full min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      {/* Contenedor principal con landmark */}
      <div
        role="region"
        aria-label="Contenido principal"
        className="container mx-auto px-4 py-12 md:py-24 relative z-10"
      >
        {/* Grid layout responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Contenido textual */}
          <article className="order-2 lg:order-1 space-y-6">
            {" "}
            {/* Usamos article para contenido independiente */}
            <header>
              {" "}
              {/* Mejor estructura semántica */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span
                  className="bg-gradient-to-r from-foreground to-blue-600 bg-clip-text text-transparent"
                  aria-hidden="true" // El gradiente es decorativo
                >
                  ELIMINACIÓN DE CUENTAS
                </span>
                <br />
                <span className="text-blue-600 dark:text-blue-400">
                  & DESBLOQUEOS PROFESIONALES
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300">
                <span className="inline-flex items-center gap-2">
                  <span className="text-blue-600 dark:text-blue-400">
                    iCloud
                  </span>
                  <span aria-hidden="true">•</span> {/* Puntos decorativos */}
                  <span className="text-red-600 dark:text-red-400">Google</span>
                  <span aria-hidden="true">•</span>
                  <span className="text-orange-600 dark:text-orange-400">
                    MI Account
                  </span>
                </span>
              </h2>
            </header>
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Soluciones garantizadas para todas las marcas y modelos de
                dispositivos.
              </p>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Recupera el acceso completo a tu dispositivo en pocos pasos.
              </p>
            </div>
          </article>

          {/* Contenedor de imágenes */}
          <figure className="order-1 lg:order-2 relative h-64 md:h-96 lg:h-[500px]">
            {" "}
            {/* Usamos figure para contenido visual */}
            {/* Imagen Macbook */}
            <div className="absolute right-0 top-0 w-3/4 md:w-2/3 h-auto z-10">
              <Image
                src="/svg/icons/macbook.png"
                alt="Macbook mostrando proceso de desbloqueo"
                width={800} // Dimensiones reales de la imagen
                height={600}
                quality={85}
                priority // Precarga para LCP
                className="w-full h-auto object-contain"
              />
            </div>
            {/* Imagen iPhone */}
            <div className="absolute left-0 bottom-0 w-2/3 md:w-1/2 h-auto">
              <Image
                src="/svg/icons/iphone.png"
                alt="iPhone desbloqueado con pantalla de inicio visible"
                width={500}
                height={800}
                quality={85}
                priority
                className="w-full h-auto object-contain"
              />
            </div>
          </figure>
        </div>
      </div>

      {/* Efectos decorativos - Mejorados para a11y */}
      <div
        aria-hidden="true" // Ocultar elementos decorativos de lectores de pantalla
        className="absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute -right-20 -top-20 w-64 h-64 
              bg-blue-100 dark:bg-blue-700/30 
              rounded-full 
              opacity-20 dark:opacity-40 
              mix-blend-multiply dark:mix-blend-screen"
        ></div>

        <div
          className="absolute -left-20 -bottom-20 w-96 h-96 
              bg-blue-200 dark:bg-blue-600/30 
              rounded-full 
              opacity-20 dark:opacity-40 
              mix-blend-multiply dark:mix-blend-screen"
        ></div>
      </div>
    </section>
  );
};

export default Slide2;
