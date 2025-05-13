import { Battery50Icon, WifiIcon } from "@heroicons/react/24/outline";
import {
  BlockNetwork,
  Bluetooth,
  Google,
  Icloud,
  MDM,
  Others,
  Xiaomi,
} from "./icons/myIcons";

const Smartphone = () => {
  const features = [
    { name: "CUENTA ICLOUD", icon: Icloud },
    { name: "BLOQUEO MDM", icon: MDM },
    { name: "CUENTA GOOGLE", icon: Google },
    { name: "BLOQUEO DE RED", icon: BlockNetwork },
    { name: "CUENTA MI", icon: Xiaomi },
    { name: "OTROS", icon: Others },
  ];

  return (
    <div
      className="relative mx-auto animate-float"
      style={{
        width: "280px",
        height: "560px",
        background: "#121212",
        borderRadius: "36px",
        overflow: "hidden",
        boxShadow: "0 15px 35px rgba(0, 0, 0, 0.5)",
        transformStyle: "preserve-3d",
        perspective: "1000px",
        border: "8px solid #333",
      }}
    >
      {/* Status Bar */}
      <div className="flex justify-between items-center px-6 pt-4 pb-2">
        <span className="text-white text-sm">9:41</span>
        <div className="flex space-x-3">
          <WifiIcon className="h-6 w-6 text-white" />
          <Bluetooth className="h-4 w-4 text-white" />
          <Battery50Icon className="h-6 w-6 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="px-5 py-4">
        {/* App Title */}
        <div className="text-center mb-6">
          <h1 className="text-cyan-400 text-xl font-bold">DESBLOQUEOS</h1>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg p-3 flex flex-col items-center justify-center h-24 hover:bg-gray-800 transition-colors"
            >
              <feature.icon className="h-8 w-8 text-cyan-400 mb-2" />
              <span className="text-white text-xs text-center">
                {feature.name}
              </span>
            </div>
          ))}
        </div>

        {/* Device Status */}
        <div className="border-t border-gray-700 pt-4">
          <div className="text-green-500 text-sm text-center">
            TODOS LOS DISPOSITIVOS
          </div>
          <div className="text-white text-center font-medium">
            TODAS LAS MARCAS
          </div>
        </div>
      </div>
    </div>
  );
};

export default Smartphone;
