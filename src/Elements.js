

function Elements (props) {

    return (
        <div>{props.nome ? props.nome : props.testo}</div>
    );
}

export default Elements;