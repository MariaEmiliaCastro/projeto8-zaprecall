export default function Footer ({acertos, quantidade}) {

    const InserirIcone = () => {
        if (acertos.length === 0) {
            return (<></>)
        } else {
            return (
                <div className="footer-icons">
                    {acertos.map((acerto, index) => {
                        if(acerto === "zap"){
                            return (
                                <ion-icon name="checkmark-circle" style={{color: "limegreen", fontSize: "23px"}} key={index}></ion-icon>
                            )
                        }else if(acerto === "quase"){
                            return (
                                <ion-icon name="help-circle" style={{color: "#FF922E", fontSize: "23px"}} key={index}></ion-icon>
                            )
                        }else{
                            return (
                                <ion-icon name="close-circle" style={{color: "#FF3030", fontSize: "23px"}} key={index}></ion-icon>
                            )
                        }
                    })}
                </div>
            )
        }
    }
    
    const InserirPontuacao = () => {
        return (    
            <>
                <p>{acertos.length}/{quantidade} Concluídos</p>
                <div>
                    <InserirIcone/>
                </div>
            </>        
                
        )
    }

    const InserirMensagem = () => {
        console.log(acertos);
        if (acertos.includes("erro")) {
            return (
                <div className="footer-mensagem">
                    <p className="fonte-negrito">😥 Putz...</p>
                    <p className="fonte-normal">Ainda faltam alguns... </p>
                    <p className="fonte-normal">Mas não desanime!</p>
                </div>
            )
        } else {
            return (
                <div className="footer-mensagem">
                    <p className="fonte-negrito">🥳 Parabéns!</p>
                    <p className="fonte-normal">Você não esqueceu de </p>
                    <p className="fonte-normal">nenhum flashcard!</p>
                </div>
            )
        }
    } 
    return (
        <div className="footer">
            {acertos.length < quantidade ? 
            (

                    <InserirPontuacao/>
            )
            : 
            <>

                    <InserirMensagem />
                    <InserirPontuacao/>         
            </>

            }


                        
        </div>
    );
}