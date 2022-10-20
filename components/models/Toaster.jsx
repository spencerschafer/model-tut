import { useGLTF } from "@react-three/drei";

export default function Toaster(props) {
    const { nodes, materials } = useGLTF("/toaster.glb");
    return (
        <group {...props} dispose={null}>
            <group rotation={[0, -Math.PI / 2, 0]}>
                <group position={[0, 11.73, 10.08]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.button_002_mesh.geometry}
                        material={materials.button}
                        position={[0, 0, 1.34]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.scroll_button_mesh.geometry}
                        material={materials.scroll_button}
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.side_cover_mesh.geometry}
                    material={materials.side_cover}
                    position={[0, 9.66, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.front_cover_mesh.geometry}
                    material={materials.front_cover}
                    position={[0, 1.66, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.front_cover_scroll_mesh.geometry}
                    material={materials.front_cover_scroll}
                    position={[0, 9.66, 9.9]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.rotate_button_mesh.geometry}
                    material={materials.rotate_button}
                    position={[0, 3.69, 10.35]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.button_001_mesh.geometry}
                    material={materials.button}
                    position={[-3.79, 9.12, 10.87]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.base_plate_mesh.geometry}
                    material={materials.base_plate}
                    position={[0, 1.36, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.base_mesh.geometry}
                    material={materials.base}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.heater_side_mesh.geometry}
                    material={materials.heater_cover}
                    position={[0, 1.66, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.heater_cover_mesh.geometry}
                    material={materials.heater_cover}
                    position={[0, 6.44, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.frame_vertical_001_mesh.geometry}
                    material={materials.frame}
                    position={[-2.15, 11.98, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.heater_001_mesh.geometry}
                    material={materials.heater}
                    position={[-2.15, 12.11, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.frame_horizone_001_mesh.geometry}
                    material={materials.frame}
                    position={[-2.17, 11.85, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.frame_vertical_002_mesh.geometry}
                    material={materials.frame}
                    position={[2.15, 11.98, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.heater_002_mesh.geometry}
                    material={materials.heater}
                    position={[2.15, 17.32, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.frame_horizone_002_mesh.geometry}
                    material={materials.frame}
                    position={[2.14, 11.85, 0]}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/toaster.glb");
