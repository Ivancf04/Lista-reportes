import React from 'react';
import { View, Text, Image} from 'react-native';
import { styles } from '../styles/HeaderReport.styles';

type HeaderProps = {
  img?: any;
  name?: string;
  location?: string;
  hoursAgo?: number;
};

const HeaderReport: React.FC<HeaderProps> = ({img = require('../../assets/user.png') ,name = 'Nombre no disponible', location = 'Ubicación no disponible', hoursAgo = 0}) => {
    return(
        <>
            <View style={styles.container}>
                <Image source={img} style={styles.img} />
                <View style={styles.infoContainer}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.location}>{location}</Text>
                </View>
                <Text style={styles.hoursAgo}>Hace {hoursAgo} horas</Text>
            </View>
            
        </>
    );
}

export default HeaderReport;