import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

export function load(url: string): Promise<THREE.Group> {
  return new Promise(resolve => new OBJLoader().load(url, obj => resolve(obj)))
}

export function wireframe(obj: THREE.Object3D, color: number) {
  obj.traverse(child => {
    // static analysis will lie to you: this does actually work
    if (child.isMesh) {
      child.material.wireframe = true;
      child.material.color.setHex(color);
    }
  })
}
