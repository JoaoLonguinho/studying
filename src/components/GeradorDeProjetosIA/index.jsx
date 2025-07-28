import React, { useState } from "react";
import axios from "axios";
import "./GeradorDeProjetosIA.css"; // Personalize se quiser

const GeradorDeProjetosIA = () => {
  const [tecnologia, setTecnologia] = useState("");
  const [sugestoes, setSugestoes] = useState("");
  const [carregando, setCarregando] = useState(false);

  const gerarSugestoes = async () => {
    if (!tecnologia) return alert("Digite uma tecnologia.");

    setCarregando(true);

    try {
      const resposta = await axios.post(
        "https://api.openai.com/v1/completions",
        {
          model: "text-davinci-003",
          prompt: `Me dê 3 ideias de projetos interessantes para treinar usando ${tecnologia}. Liste com título e uma pequena descrição.`,
          max_tokens: 250,
          temperature: 0.7,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_KEY}`,
            "Content-Type": "application/json",
          }
        }
      );
      
      const texto = resposta.data.choices[0].text.trim();
      setSugestoes(texto);
    } catch (erro) {
      console.error("Erro na requisição OpenAI:", erro);
      alert("Erro ao gerar ideias. Verifique sua chave.");
    }
    
    setCarregando(false);
  };

  return (
    <div className="gerador-container">
      <h2>Gerador de Projetos com IA</h2>
      <input
        type="text"
        placeholder="Ex: React, JavaScript, PHP..."
        value={tecnologia}
        onChange={(e) => setTecnologia(e.target.value)}
      />
      <button onClick={gerarSugestoes} disabled={carregando}>
        {carregando ? "Gerando..." : "Gerar ideias"}
      </button>

      {sugestoes && (
        <div className="resultado">
          <h3>Ideias sugeridas:</h3>
          <pre>{sugestoes}</pre>
        </div>
      )}
    </div>
  );
};

export default GeradorDeProjetosIA;
