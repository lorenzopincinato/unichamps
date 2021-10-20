import color from './color.token';

export type InputToken = {
  color: string;
  placeholderColor: string;
  backgroundColor: string;
  borderColor: string;

  focusBorderColor: string;
};

export const lightThemeInput: InputToken = {
  color: color.black,
  placeholderColor: color.gray,
  backgroundColor: color.white,
  borderColor: color.lightGray,

  focusBorderColor: color.blue,
};

export const darkThemeInput: InputToken = {
  color: color.white,
  placeholderColor: color.deepGray,
  backgroundColor: color.black,
  borderColor: color.deepGray,

  focusBorderColor: color.white,
};
