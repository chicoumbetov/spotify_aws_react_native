import { AntDesign, FontAwesome } from '@expo/vector-icons';
import React, { useEffect } from 'react'
import { Text, Image, View } from 'react-native'
import styles from './styles';

import { Audio, Video } from 'expo-av';

const song = {
    id: '1',
    uri: 'https://media.acast.com/mamapodden/10.markiztainton/media.mp3',
    imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    title: 'High on You',
    artist: 'Shoco',
}

const PlayerWidget = () => {

    const onPlaybackStatusUpdate = (status) => {
        console.log(status)
    }

    const playCurrentSong = async () => {
        const { sound } = await Audio.Sound.createAsync(
            { uri: song.uri },
            { shouldPlay: true},
            onPlaybackStatusUpdate
        );
    }

    useEffect(() => {
        //play the song
        playCurrentSong();
    }, [])

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: song.imageUri }}
                style={styles.image}
            />
            <View style={styles.rightContainer}>
                <View style={styles.nameContainer}>
                    <Text style={styles.title}>{song.title} -</Text>
                    <Text style={styles.artist}>{song.artist}</Text>
                </View>
                <View style={styles.iconsContainer}>
                    <AntDesign name="hearto" size={30} color={"white"} />
                    <FontAwesome name="play" size={30} color={"white"} />
                </View>
            </View>
        </View>
    )
}

export default PlayerWidget;
