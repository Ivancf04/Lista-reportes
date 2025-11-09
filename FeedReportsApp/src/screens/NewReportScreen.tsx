import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Alert,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Platform,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import * as Device from "expo-device";
import * as Location from "expo-location";
import { CameraView, useCameraPermissions } from "expo-camera";

import { styles } from "../styles/NewReportScreen.styles";

export default function NewReportScreen({navigation}: any) {
  const [hasLocationPermission, setHasLocationPermission] = useState(false);
  const [description, setDescription] = useState("");

  // Estado para la ubicación
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [address, setAddress] = useState<string>("");

  // Estado para la cámara e imagen
  const [cameraVisible, setCameraVisible] = useState(false);
  const [cameraPermission, requestCameraPermission] = useCameraPermissions();
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const cameraRef = useRef<CameraView>(null);

  //Funciones de ubicacion
  const requestLocationPermission = async () => {
    if (Platform.OS === "android" && !Device.isDevice) {
      setErrorMsg(
        "Esta función no funciona en emuladores Android. Usa un dispositivo real."
      );
      return;
    }

    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permiso denegado para acceder a la ubicación.");
      Alert.alert("Permiso denegado", "No se puede acceder a la ubicación.");
      setHasLocationPermission(false);
      return;
    }

    setHasLocationPermission(true);

    const loc = await Location.getCurrentPositionAsync({});
    setLocation(loc);

    // obtener dirección legible
    const [addr] = await Location.reverseGeocodeAsync({
      latitude: loc.coords.latitude,
      longitude: loc.coords.longitude,
    });

    const formattedAddress = addr
      ? `${addr.street || ""} ${addr.name || ""}, ${addr.city || ""}, ${
          addr.region || ""
        }`
      : `${loc.coords.latitude.toFixed(4)}, ${loc.coords.longitude.toFixed(4)}`;

    setAddress(formattedAddress);
    Alert.alert("Info", "Ubicación actualizada");
  };

  //Funciones de camara
  const handleCameraPress = async () => {
    if (!cameraPermission) return;

    if (!cameraPermission.granted) {
      const { status } = await requestCameraPermission();
      if (status !== "granted") {
        Alert.alert("Permiso denegado", "No se puede acceder a la cámara.");
        return;
      }
    }

    setCameraVisible(true);
  };

  const takePhoto = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setPhotoUri(photo.uri);
      setTimeout(() => {
        setCameraVisible(false);
      }, 100);
    }
  };

  const cancelPhoto = async () => {
    if (cameraRef.current) {
      setTimeout(() => {
        setCameraVisible(false);
      }, 100);
    }
  };

  if (cameraVisible) {
    return (
      <View style={styles.cameraContainer}>
        <CameraView ref={cameraRef} style={styles.camera} facing="back" />

        <View style={styles.cameraButtonContainer}>
          <TouchableOpacity onPress={takePhoto} style={styles.shutterButton}>
            <View style={styles.shutterInner} />
          </TouchableOpacity>
          <TouchableOpacity onPress={cancelPhoto} style={styles.cancelButton}>
            <Text style={styles.cancelText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const handleSubmit = () => {
    Alert.alert("Reporte enviado", "Tu reporte se enviará");
    if (!photoUri) {
      Alert.alert(
        "Falta imagen",
        "Debes tomar una foto para enviar el reporte."
      );
      return;
    }

    const updatedReport = {
      img: require("../../assets/user.png"),
      imgEvi: { uri: photoUri },
      name: "Ana Garcia",
      location: address || "Ubicación desconocida",
      hoursAgo: 0,
      description,
    };

    navigation.navigate("Inicio", { updatedReport });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={50}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <View style={styles.section}>
            <Text style={styles.label}>📍 Ubicación del problema</Text>
            <TouchableOpacity
              onPress={requestLocationPermission}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Actualizar ubicacion</Text>
            </TouchableOpacity>
            <Text style={styles.status}>
              {address || errorMsg || "Actualiza tu ubicacion"}
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>📸 Imagen del problema</Text>
            <TouchableOpacity
              onPress={handleCameraPress}
              style={styles.buttonImg}
            >
              {photoUri ? (
                <Image
                  source={{ uri: photoUri }}
                  style={styles.reportImg}
                  resizeMode="cover"
                />
              ) : (
                <Text style={styles.buttonTextImg}>
                  📷{"\n"}Toca para agregar imagen
                </Text>
              )}
            </TouchableOpacity>
          </View>

          {/* Campo de descripción */}
          <View style={styles.section}>
            <Text style={styles.label}>📝 Descripción del problema</Text>
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
    </KeyboardAvoidingView>
  );
}
