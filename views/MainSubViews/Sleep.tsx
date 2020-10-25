import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/native';

import Button from '../../components/Button';
import CloseButton from '../../components/CloseButton';
import ProgressHeader from '../../components/HeaderWithProgress';
import Input from '../../components/Input';
import Layout from '../../components/Layout';
import SetSleepForm from '../../components/SmallFormForUpdateData';
import Text from '../../components/Text';
import Title from '../../components/Title';
import { setSleepTime as updateSleepTimeFunction } from '../../redux/actions/setSleepTime';
import { calculateSleepScore } from '../../utils/calculateSleepScore';

const Sleep = () => {
  const state = useSelector(({ data }) => data);
  const dispatch = useDispatch();
  const [sleepTime, setSleepTime] = React.useState(state.sleep.score);
  const [isFormOpened, setIsFormOpened] = React.useState(false);

  console.log(state, sleepTime);
  return (
    <Layout>
      <ProgressHeader title="Sen" progress={calculateSleepScore(state.sleep.score)} />
      <Text size={21} style={{ marginBottom: 12 }}>
        Ostatniej nocy spałes {state.sleep.score} godzin.
      </Text>
      {isFormOpened ? null : <Button onPress={() => setIsFormOpened(true)}>Zaktualizuj</Button>}
      {isFormOpened ? (
        <SetSleepForm
          title="Dzisiejszej nocy spałes :"
          stateValue={sleepTime}
          setStateValue={(val: number) => setSleepTime(Number(val))}
          closeFunction={() => setIsFormOpened(false)}
          submitFunction={() => dispatch(updateSleepTimeFunction(sleepTime))}
        />
      ) : null}
    </Layout>
  );
};

export default Sleep;
