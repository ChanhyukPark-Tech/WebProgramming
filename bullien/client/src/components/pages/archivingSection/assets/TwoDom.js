/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef, } from "react";
import { useGLTF} from "@react-three/drei";
import './obj.css'


const Model = (props) => {
    const group = useRef()
    const { nodes } = useGLTF(`/twowormhall.glb`)
    return (
        <group scale={[3, 3, 3]} rotation={[0, Math.PI, 0]} ref={group} {...props} dispose={null}>
            <mesh
                geometry={nodes.environment.geometry}
                material={nodes.environment.material}
                position={[2.4, -1.52, 66.39]}
                rotation={[-2.34, -0.3, -2.4]}
                scale={[-615, -615, -615.01]}
            />
            <mesh
                geometry={nodes.environment001.geometry}
                material={nodes.environment001.material}
                position={[0, 0, 532.12]}
                rotation={[-0.27, -0.68, -1.85]}
                scale={[-15.07, -15.07, -15.07]}
            />
        </group>
    )
}
export default Model
useGLTF.preload('/twowormhall.glb')
