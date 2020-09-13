import {useTheme} from '@react-navigation/native';

type ThemeColors = {
  primary: string;
  secondary: string;
  background: string;
  card: string;
  text: string;
  border: string;
};

const useThemeColors = () => {
  const {colors} = useTheme();
  const themeColors: ThemeColors = {
    secondary: colors.text,
    ...colors,
  };
  return themeColors;
};

export default useThemeColors;
