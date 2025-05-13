// components/icons.tsx
import {
  // Iconos outline (24x24)
  BellIcon,
  // Iconos mini (20x20)
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import {
  ArrowPathIcon,
  Cog6ToothIcon,
  EnvelopeIcon,
  // Iconos sólidos (24x24)
  HomeIcon, // Spinner
  // Iconos outline (24x24)
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

// Exporta un objeto con todos los iconos
export const Icons = {
  logo: HomeIcon,
  user: UserIcon,
  settings: Cog6ToothIcon,
  spinner: ArrowPathIcon,
  mail: EnvelopeIcon,
  search: MagnifyingGlassIcon,
  bell: BellIcon,
  chevronDown: ChevronDownIcon,
  // Agrega más iconos según necesites
};

// Tipado para TypeScript (opcional)
export type IconName = keyof typeof Icons;
