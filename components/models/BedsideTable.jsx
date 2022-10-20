import { useGLTF } from "@react-three/drei";

export default function BedsideTable(props) {
    const { nodes, materials } = useGLTF("/bedside_table.glb");
    return (
        <group {...props} dispose={null}>
            <group position={[0, 49.19, 20.08]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.drawer_005_mesh.geometry}
                    material={materials.table}
                    position={[0, -4.88, -18.68]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.drawer_001_mesh.geometry}
                    material={materials.table}
                    position={[-0.02, -0.12, -37.06]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.drawer_002_mesh.geometry}
                    material={materials.table}
                    position={[19.37, -0.12, -18.81]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.drawer_003_mesh.geometry}
                    material={materials.table}
                    position={[-19.4, -0.12, -18.81]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.handle_001_mesh.geometry}
                    material={materials.handle}
                    position={[0, 1.37, 0.59]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.rail_002_mesh.geometry}
                    material={materials.rail}
                    position={[-20.07, -1.17, -15.35]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.rail_001_mesh.geometry}
                    material={materials.rail}
                    position={[20.04, -1.17, -15.35]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.drawer_004_mesh.geometry}
                    material={materials.table}
                    position={[0, 0, -0.75]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.handle_002_mesh.geometry}
                    material={materials.handle}
                />
            </group>
            <group position={[0, 36.16, 20.01]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.drawer_006_mesh.geometry}
                    material={materials.table}
                    position={[0, 0, -0.69]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.handle_003_mesh.geometry}
                    material={materials.handle}
                    position={[0, 1.37, 0.65]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.drawer_007_mesh1.geometry}
                    material={materials.table}
                    position={[19.37, -0.12, -18.75]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.drawer_008_mesh1.geometry}
                    material={materials.table}
                    position={[-19.4, -0.12, -18.75]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.rail_004_mesh.geometry}
                    material={materials.rail}
                    position={[-20.07, -1.17, -15.29]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.drawer_009_mesh.geometry}
                    material={materials.table}
                    position={[0, -4.88, -18.61]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.drawer_010_mesh.geometry}
                    material={materials.table}
                    position={[-0.02, -0.12, -37]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.rail_003_mesh.geometry}
                    material={materials.rail}
                    position={[20.04, -1.17, -15.29]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.handle_004_mesh.geometry}
                    material={materials.handle}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.rail_007_mesh.geometry}
                material={materials.rail}
                position={[-20.22, 48.03, 3.48]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.table_012_mesh.geometry}
                material={materials.table}
                position={[-0.01, 12.89, 0.32]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.table_011_mesh.geometry}
                material={materials.table}
                position={[-0.01, 28.55, 1.62]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.table_010_mesh.geometry}
                material={materials.table}
                position={[0, 10.68, 19.32]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.table_009_mesh.geometry}
                material={materials.table}
                position={[0, 32.85, -18.68]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.leg_001_mesh.geometry}
                material={materials.table}
                position={[-22.26, 29.01, 18.41]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.leg_004_mesh.geometry}
                material={materials.table}
                position={[22.26, 29.01, -18.66]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.leg_002_mesh.geometry}
                material={materials.table}
                position={[22.26, 29.01, 18.41]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.leg_003_mesh.geometry}
                material={materials.table}
                position={[-22.26, 29.01, -18.66]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.table_008_mesh.geometry}
                material={materials.table}
                position={[0, 58.97, -0.12]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.table_007_mesh.geometry}
                material={materials.table}
                position={[0, 55.8, -19.9]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.table_006_mesh.geometry}
                material={materials.table}
                position={[21.35, 32.89, -0.09]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.rail_006_mesh.geometry}
                material={materials.rail}
                position={[20.22, 35, 3.48]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.table_005_mesh.geometry}
                material={materials.table}
                position={[22.68, 55.8, -0.14]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.table_004_mesh.geometry}
                material={materials.table}
                position={[-22.68, 55.8, -0.14]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.table_003_mesh.geometry}
                material={materials.table}
                position={[-0.03, 42.62, 17.99]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.table_002_mesh.geometry}
                material={materials.table}
                position={[-0.03, 56.83, 18.41]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.rail_005_mesh.geometry}
                material={materials.rail}
                position={[20.22, 48.03, 3.48]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.table_001_mesh.geometry}
                material={materials.table}
                position={[-21.35, 32.89, -0.09]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.rail_008_mesh.geometry}
                material={materials.rail}
                position={[-20.22, 35, 3.48]}
            />
        </group>
    );
}

useGLTF.preload("/bedside_table.glb");
