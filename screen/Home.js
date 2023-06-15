import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text>Home</Text>
      <View style={styles.icon}>
        <Image style={styles.image} source={"../storages/icon/history.png"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    width: 430,
    height: 500,
    top: 50,
  },
  image: {
    width: 50,
    height: 50,
    top: 100,
    left: 50,
  },
});
