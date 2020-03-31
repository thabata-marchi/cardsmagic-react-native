import React from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import useDataApi from '../services/useDataApi';

const Main = () => {
  const data = useDataApi();
  console.log(data);

  const renderItem = ({item, index}: any) => (
    <View style={styles.cards} key={index}>
      <Image style={styles.imgCard} source={{uri: item.image_uris.normal}} />
    </View>
  );

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text>Teste</Text>

        <FlatList
          data={data}
          keyExtractor={(item: any) => item.id}
          numColumns={2}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  cards: {
    margin: 10,
  },
  imgCard: {
    width: 180,
    height: 260,
  },
});

export default Main;
