import { useGLTF } from "@react-three/drei";

export default function Shoe(props) {
    const { nodes, materials } = useGLTF("/shoe.glb");
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.back_mesh.geometry}
                material={materials.body}
                position={[0.02, 3.74, -13.8]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.pull_loop_strip_mesh.geometry}
                material={materials.body}
                position={[0.01, 3.71, -13.9]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.back_pull_strap_mesh.geometry}
                material={materials.body}
                position={[-0.13, 18.95, -11.28]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.elastic_001_mesh.geometry}
                material={materials.elastic}
                position={[3.79, 7.73, -3.42]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.elastic_002_mesh.geometry}
                material={materials.elastic}
                position={[-3.4, 7.87, -3.61]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.front_mesh.geometry}
                material={materials.body}
                position={[0.95, 3.15, 17.92]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.welt_mesh.geometry}
                material={materials.welt}
                position={[0.25, 2.52, 2.11]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.front_pull_strap_mesh.geometry}
                material={materials.body}
                position={[0.19, 18.97, 0.07]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.sole_mesh.geometry}
                material={materials.sole}
                position={[0, -0.05, -6.67]}
            />
        </group>
    );
}

useGLTF.preload("/shoe.glb");
