import React from "react";
import { Dimensions, Text, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import MovieCard from "./MovieCard";
var { width, height } = Dimensions.get("window");
const TrendingMovie = ({ data }) => {
  const handleClick = () => {
    console.log("abc");
  };
  return (
    <View className="mb-8">
      <Text className="text-xl text-white mt-2">Movie Trending</Text>
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
