import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { styles } from '../styles/Header.styles';

type HeaderProps = {
  title: string;
  onButtonPress: () => void;
  buttonText?: string;
};

const Header: React.FC<HeaderProps> = ({ title, onButtonPress, buttonText = 'Botón' }) => {
  return (
    <>
        <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.button} onPress={onButtonPress}>
            <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.linea} />
    </>
  );
};

export default Header;
