import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Dimensions,
  Platform,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { styles, theme } from "../theme";
import MovieList from "../components/MovieList";
import Loading from "../components/Loading";
import { callPersonDetail, Image500 } from "../service/api";

var { width, height } = Dimensions.get("window");
const ios = Platform.OS === "ios";
const verticalMargin = ios ? "" : "my-3";
const PersonScreen = () => {
  const { params: item } = useRoute();
  const [isFarourite, setIsFarourite] = useState(false);
  const [loading, setLoading] = useState(false);
  const [person, setPerson] = useState([]);
  const [personMovies, setPersonMovies] = useState([1, 2, 3, 4, 5]);
  const navigation = useNavigation();
  const getPersonDetail = async (id) => {
    const res = await callPersonDetail(id);
    // console.log(res.data);
    if (res && res.data) {
      setPerson(res.data);
    }
  };
  useEffect(() => {
    // console.log(item.id);
    getPersonDetail(item.id);
  }, [item]);
  return (
    <View>
      <ScrollView
        className="h-full bg-neutral-900"
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/**back button */}
        <SafeAreaView
          className={
            " z-20 mt-5 w-full flex-row justify-between items-center px-4" +
            verticalMargin
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

        {/**person details */}
        {loading ? (
          <Loading />
        ) : (
          <View>
            <View
              className="flex-row justify-center shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
              style={{
                shadowColor: "gray",
                shadowRadius: 40,
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 1,
              }}
            >
              <View className="items-center rounded-full overflow-hidden h-72 w-72 border-2 border-neutral-500">
                <Image
                  source={{ uri: Image500(person.profile_path) }}
                  style={{ height: height * 0.4, width: width * 0.7 }}
                />
              </View>
            </View>
            <View classname="mt-6">
              <Text className="text-3xl text-white font-bold text-center">
                {person.name}
              </Text>
              <Text className="text-base text-neutral-500  text-center">
                {person.place_of_birth}
              </Text>
              <View className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full">
                <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                  <Text className="text-white font-semibold">Gender</Text>
                  <Text className="text-neutral-300 text-sm">
                    {person.gender}
                  </Text>
                </View>
                <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                  <Text className="text-white font-semibold">Birthday</Text>
                  <Text className="text-neutral-300 text-sm">
                    {person.birthday}
                  </Text>
                </View>
                <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                  <Text className="text-white font-semibold">Know for</Text>
                  <Text className="text-neutral-300 text-sm">
                    {person.known_for_department}
                  </Text>
                </View>
                <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                  <Text className="text-white font-semibold">Popularity</Text>
                  <Text className="text-neutral-300 text-sm">
                    {person.popularity}
                  </Text>
                </View>
              </View>
              <View className="my-6 mx-4 space-y-2">
                <Text className="text-white text-lg">Biography</Text>
                <Text className="text-neutral-400 tracking-wide">
                  {person.biography}
                </Text>
              </View>
            </View>
            {/**movies */}  
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default PersonScreen;
