import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    background: {
        backgroundColor: 'black',
        flex: 1
    },
    calculatorContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20
        
    },
    result: {
        color: 'white',
        fontSize: 60,
        marginBottom: 10,
        marginHorizontal: 10,
        textAlign: 'right'
    },
    smallResult: {
        color: 'rgba(255,255,255, 0.5)',
        fontSize: 30,
        textAlign: 'right'
    },
    calculatorRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    }
});