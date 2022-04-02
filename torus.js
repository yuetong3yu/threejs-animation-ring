import * as Three from 'three'

const geometry = new Three.TorusGeometry(10, 3, 16, 1000)
const meterial = new Three.MeshBasicMaterial({
  color: 0xff6347,
  wireframe: true,
})
export const torus = new Three.Mesh(geometry, meterial)
