import {
  AcademicCapIcon,
  LinkIcon,
  LockClosedIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/24/outline";

const TyphoonTool = () => {
  const tools = [
    { name: "Qualcomm EDL Flash", icon: AcademicCapIcon },
    { name: "MediaTek V6 Flash", icon: AcademicCapIcon },
    { name: "Fastboot to EDL", icon: AcademicCapIcon },
    { name: "Wipe EFS", icon: ShieldExclamationIcon },
    { name: "Reset FRP", icon: LockClosedIcon },
    { name: "BROM Bypass", icon: LinkIcon },
  ];

  return (
    <div className="mt-1 relative w-2xs h-150 bg-foreground rounded-4xl  shadow-2xl perspective-midrange border-8 border-solid border-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="text-2xl font-bold text-cyan-400">TYPHON TOOL</div>
        <div className="text-gray-400">9:41</div>
      </div>

      {/* Device Status */}
      <div className="bg-gray-800 rounded-lg p-4 mb-6 flex items-center">
        <AcademicCapIcon className="h-6 w-6 text-green-500 mr-3" />
        <div>
          <div className="text-green-500 text-sm">Device Connected</div>
          <div className="font-medium">Xiaomi Mi 12 Pro</div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-2 gap-4">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center h-32 hover:bg-gray-700 transition-colors cursor-pointer"
          >
            <tool.icon className="h-8 w-8 text-cyan-400 mb-2" />
            <div className="text-center text-sm">{tool.name}</div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-gray-500 text-xs">
        v2.4.1 | Typhoon Team © 2025
      </div>
    </div>
  );
};

export default TyphoonTool;
