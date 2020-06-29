import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10
    },
    backgroundBar: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 10,
        height: 100,
        backgroundColor: '#004c4c',
        zIndex: 0
    },
    barValue: {
        zIndex: 1,
        position: 'absolute',
        width: 10,
        top: 0,
        left: 0,
        backgroundColor: '#66b2b2',
    },
    text: {
        position: 'absolute',
        top: 105,
        left: -5
    }
});