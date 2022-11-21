import Elements from "./Elements";
import Hiddenelement from "./Hiddenelement";
import Button from "./Button";

function List () {

    const mostraNascosto= false;

    const stampa = () => {
        console.log("Mannaja la peppina");
    }
    return (
        <div>
        <div>Ciao sono una lista</div>
        <Elements nome="claudio" testo="Bella bro"/> {/* Elemento(claudio, bella bro)*/}
        <Elements testo="Ciao fre"/>
        <Elements testo="Yo" />
        <Elements testo="Oook" />
        <Button />

        
        <p>{stampa}</p>
        {mostraNascosto ? <Elements nome="BEppe"/> : <Hiddenelement/>}
        {mostraNascosto && <Hiddenelement/>} {/* su js se usi AND e entrambi sono true, ritorna il secondo elemento*/}
        </div>
    );
}

export default List;