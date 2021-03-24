import { StyleSheet } from 'react-native'

const styles = StyleSheet.create ({
    container: {
        flexDirection: 'row',
        margin: 15,
    },
    rightContainer: {
        justifyContent: 'space-around',
        marginLeft: 15,
    },
    image: {
        width: 100,
        height: 100,
    },
    title: {
        color: 'white',
        fontSize: 23,

    },
    artist: {
        color: 'lightgray',
        fontSize: 20,
    },
})

export default styles;