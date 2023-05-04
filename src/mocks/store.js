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
                nome: 'Blasphemous',
                photo: blasphemous
            },
            {
                nome: 'Civilization VI',
                photo: civilizationVI
            },
            {
                nome: 'Octopath Travaler II',
                photo: octopathTravaler2
            },
            {
                nome: 'Tails Of Iron',
                photo: tailsOfIron
            }
        ]
    }
}

export default store;
