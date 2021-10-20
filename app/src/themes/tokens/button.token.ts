import color from './color.token';

export type ButtonToken = {
  color: string;
  backgroundColor: string;
  borderColor: string;

  hoverColor: string;
  hoverBackgroundColor: string;
  hoverBorderColor: string;

  activeColor: string;
  activeBackgroundColor: string;
  activeBorderColor: string;
};

export const lightThemeButton: ButtonToken = {
  color: color.white,
  backgroundColor: color.blue,
  borderColor: color.blue,

  hoverColor: color.blue,
  hoverBackgroundColor: color.white,
  hoverBorderColor: color.white,

  activeColor: color.white,
  activeBackgroundColor: color.blue,
  activeBorderColor: color.blue,
};

export const darkThemeButton: ButtonToken = {
  color: color.black,
  backgroundColor: color.white,
  borderColor: color.white,

  hoverColor: color.white,
  hoverBackgroundColor: color.black,
  hoverBorderColor: color.black,

  activeColor: color.black,
  activeBackgroundColor: color.white,
  activeBorderColor: color.white,
};
