type ColorProps = {
  PRIMARY: string;
  WHITE: string;
  BLACK: string;
  BLUE: string;
  GRAY: string;
  GRAY_1: string;
  LIGHT_GRAY: string;
  TRANSPARENT_WHITE: string;
  TRANSPARENT_BLACK: string;
};

type SizeProps = {
  BASE: number;
  FONT: number;
  RADIUS: number;
  PADDING: number;

  LARGE_TITLE: number;
  H1: number;
  H2: number;
  H3: number;
  H4: number;
  BODY1: number;
  BODY2: number;
  BODY3: number;
  BODY4: number;
  BODY5: number;

  WIDTH: width;
  HEIGHT: height;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    Color: ColorProps;
    Sizes: SizeProps;
  }
}
