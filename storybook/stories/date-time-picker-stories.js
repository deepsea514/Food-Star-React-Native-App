import * as React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Container, Text, DateTimePicker} from '@src/components/elements';

const DateTimePickerComponent = () => {
  const [date, setDate] = React.useState(new Date(1598051730000));

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  return (
    <Container style={{padding: 10}}>
      <Text isPrimary style={{ marginBottom: 10 }}>
        Selected Date Time: {date.toUTCString()}
      </Text>
      <DateTimePicker value={date} mode="datetime" onChange={onChange} />
    </Container>
  )
}

storiesOf('DateTimePicker', module).add('DateTimePicker', () => <DateTimePickerComponent/>);
