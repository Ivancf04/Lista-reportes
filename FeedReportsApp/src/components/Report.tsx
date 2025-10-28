import React from 'react';
import { View, Image, Text, TouchableOpacity} from 'react-native';
import { styles } from '../styles/Report.styles';
import HeaderReport from './HeaderReport';

type ReportProps = {
    img?: any;
};

const Report: React.FC<ReportProps> = ({img = require('../../assets/user.png')}) => {
    return(
        <>
            <View style={styles.mainContainer}>
                <HeaderReport img={'../../assets/user.png'} name='Ana Garcia' location='Centro de la ciudad' hoursAgo={2}></HeaderReport>
                <Image style = {styles.img}></Image>
                <Text style = {styles.description}>Problema con el alumbrado publico de la ciudad</Text>
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
            <View style={styles.mainContainer}>
                <HeaderReport img={'../../assets/user.png'} name='Carlos Mendoza' location='Parque central' hoursAgo={4}></HeaderReport>
                <Image style = {styles.img}></Image>
                <Text style = {styles.description}>Basura acumulada en los contenedores del parque</Text>
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