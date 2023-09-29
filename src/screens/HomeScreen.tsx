import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
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
import Loading from "../components/Loading";
import {
  callListMovieTopRated,
  callListMovieTrendingHome,
  callListMovieUpcoming,
} from "../service/api";
const HomeScreen = () => {
  const [movieTrending, setMovieTrending] = useState([]);
  const [movieUpcoming, setMovieUpcoming] = useState([1, 2, 3]);
  const [movieTopRated, setMovieTopRated] = useState([1, 2, 3]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigation<NavigationProp<{}>>();
  const getAllMovieTrending = async () => {
    const res = await callListMovieTrendingHome();
    if (res && res.data && res.data.results) {
      setMovieTrending(res.data.results);
      setLoading(false);
    }
  };
  const getAllMovieUpcoming = async () => {
    const res = await callListMovieUpcoming();
    if (res && res.data && res.data.results) {
      setMovieUpcoming(res?.data?.results);
    }
  };
  const getAllMovieTopRated = async () => {
    const res = await callListMovieTopRated();
    if (res && res.data && res.data.results) {
      setMovieTopRated(res?.data?.results);
    }
  };
  useEffect(() => {
    getAllMovieTrending();
    getAllMovieUpcoming();
    getAllMovieTopRated();
  }, []);
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
      {loading ? (
        <Loading />
      ) : (
        <ScrollView>
          <View>
            {/* Trending movies carousel*/}
            {movieTrending.length > 0 && <TrendingMovie data={movieTrending} />}
            {/* Upcoming movies row*/}
            <MovieList title="Upcoming" data={movieUpcoming}></MovieList>

            {/**top rated movies row */}
            <MovieList title="Top Rated" data={movieTopRated}></MovieList>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default HomeScreen;
