import { Dispatch } from 'redux';

type ThemeAction = {
  type: 'FETCH_THEME' | 'SET_THEME';
  theme: string;
};

export const themeReducer = (state: string, action: ThemeAction): string => {
  switch (action.type) {
    case 'FETCH_THEME': {
      return action.theme;
    }
    case 'SET_THEME': {
      return action.theme;
    }
    default:
      return 'light';
  }
};

export const fetchTheme = () => (dispatch: Dispatch<ThemeAction>): void => {
  const themeStorage = localStorage.getItem('themeFDP');
  console.log(themeStorage);
  dispatch({
    type: 'FETCH_THEME',
    theme: themeStorage || 'light',
  });
};

export const setTheme = (type: string) => (
  dispatch: Dispatch<ThemeAction>,
): void => {
  localStorage.setItem('themeFDP', type);

  dispatch({
    type: 'SET_THEME',
    theme: type,
  });
};
