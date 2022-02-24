import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export default {
  Colors: {
    PRIMARY: '#FF002E',
    WHITE: '#fff',
    BLACK: '#000000',
    BLUE: '#4096FE',
    GRAY: '#464646',
    GRAY_1: '#363636',
    LIGHT_GRAY: '#dedede',
    TRANSPARENT_WHITE: 'rgba(255, 255, 255, 0.2)',
    TRANSPARENT_BLACK: 'rgba(0, 0, 0, 0.4)',
  },

  Sizes: {
    BASE: 8,
    FONT: 14,
    RADIUS: 12,
    PADDING: 24,

    LARGE_TITLE: 40,
    H1: 30,
    H2: 22,
    H3: 16,
    H4: 14,
    BODY1: 30,
    BODY2: 22,
    BODY3: 16,
    BODY4: 14,
    BODY5: 12,

    WIDTH: width,
    HEIGHT: height,
  },
};
