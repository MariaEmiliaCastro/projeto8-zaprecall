import React from 'react';
import Question from './Question';
import setinha from '../assets/img/setinha.png';

export default function Card (props) {

    const [status, setStatus] = React.useState(props.status);
    const pergunta = props.pergunta;
    const resposta = props.resposta;


    const Put = () => {

        if(status === 0){
            return (
                <div className="card" onClick={() => setStatus(status + 1)}>
                    <div className="frente">
                        Pergunta {props.index}
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                </div>
            );
        }if (status === 1){
            console.log(status);
            return (
                <div className="card" onClick={() => setStatus(status + 1)}>
                    <Question pergunta={pergunta} resposta={resposta} />
                </div>
            );
        }if (status === 2){
            return (
                <div className="card" >
                    <div className="card-resposta">
                        {props.resposta}
                        <div className='buttons'>
                            <button className='nao-lembrou'>Não lembrei</button>
                            <button className='quase'>Quase não lembrei</button>
                            <button className='zap'>Zap!</button>
                        </div>
                    </div>
                </div>
            );
        }
    }
 


    return (
        <>
            <Put />
        </>
    )
}