/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import {
  AppearanceProvider,
  useColorScheme,
  ColorSchemeName,
} from 'react-native-appearance';
import RootNavigation from '@src/components/routes/RootNavigation';
import CartProvider from '@src/components/common/CartProvider';
import ThemeContext from '@src/context/theme-context';
import AuthProvider from '@src/components/common/AuthProvider/AuthProvider';

const App = () => {
  const scheme = useColorScheme();
  const [currentTheme, setCurrentTheme] = React.useState('dark');
  const [useSystemTheme, setUseSystemTheme] = React.useState(true);

  React.useEffect(() => {
    if (useSystemTheme) {
      setCurrentTheme(scheme);
    }
  }, [scheme, useSystemTheme]);

  const _setTheme = React.useCallback((theme: ColorSchemeName) => {
    setCurrentTheme(theme);
  }, []);

  return (
    <AppearanceProvider>
      <ThemeContext.Provider
        value={{
          theme: currentTheme,
          useSystemTheme,
          setTheme: _setTheme,
          setUseSystemTheme,
        }}>
        <AuthProvider>
          <CartProvider>
            <RootNavigation />
          </CartProvider>
        </AuthProvider>
      </ThemeContext.Provider>
    </AppearanceProvider>
  );
};

export default App;
