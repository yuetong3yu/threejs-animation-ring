import * as Three from 'three'

const geometry = new Three.TorusGeometry(10, 3, 16, 200)
const meterial = new Three.MeshStandardMaterial({
  color: '#051e3e',
})
export const torus = new Three.Mesh(geometry, meterial)
