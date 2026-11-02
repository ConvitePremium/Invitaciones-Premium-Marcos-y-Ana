# Convites Premium — Engine Espanha (versão de teste)

Publique `index.html`, `config.js` e a pasta `assets/` na raiz de um repositório GitHub Pages.

- Abra `index.html` para testar localmente ou use o endereço GitHub Pages.
- Editor de posicionamento: `?editor=1` (o editor fica em português).
- Todas as frases mostradas aos convidados estão em espanhol.
- `config.js` configura o casal, WhatsApp, itinerário, 3–6 fotos, textos e velocidade de digitação.
- **Atenção:** as imagens `opening.webp`, `principal.webp`, `dresscode.webp` e a música foram copiadas do convite Maria Helena apenas como *material provisório para teste*. Troque pelas artes do casamento antes de publicar para clientes.
- Os fundos `ubicacion.webp`, `nuestra-historia.webp`, `mensaje-para-ti.webp` ainda não foram fornecidos. A engine mostra um fundo bege de teste enquanto não existirem.
- Fotos `historia1.webp` a `historia6.webp` também precisam ser colocadas em `assets/`. Enquanto faltarem, cartões de substituição são exibidos.
- O número de WhatsApp no exemplo é fictício. Configure `whatsapp` antes de testar o envio real.
- **Confirmar asistencia:** formulário com 1 a 9 pessoas, um nome por pessoa, depois abre WhatsApp com a mensagem pronta. Não salva dados em servidor.
- **Ubicación:** mostra os dois endereços e horários e dois links de mapa configuráveis.
- **Nuestra Historia:** fotos empilhadas com setas e texto com efeito de digitação.
- **Un mensaje para ti:** texto com efeito de digitação.
- **Dress Code:** mantém página WebP com botão de voltar.
- **Editor:** arraste qualquer elemento marcado e redimensione pela alça rosa. `Salvar no navegador` é só teste local; use `Copiar código` e substitua `posicoes` no `config.js` para publicar os ajustes.

Esta é uma primeira versão funcional para testes. Confira o comportamento em celular e navegador antes de usá-la comercialmente.

## Contagem regressiva
A contagem aparece somente na página principal. Data em `dataEvento`, mensagem final em `contagem.mensagemFinal`. Edite a área `Contagem regressiva (página principal)` em `?editor=1`.

## Ajustes para Marcos y Ana (novembro 2026)
- Os cinco botões da página principal e os dois botões de localização são áreas clicáveis transparentes, sem rótulos visíveis (a arte WebP contém os rótulos).
- Os textos de Nuestra Historia e Un mensaje para ti não possuem caixas ou fundos, apenas o texto animado.
- As fotos Polaroid agora são mantidas no DOM, com transição animada de posição, inclinação, tamanho e profundidade.
- `assets/video.mp4` é executado na abertura após o toque do convidado; quando termina, abre a página principal e inicia a música configurada.
- `video.ativo` em `config.js` permite ativar/desativar o vídeo.
- O editor continua exibindo contornos para reposicionar as áreas transparentes.
