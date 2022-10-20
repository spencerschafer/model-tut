import { useGLTF } from "@react-three/drei";

export default function Skates(props) {
    const { nodes, materials } = useGLTF("/skates.glb");
    return (
        <group {...props} dispose={null}>
            <group position={[-8.01, 0.35, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.axel_001_mesh.geometry}
                    material={materials.axel}
                    position={[-0.09, 3.11, 6.99]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.axel_002_mesh.geometry}
                    material={materials.axel}
                    position={[-0.09, 3.11, -10.9]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bearing_001_mesh.geometry}
                    material={materials.axel}
                    position={[3.94, 3.11, 6.99]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bearing_002_mesh.geometry}
                    material={materials.axel}
                    position={[-4.13, 3.11, 6.99]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bearing_003_mesh.geometry}
                    material={materials.axel}
                    position={[3.94, 3.11, -10.9]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bearing_004_mesh.geometry}
                    material={materials.axel}
                    position={[-4.13, 3.11, -10.9]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bolt_001_mesh.geometry}
                    material={materials.truck}
                    position={[-0.09, 5.69, -11.73]}
                    rotation={[-0.37, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bolt_002_mesh.geometry}
                    material={materials.truck}
                    position={[-0.09, 5.69, 7.83]}
                    rotation={[0.36, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bolt_003_mesh.geometry}
                    material={materials.truck}
                    position={[-0.09, 6.55, 11.27]}
                    rotation={[-0.72, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bracket_001_mesh.geometry}
                    material={materials.truck}
                    position={[-0.09, 3.07, 5.61]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bracket_002_mesh.geometry}
                    material={materials.truck}
                    position={[-0.09, 3.07, -9.51]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bush_001_mesh.geometry}
                    material={materials.bush}
                    position={[-0.09, 3.15, 4.42]}
                    rotation={[-0.44, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bush_002_mesh.geometry}
                    material={materials.bush}
                    position={[-0.09, 3.15, -8.33]}
                    rotation={[0.44, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.eyelet_001_mesh.geometry}
                    material={materials.eyelet}
                    position={[-3.29, 13.25, 9.86]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.eyelet_002_mesh.geometry}
                    material={materials.eyelet}
                    position={[-3.9, 13.61, 7.93]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.eyelet_003_mesh.geometry}
                    material={materials.eyelet}
                    position={[-4.12, 14.18, 5.95]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.eyelet_004_mesh.geometry}
                    material={materials.eyelet}
                    position={[-4.14, 15.07, 3.63]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.eyelet_005_mesh.geometry}
                    material={materials.eyelet}
                    position={[-4.05, 16.05, 1.41]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.eyelet_006_mesh.geometry}
                    material={materials.eyelet}
                    position={[-3.73, 17.42, -0.74]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.eyelet_007_mesh.geometry}
                    material={materials.eyelet}
                    position={[-3.53, 18.87, -2.66]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.eyelet_008_mesh.geometry}
                    material={materials.eyelet}
                    position={[3.15, 13.18, 9.73]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.eyelet_009_mesh.geometry}
                    material={materials.eyelet}
                    position={[3.69, 13.53, 7.71]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.eyelet_010_mesh.geometry}
                    material={materials.eyelet}
                    position={[3.89, 14.1, 5.47]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.eyelet_011_mesh.geometry}
                    material={materials.eyelet}
                    position={[3.83, 14.98, 3.42]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.eyelet_012_mesh.geometry}
                    material={materials.eyelet}
                    position={[3.63, 16.1, 1.44]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.eyelet_013_mesh.geometry}
                    material={materials.eyelet}
                    position={[3.43, 17.36, -0.64]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.eyelet_014_mesh.geometry}
                    material={materials.eyelet}
                    position={[3.3, 18.82, -2.61]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.frame_001_mesh.geometry}
                    material={materials.truck}
                    position={[-0.09, 5.3, 3.6]}
                    rotation={[-0.44, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.frame_002_mesh.geometry}
                    material={materials.truck}
                    position={[-0.09, 5.3, -7.5]}
                    rotation={[0.44, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.hook_001_mesh.geometry}
                    material={materials.hook}
                    position={[-3.55, 20.98, -4.12]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.hook_002_mesh.geometry}
                    material={materials.hook}
                    position={[-3.58, 23.33, -5.19]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.hook_003_mesh.geometry}
                    material={materials.hook}
                    position={[-3.61, 26.09, -5.57]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.hook_004_mesh.geometry}
                    material={materials.hook}
                    position={[3.43, 20.8, -3.99]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.hook_005_mesh.geometry}
                    material={materials.hook}
                    position={[3.48, 23.3, -4.87]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.hook_006_mesh.geometry}
                    material={materials.hook}
                    position={[3.61, 26.12, -5.13]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.insole_001_mesh.geometry}
                    material={materials.upper}
                    position={[-0.62, 10.92, -0.73]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.loop_001_mesh.geometry}
                    material={materials.upper}
                    position={[-0.16, 19.54, -14.65]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.nut_001_mesh.geometry}
                    material={materials.axel}
                    position={[5.5, 3.11, 6.99]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.nut_002_mesh.geometry}
                    material={materials.truck}
                    position={[-0.09, 5.93, 3.14]}
                    rotation={[-0.44, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.nut_003_mesh.geometry}
                    material={materials.truck}
                    position={[-0.09, 5.92, -7.06]}
                    rotation={[0.44, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.nut_004_mesh.geometry}
                    material={materials.axel}
                    position={[-5.69, 3.11, 6.99]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.nut_005_mesh.geometry}
                    material={materials.axel}
                    position={[5.5, 3.11, -10.9]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.nut_006_mesh.geometry}
                    material={materials.axel}
                    position={[-5.69, 3.11, -10.9]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.shoelace_001_mesh.geometry}
                    material={materials.shoelace}
                    position={[-0.1, 20.18, 1.87]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.sole_001_mesh.geometry}
                    material={materials.sole}
                    position={[-0.62, 10.21, -0.8]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.spacer_001_mesh.geometry}
                    material={materials.truck}
                    position={[-0.09, 7.37, 10.55]}
                    rotation={[-0.72, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.stopper_001_mesh.geometry}
                    material={materials.stopper}
                    position={[-0.09, 4.64, 12.99]}
                    rotation={[-0.72, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tongue_001_mesh.geometry}
                    material={materials.upper}
                    position={[-0.48, 20.36, 2.7]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.truck_001_mesh.geometry}
                    material={materials.truck}
                    position={[-0.09, 6.83, -0.39]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.upper_001_mesh.geometry}
                    material={materials.upper}
                    position={[-3.23, 18.48, -0.67]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.upper_002_mesh.geometry}
                    material={materials.upper}
                    position={[2.51, 18.51, -0.66]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.upper_003_mesh.geometry}
                    material={materials.upper}
                    position={[-0.6, 18.95, -0.64]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.upper_004_mesh.geometry}
                    material={materials.upper}
                    position={[-0.37, 20.18, 2.84]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.wheel_001_mesh.geometry}
                    material={materials.wheel}
                    position={[3.94, 3.11, 6.99]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.wheel_002_mesh.geometry}
                    material={materials.wheel}
                    position={[-4.13, 3.11, 6.99]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.wheel_003_mesh.geometry}
                    material={materials.wheel}
                    position={[3.94, 3.11, -10.9]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.wheel_004_mesh.geometry}
                    material={materials.wheel}
                    position={[-4.13, 3.11, -10.9]}
                />
            </group>
            <group position={[8.22, 0.35, 0.03]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.axel_003_mesh.geometry}
                    material={materials.axel}
                    position={[-0.12, 3.11, 6.95]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.axel_004_mesh.geometry}
                    material={materials.axel}
                    position={[-0.12, 3.11, -10.93]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bearing_005_mesh.geometry}
                    material={materials.axel}
                    position={[-4.16, 3.11, 6.95]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bearing_006_mesh.geometry}
                    material={materials.axel}
                    position={[3.91, 3.11, 6.95]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bearing_007_mesh.geometry}
                    material={materials.axel}
                    position={[-4.16, 3.11, -10.93]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bearing_008_mesh.geometry}
                    material={materials.axel}
                    position={[3.91, 3.11, -10.93]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bolt_004_mesh.geometry}
                    material={materials.truck}
                    position={[-0.12, 5.69, -11.77]}
                    rotation={[-0.37, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bolt_005_mesh.geometry}
                    material={materials.truck}
                    position={[-0.12, 5.69, 7.79]}
                    rotation={[0.36, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bolt_006_mesh.geometry}
                    material={materials.truck}
                    position={[-0.12, 6.55, 11.23]}
                    rotation={[-0.72, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bracket_003_mesh.geometry}
                    material={materials.truck}
                    position={[-0.12, 3.07, 5.57]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bracket_004_mesh.geometry}
                    material={materials.truck}
                    position={[-0.12, 3.07, -9.55]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bush_003_mesh.geometry}
                    material={materials.bush}
                    position={[-0.12, 3.15, 4.38]}
                    rotation={[-0.44, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bush_004_mesh.geometry}
                    material={materials.bush}
                    position={[-0.12, 3.15, -8.36]}
                    rotation={[0.44, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.eyelet_015_mesh.geometry}
                    material={materials.eyelet}
                    position={[3.07, 13.25, 9.82]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.eyelet_016_mesh.geometry}
                    material={materials.eyelet}
                    position={[3.69, 13.61, 7.9]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.eyelet_017_mesh.geometry}
                    material={materials.eyelet}
                    position={[3.91, 14.18, 5.91]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.eyelet_018_mesh.geometry}
                    material={materials.eyelet}
                    position={[3.93, 15.07, 3.6]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.eyelet_019_mesh.geometry}
                    material={materials.eyelet}
                    position={[3.84, 16.05, 1.38]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.eyelet_020_mesh.geometry}
                    material={materials.eyelet}
                    position={[3.52, 17.42, -0.77]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.eyelet_021_mesh.geometry}
                    material={materials.eyelet}
                    position={[3.32, 18.87, -2.69]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.eyelet_022_mesh.geometry}
                    material={materials.eyelet}
                    position={[-3.37, 13.18, 9.69]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.eyelet_023_mesh.geometry}
                    material={materials.eyelet}
                    position={[-3.91, 13.53, 7.67]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.eyelet_024_mesh.geometry}
                    material={materials.eyelet}
                    position={[-4.1, 14.1, 5.43]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.eyelet_025_mesh.geometry}
                    material={materials.eyelet}
                    position={[-4.04, 14.98, 3.39]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.eyelet_026_mesh.geometry}
                    material={materials.eyelet}
                    position={[-3.84, 16.1, 1.4]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.eyelet_027_mesh.geometry}
                    material={materials.eyelet}
                    position={[-3.64, 17.36, -0.68]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.eyelet_028_mesh.geometry}
                    material={materials.eyelet}
                    position={[-3.51, 18.82, -2.65]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.frame_003_mesh.geometry}
                    material={materials.truck}
                    position={[-0.12, 5.3, 3.56]}
                    rotation={[-0.44, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.frame_004_mesh.geometry}
                    material={materials.truck}
                    position={[-0.12, 5.3, -7.54]}
                    rotation={[0.44, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.hook_007_mesh.geometry}
                    material={materials.hook}
                    position={[3.33, 20.98, -4.15]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.hook_008_mesh.geometry}
                    material={materials.hook}
                    position={[3.36, 23.33, -5.23]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.hook_009_mesh.geometry}
                    material={materials.hook}
                    position={[3.4, 26.09, -5.6]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.hook_010_mesh.geometry}
                    material={materials.hook}
                    position={[-3.64, 20.8, -4.02]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.hook_011_mesh.geometry}
                    material={materials.hook}
                    position={[-3.69, 23.3, -4.91]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.hook_012_mesh.geometry}
                    material={materials.hook}
                    position={[-3.82, 26.12, -5.17]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.insole_002_mesh.geometry}
                    material={materials.upper}
                    position={[0.4, 10.92, -0.76]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.loop_002_mesh.geometry}
                    material={materials.upper}
                    position={[-0.05, 19.54, -14.68]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.nut_007_mesh.geometry}
                    material={materials.axel}
                    position={[-5.72, 3.11, 6.95]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.nut_008_mesh.geometry}
                    material={materials.truck}
                    position={[-0.12, 5.93, 3.1]}
                    rotation={[-0.44, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.nut_009_mesh.geometry}
                    material={materials.truck}
                    position={[-0.12, 5.92, -7.09]}
                    rotation={[0.44, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.nut_010_mesh.geometry}
                    material={materials.axel}
                    position={[5.47, 3.11, 6.95]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.nut_011_mesh.geometry}
                    material={materials.axel}
                    position={[-5.72, 3.11, -10.93]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.nut_012_mesh.geometry}
                    material={materials.axel}
                    position={[5.47, 3.11, -10.93]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.shoelace_002_mesh.geometry}
                    material={materials.shoelace}
                    position={[-0.12, 20.18, 1.83]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.sole_002_mesh.geometry}
                    material={materials.sole}
                    position={[0.4, 10.21, -0.83]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.spacer_002_mesh.geometry}
                    material={materials.truck}
                    position={[-0.12, 7.37, 10.51]}
                    rotation={[-0.72, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.stopper_002_mesh.geometry}
                    material={materials.stopper}
                    position={[-0.12, 4.64, 12.96]}
                    rotation={[-0.72, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tongue_002_mesh.geometry}
                    material={materials.upper}
                    position={[0.26, 20.36, 2.67]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.truck_002_mesh.geometry}
                    material={materials.truck}
                    position={[-0.12, 6.83, -0.42]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.upper_005_mesh.geometry}
                    material={materials.upper}
                    position={[3.02, 18.48, -0.7]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.upper_006_mesh.geometry}
                    material={materials.upper}
                    position={[-2.73, 18.51, -0.7]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.upper_007_mesh.geometry}
                    material={materials.upper}
                    position={[0.39, 18.95, -0.68]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.upper_008_mesh.geometry}
                    material={materials.upper}
                    position={[0.16, 20.18, 2.81]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.wheel_005_mesh.geometry}
                    material={materials.wheel}
                    position={[-4.16, 3.11, 6.95]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.wheel_006_mesh.geometry}
                    material={materials.wheel}
                    position={[3.91, 3.11, 6.95]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.wheel_007_mesh.geometry}
                    material={materials.wheel}
                    position={[-4.16, 3.11, -10.93]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.wheel_008_mesh.geometry}
                    material={materials.wheel}
                    position={[3.91, 3.11, -10.93]}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/skates.glb");
