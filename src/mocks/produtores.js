import green from '../../assets/images/green.png';
import grow from '../../assets/images/grow.png';
import jennyJack from '../../assets/images/jenny-jack.png';
import potager from '../../assets/images/potager.png';
import salad from '../../assets/images/salad.png';

//retorna numero entre o minimo e o maximo
const gerarNumeroAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min) + 1 + min);
};

const produtores = {
  titulo: 'Produtores',
  lista: [
    {
      nome: 'Green',
      imagem: green,
      distancia: `${gerarNumeroAleatorio(1, 500)}m`,
      estrelas: gerarNumeroAleatorio(1, 5),
    },
    {
      nome: 'Grow',
      imagem: grow,
      distancia: `${gerarNumeroAleatorio(1, 500)}m`,
      estrelas: gerarNumeroAleatorio(1, 5),
    },
    {
      nome: 'Jenny Jack',
      imagem: jennyJack,
      distancia: `${gerarNumeroAleatorio(1, 500)}m`,
      estrelas: gerarNumeroAleatorio(1, 5),
    },
    {
      nome: 'Potager',
      imagem: potager,
      distancia: `${gerarNumeroAleatorio(1, 500)}m`,
      estrelas: gerarNumeroAleatorio(1, 5),
    },
    {
      nome: 'Salad',
      imagem: salad,
      distancia: `${gerarNumeroAleatorio(1, 500)}m`,
      estrelas: gerarNumeroAleatorio(1, 5),
    },
  ],
};

export default produtores;
