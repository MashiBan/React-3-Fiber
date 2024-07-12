import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
// import { CineonToneMapping } from 'three'
import * as THREE from 'three'

const root = ReactDOM.createRoot(document.querySelector('#root'))
const cameraSettigns = {
    fov: 45, 
    zoom: 100,
    near: 0.1,
    far: 200,
    position: [3, 2, 6]
}
root.render(
    <>
        <Canvas
            orthographic
            // flat
            gl={ {
                antialias : true,
                // toneMapping: THREE.CineonToneMapping
                toneMapping: THREE.ACESFilmicToneMapping,
                // outputColorSpace: THREE.SRGBColorSpace
            }}
            camera={ cameraSettigns }
        >
            <Experience/>
        </Canvas>
    </>
)