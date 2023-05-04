import banner from '../../assets/banner/banner.png';

import blasphemous from '../../assets/jogos/blasphemous.jpg';
import civilizationVI from '../../assets/jogos/civilizationVI.jpg';
import octopathTravaler2 from '../../assets/jogos/octopathTraveler2.jpg';
import tailsOfIron from '../../assets/jogos/tailsOfIron.jpg';


const store = {
    top: {
        titulo: 'Alura GAMES',
    },
    description: {
        title: 'Games Store',
        titleSecond: 'A TUA PLATAFORMA DE JOGOS',
        description: 'Jogos, jogos, jogos, jogos, jogos, jogos, jogos, jogos, jogos, jogos, jogos, jogos, jogos, jogos, jogos, jogos, jogos, jogos, jogos, jogos, jogos, jogos, jogos, jogos, jogos',
    },
    itens: {
        title: 'Novidades',
        list: [
            {
                id: 1,
                nome: 'Blasphemous',
                photo: blasphemous
            },
            {
                id: 2,
                nome: 'Civilization VI',
                photo: civilizationVI
            },
            {
                id: 3,
                nome: 'Octopath Travaler II',
                photo: octopathTravaler2
            },
            {
                id: 4,
                nome: 'Tails Of Iron',
                photo: tailsOfIron
            }
        ]
    }
}

export default store;
