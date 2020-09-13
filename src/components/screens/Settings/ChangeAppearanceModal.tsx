import * as React from 'react';
import {Dialog, RadioButton} from '@src/components/elements';
import {RadioOption} from '@src/components/elements/RadioButton/RadioButton';
import themeContext from '@src/context/theme-context';
import {ColorSchemeName} from 'react-native-appearance';

type ChangeAppearanceModalProps = {
  isVisible: boolean;
  hideModal: () => void;
};

const appearanceOptions: RadioOption[] = [
  {
    label: 'Dark',
    value: 'dark',
  },
  {
    label: 'Light',
    value: 'light',
  },
  {
    label: 'System',
    value: 'system',
  },
];

const ChangeAppearanceModal: React.FC<ChangeAppearanceModalProps> = ({
  isVisible,
  hideModal,
}) => {
  const {setTheme, theme, useSystemTheme, setUseSystemTheme} = React.useContext(
    themeContext,
  );

  let defaultValue = theme;
  if (useSystemTheme) {
    defaultValue = 'system';
  }

  const _onItemPressed = (item: RadioOption) => {
    const selectedTheme = item.value;
    if (selectedTheme !== 'system') {
      setTheme(selectedTheme as ColorSchemeName);
      setUseSystemTheme(false);
    } else {
      setUseSystemTheme(true);
    }
  };

  return (
    <Dialog
      title="Change Appearance"
      isVisible={isVisible}
      onBackdropPress={hideModal}>
      <RadioButton
        data={appearanceOptions}
        onItemPressed={_onItemPressed}
        defaultValue={defaultValue}
      />
    </Dialog>
  );
};

export default ChangeAppearanceModal;
