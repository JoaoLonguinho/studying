import { useEffect, useState } from "react";
import "./HookTest.css";

const HookTest = () => {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        alert("O número atual é: " + number);
    }, [number]);

    // function aumentar() {
    //     setNumber(number + 1);
    // }
    return (
        <div>
            <h1>O botão abaixo já foi apertado {number} vezes</h1>
            <button onClick={() => setNumber(number + 1)}>Clique aqui</button>
        </div>
    )
}
export default HookTest;