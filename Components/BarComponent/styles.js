import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        height: 10,
        paddingTop: 10,
        paddingBottom: 10,
        display: 'flex',
        flex: 1,
    },
    backgroundBar: {
        position: 'absolute',
        backgroundColor: '#66b2b2',
        top: 0,
        left: 130,
        height: 17,
        width: 200,
        zIndex: 0,
    },
    barValue: {
        backgroundColor: '#004c4c',
        zIndex: 1,
        position: 'absolute',
        height: 17,
        top: 0,
        left: 130,
    },
    text: {
        paddingRight: 5,
        position: 'absolute',
        top: 10,
        left: 0,
        width: 120
    }
});