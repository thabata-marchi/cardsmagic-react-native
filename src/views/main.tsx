import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';

import useDataApi from '../services/useDataApi';

const Main = ({navigation}: any) => {
  const data = useDataApi();
  const [cardMagic, setCardMagic] = useState('');

  const handleChange = (value: string) => {
    data.filter((item) =>
      value === item.name ? setCardMagic(item.image_uris.normal) : null,
    );
  };

  const ShowSearch: Props = (props: string) => {
    const isSuccess = props.isSuccess;
    if (isSuccess !== '') {
      return <Image style={styles.imgCard} source={{uri: cardMagic}} />;
    }
    return <Text style={styles.resultSearch}>Registro não encontrado</Text>;
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.buttonNavigation}
          onPress={() => {
            navigation.navigate('Cards');
          }}>
          <Text style={styles.textButtonNavigation}>deck of cards</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.searchCards}
          placeholder={'Busque a carta. Ex.: Leveler'}
          onChangeText={handleChange}
        />
        <ShowSearch isSuccess={cardMagic} />
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#ececec',
  },
  buttonNavigation: {
    backgroundColor: '#5e4f67',
    padding: 20,
    borderRadius: 8,
    margin: 20,
  },
  textButtonNavigation: {
    color: '#FFF',
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  searchCards: {
    borderWidth: 2,
    borderColor: '#5e4f67',
    padding: 20,
    borderRadius: 8,
    backgroundColor: '#ecebe5',
    fontSize: 18,
    textTransform: 'uppercase',
    width: 300,
  },
  resultSearch: {
    margin: 20,
    fontSize: 18,
  },
  imgCard: {
    marginTop: 20,
    width: 200,
    height: 280,
  },
});

export default Main;
