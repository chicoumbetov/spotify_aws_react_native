import { useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { API, graphqlOperation } from 'aws-amplify';

import albumDetails from '../data/albumDetails';
import SongListItem from '../components/SongListItem/SongListItem';
import AlbumHeader from '../components/AlbumHeader/AlbumHeader';
import { getAlbum } from '../src/graphql/queries';

const AlbumScreen = () => {

    const route = useRoute();
    const albumId = route.params.id;

    const [album, setAlbum] = useState(null)

    useEffect(() => {

        const fetchAlbumDetails = async () => {
            try {
                const data = await API.graphql(graphqlOperation(getAlbum, {id: albumId } ));
                setAlbum(data.data.getAlbum)
                //console.log(data)
            } catch (error) {
                console.error(error)
            }
        }
        
        fetchAlbumDetails();
    }, [])

    if (!album) {
        return <Text>Loading...</Text>
    }

    return (
        <View style={styles.container}>
            
            <FlatList 
                data={album.songs.items}
                renderItem ={(({item}) => <SongListItem song={item} />)}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={() => <AlbumHeader album={album} /> }
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
