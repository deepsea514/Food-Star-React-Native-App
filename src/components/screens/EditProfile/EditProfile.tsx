import * as React from 'react';
import {ScrollView} from 'react-native';
import {profile} from '@src/data/mock-profile';
import HeadingInformation from './HeadingInformation';
import ContactInformationForm from './ContactInformationForm';
import LinkedAccounts from './LinkedAccounts';

type EditProfileProps = {};

const EditProfile: React.FC<EditProfileProps> = () => {
  return (
    <ScrollView>
      <HeadingInformation profile={profile} />
      <ContactInformationForm profile={profile} />
      <LinkedAccounts />
    </ScrollView>
  );
};

export default EditProfile;
