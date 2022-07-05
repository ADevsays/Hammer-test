import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Hammer from "hammerjs"

const ItemStyle = styled.div`
    border: 2px solid black;
    text-align: center;
    height: 500px;
    display: grid;
    place-content: center;
    color: red;
`

export default function DragItem(){
    const [hammer, setHammer] = useState("");
    const [type, setType] = useState("");
    const elemento = useRef(null);
    useEffect(()=>{
        const hammer = new Hammer(elemento.current)
        setHammer(hammer);
    }, [elemento]);

    const event = e=>{
        console.log(e.type);
        console.log("SUCCESS")
        if(e.type == "pinchstart") setType(e.type)
        if(e.type == "pinchend") setType(e.type)
        if(e.type == "pinchmove") setType(e.type)
        if(e.type == "pinchcancel") setType(e.type)
        if(e.type == "pinchin") setType(e.type)
        if(e.type == "pinchout") setType(e.type)
    }

    //Pan dispara el evento con la mínima interración del puntero hacia la dirección permitida;
    //Swipe dispara el evento cuando la interración del puntero es más rápida; 

    if(hammer){
        // hammer.add(new Hammer.Tap({
        //     event: "tripletap", taps: 3
        // }))
        hammer.get('pinch').set({ enable: true });
        hammer.on("pinch",event)
    }

    return(
        <div >
            <ItemStyle ref={elemento}>
                <h3>ARRÁSTRAME</h3>
            </ItemStyle>

            <h3>{type}</h3>
        </div>
    );
}