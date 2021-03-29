import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 48,
        width: '100%',
        backgroundColor: '#212121',
        borderWidth: 2,
        borderColor: 'black',
        //paddingVertical: 10,
        padding: 10,
    },
    row: {
        flexDirection: 'row',
    },
    progress: {
        height: 7,
        backgroundColor: '#bcbcbc',
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    nameContainer: {
        flex: 1,
        marginRight: 10,
        flexDirection: 'row',
        alignItems: 'center',

        //borderColor: 'white', borderWidth: 1,
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 90,
        justifyContent: 'space-around',

        //borderColor: 'white', borderWidth: 1,
    },
    image: {
        width: 70,
        height: 70,
        marginRight: 10,
    },
    title: {
        color: 'white',
        fontSize: 16,
        margin: 4,
    },
    artist: {
        color: 'lightgray',
        fontSize: 16,
        margin: 3,
    }
})

export default styles;