export default async function handler(req, res) {
    console.log("CHAT.JS FOI EXECUTADO!");

    return res.status(200).json({
        sucesso: true,
        mensagem: "A função /api/chat está funcionando!"
    });
}
