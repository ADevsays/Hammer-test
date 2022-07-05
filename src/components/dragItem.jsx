import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Hammer from "hammerjs"

const ItemStyle = styled.div`
    border: 2px solid black;
    text-align: center;
    height: 500px;
    display: grid;
    place-content: center;
    color: green;
`

export default function DragItem(){
    const [hammer, setHammer] = useState("");
    const [type, setType] = useState("");
    const elemento = useRef(null);
    useEffect(()=>{
        const hammer = new Hammer.Manager(elemento.current)
        setHammer(hammer);
    }, [elemento]);

    const event = e=>{
        setType(e.type)
    }

    //Pan dispara el evento con la mínima interración del puntero hacia la dirección permitida;
    //Swipe dispara el evento cuando la interración del puntero es más rápida; 
    //Pinch dispara el evento cuando se "pellisca" diferenciando entre alejar y acercar los dedos

    if(hammer){
        hammer.add(new Hammer.Swipe({
            event: "swipetwo", pointers: 2, direction: "DIRECTION-ALL"
        }))
        hammer.on("swipetwo" ,event)
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