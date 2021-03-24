import { useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'

import albumDetails from '../data/albumDetails';
import SongListItem from '../components/SongListItem/SongListItem';
import AlbumHeader from '../components/AlbumHeader/AlbumHeader';

const AlbumScreen = () => {

    const route = useRoute();

    useEffect(() => {
        console.log(route)
    }, [])

    return (
        <View style={styles.container}>
            
            <FlatList 
                data={albumDetails.songs}
                renderItem ={(({item}) => <SongListItem song={item} />)}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={() => <AlbumHeader album={albumDetails} /> }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  });

export default AlbumScreen;
