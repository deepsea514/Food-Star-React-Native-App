import * as React from 'react';
import {Container, TextField, Text, Button} from '@src/components/elements';
import {Profile} from '@src/data/mock-profile';
import styles from './styles';

type ContactInformationFormProps = {
  profile: Profile;
};

const ContactInformationForm: React.FC<ContactInformationFormProps> = ({
  profile,
}) => {
  return (
    <Container style={styles.container}>
      <TextField defaultValue={profile.name} textContentType="name" hasMargin />
      <TextField
        defaultValue={profile.phone}
        textContentType="telephoneNumber"
        hasMargin
      />
      <TextField
        defaultValue={profile.email}
        textContentType="emailAddress"
        hasMargin
      />
      <Text isSecondary style={styles.note}>
        Communications and transaction history will be sent to this email
        address
      </Text>
      <Button>
        <Text isWhite isBold>
          Save
        </Text>
      </Button>
    </Container>
  );
};
export default ContactInformationForm;
