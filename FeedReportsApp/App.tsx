import React from "react";
import { View, StyleSheet, Alert, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "./src/components/Header";
import Report from "./src/components/Report";

import NewReportScreen from "./src/screens/NewReportScreen";

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }: any) {
  const handleButtonPress = () => {
    navigation.navigate("Nuevo Reporte");
  };

  return (
    <View style={styles.cont}>
      <Header
        title="Feed de reportes"
        onButtonPress={handleButtonPress}
        buttonText="+ Agregar"
      />
      <ScrollView style={{ flexGrow: 1, marginBottom: 40 }}>
        <View style={styles.reportsContainer}>
          <Report
            img={require("./assets/user.png")}
            imgEvi={require("./assets/reporte.png")}
            name="Ana Garcia"
            location="Centro de la ciudad"
            hoursAgo={2}
            description="Problema con el alumbrado público en la calle principal"
          />
          <Report
            img={require("./assets/user.png")}
            imgEvi={require("./assets/reporte.png")}
            name="Carlos Mendoza"
            location="Parque Central"
            hoursAgo={4}
            description="Basura acumulada en los contenedores del parque"
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Nuevo Reporte" component={NewReportScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  cont: {
    flexDirection: "column",
    width: "100%",
  },
  reportsContainer: {
    flexDirection: "column",
    padding: 10,
    width: "100%",
    alignItems: "center",
  },
});
