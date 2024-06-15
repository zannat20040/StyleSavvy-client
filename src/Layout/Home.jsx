import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Search from "../Component/Search";
import axios from "axios";
import Product from "../Component/Product";
import Heading from "../Component/Heading";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const data = response.data;
        setAllProducts(data);
        const uniqueCategories = getUniqueCategories(data);
        setCategories(uniqueCategories);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const getUniqueCategories = (products) => {
    const uniqueCategories = ["All"];
    products.forEach((product) => {
      if (!uniqueCategories.includes(product.category)) {
        uniqueCategories.push(product.category);
      }
    });
    return uniqueCategories;
  };

  console.log(categories);
  return (
    <View className="bg-white p-3">
      <Search />
      <Heading label={"Category"} />
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className="flex flex-row gap-2  "
        contentContainerStyle={{ justifyContent: 'space-between' }}
      >
        {categories.map((category, index) => (
          <Text
            key={index}
            className="border border-gray-300 p-1 px-5 w-auto rounded-full "
          >
            {category}
          </Text>
        ))}
      </ScrollView>
      <Product allProducts={allProducts} />
    </View>
  );
}

const styles = StyleSheet.create({});
