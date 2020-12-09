import React from "react";
import { Pressable, Text, View } from "react-native";
import styles from "./Styles";

const Index = ({ type, content, onPress }) => {
  const background = type == "primary" ? "#171A20CC" : "#FFFFFFA6";
  const textcolor = type == "primary" ? "#FFFFFFFF" : "#171A20";
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: background }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, { color: textcolor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default Index;
