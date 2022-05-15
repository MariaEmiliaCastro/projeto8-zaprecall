import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";

function comparador() {
    return Math.random() - 0.5;
}

function popularArray(quantidade, array) {
    console.log(array);
    array.sort(comparador);
    console.log("After the change: " + array);

    let arrayAtual = [];

    for (let i = 0; i < (quantidade); i++) {
        arrayAtual.push(array[i]);
    }

    arrayAtual.sort(comparador);

    return arrayAtual;
}

export default function RecallPage () {
    const perguntas = [
        {
            id:1,
            pergunta: "O React é __?",
            resposta: "React é uma biblioteca JavaScript de código aberto para criar interfaces de usuário.",
            status: 0 
        },
        {
            id:2,
            pergunta: "O que é JSX?",
            resposta: "Uma extensão de linguagem do JavaScript",
            status: 0
        },
        {
            id:3,
            pergunta: "Componentes devem iniciar com __",
            resposta: "letra maiúscula",
            status: 0
        },
        {
            id:4,
            pergunta: "Podemos colocar __ dentro do JSX",
            resposta: "expressões",
            status: 0
        },
        {
            id:5,
            pergunta: "O ReactDOM nos ajuda __ ",
            resposta: "interagindo com a DOM para colocar componentes React na mesma",
            status: 0
        },
        {
            id:6,
            pergunta: "Usamos o npm para __",
            resposta: "gerenciar os pacotes necessários e suas dependências",
            status: 0
        },
        {
            id:7,
            pergunta: "Usamos props para __",
            resposta: "passar diferentes informações para componentes ",
            status: 0
        },
        {
            id:8,
            pergunta: "Usamos estado (state) para __",
            resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
            status: 0
        }
    ];

    const [perguntasAtualizadas, setPerguntasAtualizadas] = React.useState([]);
    const [acertos, setAcertos] = React.useState([]);

    React.useEffect(() => {
        setPerguntasAtualizadas(popularArray(perguntas.length, perguntas));
    }, []);

    return (
        <div className="recall-page">
            <Header />
            <div className="recall-content">
                {perguntasAtualizadas.map(({id, pergunta, resposta, status}, index) => <Card 
                    key = {index}
                    index={index + 1} 
                    pergunta={pergunta} 
                    resposta={resposta} 
                    status={status}
                    acertos={acertos}
                    setAcertos={setAcertos}
                    /> 
                )}
            </div>
            <Footer  acertos={acertos} quantidade={perguntas.length}/>
        </div>
    );
}