import {
  Apple,
  BlackBerry,
  Htc,
  Huawei,
  Lg,
  Motorola,
  Samsung,
  Xiaomi,
} from "../icons/myIcons";

const Slide1 = () => {
  const features = [
    { icon: Samsung, name: "Samsung" },
    { icon: Huawei, name: "Huawei" },
    { icon: Motorola, name: "Motorola" },
    { icon: BlackBerry, name: "BlackBerry" },
    { icon: Apple, name: "Apple" },
    { icon: Htc, name: "HTC" },
    { icon: Lg, name: "LG" },
    { icon: Xiaomi, name: "Xiaomi" },
  ];

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Sección de texto (40% del ancho) */}
      <div className="w-full lg:w-2/5 flex items-center justify-center p-8 lg:p-12">
        <div className="max-w-md space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            <span className="text-blue-600 ">Soluciones</span> para todas las
            marcas
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Ofrecemos las mejores soluciones para una amplia variedad de marcas
          </p>
        </div>
      </div>

      {/* Sección de iconos (60% del ancho) */}
      <div className="w-full lg:w-3/5 flex items-center justify-center p-8 lg:p-12 bg-background">
        <div className="w-full max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl dark:hover:shadow-gray-700/50 transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                <div className="mb-4 p-4 bg-gray-50  rounded-full">
                  <feature.icon className="h-12 w-12 text-gray-800 dark:text-gray-200" />
                </div>
                <span className="text-gray-800 dark:text-gray-200 font-medium">
                  {feature.name}
                </span>
              </div>
            ))}
          </div>

          {/* Mensaje adicional */}
          <div className="mt-12 text-center">
            <p className="text-foreground italic">
              Y muchas otras marcas disponibles...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide1;
