import React from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import useDataApi from '../services/useDataApi';

const Cards = ({navigation}: any) => {
  const data = useDataApi();
  const renderItem = ({item, index}: any) => (
    <View style={styles.cards} key={index}>
      <Image style={styles.imgCard} source={{uri: item.image_uris.normal}} />
    </View>
  );

  return (
    <>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Main');
          }}>
          <Text>Home</Text>
        </TouchableOpacity>

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
    width: 160,
    height: 220,
  },
});

export default Cards;
