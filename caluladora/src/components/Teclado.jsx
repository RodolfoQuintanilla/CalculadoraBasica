

const Teclado = ({ digitosMarcados }) => {
    return (
        <div>
            <button onClick={()=>digitosMarcados(1)}>1</button>
            <button onClick={()=>digitosMarcados(2)}>2</button>
            <button onClick={()=>digitosMarcados(3)}>3</button>
            <button onClick={()=>digitosMarcados(4)}>4</button>
            <button onClick={()=>digitosMarcados(5)}>5</button>
            <button onClick={()=>digitosMarcados(6)}>6</button>
            <button onClick={()=>digitosMarcados(7)}>7</button>
            <button onClick={()=>digitosMarcados(8)}>8</button>
            <button onClick={()=>digitosMarcados(9)}>9</button>
            <button onClick={()=>digitosMarcados(0)}>0</button>
            <button onClick={()=>digitosMarcados()}>+</button>
            <button onClick={()=>digitosMarcados()}>-</button>
            <button onClick={()=>digitosMarcados()}>*</button>
            <button onClick={()=>digitosMarcados()}>/</button>
            <button>borrar todo</button>
            <button>borrar 1</button>
        </div>
    );
};

export default Teclado;