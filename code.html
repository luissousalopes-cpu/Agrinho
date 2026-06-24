<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>AgroSim</title>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --verde: #2d5a27;
      --verde-claro: #5a8f52;
      --terra: #8b5e3c;
      --palha: #f5f0e8;
      --creme: #fdfaf4;
      --escuro: #1a1a1a;
      --texto: #2c2c2c;
    }

    html { scroll-behavior: smooth; }

    body {
      font-family: 'DM Sans', sans-serif;
      background: var(--creme);
      color: var(--texto);
      overflow-x: hidden;
    }

    /* NAV */
    nav {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 100;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.2rem 4rem;
      background: rgba(253,250,244,0.92);
      backdrop-filter: blur(8px);
      border-bottom: 1px solid rgba(45,90,39,0.12);
    }

    .logo {
      font-family: 'Fraunces', serif;
      font-size: 1.6rem;
      color: var(--verde);
      font-weight: 700;
      letter-spacing: -0.5px;
    }

    .logo span { color: var(--terra); }

    nav ul {
      list-style: none;
      display: flex;
      gap: 2.5rem;
    }

    nav ul a {
      text-decoration: none;
      color: var(--texto);
      font-size: 0.9rem;
      font-weight: 500;
      letter-spacing: 0.3px;
      transition: color 0.2s;
    }

    nav ul a:hover { color: var(--verde); }

    /* HERO */
    .hero {
      min-height: 100vh;
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      padding: 8rem 4rem 4rem;
      gap: 4rem;
      background: var(--palha);
      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      top: -100px; right: -100px;
      width: 500px; height: 500px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(90,143,82,0.15), transparent 70%);
      pointer-events: none;
    }

    .hero-texto h1 {
      font-family: 'Fraunces', serif;
      font-size: clamp(2.8rem, 5vw, 4.2rem);
      line-height: 1.1;
      color: var(--verde);
      margin-bottom: 1.5rem;
    }

    .hero-texto h1 em {
      font-style: italic;
      color: var(--terra);
    }

    .hero-texto p {
      font-size: 1.05rem;
      line-height: 1.7;
      color: #555;
      max-width: 480px;
      margin-bottom: 2.5rem;
    }

    .btn {
      display: inline-block;
      padding: 0.9rem 2.2rem;
      background: var(--verde);
      color: #fff;
      border-radius: 50px;
      text-decoration: none;
      font-weight: 500;
      font-size: 0.95rem;
      transition: background 0.2s, transform 0.2s;
    }

    .btn:hover { background: var(--verde-claro); transform: translateY(-2px); }

    .hero-visual {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .hero-card {
      background: white;
      border-radius: 24px;
      padding: 2.5rem;
      box-shadow: 0 20px 60px rgba(45,90,39,0.12);
      max-width: 380px;
      width: 100%;
    }

    .hero-card .emoji-grande { font-size: 4rem; margin-bottom: 1rem; }
    .hero-card h3 {
      font-family: 'Fraunces', serif;
      font-size: 1.3rem;
      color: var(--verde);
      margin-bottom: 0.5rem;
    }
    .hero-card p { font-size: 0.9rem; color: #777; line-height: 1.6; }

    .stats {
      display: flex;
      gap: 1.5rem;
      margin-top: 1.5rem;
    }

    .stat { text-align: center; }
    .stat strong {
      display: block;
      font-family: 'Fraunces', serif;
      font-size: 1.6rem;
      color: var(--verde);
    }
    .stat span { font-size: 0.75rem; color: #888; }

    /* SEÇÃO GENÉRICA */
    section { padding: 6rem 4rem; }

    .secao-titulo {
      font-family: 'Fraunces', serif;
      font-size: 2.2rem;
      color: var(--verde);
      margin-bottom: 0.5rem;
    }

    .secao-sub {
      color: #777;
      font-size: 1rem;
      margin-bottom: 3rem;
    }

    /* SOBRE */
    #sobre {
      background: white;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5rem;
      align-items: center;
    }

    .sobre-img {
      background: var(--palha);
      border-radius: 20px;
      height: 360px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 6rem;
    }

    #sobre p {
      line-height: 1.8;
      color: #555;
      margin-bottom: 1rem;
    }

    /* DICAS IA */
    #dicas {
      background: var(--palha);
    }

    .chat-container {
      background: white;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 8px 40px rgba(0,0,0,0.08);
      max-width: 760px;
    }

    .chat-header {
      background: var(--verde);
      padding: 1.2rem 1.8rem;
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }

    .chat-header .dot {
      width: 10px; height: 10px;
      border-radius: 50%;
      background: rgba(255,255,255,0.4);
    }

    .chat-header span {
      color: white;
      font-weight: 500;
      font-size: 0.95rem;
    }

    .chat-mensagens {
      padding: 1.5rem;
      min-height: 280px;
      max-height: 380px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .msg {
      max-width: 80%;
      padding: 0.9rem 1.2rem;
      border-radius: 16px;
      font-size: 0.92rem;
      line-height: 1.6;
    }

    .msg.bot {
      background: var(--palha);
      border-bottom-left-radius: 4px;
      align-self: flex-start;
      color: var(--texto);
    }

    .msg.user {
      background: var(--verde);
      color: white;
      border-bottom-right-radius: 4px;
      align-self: flex-end;
    }

    .msg.loading { opacity: 0.6; font-style: italic; }

    .chat-form {
      display: flex;
      gap: 0;
      border-top: 1px solid #eee;
    }

    .chat-form textarea {
      flex: 1;
      border: none;
      padding: 1rem 1.2rem;
      font-family: 'DM Sans', sans-serif;
      font-size: 0.92rem;
      resize: none;
      outline: none;
      background: #fafafa;
      color: var(--texto);
      height: 56px;
    }

    .chat-form button {
      background: var(--verde);
      color: white;
      border: none;
      padding: 0 1.5rem;
      font-size: 1.1rem;
      cursor: pointer;
      transition: background 0.2s;
    }

    .chat-form button:hover { background: var(--verde-claro); }
    .chat-form button:disabled { background: #aaa; cursor: not-allowed; }

    .chat-hint {
      font-size: 0.8rem;
      color: #999;
      margin-top: 0.8rem;
    }

    /* CONTATO */
    #contato {
      background: white;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5rem;
      align-items: start;
    }

    .contato-info h2 { margin-bottom: 0.5rem; }

    .contato-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.2rem;
    }

    .contato-icone {
      width: 44px; height: 44px;
      border-radius: 12px;
      background: var(--palha);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      flex-shrink: 0;
    }

    .contato-item p { font-size: 0.9rem; color: #555; }
    .contato-item strong { display: block; font-size: 0.95rem; color: var(--texto); }

    .insta-link {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.7rem 1.5rem;
      border: 2px solid var(--verde);
      border-radius: 50px;
      text-decoration: none;
      color: var(--verde);
      font-weight: 500;
      font-size: 0.9rem;
      margin-top: 1rem;
      transition: all 0.2s;
    }

    .insta-link:hover { background: var(--verde); color: white; }

    /* MAPA VISUAL */
    .mapa-visual {
      background: var(--palha);
      border-radius: 20px;
      padding: 2rem;
    }

    .mapa-visual h3 {
      font-family: 'Fraunces', serif;
      font-size: 1.1rem;
      color: var(--verde);
      margin-bottom: 1.5rem;
    }

    .horario-item {
      display: flex;
      justify-content: space-between;
      padding: 0.6rem 0;
      border-bottom: 1px solid rgba(0,0,0,0.06);
      font-size: 0.9rem;
    }

    .horario-item:last-child { border-bottom: none; }
    .horario-item span:last-child { color: var(--verde); font-weight: 500; }

    /* FOOTER */
    footer {
      background: var(--escuro);
      color: rgba(255,255,255,0.6);
      text-align: center;
      padding: 2rem 4rem;
      font-size: 0.85rem;
    }

    footer strong { color: white; }

    @media (max-width: 768px) {
      nav { padding: 1rem 1.5rem; }
      nav ul { display: none; }
      .hero { grid-template-columns: 1fr; padding: 7rem 1.5rem 3rem; }
      .hero-visual { display: none; }
      #sobre, #contato { grid-template-columns: 1fr; gap: 2rem; }
      section { padding: 4rem 1.5rem; }
    }
  </style>
</head>
<body>

<nav>
  <div class="logo">Agro<span>Sim</span></div>
  <ul>
    <li><a href="#sobre">Sobre</a></li>
    <li><a href="#dicas">Dicas IA</a></li>
    <li><a href="#contato">Contato</a></li>
  </ul>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-texto">
    <h1>Produza mais.<br><em>Ganhe melhor.</em></h1>
    <p>O AgroSim conecta pequenos produtores rurais com orientações práticas para aumentar a renda do campo com sustentabilidade.</p>
    <a href="#dicas" class="btn">Pedir dicas agora →</a>
  </div>
  <div class="hero-visual">
    <div class="hero-card">
      <div class="emoji-grande">🌱</div>
      <h3>Seu sítio, mais rentável</h3>
      <p>Descreva o que você planta e o que tem no sítio. Nossa IA te dá sugestões práticas de renda.</p>
      <div class="stats">
        <div class="stat">
          <strong>+40%</strong>
          <span>renda média</span>
        </div>
        <div class="stat">
          <strong>12k</strong>
          <span>produtores</span>
        </div>
        <div class="stat">
          <strong>100%</strong>
          <span>gratuito</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- SOBRE -->
<section id="sobre">
  <div class="sobre-img">🌾</div>
  <div>
    <h2 class="secao-titulo">O que é o AgroSim?</h2>
    <p class="secao-sub">Uma plataforma para o pequeno produtor rural</p>
    <p>O AgroSim nasceu para ajudar pequenos agricultores e sitiantes a descobrir novas formas de gerar renda com o que já têm. Muitas vezes o potencial do sítio está escondido em detalhes simples.</p>
    <p>Nossa ferramenta de inteligência artificial analisa o perfil do seu sítio e sugere práticas, culturas e estratégias que se encaixam na sua realidade — sem precisar de grande investimento inicial.</p>
    <p>Do quintal à comercialização, o AgroSim te acompanha.</p>
  </div>
</section>

<!-- DICAS IA -->
<section id="dicas">
  <h2 class="secao-titulo">Consultor do Sítio 🌿</h2>
  <p class="secao-sub">Descreva seu sítio e receba dicas práticas para aumentar sua renda</p>

  <div class="chat-container">
    <div class="chat-header">
      <div class="dot"></div>
      <span>AgroSim IA — Consultor Rural</span>
    </div>
    <div class="chat-mensagens" id="chat">
      <div class="msg bot">Olá! 👋 Me conta sobre o seu sítio: tamanho, o que você planta, criações que tem, e qualquer detalhe que achar importante. Vou te dar dicas para aumentar sua renda!</div>
    </div>
    <div class="chat-form">
      <textarea id="input" placeholder="Ex: tenho 3 alqueires, planto milho e feijão, tenho algumas galinhas..." rows="1"></textarea>
      <button id="enviar" onclick="enviarMensagem()">➤</button>
    </div>
  </div>
  <p class="chat-hint">💡 Quanto mais detalhes você der, melhores serão as dicas.</p>
</section>

<!-- CONTATO -->
<section id="contato">
  <div class="contato-info">
    <h2 class="secao-titulo">Fale com a gente</h2>
    <p class="secao-sub">Estamos aqui para ajudar</p>

    <div class="contato-item">
      <div class="contato-icone">📧</div>
      <div>
        <strong>E-mail</strong>
        <p>contato@agrosim.com.br</p>
      </div>
    </div>

    <div class="contato-item">
      <div class="contato-icone">📞</div>
      <div>
        <strong>Telefone / WhatsApp</strong>
        <p>(44) 99801-2345</p>
      </div>
    </div>

    <div class="contato-item">
      <div class="contato-icone">📍</div>
      <div>
        <strong>Localização</strong>
        <p>Maringá, Paraná — Brasil</p>
      </div>
    </div>

    <a href="https://instagram.com/agrosim.br" target="_blank" class="insta-link">
      📷 @agrosim.br no Instagram
    </a>
  </div>

  <div class="mapa-visual">
    <h3>🕐 Atendimento</h3>
    <div class="horario-item"><span>Segunda – Sexta</span><span>08h às 18h</span></div>
    <div class="horario-item"><span>Sábado</span><span>08h às 12h</span></div>
    <div class="horario-item"><span>Domingo</span><span>Fechado</span></div>
    <br>
    <h3>📲 Redes sociais</h3>
    <div class="horario-item"><span>Instagram</span><span>@agrosim.br</span></div>
    <div class="horario-item"><span>YouTube</span><span>@agrosim</span></div>
    <div class="horario-item"><span>Facebook</span><span>/agrosim.br</span></div>
  </div>
</section>

<footer>
  <p>© 2026 <strong>AgroSim</strong> — Todos os direitos reservados. Feito com 🌱 para o campo brasileiro.</p>
</footer>

<script>
  const chat = document.getElementById('chat');
  const input = document.getElementById('input');
  const btn = document.getElementById('enviar');

  function addMsg(texto, tipo) {
    const div = document.createElement('div');
    div.className = 'msg ' + tipo;
    div.textContent = texto;
    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
    return div;
  }

  async function enviarMensagem() {
    const texto = input.value.trim();
    if (!texto) return;

    addMsg(texto, 'user');
    input.value = '';
    btn.disabled = true;

    const loading = addMsg('Analisando seu sítio...', 'bot loading');

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: `Você é um consultor agrícola especialista em pequenas propriedades rurais brasileiras. 
O usuário vai descrever o sítio dele (tamanho, culturas, criações, recursos). 
Você deve responder com dicas práticas, diretas e realistas para aumentar a renda da propriedade.
Foque em: diversificação de culturas, agroturismo, venda direta, processamento caseiro, criações rentáveis, etc.
Seja amigável, use linguagem simples, e dê entre 3 e 5 sugestões concretas numeradas.
Responda sempre em português do Brasil.`,
          messages: [{ role: 'user', content: texto }]
        })
      });

      const data = await response.json();
      loading.remove();
      const resposta = data.content?.[0]?.text || 'Não consegui gerar uma resposta. Tente novamente.';
      addMsg(resposta, 'bot');
    } catch (e) {
      loading.remove();
      addMsg('Erro ao conectar. Verifique sua conexão e tente novamente.', 'bot');
    }

    btn.disabled = false;
    input.focus();
  }

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      enviarMensagem();
    }
  });
</script>
</body>
</html>
