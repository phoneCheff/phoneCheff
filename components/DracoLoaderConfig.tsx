// components/DracoLoaderConfig.tsx
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

export function createDracoLoader() {
  const loader = new DRACOLoader();
  loader.setDecoderPath("/draco/");
  return loader;
}
