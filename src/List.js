import Elements from "./Elements";
import Hiddenelement from "./Hiddenelement";
import Button from "./Button";
import { useState } from "react";

function List () {

    const mostraNascosto= true;

    const [statoLista, modificaStatoLista] = useState(true);

    function cambiaStato() {
        modificaStatoLista(!statoLista);
    }

    
    return (
        <div>
        <div>Ciao sono una lista</div>
        <Elements nome="claudio" testo="Bella bro"/> {/* Elemento(claudio, bella bro)*/}
        <Elements testo="Ciao fre"/>
        <Elements testo="Yo" />
        <Elements testo="Oook" />
        <Button mostra={cambiaStato}/>


        
        {statoLista ? <Elements nome="BEppe"/> : <Hiddenelement/>}
        {/* {mostraNascosto && <Hiddenelement/>} su js se usi AND e entrambi sono true, ritorna il secondo elemento */}
        </div>
    );
}

export default List;