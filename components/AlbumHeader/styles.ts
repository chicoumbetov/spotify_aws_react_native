import { StyleSheet } from 'react-native'

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    image: {
        width: 175,
        height: 175,
        margin: 10,
    },
    creatorContainer: {
        flexDirection: 'row',
        margin: 5,
    },
    creator: {
        color: 'lightgray',
        margin: 5,
    },
    likes: {
        color: 'lightgray',
        margin: 5,
        fontSize: 18,
    },
    name: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    playButton: {
        backgroundColor: '#1CD05D',
        height: 60,
        width: 170,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
})

export default styles;