import { GoogleGenAI } from "@google/genai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Método não permitido."
    });
  }

  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.error("GEMINI_API_KEY não encontrada.");
      return res.status(500).json({
        error: "GEMINI_API_KEY não está configurada na Vercel."
      });
    }

    const { mensagem } = req.body || {};

    if (!mensagem || typeof mensagem !== "string") {
      return res.status(400).json({
        error: "Mensagem inválida."
      });
    }

    console.log("Chamando Gemini...");

    const ai = new GoogleGenAI({
      apiKey: apiKey
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",

      contents: mensagem,

      config: {
        systemInstruction: `
Você é o "Consultor do Sítio", assistente de inteligência artificial
do AgroNexus.

Ajude pequenos produtores rurais brasileiros com orientações práticas,
simples e realistas.

Considere, quando informado:
- tamanho da propriedade;
- culturas;
- animais;
- água;
- clima;
- recursos disponíveis;
- objetivos do produtor.

Priorize soluções que aproveitem os recursos que o produtor já possui.

Considere possibilidades como:
- diversificação de culturas;
- venda direta;
- processamento de produtos;
- criação de animais;
- agroturismo;
- organização da produção;
- estratégias para aumentar a renda.

Não invente informações que o usuário não forneceu.

Quando uma recomendação depender de preços, clima, legislação ou
outros dados atuais da região, avise que essas informações precisam
ser verificadas localmente.

Use linguagem simples e responda sempre em português do Brasil.
        `,

        maxOutputTokens: 1000
      }
    });

    console.log("Gemini respondeu.");

    return res.status(200).json({
      resposta: response.text
    });

  } catch (error) {
    console.error("ERRO NO GEMINI:", error);

    return res.status(500).json({
      error: "Erro ao consultar o Gemini.",
      detalhe: error.message
    });
  }
}
