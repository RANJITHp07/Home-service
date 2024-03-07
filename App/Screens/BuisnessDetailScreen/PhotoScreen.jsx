import { View, Text, FlatList, Image } from 'react-native';
import React from 'react';
import Heading from '../../Component/Heading';

export default function PhotoScreen({ images }) {
  return (
    <View>
      <Heading text={'Photos'}/>
      <FlatList
        data={images}
        numColumns={2}
        renderItem={({ item }) => (
          <Image source={{ uri: item.url }} style={{ width: '100%', flex: 1, height: 120,borderRadius: 10 , margin: 7}} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
