import React from "react";
import { View, StyleSheet, Alert, ScrollView } from "react-native";
import Header from "./src/components/Header";
import Report from "./src/components/Report";

export default function App() {
  const handleButtonPress = () => {
    Alert.alert("Aqui agregare la logica para agregar un nuevo reporte");
  };

  return (
    <>
      <View style={styles.cont}>
        <View>
          <Header
            title="Feed de reportes"
            onButtonPress={handleButtonPress}
            buttonText="+ Agregar"
          />
        </View>
        <ScrollView style={{ flexGrow: 1, marginBottom: 40 }}>
          <View style={styles.reportsContainer}>
            <Report
              img={require('./assets/user.png')} 
              imgEvi={require('./assets/reporte.png')} 
              name="Ana Garcia"
              location="Centro de la ciudad"
              hoursAgo={2}
              description="Problema con el alumbrado publico en la calle principal"
            ></Report>
            <Report
              img={require('./assets/user.png')} 
              imgEvi={require('./assets/reporte.png')} 
              name="Carlos Mendoza"
              location="Parque Central"
              hoursAgo={4}
              description="Basura acumulada en los contenedores del parque"
            ></Report>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cont: {
    display: "flex",
    marginTop: 20,
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "column",
    width: "100%",
  },

  reportsContainer: {
    display: "flex",
    flexDirection: "column",
    padding: 10,
    width: "100%",
    alignItems: "center",
  },
});
