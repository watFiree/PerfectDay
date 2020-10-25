import React from 'react';
import { ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';

import Button from '../../components/Button';
import CloseButton from '../../components/CloseButton';
import GoodDeedCard from '../../components/GoodDeedCard';
import ProgressHeader from '../../components/HeaderWithProgress';
import Layout from '../../components/Layout';
import AddDeedForm from '../../components/SmallFormForUpdateData';
import Text from '../../components/Text';
import Title from '../../components/Title';
import { addGoodDeed } from '../../redux/actions/addGoodDeed';
import { calculateSanityScore } from '../../utils/calculateSanityScore';

const Sanity = () => {
  const dispatch = useDispatch();
  const state = useSelector(({ data }) => data.sanity);
  const [isFormOpened, setIsFormOpened] = React.useState(false);
  const [isPopoverOpened, setIsPopoverOpened] = React.useState(false);
  const [newGoodDeed, setNewGoodDeed] = React.useState('');

  const handleSubmit = () => {
    dispatch(addGoodDeed(newGoodDeed));
    setNewGoodDeed('');
  };

  return (
    <Layout>
      <ProgressHeader
        title={`Zdrowie \npsychiczne`}
        progress={calculateSanityScore(state.goodDeeds.length, state.completedTasks)}
      />
      <Text>Przyslowie dnia</Text>
      <Text size={21}>W dzisiejszym dniu wykonales 0 zadan</Text>
      <Wrapper>
        <Text>Dobre uczynki dzisiaj:</Text>
        <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
          {state.goodDeeds?.map((deed, index) => (
            <GoodDeedCard key={index} id={index} text={deed} />
          ))}
        </ScrollView>

        <Button onPress={() => setIsFormOpened(true)}>Dodaj dobry uczynek</Button>
      </Wrapper>
      <Button
        onPress={() =>
          setIsPopoverOpened(true)
        }>{`Sprawdź jak polepszyć \ntwoje samopoczucie`}</Button>
      {isFormOpened ? (
        <AddDeedForm
          title="Dodaj dobry uczynek"
          stateValue={newGoodDeed}
          setStateValue={(val: string) => setNewGoodDeed(val)}
          closeFunction={() => setIsFormOpened(false)}
          submitFunction={handleSubmit}
        />
      ) : null}
      {isPopoverOpened ? (
        <Popover>
          <CloseButton onPress={() => setIsPopoverOpened(false)} />
          <Title size={28} style={{ marginTop: 16, marginBottom: 16 }}>
            Nasze rady :
          </Title>
          {[
            '1. Pomedytuj przez 10 minut',
            '2. Przeczytaj książke',
            '3. Porozmawiaj z kimś',
            '4. Spędź czas przy czymś przyjemnym (Film,Serial)',
          ].map((advice, index) => (
            <Text key={index} size={21} style={{ marginTop: 8, marginBottom: 8 }}>
              {advice}
            </Text>
          ))}
          <Text size={16} style={{ marginTop: 16, fontWeight: 'bold' }}>
            {`Pamietaj ze gdy wykonacz jakąś czynność z podanych \nmożesz dodać ją do listy ;)`}
          </Text>
        </Popover>
      ) : null}
    </Layout>
  );
};

export default Sanity;

const Wrapper = styled.View`
  border-top-width: 1px;
  border-top-color: darkgray;
  border-bottom-width: 1px;
  border-bottom-color: darkgray;
  width: 100%;
  padding: 8px 0;
  flex: 0.6;
  margin-bottom: 16px;
`;

const Popover = styled.View`
  position: absolute;
  width: 80%;
  height: 80%;
  background-color: white;
  border: 1px solid darkgray;
  border-radius: 8px;
  flex: 1;
  align-items: center;
`;
