import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { styles, theme } from "../theme/index";
import { LinearGradient } from "expo-linear-gradient";
import Cast from "../components/Cast";
var { width, height } = Dimensions.get("window");
const ios = Platform.OS === "ios";
const topMargin = ios ? "" : "mt-3";
const MovieScreen = () => {
  const { params: item } = useRoute();
  let movieName = "Ant-Man and The Wasp: Quantum";
  const [isFarourite, setIsFarourite] = useState(false);
  const [cast, setCast] = useState([1, 2, 3, 4, 5]);
  const navigation = useNavigation();
  useEffect(() => {
    //call movie detail api
  }, [item]);
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-neutral-800 relative "
    >
      {/**button back movie poster */}
      <View className="w-full">
        <SafeAreaView
          className={
            " absolute z-20 mt-5 w-full flex-row justify-between items-center px-4" +
            topMargin
          }
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.background}
            className="rounded-xl w-8 flex justify-center items-center ml-2 "
          >
            <ChevronLeftIcon size="28" strokeWidth={2.5} color={"white"} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsFarourite(!isFarourite)}>
            <HeartIcon
              size="35"
              color={isFarourite ? theme.background : "white"}
            />
          </TouchableOpacity>
        </SafeAreaView>
        <View>
          <Image
            source={require("../../assets/images/moviePoster2.png")}
            style={{ width, height: height * 0.5 }}
          />
          <LinearGradient
            colors={["transparent", "rgba(23,23,23,0.8)", "rgba(23,23,23,1)"]}
            style={{ width, height: height * 0.4 }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className=" absolute bottom-0"
          />
        </View>
      </View>

      {/**movie details */}
      <View>
        {/**title */}
        <Text className="text-white text-center bottom-0 left-2 text-3xl absolute  font-bold tracking-wider">
          {movieName}
        </Text>
        {/**status ,relese,runtime */}
      </View>
      <View className="flex justify-center items-center">
        <Text className="text-neutral-400 font-semibold mt-3 text-base text-center">
          Movie • 2020 • 170 min
        </Text>
      </View>

      {/** genres*/}
      <View className="flex-row justify-center mx-4 space-x-2 mt-3">
        <Text className="text-neutral-400 font-semibold text-base text-center">
          Action •
        </Text>
        <Text className="text-neutral-400 font-semibold text-base text-center">
          Thrill •
        </Text>
        <Text className="text-neutral-400 font-semibold text-base text-center">
          Comedy •
        </Text>
      </View>

      {/**description */}
      <View>
        <Text className="text-neutral-400 tracking-wide mt-3 ml-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          reprehenderit vel ad iusto numquam hic perspiciatis qui adipisci,
          accusamus fugit officia laborum minus repellat laudantium ipsum ipsam
          saepe nisi enim.
        </Text>
      </View>

      {/**cast */}
      <Cast navigation={navigation} cast={cast} />
    </ScrollView>
  );
};

export default MovieScreen;
