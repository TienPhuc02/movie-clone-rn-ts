import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { styles } from "../theme";
import TrendingMovie from "../components/TrendingMovie";
import MovieList from "../components/MovieList";
const HomeScreen = () => {
  const [movieTrending, setMovieTrending] = useState([1, 2, 3, 4, 5]);
  const [movieUpcoming, setMovieUpcoming] = useState([1, 2]);
  const [topRated, setTopRated] = useState([1, 2]);
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
      </SafeAreaView>
      <ScrollView>
        <View>
          {/* Trending movies carousel*/}
          <TrendingMovie data={movieTrending} />
          {/* Upcoming movies row*/}
          <MovieList title="Upcoming" data={movieUpcoming}></MovieList>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
