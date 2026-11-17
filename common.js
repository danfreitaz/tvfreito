// TVFreito — configuração compartilhada
window.TVF = {
  prefix: 'tvfreito-',
  peerOpts: {
    debug: 0,
    config: {
      iceServers: [
        { urls: ['stun:stun.l.google.com:19302', 'stun:stun1.l.google.com:19302'] },
        // TURN público gratuito (ajuda quando a rede bloqueia conexão direta)
        { urls: 'turn:openrelay.metered.ca:80', username: 'openrelayproject', credential: 'openrelayproject' },
        { urls: 'turn:openrelay.metered.ca:443?transport=tcp', username: 'openrelayproject', credential: 'openrelayproject' }
      ]
    }
  },
  toast(msg) {
    let t = document.querySelector('.toast');
    if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
    t.textContent = msg; t.classList.add('on');
    clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('on'), 2400);
  },
  fmt(s) {
    const h = Math.floor(s / 3600), m = Math.floor(s / 60) % 60, x = s % 60;
    return (h ? h + ':' : '') + String(m).padStart(2, '0') + ':' + String(x).padStart(2, '0');
  }
};
