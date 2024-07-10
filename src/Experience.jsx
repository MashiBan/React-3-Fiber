import {  useThree, extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

extend({ orbitControls: OrbitControls });
export default function Experience()
{
    const cubeRef = useRef();
    const groupRef = useRef();
    const { camera, gl } = useThree();
  console.log("camera", camera, " gl", gl);
    
   
    useFrame((state, delta) => {
        // console.log(delta);
        //we prefer to use delta because it allow same rotation speed on every device
        // groupRef.current.rotation.y += delta 
        cubeRef.current.rotation.y += delta 
    })



    return <>
    <orbitControls args={[camera, gl.domElement]} />
        <group ref={ groupRef }>
            <mesh position-x={ -2.5 }>
                {/* <sphereGeometry args={ [ 1.5, 32, 32 ] }/>  */}
                {/* <meshBasicMaterial args={ [ { color:'blue', wireframe: true} ] }/> */}
                {/* <meshBasicMaterial color="mediumpurple" wireframe={true}/> */}

                <sphereGeometry args={ [1.2, 32 ,32 ] } />
                <meshBasicMaterial color="orange"/>
            
            </mesh>
            <mesh ref={ cubeRef } position-x={ 2.2 } scale={1.8} >
                <boxGeometry />
                <meshBasicMaterial color="mediumpurple"/>
            </mesh>
        </group>
            <mesh scale={ 10 } rotation={[-1.2,0, 0]} position={[0, -1.5, 0]}>
                <planeGeometry rotateX={ 10 } />
                <meshBasicMaterial color="greenyellow"/>
            </mesh>
    </>
}