import React from 'react';
import Question from './Question';
import setinha from '../assets/img/setinha.png';
import AnsweredQuestion from './AnsweredQuestion';

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
                            <button className='nao-lembrou' onClick={() => [props.setAcertos([...props.acertos, "close"]), setStatus(5)]}>Não lembrei</button>
                            <button className='quase' onClick={() => [props.setAcertos([...props.acertos, "help"]), setStatus(4)]}>Quase não lembrei</button>
                            <button className='zap' onClick={() => [props.setAcertos([...props.acertos, "checkmark"]), setStatus(3)]}>Zap!</button>
                        </div>
                    </div>
                </div>
            );
        }if(status === 3){
            return (
                <AnsweredQuestion status={"checkmark"} color={"limegreen"} index={props.index}/>
            );
        }if(status === 4){
                return (
                    <AnsweredQuestion status={"help"} color={"#FF922E"} index={props.index}/>
                );
        }else{
            return (
                <AnsweredQuestion status={"close"} color={"#FF3030"} index={props.index}/>
            );
        }
    }
    return (
        <>
            <PutCard />
        </>
    )
}