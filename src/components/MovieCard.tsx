import React from "react";
import {
  Dimensions,
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
var { width, height } = Dimensions.get("window");
const MovieCard = ({ item, handleClick }) => {
  return (
    <View>
      <TouchableWithoutFeedback onPress={handleClick}>
        <Image
          className="rounded-xl"
          style={{
            width: width * 0.5,
            height: height * 0.4,
          }}
          source={require("../../assets/images/moviePoster1.png")}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default MovieCard;
