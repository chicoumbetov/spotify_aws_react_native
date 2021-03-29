import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import React, { useContext, useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

import { AppContext } from '../../AppContext';
import { API, graphqlOperation } from 'aws-amplify';
import { getSong } from '../../src/graphql/queries';

const song = {
    id: '1',
    uri: 'https://media.acast.com/mamapodden/10.markiztainton/media.mp3',
    //uri: 'https://ia800204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act1_shakespeare.mp3',
    imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    title: 'High on You',
    artist: 'Shoco',
}

const PlayerWidget = () => {

    const [song, setSong] = useState(null)
    const [sound, setSound] = useState<Sound|null>(null)
    const [isPlaying, setIsPlaying] = useState<boolean>(true)
    const [duration, setDuration] = useState<number | null>(null)
    const [position, setPosition] = useState<number | null>(null)

    const { songId } = useContext(AppContext)

    useEffect(() => {
        //fetch data about song whenever songId changed
        const fetchSong = async () => {
            try {
                const data = await API.graphql(graphqlOperation(getSong, { id: songId }))
                // console.log(data)
                setSong(data.data.getSong)
            } catch (error) {
                console.log(error)
            }
        }
        
        fetchSong()
    }, [songId])

    // PAUSE/ PLAY IMPLEMENTATION
    const onPlaybackStatusUpdate = (status) => {
        //console.log(status)
        setIsPlaying(status.isPlaying);
        setDuration(status.durationMillis);
        setPosition(status.positionMillis);
    }

    const playCurrentSong = async () => {
        if (sound) {
            await sound.unloadAsync();
        }

        const { sound: newSound } = await Audio.Sound.createAsync(
            { uri: song.uri },
            { shouldPlay: isPlaying },
            onPlaybackStatusUpdate
        );

        setSound(newSound)
    }

    useEffect(() => {
        if (song) {
            playCurrentSong();
        }
        
    }, [song])

    const onPlayPausePress = async () => {
        if (!sound) {
            return;
        }
        if (isPlaying) {
            await sound.stopAsync();
        } else {
            await sound.playAsync();
        }
    }

    // DURATION OF MUSIC SHOWN
    const getProgress = () => {
        if (sound === null || duration === null || position === null) {
            return 0;
        }
        return (position / duration) * 100;
    }

    //show playerWidget only when we click on music from album to play it
    if (!song) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={[styles.progress, { width: `${getProgress()}%` }]} />
            <View style={styles.row}>
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
                        <TouchableOpacity onPress={onPlayPausePress} >
                            <FontAwesome name={isPlaying ? "pause" : "play"} size={30} color={"white"} />
                        </TouchableOpacity>

                    </View>
                </View>
            </View>


        </View>
    )
}

export default PlayerWidget;
