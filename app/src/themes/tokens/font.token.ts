export type Font = {
  family: string;

  weight: {
    regular: number;
    bold: number;
  };

  color: {
    primary: string;
    secondary: string;
  };
};

export const fontFamily = "'Inter', sans-serif";

export const fontWeight = {
  regular: 400,
  bold: 500,
};
