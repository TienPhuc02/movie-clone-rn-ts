import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { styles } from "../theme";
const HomeScreen = () => {
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
    </View>
  );
};

export default HomeScreen;
