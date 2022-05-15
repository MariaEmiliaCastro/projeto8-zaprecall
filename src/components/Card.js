import React from 'react';
import Question from './Question';
import setinha from '../assets/img/setinha.png';

export default function Card (props) {

    const [status, setStatus] = React.useState(props.status);

    const pergunta = props.pergunta;
    const resposta = props.resposta;

    const PutCard = () => {

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
                            <button className='nao-lembrou' onClick={() => [props.setAcertos([...props.acertos, "erro"]), setStatus(5)]}>Não lembrei</button>
                            <button className='quase' onClick={() => [props.setAcertos([...props.acertos, "quase"]), setStatus(4)]}>Quase não lembrei</button>
                            <button className='zap' onClick={() => [props.setAcertos([...props.acertos, "zap"]), setStatus(3)]}>Zap!</button>
                        </div>
                    </div>
                </div>
            );
        }if(status === 3){
            return (
                <div className="card">
                    <div className="frente" style={{color:"limegreen"}}>
                        <span style={{textDecoration: "line-through"}} >Pergunta {props.index}</span>
                        <ion-icon name="checkmark-circle" style={{fontSize: "23px"}}></ion-icon>
                    </div>
                </div>
            );
        }if(status === 4){
                return (
                    <div className="card">
                        <div className="frente" style={{color:"#FF922E"}}>
                            <span style={{textDecoration: "line-through"}}>Pergunta {props.index}</span>
                            <ion-icon name="help-circle" style={{fontSize: "23px"}}></ion-icon>
                        </div>
                    </div>
                );
        }else{
            return (
                <div className="card">
                    <div className="frente" style={{color:"#FF3030"}}>
                        <span style={{textDecoration: "line-through"}}>Pergunta {props.index}</span>
                        <ion-icon name="close-circle" style={{fontSize: "23px"}}></ion-icon>
                    </div>
                </div>
            );
        }
    }
    return (
        <>
            <PutCard />
        </>
    )
}