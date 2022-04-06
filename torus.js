import * as Three from 'three'

const geometry = new Three.TorusGeometry(10, 3, 16, 200)
const meterial = new Three.MeshStandardMaterial({
  color: '#ff6f69',
  wireframe: true,
})
export const torus = new Three.Mesh(geometry, meterial)
