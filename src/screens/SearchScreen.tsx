import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { XMarkIcon } from "react-native-heroicons/outline";
import Loading from "../components/Loading";
import useDebounce from "./useDebounce";
import { callSearchMovie } from "../service/api";

var { width, height } = Dimensions.get("window");
const SearchScreen = () => {
  const navigate = useNavigation();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [textSearch, setTextSearch] = useState("");
  const handleSearch = (value: string) => {
    setLoading(true);
    callSearchMovie().then((data) => {
      console.log(data);
    });
  };
  let movieName = "Ant-Man and The Wasp: Quantum";
  return (
    <SafeAreaView className="bg-neutral-800 flex-1 pt-6">
      <View className="mx-4 mb-3 flex-row justify-between items-center border border-neutral-500 rounded-full">
        <TextInput
          onChangeText={handleSearch}
          placeholder="Search Movie"
          placeholderTextColor={"lightgray"}
          className="pb-1 pl-6 flex-1   text-base text-white tracking-wide"
        />
        <TouchableOpacity
          onPress={() => navigate.navigate("Home")}
          className="rounded-full p-3  m-1 bg-neutral-500"
        >
          <XMarkIcon size="25" color={"white"} />
        </TouchableOpacity>
      </View>
      {/**results  */}
      {loading ? (
        <Loading />
      ) : results.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          className="space-y-3"
        >
          <Text className="text-white font-semibold ml-1">
            Results {results.length}
          </Text>
          <View className="flex-row justify-between flex-wrap">
            {results &&
              results.map((item, index) => {
                return (
                  <TouchableWithoutFeedback
                    key={index}
                    onPress={() => navigate.navigate("Movie", item)}
                  >
                    <View className="space-y-2 mb-4">
                      <Image
                        className="rounded-3xl"
                        source={require("../../assets/images/moviePoster1.png")}
                        style={{ width: width * 0.4, height: height * 0.3 }}
                      />
                      <Text className="text-neutral-300 ml-1">
                        {movieName.length > 22
                          ? movieName.slice(0, 22) + "..."
                          : movieName}
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                );
              })}
          </View>
        </ScrollView>
      ) : (
        <View className="flex-row justify-center">
          <Image
            source={require("../../assets/images/movieTime.png")}
            className="h-96 w-96"
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;
