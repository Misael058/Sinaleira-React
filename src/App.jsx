import { useState } from 'react'
import Luz from './Luz'
import Livre from './assets/PasseLivre.jpg'
import Pare from './assets/Pare.jpg'
import Espere from './assets/Espere.webp'


function App() {
  const [cor , setCor ] = useState("")


  return (
    <>

            <h1>Sinal <b>de</b> <span>Transito</span></h1>
      <div className="main">

      <div className="semaforo">
        <Luz nome={""} idade={18} altura={1.98}     />
        <div className={`vermelho ${cor === "red" ? "ligado": ""}`} onClick={() => setCor("red" ) } ></div>
        <div className={`amarelo ${cor === "amarelo" ? "ligado": " "}`} onClick={() => setCor("amarelo" )}></div>
        <div className={`verde ${cor === "green" ? "ligado" : ""}`} onClick={() => setCor("green")}></div>
       
       
      </div>
      <div className="sinais">
          {cor === "red" && <img src={Pare} alt="" style={{widht: 100}}/>}
          {cor === "amarelo" && <img src={Espere} alt="" style={{widht: 100}}/>}
          {cor === "green" && <img src={Livre} alt="" style={{widht: 100}}/>}

        </div>
        </div>
    </>
  )
}

export default App
