3D Website with React Three Fiber
Installation
To install the necessary packages, use the following command:

bash
Copy code
npm install three@0.166 @react-three/fiber@8.16
Explanation
The @ symbol in three@0.166 indicates a specific version (0.166) of the three package.
The @react-three/fiber@8.16 package:
The @ at the beginning means that it's part of a scoped package, indicating a larger system or organization, in this case, react-three.
/fiber is the specific module being retrieved from the react-three scope.
Working with Geometries and Materials
For adding parameters to shapes, we rely on the Three.js documentation. For example, the first three parameters of SphereGeometry are:

radius
widthSegments
heightSegments
jsx
Copy code
<sphereGeometry args={[1.5, 32, 32]} /> // radius, width, height
<meshBasicMaterial />
Important Note
Be careful not to update or animate geometry values too frequently, as each change results in the entire geometry being rebuilt.

Working with Materials
Instead of making the code messy with multiple arguments:

jsx
Copy code
<meshBasicMaterial args={[{ color: 'blue', wireframe: true }]} />
You should use a cleaner approach:

jsx
Copy code
<meshBasicMaterial color="mediumpurple" wireframe={true} />
Scaling Objects
Previously, we would scale a mesh like this:

jsx
Copy code
mesh.scale.set(3, 2, 1);
Now, we can do it like this in React Three Fiber:

jsx
Copy code
<mesh scale={[1.5, 1.5, 1.5]} />
If we have repeating values, we can simplify it to:

jsx
Copy code
<mesh scale={1.5} />
Changing Position
To set a specific position and scale:

jsx
Copy code
<mesh position={[-2, 0, 0]} scale={1.5} />
To change a specific position axis:

jsx
Copy code
<mesh position-x={2} scale={1.5} />
Using useFrame from @react-three/fiber
The useFrame hook from @react-three/fiber allows you to execute code on every frame. This is useful for creating animations and updating objects in your scene.

Example
jsx
Copy code
import { useFrame } from '@react-three/fiber';

const RotatingMesh = () => {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};
Using OrbitControls
Previously, OrbitControls wasn't part of the default Three.js classes and needed to be imported separately. With React Three Fiber, you can use it directly by importing:

jsx
Copy code
import { OrbitControls } from '@react-three/drei';
And then use it in your component:

jsx
Copy code
<OrbitControls />
Additional Information
Refer to the Three.js documentation for detailed explanations of the parameters and methods used.