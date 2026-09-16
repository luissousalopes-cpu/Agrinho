export default async function handler(req, res) {
  // Aceita apenas requisições POST
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Método não permitido."
    });
  }

  // Puxa a chave que está salva nas Environment Variables da Vercel
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.error("GEMINI_API_KEY não configurada na Vercel.");

    return res.status(500).json({
      error: "A chave da API do Gemini não está configurada no servidor."
    });
  }

  try {
    const { mensagem } = req.body || {};

    if (!mensagem || typeof mensagem !== "string") {
      return res.status(400).json({
        error: "Mensagem inválida."
      });
    }

    const systemInstruction = `
Você é o "Consultor do Sítio", assistente de inteligência artificial
do AgroNexus.

O usuário vai descrever o sítio dele, podendo informar tamanho da
propriedade, culturas, criações, recursos disponíveis, clima e objetivos.

Você deve responder com dicas práticas, diretas e realistas para
pequenas propriedades rurais brasileiras.

Priorize soluções que possam ser aplicadas com os recursos que o
produtor já possui e evite recomendar investimentos grandes sem
necessidade.

Considere, quando fizer sentido:
- diversificação de culturas;
- venda direta;
- processamento de produtos;
- criação de animais;
- agroturismo;
- aproveitamento dos recursos existentes;
- organização da produção;
- estratégias para aumentar a renda.

Seja amigável e use linguagem simples.

Dê entre 3 e 5 sugestões concretas e numeradas quando a pergunta
pedir recomendações.

Não invente informações sobre a propriedade que o usuário não informou.

Quando uma recomendação depender de preços, clima, legislação ou outros
dados locais atuais, deixe claro que esses dados precisam ser verificados
na região do produtor.

Responda sempre em português do Brasil.
`;

    const geminiResponse = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey
        },

        body: JSON.stringify({
          systemInstruction: {
            parts: [
              {
                text: systemInstruction
              }
            ]
          },

          contents: [
            {
              role: "user",
              parts: [
                {
                  text: mensagem
                }
              ]
            }
          ],

          generationConfig: {
            maxOutputTokens: 1000
          }
        })
      }
    );

    const data = await geminiResponse.json();

    if (!geminiResponse.ok) {
      console.error("Erro retornado pelo Gemini:", data);

      return res.status(geminiResponse.status).json({
        error: "O Gemini recusou ou não conseguiu processar a solicitação."
      });
    }

    const resposta = data?.candidates?.[0]?.content?.parts
      ?.map(part => part.text || "")
      .join("")
      .trim();

    if (!resposta) {
      console.error("Resposta inesperada do Gemini:", data);

      return res.status(502).json({
        error: "O Gemini não retornou uma resposta de texto."
      });
    }

    return res.status(200).json({
      resposta: resposta
    });

  } catch (error) {
    console.error("Erro na função /api/chat:", error);

    return res.status(500).json({
      error: "Erro interno ao consultar o Gemini."
    });
  }
}