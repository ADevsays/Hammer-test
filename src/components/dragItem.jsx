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
        const hammer = new Hammer.Manager(elemento.current)
        setHammer(hammer);
    }, [elemento]);

    const event = e=>{
        setType(e.direction)
        console.log(e)
    }

    //Pan dispara el evento con la mínima interración del puntero hacia la dirección permitida;
    //Swipe dispara el evento cuando la interración del puntero es más rápida; 
    //Pinch dispara el evento cuando se "pellisca" diferenciando entre alejar y acercar los dedos

    if(hammer){
        hammer.add(new Hammer.Swipe({
            event: "swipetwo", pointers: 2, direction: 4
        }))
        hammer.on("swipetwo", event)
    }

    //Para crear un evento hay que añadir el método manager al hammer. 
    //El método add recibe un nuevo hammer con su evento y su respectiva configuración
    //Pointer es el número de punteros en pantalla, direction usa valores donde: 
    //arriba es 8, de derecha a izquierda es 2, de izquierda a derecha es 4 y abajo es 16.

    return(
        <div >
            <ItemStyle ref={elemento}>
                <h3>ARRÁSTRAME</h3>
            </ItemStyle>

            <h3>{type}</h3>
        </div>
    );
}