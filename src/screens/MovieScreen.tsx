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
import MovieList from "../components/MovieList";
import Loading from "../components/Loading";
import {
  Image500,
  callMovieCredit,
  callMovieDetail,
  callMovieSimilar,
} from "../service/api";
var { width, height } = Dimensions.get("window");
const ios = Platform.OS === "ios";
const topMargin = ios ? "" : "mt-3";
const MovieScreen = () => {
  const { params: item } = useRoute();
  let movieName = "Ant-Man and The Wasp: Quantum";
  const [cast, setCast] = useState([1, 2, 3, 4, 5]);
  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5]);
  const [genres, setGenres] = useState([]);
  const [isFarourite, setIsFarourite] = useState(false);
  const navigation = useNavigation();
  const getMovieDetails = async (id) => {
    const res = await callMovieDetail(id);
    if (res && res.data) {
      setLoading(false);
      setMovieDetail(res.data);
      setGenres(res.data.genres);
    }
  };
  const getMovieCredit = async (id) => {
    const res = await callMovieCredit(id);
    // console.log("🚀 ~ file: MovieScreen.tsx:44 ~ getMovieCredit ~ res:", res);
    if (res && res.data) {
      setLoading(false);
      setCast(res.data.cast);
    }
  };
  const getMovieSimilar = async (id) => {
    const res = await callMovieSimilar(id);
    // console.log("🚀 ~ file: MovieScreen.tsx:51 ~ getMovieSimilar ~ res:", res);
    if (res && res.data && res.data.results) {
      setLoading(false);
      setSimilarMovies(res.data.results);
    }
  };
  useEffect(() => {
    //call movie detail api
    // console.log(item.id);
    getMovieCredit(item.id);
    getMovieSimilar(item.id);
    getMovieDetails(item.id);
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
        {loading ? (
          <Loading />
        ) : (
          <View>
            <Image
              source={{ uri: Image500(movieDetail.poster_path) }}
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
        )}
      </View>

      {/**movie details */}
      <View>
        {/**title */}
        <Text className="text-white text-center bottom-0 left-2 text-3xl absolute  font-bold tracking-wider">
          {movieDetail.original_title}
        </Text>
        {/**status ,relese,runtime */}
      </View>
      <View className="flex justify-center items-center">
        <Text className="text-neutral-400 font-semibold mt-3 text-base text-center">
          Movie • {movieDetail.release_date} • {movieDetail.runtime} min
        </Text>
      </View>

      {/** genres*/}
      <View className="flex-row justify-center mx-4 space-x-2 mt-3">
        {genres &&
          genres.length > 0 &&
          genres.map((item, index) => {
            return (
              <View key={index}>
                <Text className="text-neutral-400 font-semibold text-base text-center">
                  {item.name} •
                </Text>
              </View>
            );
          })}
        <Text className="text-neutral-400 font-semibold text-base text-center">
          Action •
        </Text>
      </View>

      {/**description */}
      <View>
        <Text className="text-neutral-400 tracking-wide mt-3 ml-2">
          {movieDetail.overview}
        </Text>
      </View>

      {/**cast */}
      <Cast navigation={navigation} cast={cast} />

      {/**simalar movie */}
      <MovieList title="Similar Movie" hideSeeAll={true} data={similarMovies} />
    </ScrollView>
  );
};

export default MovieScreen;
