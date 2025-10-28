import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    mainContainer:{
        display: 'flex',
        width: '90%',
        padding: '2%',
        flexDirection: 'column',
        borderWidth: 0.5,          
        backgroundColor: '#ffffffff', 
        borderRadius: 8,
        borderColor: '#cccccc4d',
        alignItems: 'center',
        marginTop: 10
    },
    img:{
        width: '95%',
        height: 200,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#cccccc4d',
        borderRadius: 8,
        backgroundColor: '#f6f6f6',
        resizeMode: 'center'
    },
    description:{
        width: '95%',
        marginTop: 10,
        textAlign: 'justify',
        fontSize: 12,
    },
    buttonsContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '95%',
        marginTop: 10
    },
    button: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        backgroundColor: '#f6f6f6',
        borderRadius: 4,
    },
    buttonText: {
        color: 'black',
        fontWeight: '600',
        fontSize: 10
    }
});