import React from 'react';
import { View, Image, Text, TouchableOpacity} from 'react-native';
import { styles } from '../styles/Report.styles';
import HeaderReport from './HeaderReport';

type ReportProps = {
    imgEvi?: any;
    img?: any;
    description?: string;
    name?: string;
    location?: string;
    hoursAgo?: number;  
};

const Report: React.FC<ReportProps> = ({imgEvi = require('../../assets/user.png'), img = require('../../assets/user.png'), name = 'Nombre no disponible', location = 'Ubicación no disponible', hoursAgo = 0, description = 'Descripcion no disponible'}) => {
    return(
        <>
            <View style={styles.mainContainer}>
                <HeaderReport img={img} name={name} location={location} hoursAgo={hoursAgo}></HeaderReport>
                <Image source={imgEvi} style = {styles.img}></Image>
                <Text style = {styles.description}>{description}</Text>
                <View style = {styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>👍 Me gusta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>💬 Comentar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>📥 Compartir</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
};

export default Report;