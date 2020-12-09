import React from "react";
import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    // height: "100%",
    height: Dimensions.get("screen").height,
  },
  titles: {
    marginTop: "30%",

    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
  },
  subTitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  buttoncontainer: {
    position: "absolute",
    width: "100%",
    bottom: 50,
  },
  subSubTitle: {
    textDecorationLine: "underline",
  },
});

export default styles;
