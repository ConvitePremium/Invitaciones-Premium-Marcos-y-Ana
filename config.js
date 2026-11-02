window.CONFIG = {
  // ENGINE EM PORTUGUÊS; textos vistos pelos convidados em espanhol.
  casal: 'Marcos y Ana', dataEvento: '2026-12-12T19:00:00',
  contagem: { mensagemFinal: '¡La celebración ha comenzado!' },
  whatsapp: '5588994897535', // Substitua pelo número real, com código do país
  musica: { ativa: true, arquivo: 'assets/musica.mp3', volume: 0.35 },
  imagens: {
    abertura: 'assets/opening.webp', principal: 'assets/principal.webp',
    localizacao: 'assets/ubicacion.webp', dresscode: 'assets/dresscode.webp',
    historia: 'assets/nuestra-historia.webp', mensagem: 'assets/mensaje-para-ti.webp'
  },
  localizacao: {
    titulo: 'Itinerario de nuestra boda',
    cerimonia: { nome: 'Ceremonia', hora: '19:00', endereco: 'Introduce aquí la dirección de la iglesia', mapa: 'https://maps.app.goo.gl/bPPWZtrAY4NKBYrB7' },
    recepcao: { nome: 'Celebración', hora: '21:00', endereco: 'Introduce aquí la dirección de la recepción', mapa: 'https://maps.app.goo.gl/HXAeGLKR3tu6dKAFA' }
  },
  historia: {
    quantidadeFotos: 4, // de 3 a 6
    fotos: ['assets/historia1.webp','assets/historia2.webp','assets/historia3.webp','assets/historia4.webp','assets/historia5.webp','assets/historia6.webp'],
    texto: 'Todo comenzó con una mirada y una sonrisa. Desde aquel día, cada instante juntos se convirtió en parte de nuestra historia. Hoy queremos celebrar nuestro amor con las personas más importantes de nuestra vida.'
  },
  mensagem: { texto: 'Querida familia y amigos: vuestra presencia es el regalo más bonito. Gracias por acompañarnos en el comienzo de esta nueva etapa. ¡Os esperamos con mucha ilusión!' },
  animacao: { velocidadeDigitacao: 38 }, // milissegundos por caractere
  // Coordenadas em porcentagem da imagem vertical 9:16. Editáveis em ?editor=1.
  posicoes: {
    confirmar: {x:8,y:77,w:26,h:8}, localizacao:{x:37,y:77,w:26,h:8}, dresscode:{x:66,y:77,w:26,h:8},
    historiaBotao:{x:20,y:87,w:27,h:8}, mensagemBotao:{x:53,y:87,w:27,h:8},
    contagem:{x:19,y:66,w:62,h:8},
    fotos:{x:12,y:12,w:76,h:37}, textoHistoria:{x:10,y:54,w:80,h:31},
    textoMensagem:{x:11,y:26,w:78,h:47},
    cerimonia:{x:10,y:65,w:38,h:11}, recepcao:{x:52,y:65,w:38,h:11},
    voltar:{x:5,y:3,w:30,h:6}
  },
  estilo: { corPrincipal:'#6c5141', corDourado:'#caa66a', corTexto:'#3d302b', fonteTexto:'Georgia, serif' }
};
