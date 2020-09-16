import * as React from 'react';
import {
  Switch,
  View,
  ScrollView,
  Linking,
  I18nManager,
  Alert,
} from 'react-native';
import {Text, Icon, Divider, Section} from '@src/components/elements';
import ListRowItem from '@src/components/elements/List/ListRowItem';
import styles from './styles';
import ChangeAppearanceModal from './ChangeAppearanceModal';
import ChangeLanguageModal from './ChangeLanguageModal';
import themeContext from '@src/context/theme-context';
import {getStoreURL} from '@src/utils/store-info';

type SettingsProps = {};

const Settings: React.FC<SettingsProps> = () => {
  const {theme, useSystemTheme} = React.useContext(themeContext);
  const [enableRTL, setEnableRTL] = React.useState(false);
  const [
    isAppearanceModalVisible,
    setIsAppearanceModalVisible,
  ] = React.useState(false);
  const [isLanguageModalVisible, setIsLanguageModalVisible] = React.useState(
    false,
  );

  React.useEffect(() => {
    setEnableRTL(I18nManager.isRTL);
  }, []);

  const _hideAppearanceModal = () => {
    setIsAppearanceModalVisible(false);
  };

  const _hideLanguageModal = () => {
    setIsLanguageModalVisible(false);
  };

  const chevronIconName = I18nManager.isRTL ? 'chevron-left' : 'chevron-right';

  const _renderAppSettingsSection = () => {
    return (
      <Section title="App Settings">
        <ListRowItem
          title="Appearance"
          onPress={() => setIsAppearanceModalVisible(true)}
          rightIcon={
            <View style={styles.settingOptionContainer}>
              <Text style={styles.settingOptionText}>
                {useSystemTheme ? 'System' : theme.toString()}
              </Text>
              <Icon name={chevronIconName} />
            </View>
          }
        />
        <Divider />
        <ListRowItem
          title="RTL Layout"
          rightIcon={
            <Switch
              value={enableRTL}
              onValueChange={() => {
                setEnableRTL(!enableRTL);
                I18nManager.forceRTL(!enableRTL);
                Alert.alert(
                  'Reload this page',
                  'Please reload this page to change the UI direction! ',
                );
              }}
            />
          }
        />
        <Divider />
        <ListRowItem
          title="Language"
          onPress={() => setIsLanguageModalVisible(true)}
          rightIcon={
            <View style={styles.settingOptionContainer}>
              <Text style={styles.settingOptionText}>English</Text>
              <Icon name={chevronIconName} />
            </View>
          }
        />
      </Section>
    );
  };

  const _renderMoreInformationSection = () => {
    return (
      <Section title="More Information">
        <ListRowItem
          title="About Us"
          onPress={() => Linking.openURL(getStoreURL())}
          rightIcon={
            <View style={styles.settingOptionContainer}>
              <Icon name={chevronIconName} />
            </View>
          }
        />
        <Divider />
        <ListRowItem
          title="Rate The App"
          onPress={() => Linking.openURL(getStoreURL())}
          rightIcon={
            <View style={styles.settingOptionContainer}>
              <Icon name={chevronIconName} />
            </View>
          }
        />
        <Divider />
        <ListRowItem
          title="Follow Us On Facebook"
          onPress={() => Linking.openURL(getStoreURL())}
          rightIcon={
            <View style={styles.settingOptionContainer}>
              <Icon name={chevronIconName} />
            </View>
          }
        />
        <Divider />
        <ListRowItem
          title="Follow Us On Instagram"
          onPress={() => Linking.openURL(getStoreURL())}
          rightIcon={
            <View style={styles.settingOptionContainer}>
              <Icon name={chevronIconName} />
            </View>
          }
        />
        <Divider />
        <ListRowItem
          title="Visit Our Website"
          onPress={() => Linking.openURL(getStoreURL())}
          rightIcon={
            <View style={styles.settingOptionContainer}>
              <Icon name={chevronIconName} />
            </View>
          }
        />
        <Divider />
        <ListRowItem
          title="Contact Us"
          onPress={() => Linking.openURL(getStoreURL())}
          rightIcon={
            <View style={styles.settingOptionContainer}>
              <Icon name={chevronIconName} />
            </View>
          }
        />
      </Section>
    );
  };

  return (
    <View style={styles.root}>
      <ScrollView>
        {_renderAppSettingsSection()}
        {_renderMoreInformationSection()}
      </ScrollView>
      <ChangeAppearanceModal
        isVisible={isAppearanceModalVisible}
        hideModal={_hideAppearanceModal}
      />
      <ChangeLanguageModal
        isVisible={isLanguageModalVisible}
        hideModal={_hideLanguageModal}
      />
    </View>
  );
};

export default Settings;
