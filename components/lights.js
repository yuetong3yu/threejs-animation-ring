import * as Three from 'three'

export const pointLight = new Three.PointLight('#ffffff')
pointLight.position.set(10, 10, 5)

export const ambientLight = new Three.AmbientLight('#ffffff')

export const pointerHelper = new Three.PointLightHelper(pointLight)
