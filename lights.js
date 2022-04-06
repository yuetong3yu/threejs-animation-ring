import * as Three from 'three'

export const pointLight = new Three.PointLight('#ffffff')
pointLight.position.set(5, 5, 5)

export const ambientLight = new Three.AmbientLight('#ffffff')
