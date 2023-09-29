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
import { NavigationProp, useNavigation } from "@react-navigation/native";
const HomeScreen = () => {
  const [movieTrending, setMovieTrending] = useState([1, 2, 3, 4, 5]);
  const [movieUpcoming, setMovieUpcoming] = useState([1, 2, 3]);
  const [movieTopRated, setMovieTopRated] = useState([1, 2, 3]);
  const navigate = useNavigation<NavigationProp<{}>>();
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
          <TouchableOpacity onPress={() => navigate.navigate("Search")}>
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

          {/**top rated movies row */}
          <MovieList title="Top Rated" data={movieTopRated}></MovieList>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
