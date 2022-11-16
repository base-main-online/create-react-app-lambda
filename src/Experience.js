import { OrbitControls, MeshReflectorMaterial } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import {  Bloom,  EffectComposer } from '@react-three/postprocessing'
import { Suspense, useEffect, useRef } from 'react'
import gsap from'gsap'
import Model from './Model.js'
import {button, useControls } from 'leva'
import * as THREE from 'three'



export default function Experience()
{

    const {} = useControls({
        clickMe:button(
            
            ()=>{
                // circleRef.current.material.color = new THREE.Color('black')  
                document.getElementById("root").style.backgroundColor = "white"
              

                cubeRef.current.visible=false
                greenRef.current.visible=false
                blueRef.current.visible=false
                cubeRef2.current.visible=false
                greenRef2.current.visible=false
            }
                    )
                    
    })  

    
    const {} = useControls({
        click2Me:button(
            ()=>{
                
                
                document.getElementById("root").style.backgroundColor = "black"

                // circleRef.current.material.color = new THREE.Color('black') 
                cubeRef.current.visible=true
                greenRef.current.visible=true
                blueRef.current.visible=true
                cubeRef2.current.visible=true
                greenRef2.current.visible=true
        
             
            }
                    )
    }) 

    
    const cubeRef = useRef(null)
    const greenRef = useRef(null)
    const blueRef = useRef(null)
    const cubeRef2 = useRef(null)
    const greenRef2 = useRef(null)
    const circleRef = useRef(null)
    
   

    useEffect (()=>{
        if(!!cubeRef.current){
            gsap.to(cubeRef.current.position,{
                ease:"none",
                duration:0.5,
                delay:0.00125,
                repeat:-1,
               x:-0.15
            })
        }

    },[cubeRef.current])

    useEffect (()=>{
        if(!!greenRef.current){
            gsap.to(greenRef.current.position,{
                ease:"none",
                duration:0.025,
                delay:0.1,
                repeat:-1,
                x:-0.15,
                y:0.17
             
            })
        }

    },[greenRef.current])

    useEffect (()=>{
        if(!!blueRef.current){
            gsap.to(blueRef.current.position,{
                ease:"none",
                duration:0.5,
                delay:0.05,
                repeat:-1,
                x:-0.15,
                y:0.17
             
            })
        }

    },[blueRef.current])

    useEffect (()=>{
        if(!!cubeRef2.current){
            gsap.to(cubeRef2.current.position,{
                ease:"none",
                duration:0.5,
                delay:0.1,
                repeat:-1,
                x:-0.15,
                y:0.17
            })
        }

    },[cubeRef2.current])

    useEffect (()=>{
        if(!!greenRef2.current){
            gsap.to(greenRef2.current.position,{
                ease:"none",
                duration:0.5,
                delay:0.2,
                repeat:-1,
                x:-0.15,
                y:0.17
               
            })
        }

    },[greenRef2.current])

    

    
    return <>

       
        

        <EffectComposer>
           
          
            <Bloom
                mipmapBlur
                intensity={ 0.3 }
                luminanceThreshold={ 1 }
            />
            
            
        </EffectComposer>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        

        <mesh ref={cubeRef}  position-x={ -0.20} position-z={ 0.6 } position-y={ 0.15 } scale={ 0.10 }>
            <sphereGeometry />
            <meshBasicMaterial color={[50,50,50]} toneMapped={false} />
        </mesh>

        <mesh ref={greenRef}  position-x={ -0.3 } position-z={ 0.30 } position-y={ 0.13 }  scale={ 0.10 }>
            <sphereGeometry />
            <meshBasicMaterial color={[1,1,255]} toneMapped={false} />
        </mesh>

        <mesh ref={blueRef}  position-x={ -0.265 } position-z={ 0} position-y={ 0.13 }  scale={ 0.10 }>
            <sphereGeometry />
            <meshBasicMaterial color={[200,70,1]} toneMapped={false} />
        </mesh>

        
        <mesh ref={cubeRef2}  position-x={ -0.23 } position-z={ -0.35 } position-y={ 0.135 }  scale={ 0.10 }>
            <sphereGeometry />
            <meshBasicMaterial color={[1,255,2]} toneMapped={false} />
        </mesh>

        <mesh ref={greenRef2}  position-x={ -0.21 } position-z={ -0.6 } position-y={ 0.13 }  scale={ 0.10 }>
            <sphereGeometry />
            <meshBasicMaterial color={[50,50,50]} toneMapped={false} />
        </mesh>

        <mesh ref={circleRef} position-y={ 0} rotation-x={ - Math.PI * 0.5 } scale={ 2 } >
            
        <circleGeometry  args={[1,64]} />
        <MeshReflectorMaterial
        blur={[6000, 500]}
        resolution={1024}
        mixBlur={1.4}
        mixStrength={60}
          roughness={1}
         
          color="#050505"
          metalness={1}
          
        />
        
            </mesh>

        <Suspense>
            <Model scale={10}/>
        </Suspense>

        
        

    </>

 
}
