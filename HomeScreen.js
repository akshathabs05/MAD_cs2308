import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.logo}>Argon</Text>

      <Text style={styles.heading}>Design System</Text>

      <Text style={styles.subtitle}>
        Fully coded React Native components.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("CreateAccount")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#370876",
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },

  logo: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
    marginBottom: 20
  },

  heading: {
    fontSize: 32,
    color: "white",
    fontWeight: "bold"
  },

  subtitle: {
    fontSize: 16,
    color: "white",
    marginTop: 10,
    marginBottom: 40
  },

  button: {
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 20
  },

  buttonText: {
    color: "#db3636",
    fontWeight: "bold"
  }
});
