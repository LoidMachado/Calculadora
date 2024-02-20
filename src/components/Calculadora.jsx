import React, { useState } from 'react';
import './Calculadora.css';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
const Calculadora = () => {
     const [num, setNum] = useState(0);
     const [numAntigo, setNumAntigo] = useState(0);
     const [operador, setOperador] = useState();
     
     function inputNum(e) {
        var input = e.target.value
        if (num===0) {
            setNum(input);
        }else{
            setNum(num+input);
        }
     }

     function limpar() {
        setNum(0)
        setNumAntigo(0)
     }

     function percentagem() {
      setNum(num / 100 )  
     }

     function mudarSinal() {
        if (num>0) {
            setNum(-num)
        } else{
            setNum(Math.abs(num))
        }
     }

     function manipularOperacao(e) {
        var operadorInput = e.target.value;
       if (operador) {
           setOperador(operadorInput)
           setNumAntigo(num)
           calcular() 
           return
       } else{
        setOperador(operadorInput)
        setNumAntigo(num)
        setNum(0)
        return
        }
    } 

     function calcular() {
        if (operador === "/") {
            setNum(parseFloat(numAntigo) / parseFloat(num))  
        } else if (operador === "x") {
            setNum(parseFloat(numAntigo) * parseFloat(num))
        } else if (operador === "-") {
            setNum(parseFloat(numAntigo) - parseFloat(num))
        } else if (operador === "+") {
            setNum(parseFloat(numAntigo) + parseFloat(num))
        }else if (operador === "=") {
            setNumAntigo(num)
            setNum(0)
        }
     }
     

    return (
        <div>
            <Box m={5}/>
            <Container maxWidth="xs">
                <div className='wrapper'>
                    <Box m={10}/>
                    <h1 className="resultado">{num}</h1>
                    <button onClick={limpar}>AC</button>
                    <button onClick={mudarSinal}>+/-</button>
                    <button onClick={percentagem}>%</button>
                    <button className="orange" onClick={manipularOperacao} value={"/"}>/</button>
                    <button className="gray" onClick={inputNum} value={7}>7</button>
                    <button className="gray" onClick={inputNum} value={8}>8</button>
                    <button className="gray" onClick={inputNum} value={9}>9</button>
                    <button className="orange" onClick={manipularOperacao} value={"x"}>x</button>
                    <button className="gray" onClick={inputNum} value={4}>4</button>
                    <button className="gray" onClick={inputNum} value={5}>5</button>
                    <button className="gray" onClick={inputNum} value={6}>6</button>
                    <button className="orange" onClick={manipularOperacao} value={"-"}>-</button>
                    <button className="gray" onClick={inputNum} value={1}>1</button>
                    <button className="gray" onClick={inputNum} value={2}>2</button>
                    <button className="gray" onClick={inputNum} value={3}>3</button>
                    <button className="orange" onClick={manipularOperacao} value={"+"}>+</button>
                    <button className="gray" id='zero' onClick={inputNum} value={0}>0</button>
                    <button className="gray" onClick={inputNum} value={"."}>,</button>
                    <button className="orange" onClick={calcular}>=</button>


                </div>
            </Container>
        </div>
    )
}

export default Calculadora;