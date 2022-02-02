import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
          <Image style={styles.soon} source={require("../../media/logo.png")} />
      </TouchableOpacity>

      <TouchableOpacity>
          <Image style={styles.send} source={require("../../media/send.png")} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: "#ffff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 2,
  },
  soon: {
      marginTop: 20,
  },
  send: {
    width: 28,
    height: 28,
    marginTop: 20,
  }
});
