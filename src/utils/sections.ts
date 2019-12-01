import reactotron from 'reactotron-react-native';
import {Section} from '../types';

const sections: Section[] = [
  {
    id: '1',
    label: 'Populares',
    backgroundImageDark: require(`../assets/sections/popular.png`),
    backgroundImageLight: require(`../assets/sections/popular-light.png`),
    icon: 'trending-up',
    onPress: () => {
      reactotron.log(sections[0].label);
    }
  },
  {
    id: '2',
    label: 'Favoritos',
    backgroundImageDark: require(`../assets/sections/favorites.png`),
    backgroundImageLight: require(`../assets/sections/favorites-light.png`),
    icon: 'star-outline',
    onPress: () => {
      reactotron.log(sections[1].label);
    }
  },
  {
    id: '3',
    genreID: '27',
    excludeKeywords: '9715',
    label: 'Suspense',
    backgroundImageDark: require(`../assets/sections/horror.png`),
    backgroundImageLight: require(`../assets/sections/horror-light.png`),
    icon: '',
    onPress: () => {
      reactotron.log(sections[2].label);
    }
  },
  {
    id: '4',
    genreID: '12',
    excludeKeywords: '9715',
    label: 'Aventura',
    backgroundImageDark: require(`../assets/sections/adventure.png`),
    backgroundImageLight: require(`../assets/sections/adventure-light.png`),
    icon: '',
    onPress: () => {
      reactotron.log(sections[3].label);
    }
  },
  {
    id: '5',
    genreID: '878',
    excludeKeywords: '9715',
    label: 'Sci-fi',
    backgroundImageDark: require(`../assets/sections/sci-fi.png`),
    backgroundImageLight: require(`../assets/sections/sci-fi-light.png`),
    icon: '',
    onPress: () => {
      reactotron.log(sections[4].label);
    }
  },
  {
    id: '6',
    keywords: '9715',
    label: 'Super-heróis',
    backgroundImageDark: require(`../assets/sections/superheroes.png`),
    backgroundImageLight: require(`../assets/sections/superheroes-light.png`),
    icon: '',
    onPress: () => {
      reactotron.log(sections[5].label);
    }
  }
];

export default sections;
