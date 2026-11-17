# 📺 TVFreito

Sua tela ao vivo, num link. Sem cadastro, sem instalar nada.

- **/studio**: abra, clique em **Transmitir tela**, copie o link.
- **/?c=CÓDIGO**: quem abrir já vê sua tela, com áudio e tela cheia.

## Como funciona
Site 100% estático (HTML + CSS + JS). O vídeo vai **direto do seu navegador para o de quem assiste** via WebRTC.
A "apresentação" entre os navegadores usa o servidor público gratuito do [PeerJS](https://peerjs.com), então não tem banco de dados nem backend.

## Dicas
- Para mandar o **som do PC**, marque "Compartilhar áudio" na janela do Chrome/Edge (no Windows funciona com a tela inteira; no Mac, só com abas).
- Quem assiste entra mudo por regra do navegador: é só clicar em **🔊 Ativar som**.
- Cada espectador puxa upload da sua internet. Bom para uns 5–10 amigos.

## Deploy
GitHub → Vercel (sem build). Qualquer push na `main` publica.
