import React, { useState } from "react";
import {
  View,
  Text,
  Alert,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";

import { styles } from "../styles/NewReportScreen.styles";

export default function NewReportScreen() {
  const [hasLocationPermission, setHasLocationPermission] = useState(false);
  const [hasMediaPermission, setHasMediaPermission] = useState(false);
  const [description, setDescription] = useState("");

  const requestLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permiso denegado", "No se puede acceder a la ubicación.");
      setHasLocationPermission(false);
    } else {
      setHasLocationPermission(true);
      Alert.alert("Permiso concedido", "Ubicación habilitada correctamente");
    }
  };

  const requestImagePermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permiso denegado", "No se puede acceder a las imágenes.");
      setHasMediaPermission(false);
    } else {
      setHasMediaPermission(true);
      Alert.alert("Permiso concedido", "Acceso a imágenes habilitado");
    }
  };

  const handleSubmit = () => {
    Alert.alert("Reporte enviado", "Tu reporte se enviará");
  };

  return (
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>

          <View style={styles.section}>
            <Text style={styles.label}>📍 Permiso de ubicación</Text>
            <TouchableOpacity
              onPress={requestLocationPermission}
              style = {styles.button}
            >
                <Text style={styles.buttonText}>Actualizar ubicacion</Text>
            </TouchableOpacity>
            <Text style={styles.status}>
              Stockton St 1-99, San Francisco, CA
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>📸 Permiso de imágenes</Text>
            <TouchableOpacity
              onPress={requestImagePermission}
              style = {styles.buttonImg}
            >
                <Text style={styles.buttonTextImg}>📷{"\n"}Toca para agregar imagen</Text>
            </TouchableOpacity>
          </View>

          {/* Campo de descripción */}
          <View style={styles.section}>
            <Text style={styles.label}>📝 Descripción</Text>
            <TextInput
              style={styles.textArea}
              placeholder="Describe el problema que quieres reportar..."
              multiline
              value={description}
              onChangeText={setDescription}
            />
          </View>

          {/* Botón de enviar */}
          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleSubmit}
            activeOpacity={0.8}
          >
            <Text style={styles.submitText}>Enviar Reporte</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
  );
}

