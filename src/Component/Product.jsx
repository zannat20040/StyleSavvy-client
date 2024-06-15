import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Heading from "./Heading";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Product({ allProducts }) {
  return (
    <View>
      <Heading label={"Products"} />
      <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
        {allProducts.map((product, index) => (
          <View
            key={index}
            className="w-5/12 mb-7"
            style={styles.productContainer}
          >
            <View className="bg-gray-100 rounded-2xl p-7 w-full">
              <Image
                source={{ uri: product.image }}
                height={150}
                width={"auto"}
              />
            </View>
            <View className="flex  flex-row justify-between mt-4 items-start">
              <View className=" w-9/12 ">
                <Text className="font-Lora_400Light text-base mb-4 ">
                  {product.title}
                </Text>
                <Text className="font-Lora_700Bold text-xl">
                  ${product.price}
                </Text>
              </View>
              <View className='flex flex-row gap-1 justify-between items-center '>
                <FontAwesomeIcon icon={faStar} color="orange"/>
                <Text className="w-auto font-Lora_400Light">{product.rating.rate}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productContainer: {
    width: "48%", // Adjust as needed
  },
});
