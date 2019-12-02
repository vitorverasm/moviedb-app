import {Section} from '../types';

const sections: Section[] = [
  {
    id: '1',
    label: 'Populares',
    backgroundImageDark: require(`../assets/sections/popular.png`),
    backgroundImageLight: require(`../assets/sections/popular-light.png`),
    icon: 'trending-up'
  },
  {
    id: '2',
    label: 'Favoritos',
    backgroundImageDark: require(`../assets/sections/favorites.png`),
    backgroundImageLight: require(`../assets/sections/favorites-light.png`),
    icon: 'star-outline'
  },
  {
    id: '3',
    genreID: '27',
    excludeKeywords: '9715',
    label: 'Suspense',
    backgroundImageDark: require(`../assets/sections/horror.png`),
    backgroundImageLight: require(`../assets/sections/horror-light.png`),
    icon: ''
  },
  {
    id: '4',
    genreID: '12',
    excludeKeywords: '9715',
    label: 'Aventura',
    backgroundImageDark: require(`../assets/sections/adventure.png`),
    backgroundImageLight: require(`../assets/sections/adventure-light.png`),
    icon: ''
  },
  {
    id: '5',
    genreID: '878',
    excludeKeywords: '9715',
    label: 'Sci-fi',
    backgroundImageDark: require(`../assets/sections/sci-fi.png`),
    backgroundImageLight: require(`../assets/sections/sci-fi-light.png`),
    icon: ''
  },
  {
    id: '6',
    keywords: '9715',
    label: 'Super-heróis',
    backgroundImageDark: require(`../assets/sections/superheroes.png`),
    backgroundImageLight: require(`../assets/sections/superheroes-light.png`),
    icon: ''
  }
];

export default sections;
