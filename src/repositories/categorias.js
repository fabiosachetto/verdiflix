import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias?_embed=videos`;

function getAllWithVideos() {
  console.log(config.URL_BACKEND_TOP);

  return fetch(URL_CATEGORIES)
    .then(async (respostaDoServidor) => {
      const resposta = await respostaDoServidor.json();

      return resposta;
    });
}

export default {
  getAllWithVideos,
};
