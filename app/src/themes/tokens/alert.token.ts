import color from './color.token';

export type AlertToken = {
  primary: {
    color: string;
    backgroundColor: string;
  };

  error: {
    color: string;
    backgroundColor: string;
  };
};

export const lightThemeAlert: AlertToken = {
  primary: {
    color: color.blue,
    backgroundColor: color.lightBlue,
  },

  error: {
    color: color.danger,
    backgroundColor: color.lightDanger,
  },
};

export const darkThemeAlert: AlertToken = {
  primary: {
    color: color.blue,
    backgroundColor: color.lightBlue,
  },

  error: {
    color: color.danger,
    backgroundColor: color.lightDanger,
  },
};
