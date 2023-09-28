import React from "react";
import { Dimensions, Text, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import MovieCard from "./MovieCard";
import { useNavigation } from "@react-navigation/native";
var { width, height } = Dimensions.get("window");
const TrendingMovie = ({ data }: { data: any }) => {
  const navigation = useNavigation();
  const handleClick = (item: any) => {
    navigation.navigate("Movie", item );
  }; 
  return (
    <View style={{ marginBottom: 8 }}>
      <Text style={{ fontSize: 20, marginLeft: 4, color: "white", marginTop: 2, marginBottom: 2 }}>Movie Trending</Text>
      <Carousel
        data={data}
        renderItem={({ item }) => (
          <MovieCard item={item} handleClick={handleClick} />
        )}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.6}
        slideStyle={{ display: "flex", alignItems: "center" }}
      />
    </View>
  );
};

export default TrendingMovie;
