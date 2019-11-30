import reactotron from 'reactotron-react-native';
import {Section} from '../types';

const sections: Section[] = [
  {
    id: '1',
    label: 'Populares',
    backgroundImage: 'popular.png',
    icon: '',
    onPress: () => {
      reactotron.log(sections[0].label);
    }
  },
  {
    id: '2',
    label: 'Favoritos',
    backgroundImage: 'favorites.png',
    icon: '',
    onPress: () => {
      reactotron.log(sections[1].label);
    }
  },
  {
    id: '3',
    label: 'Suspense',
    backgroundImage: 'horror.png',
    icon: '',
    onPress: () => {
      reactotron.log(sections[2].label);
    }
  },
  {
    id: '4',
    label: 'Aventura',
    backgroundImage: 'adventure.png',
    icon: '',
    onPress: () => {
      reactotron.log(sections[3].label);
    }
  },
  {
    id: '5',
    label: 'Sci-fi',
    backgroundImage: 'sci-fi.png',
    icon: '',
    onPress: () => {
      reactotron.log(sections[4].label);
    }
  },
  {
    id: '6',
    label: 'Super-heróis',
    backgroundImage: 'superheroes.png',
    icon: '',
    onPress: () => {
      reactotron.log(sections[5].label);
    }
  }
];

export default sections;
