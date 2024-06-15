import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SigninForm from "../Component/SigninForm";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const axiosPublic = useAxiosPublic();
  const navigation = useNavigation();

  const handleSignin = () => {
    axiosPublic
      .get(`/login?email=${email}&password=${password}`)
      .then((response) => {
        Alert.alert("Success", "User logged in successfully!", [
          { text: "OK", onPress: () => navigation.navigate("MainTabs") },
        ]);

        console.log("User logged in successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        Alert.alert("Error", "Invalid email or password. Please try again.");
      });
  };

  return (
    <SigninForm
      setEmail={setEmail}
      setPassword={setPassword}
      handleSignin={handleSignin}
      email={email}
      password={password}
    />
  );
}

const styles = StyleSheet.create({});
