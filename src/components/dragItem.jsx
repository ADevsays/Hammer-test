import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Hammer from "hammerjs"

const ItemStyle = styled.div`
    border: 2px solid black;
    text-align: center;
    padding: 20px;
`

export default function DragItem(){
    const [hammer, setHammer] = useState("");
    const elemento = useRef(null);
    useEffect(()=>{
        const hammer = new Hammer(elemento.current)
        setHammer(hammer);
    }, [elemento]);

    const event = e=>{
        console.log(e.type);
        console.log("SUCCESS")
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
        <div ref={elemento}>
            <ItemStyle>
                <h3>ARRÁSTRAME</h3>
            </ItemStyle>
        </div>
    );
}