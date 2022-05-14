import setinha from '../assets/img/setinha.png';

export default function Question (props) {

    return (
        <>
            <div className="card-pergunta">
                {props.pergunta}
                <img src={setinha} alt="setinha"/>
            </div>
        </>
    )
}