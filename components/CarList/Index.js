import React from "react";
import { Dimensions, FlatList, View } from "react-native";
import cars from "./Car";
import CarItem from "../CarItem/Index";

const Index = () => {
  return (
    <View>
      <FlatList
        key={0}
        data={cars}
        renderItem={({ item }) => <CarItem item={item} />}
        snapToAlignment={"start"}
        decelerationRate={"normal"}
        snapToInterval={Dimensions.get("screen").height}
      />
    </View>
  );
};

export default Index;
