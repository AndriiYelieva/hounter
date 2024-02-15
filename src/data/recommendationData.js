import russel from '../assets/images/girl2.jpg';
import house from '../assets/images/house4.jpg';
import house1 from '../assets/images/house1.jpg';
import house0 from '../assets/images/house0.jpg';
import house2 from '../assets/images/house2.jpg';
import apart5 from '../assets/images/apart5.jpg';
import apart2 from '../assets/images/apart2.jpg';
import apart3 from '../assets/images/apart3.jpg';
import house3 from '../assets/images/house3.jpg';
import house7 from '../assets/images/house7.jpg';
import villa2 from '../assets/images/villa2.jpg';
import villa from '../assets/images/villa.jpg';
import header from '../assets/images/header.jpg';
import popular from '../assets/icons/popular.svg';
import man2 from '../assets/images/man2.jpg';
import man5 from '../assets/images/man5.jpg';
import man4 from '../assets/images/man4.jpg';
import man from '../assets/images/man.jpg';
import man6 from '../assets/images/man6.jpg';
import man3 from '../assets/images/man3.jpg';
import girl1 from '../assets/images/girl1.jpg';
import man7 from '../assets/images/man7.jpg';
import girl4 from '../assets/images/girl4.jpg';
import girl3 from '../assets/images/girl3.jpg';
import girl5 from '../assets/images/girl5.jpg';
import wallet from '../assets/icons/walet.svg';
import home from '../assets/icons/newHome.svg';

export const featuredHouse = [
  {
    id: 1,
    card: {
      cover: house,
      tagTitle: 'Popular',
      tagIcon: popular,
      tagType: 'popular',
      type: 'house'
    },
    title: 'Roselands House',
    subtitle: '$ 35.000.000',
    personalInfo: {
      image: russel,
      name: 'Dianne Russell',
      address: 'Manchester, Kentucky',
    },
  },

  {
    id: 2,
    card: {
      cover: house1,
      tagTitle: 'New house',
      tagIcon: home,
      tagType: 'newHouse',
      type: 'house'
    },
    title: 'Woodlandside',
    subtitle: '$ 20.000.000',
    personalInfo: {
      image: man3,
      name: 'Robert Fox',
      address: 'Dr. San Jose, South Dakota',
    },
  },

  {
    id: 3,
    card: {
      cover: house2,
      tagTitle: 'Best Deals',
      tagIcon: wallet,
      tagType: 'bestDeals',
      type: 'apartment'
    },
    title: 'The Old Lighthouse',
    subtitle: '$ 44.000.000',
    personalInfo: {
      image: man2,
      name: 'Ronald Richards',
      address: 'Santa Ana, Illinois',
    },
  },

  {
    id: 4,
    card: {
      cover: house3,
      tagTitle: 'Popular',
      tagIcon: popular,
      tagType: 'popular',
      type: 'villa'
    },
    title: 'Cosmo\'s House',
    subtitle: '$ 22.000.000',
    personalInfo: {
      image: girl4,
      name: 'Jenny Wilson',
      address: 'Preston Rd. Inglewood, Maine 98380',
    },
  },

  {
    id: 5,
    card: {
      cover: house0,
      tagTitle: 'Best Deals',
      tagIcon: wallet,
      tagType: 'bestDeals',
      type: 'house'
    },
    title: 'Sunset Haven',
    subtitle: '$ 13.000.000',
    personalInfo: {
      image: girl1,
      name: 'Sophia Anderson',
      address: 'Austin, Texas',
    },
  },

  {
    id: 6,
    card: {
      cover: apart2,
      tagTitle: 'New house',
      tagIcon: home,
      tagType: 'newHouse',
      type: 'house'
    },
    title: 'Majestic Mansion',
    subtitle: '$ 18.000.000',
    personalInfo: {
      image: man7,
      name: 'Robert Thompson',
      address: 'London, United Kingdom',
    },
  },

  {
    id: 7,
    card: {
      cover: apart5,
      tagTitle: 'Best Deals',
      tagIcon: wallet,
      tagType: 'bestDeals',
      type: 'apartment'
    },
    title: 'Cityscape Apartments',
    subtitle: '$ 30.000.000',
    personalInfo: {
      image: girl3,
      name: 'Emily Thompson',
      address: 'New York City, New York',
    },
  },

  {
    id: 8,
    card: {
      cover: house7,
      tagTitle: 'Popular',
      tagIcon: popular,
      tagType: 'popular',
      type: 'house'
    },
    title: 'Paradise Retreat',
    subtitle: '$ 25.000.000',
    personalInfo: {
      image: man,
      name: 'Michael Davis',
      address: 'Los Angeles, California',
    },
  },

  {
    id: 9,
    card: {
      cover: villa2,
      tagTitle: 'New house',
      tagIcon: home,
      tagType: 'newHouse',
      type: 'villa'
    },
    title: 'Oceanview Estate',
    subtitle: '$ 65.000.000',
    personalInfo: {
      image: girl5,
      name: 'Olivia Harris',
      address: 'Miami Beach, Florida',
    },
  },

  {
    id: 10,
    card: {
      cover: villa,
      tagTitle: 'Best Deals',
      tagIcon: wallet,
      tagType: 'bestDeals',
      type: 'villa'
    },
    title: 'Tranquil Valley',
    subtitle: '$ 47.000.000',
    personalInfo: {
      image: man4,
      name: 'Daniel Martinez',
      address: 'Barcelona, Spain',
    },
  },

  {
    id: 11,
    card: {
      cover: apart3,
      tagTitle: 'Popular',
      tagIcon: popular,
      tagType: 'popular',
      type: 'apartment'
    },
    title: 'Skyline Apartments',
    subtitle: '$ 28.000.000',
    personalInfo: {
      image: man6,
      name: 'Sam Peters',
      address: 'Sydney, Australia',
    },
  },

  {
    id: 12,
    card: {
      cover: header,
      tagTitle: 'Popular',
      tagIcon: popular,
      tagType: 'popular',
      type: 'villa'
    },
    title: 'Serenity Villa',
    subtitle: '$ 30.000.000',
    personalInfo: {
      image: man5,
      name: 'Christopher Lee',
      address: 'Tokyo, Japan',
    },
  },
]
