import {Canvas} from '@react-three/fiber'
import {OrbitControls, Stage} from '@react-three/drei'
import Skates from "../components/models/Skates";
import Table from "../components/models/BedsideTable";
import Hoodie from "../components/models/Hoodie";
import Shoe from "../components/models/Shoe";
import Toaster from "../components/models/Toaster";
import {useRef} from "react";
import {useRouter} from "next/router";

export default function App() {
    const ref = useRef()
    const router = useRouter();
    const {slug} = router.query;

    const getModel = (slug) => {
        if (slug === 'skates') {
            return <Skates/>
        } else if (slug === 'table') {
            return <Table/>
        } else if (slug === 'hoodie') {
            return <Hoodie/>
        } else if (slug === 'shoe') {
            return <Shoe/>
        } else if (slug === 'toaster') {
            return <Toaster/>
        } else {
            return <Skates/>
        }
    }

    return (
        <Canvas shadows dpr={[1, 2]} camera={{fov: 100}}>
            <ambientLight intensity={0.25}/>
            <Stage controls={ref} intensity={0.5} environment="city">
                {getModel(slug)}
                <OrbitControls ref={ref} autoRotate/>
            </Stage>
        </Canvas>
    )
}
