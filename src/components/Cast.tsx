import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Image185 } from "../service/api";

const Cast = ({ cast, navigation }: { cast: any; navigation: any }) => {
  return (
    <View className="my-6">
      <Text className="text-white text-lg mx-4 mb-5">Top Cast</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {cast &&
          cast.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("Person", item)}
                key={index}
                className="mr-4 item-center"
              >
                <View className="overflow-hidden rounded-full h-20 w-20 item-center border-neutral-500">
                  <Image
                    className="rounded-2xl h-24 w-20 "
                    source={{ uri: Image185(item.profile_path) }}
                  />
                </View>
                <Text className="text-white text-xs mt-1">
                  {item?.original_name?.length > 10
                    ? item?.original_name.slice(0, 10) + "..."
                    : item?.original_name}
                </Text>
                <Text className="text-neutral-400 text-xs mt-1">
                  {item?.original_name?.length > 10
                    ? item?.original_name.slice(0, 10) + "..."
                    : item?.original_name}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default Cast;
