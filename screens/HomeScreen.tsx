import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import { API, graphqlOperation } from 'aws-amplify';

import AlbumCategory from '../components/AlbumCategory/AlbumCategory'
import albumCategories from '../data/albumCategories';
import { listAlbumCategorys } from '../src/graphql/queries';

export default function HomeScreen() {

  const [categories, setCategories] = useState([])

  useEffect(() => {

    const fetchAlbumCategories = async () => {
      try {
        const data = await API.graphql(graphqlOperation(listAlbumCategorys));
        //console.log(data.data.listAlbumCategorys.items)
        setCategories(data.data.listAlbumCategorys.items);
      } catch (error) {
        console.error(error)
      }
    }

    fetchAlbumCategories();
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <AlbumCategory 
            title={item.title}
            albums={item.albums.items}
          />
        )}
        keyExtractor={(item) => item.id }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});