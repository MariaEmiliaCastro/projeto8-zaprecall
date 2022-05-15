export default function AnsweredQuestion({ status, color, index }) {

    return (
        <>
            <div className="card">
                <div className="frente" style={{ color: color }}>
                    <span style={{ textDecoration: "line-through" }} >Pergunta {index}</span>
                    <ion-icon name={status + "-circle"} style={{ fontSize: "23px" }}></ion-icon>
                </div>
            </div>
        </>
    )
}