// import {  useThree, extend, useFrame } from "@react-three/fiber";
// import { useRef } from "react";
// import CustomObject from "./CustomObject.jsx";
// // import { OrbitControls  } from "three/examples/jsm/controls/OrbitControls.js"; //OrbitControlls not working

// // extend({ OrbitControls }); not working
// export default function Experience()
// {
//     const cubeRef = useRef();
//     const groupRef = useRef();
//     const { camera, gl } = useThree();
//     // console.log("camera", camera, " gl", gl);
    
   
//     useFrame((state, delta) => {
//         // console.log(delta);
//         //we prefer to use delta because it allow same rotation speed on every device
//         // groupRef.current.rotation.y += delta 
//         cubeRef.current.rotation.y += delta 
//     })



//     return <>
//     {/* <OrbitControls args={[camera, gl.domElement]} /> */}

//     <directionalLight position={[ 1, 2, 3]} intensity={ 1.5 }/>
//     <ambientLight intensity={ 1.5 }/>

//         <group ref={ groupRef }>
//             <mesh position-x={ -2.5 }>
//                 {/* <sphereGeometry args={ [ 1.5, 32, 32 ] }/>  */}
//                 {/* <meshBasicMaterial args={ [ { color:'blue', wireframe: true} ] }/> */}
//                 {/* <meshBasicMaterial color="mediumpurple" wireframe={true}/> */}

//                 <sphereGeometry args={ [1.2, 32 ,32 ] } />
//                 <meshStandardMaterial color="orange"/>
            
//             </mesh>
//             <mesh ref={ cubeRef } position-x={ 2.2 } scale={1.8} >
//                 <boxGeometry />
//                 <meshStandardMaterial color="mediumpurple"/>
//             </mesh>
//         </group>
//             <mesh scale={ 10 } rotation={[-1.2,0, 0]} position={[0, -1.5, 0]}>
//                 <planeGeometry rotateX={ 10 } />
//                 <meshStandardMaterial color="greenyellow"/>
//             </mesh>
//         <CustomObject/>
//     </>
// }

import {  useThree, extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import CustomObject from "./CustomObject.jsx";
import * as THREE from "three";
// import { OrbitControls  } from "three/examples/jsm/controls/OrbitControls.js"; //OrbitControlls not working

// extend({ OrbitControls }); not working
export default function Experience()
{
    const cubeRef = useRef();
    // const groupRef = useRef();
    const { camera, gl } = useThree();
    // console.log("camera", camera, " gl", gl);
    
   
    useFrame((state, delta) => {
        // console.log(state.clock.elapsedTime);
        // console.log(state.camera);

        // const angle = state.clock.elapsedTime;
        // state.camera.position.x = Math.sin(angle) * 8
        // state.camera.position.z = Math.cos(angle) * 8
        // state.camera.lookAt(0, 0, 0)

        //we prefer to use delta because it allow same rotation speed on every device
        // groupRef.current.rotation.y += delta 
        cubeRef.current.rotation.y += delta 
    })



    return <>
    {/* <OrbitControls args={[camera, gl.domElement]} /> */}

    <directionalLight position={[ 1, 2, 3]} intensity={ 1.5 }/>
    <ambientLight intensity={ 1.5 }/>

        {/* <group ref={ groupRef }> */}
        <CustomObject/>
            <mesh position-x={ -2.5 }>
                {/* <sphereGeometry args={ [ 1.5, 32, 32 ] }/>  */}
                {/* <meshBasicMaterial args={ [ { color:'blue', wireframe: true} ] }/> */}
                {/* <meshBasicMaterial color="mediumpurple" wireframe={true}/> */}

                <sphereGeometry args={ [1.2, 32 ,32 ] } />
                <meshStandardMaterial color="orange"/>
            
            </mesh>
            <mesh ref={cubeRef} position-x={ 2.2 } scale={1.8} >
                <boxGeometry />
                <meshStandardMaterial color="mediumpurple"/>
            </mesh>
        {/* </group> */}
            <mesh scale={ 10 } rotation={[-Math.PI * 0.5, 0, 0]} position={[0, -1.5, 0]} >
                <planeGeometry rotateX={ 10 } />
                <meshStandardMaterial color="greenyellow" side={THREE.DoubleSide}/>
            </mesh>
        
    </>
}