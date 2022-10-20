import { useGLTF } from "@react-three/drei";

export default function Hoodie(props) {
    const { nodes, materials } = useGLTF("/hoodie.glb");
    return (
        <group {...props} dispose={null}>
            <group position={[80, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.wrist_left_mesh.geometry}
                    material={materials.hoodie}
                    position={[58.16, 1.47, 9.57]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.back_mesh.geometry}
                    material={materials.hoodie}
                    position={[0.57, 1.81, -2.93]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.wrist_right_mesh.geometry}
                    material={materials.hoodie}
                    position={[-50.15, 1.87, 15.26]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.sleeve_right_mesh.geometry}
                    material={materials.hoodie}
                    position={[-31.99, 3.22, -5.45]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.sleeve_left_mesh.geometry}
                    material={materials.hoodie}
                    position={[37.29, 2.75, -7.95]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bottom_mesh.geometry}
                    material={materials.hoodie}
                    position={[0.64, 1.81, 27.39]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pocket_mesh.geometry}
                    material={materials.hoodie}
                    position={[0.37, 1.83, 13.15]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.chest_mesh.geometry}
                    material={materials.hoodie}
                    position={[0.63, 3.08, -2.95]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.lace_right_mesh.geometry}
                    material={materials.laces}
                    position={[-0.22, 3.94, -26.73]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.lace_cap_right_mesh.geometry}
                    material={materials.lace_caps}
                    position={[-1.78, 2.24, -11.57]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.lace_left_mesh.geometry}
                    material={materials.laces}
                    position={[2.31, 4.21, -26.48]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.lace_cap_left_mesh.geometry}
                    material={materials.lace_caps}
                    position={[3.46, 2.31, -12.81]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.lace_ring_right_mesh.geometry}
                    material={materials.lace_rings}
                    position={[-0.19, 4.27, -26.5]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.lace_ring_left_mesh.geometry}
                    material={materials.lace_rings}
                    position={[2.2, 4.42, -26.09]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.hood_pattern_002_mesh.geometry}
                    material={materials.hoodie}
                    position={[1.09, 6.52, -39]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.hood_pattern_001_mesh.geometry}
                    material={materials.hoodie}
                    position={[-2.34, 6.51, -39.14]}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.sleeve_right_mesh_node.geometry}
                material={materials.hoodie}
                position={[-8.9, 4.79, 2.83]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.wrist_right_mesh_node.geometry}
                material={materials.hoodie}
                position={[-8.99, 3.02, -0.08]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.sleeve_left_mesh_node.geometry}
                material={materials.hoodie}
                position={[8.96, 5.51, 2.33]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.wrist_left_mesh_node.geometry}
                material={materials.hoodie}
                position={[9.54, 2.91, 1.16]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.pocket_mesh_node.geometry}
                material={materials.hoodie}
                position={[-0.4, 1.27, 5.63]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.chest_mesh_node.geometry}
                material={materials.hoodie}
                position={[0.03, 4.89, 1.95]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.back_mesh_node.geometry}
                material={materials.hoodie}
                position={[-0.21, 4.79, 1.4]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.bottom_mesh_node.geometry}
                material={materials.hoodie}
                position={[-0.3, 1.89, -10.03]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.hood_pattern_003_mesh.geometry}
                material={materials.hoodie}
                position={[-3.3, 5.67, -5.85]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.hood_pattern_004_mesh.geometry}
                material={materials.hoodie}
                position={[-0.26, 5.7, -5.93]}
            />
            <group position={[-59.14, 64.09, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.sleeve_wrist_left_mesh.geometry}
                    material={materials.hoodie}
                    position={[28.43, -58.26, 2.43]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.sleeve_wrist_right_mesh.geometry}
                    material={materials.hoodie}
                    position={[-30.34, -57.49, 2.27]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.back_mesh_node_0.geometry}
                    material={materials.hoodie}
                    position={[0.19, -29.34, -2.62]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.chest_mesh_node_0.geometry}
                    material={materials.hoodie}
                    position={[0.24, -29.39, 2.07]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pocket_mesh_node_0.geometry}
                    material={materials.hoodie}
                    position={[-0.37, -46.6, 2.38]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bottom_mesh_node_0.geometry}
                    material={materials.hoodie}
                    position={[0.34, -60.27, -0.2]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.sleeve_left_mesh_node_0.geometry}
                    material={materials.hoodie}
                    position={[22.85, -30.07, -0.08]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.sleeve_right_mesh_node_0.geometry}
                    material={materials.hoodie}
                    position={[-23.59, -29.67, 0.22]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.lace_ring_right_mesh_node.geometry}
                    material={materials.lace_rings}
                    position={[-1.33, -4.11, 1.7]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.lace_right_mesh_node.geometry}
                    material={materials.laces}
                    position={[-1.33, -3.85, 1.3]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.lace_cap_right_mesh_node.geometry}
                    material={materials.lace_caps}
                    position={[-2, -20.34, 2.52]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.lace_ring_left_mesh_node.geometry}
                    material={materials.lace_rings}
                    position={[1.6, -4.56, 1.9]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.lace_left_mesh_node.geometry}
                    material={materials.laces}
                    position={[1.77, -4.36, 1.93]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.lace_cap_left_mesh_node.geometry}
                    material={materials.lace_caps}
                    position={[1.05, -19.7, 2.69]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.hood_pattern_006_mesh.geometry}
                    material={materials.hoodie}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.hood_pattern_005_mesh.geometry}
                    material={materials.hoodie}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/hoodie_set.glb");
