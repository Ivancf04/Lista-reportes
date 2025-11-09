import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        padding: '2%',
        display: 'flex',
        width: '100%',
        flexDirection: 'row'
    },
    img:{
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
        alignSelf: 'center'
    },
    infoContainer:{
        alignSelf: 'center',
        width: '50%'
    },
    name:{
        fontWeight: 'bold'
    },
    location:{
        color: 'gray',
        overflow: 'hidden'
    },
    hoursAgo:{
        marginLeft: 'auto',
        alignSelf: 'center',
        color: 'gray',
        fontSize: 10
    }
});