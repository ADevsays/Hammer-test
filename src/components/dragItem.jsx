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
        e.type == "panleft" ? console.log("PAN") : console.log("SWIPE! ")

        
    }
    if(hammer){
        hammer.get('pan').set({ direction: Hammer.DIRECTION_ALL });
        hammer.on("swipeleft panleft",event)
    }

    return(
        <div ref={elemento}>
            <ItemStyle>
                <h3>ARRÁSTRAME</h3>
            </ItemStyle>
        </div>
    );
}