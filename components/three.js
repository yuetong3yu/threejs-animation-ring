import * as Three from 'three'

import { torus } from './torus'
import { pointLight, ambientLight, pointerHelper } from './lights'
import { gridHelper } from './/helpers'

const scence = new Three.Scene()

const camera = new Three.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)

const renderer = new Three.WebGL1Renderer({
  canvas: document.getElementById('bg'),
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
camera.position.setZ(30)

scence.add(torus, pointLight, ambientLight, pointerHelper, gridHelper)

autoRender()

function autoRender() {
  requestAnimationFrame(autoRender)

  torus.rotation.x += 0.01
  torus.rotation.y += 0.005
  torus.rotation.z += 0.01

  renderer.render(scence, camera)
}
