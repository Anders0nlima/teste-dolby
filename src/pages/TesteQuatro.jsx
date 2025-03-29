import ScrollRevealText from "../comp/ScrollRevealText"
import foto1 from "../assets/animacao.jpg"

export default function (){
    return(
        <div style={{ minHeight: "150vh" }}> {/* Garante espaço para rolar */}
        <h1>Role para ver o efeito!</h1>
        <img src={foto1} alt="" height="200px" />
        
        <ScrollRevealText>
          <p style={{ fontSize: "24px", margin: "20px 0"}}>Texto 1 (aparece ao rolar).</p>
          <p style={{ fontSize: "24px", margin: "20px 0"}}>Texto 2 (aparece ao rolar).</p>
          <p style={{ fontSize: "24px", margin: "20px 0"}}>Texto 3 (aparece ao rolar).</p>
        </ScrollRevealText>
  
        <div>
          <p>Conteúdo estático</p>
        </div>

  
        <ScrollRevealText>
          <h2 style={{ fontSize: "28px" }}>Mais textos com efeito!</h2>
          <button style={{ padding: "10px 20px" }}>Botão animado</button>
        </ScrollRevealText>
      </div>
    )
}