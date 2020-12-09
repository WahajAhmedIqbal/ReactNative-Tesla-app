import React from "react";
import { ImageBackground, Text, View } from "react-native";
import styles from "./style";
import ButtonStyle from "../ButtonStyles.js/Index";

const Index = (props) => {
  const { name, tagline, taglineTD, image } = props.item;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagline} <Text style={styles.subSubTitle}>{taglineTD}</Text>
        </Text>
      </View>
      <View style={styles.buttoncontainer}>
        <ButtonStyle
          content={"Custom Order"}
          type={"primary"}
          onPress={() => {
            console.log("cumstom button press");
          }}
        />
        <ButtonStyle
          content={"Existing Inventory"}
          type={"secondary"}
          onPress={() => {
            console.log("existing inventory");
          }}
        />
      </View>
    </View>
  );
};

export default Index;
