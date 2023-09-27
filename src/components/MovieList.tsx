import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { styles } from "../theme";
import { useNavigation } from "@react-navigation/native";
var { width, height } = Dimensions.get("window");
const MovieList = ({ data, title }) => {
  let movieName = "Ant-Man and The Wasp: Quantum";
  const navigation = useNavigation();
  return (
    <View>
      <SafeAreaView>
        <View className="mx-4 flex-row justify-between items-center">
          <Text className="text-white text-xl">{title}</Text>
          <TouchableOpacity>
            <Text style={styles.text} className="text-lg">
              See All
            </Text>
          </TouchableOpacity>
        </View>
        {/** movie row */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15 }}
        >
          {data &&
            data.map((item, index) => {
              return (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() => navigation.navigate("Movie", item)}
                >
                  <View className="space-y-1 mr-4">
                    <Image
                      style={{
                        width: width * 0.3,
                        height: height * 0.2,
                      }}
                      source={require("../../assets/images/moviePoster2.png")}
                      className="rounded-xl"
                    />
                    <Text className="text-neutral-300 ml-1">
                      {movieName.length > 14
                        ? movieName.slice(0, 14) + "..."
                        : movieName}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default MovieList;
