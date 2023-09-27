import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { styles } from "../theme";
import TrendingMovie from "../components/TrendingMovie";
const HomeScreen = () => {
  const [movieTrending, setMovieTrending] = useState([1, 2, 3, 4, 5]);
  return (
    <View className="bg-neutral-800 h-full pt-6">
      <SafeAreaView>
        <StatusBar style="light" />
        <View className="flex flex-row justify-between items-center mx-4">
          <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
          <Text className="text-white text-3xl font-bold">
            <Text style={styles.text}>M</Text>
            ovies
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon
              size="30"
              strokeWidth={2}
              color="white"
            ></MagnifyingGlassIcon>
          </TouchableOpacity>
        </View>
        <View>
          <TrendingMovie data={movieTrending} />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
