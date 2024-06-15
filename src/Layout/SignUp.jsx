import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import SignUpForm from "../Component/SignUpForm";
import axios from "axios";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const axiosPublic = useAxiosPublic();
  const navigation = useNavigation();

  const handleSignup = () => {
    const newUser = {
      email,
      name,
      password,
      phoneNumber,
    };

    console.log(newUser);

    axiosPublic
      .post("/users", newUser)
      .then((response) => {
        Alert.alert("Success", "User registered successfully!", [
          { text: "OK", onPress: () => navigation.navigate("Signin") }
        ]);

        console.log("User registered successfully:", response.data);
      })
      .catch((error) => {
        Alert.alert("Error registering user:", error.message);
        console.error("Error registering user:", error);
      });
  };

  useEffect(() => {
    if (
      email &&
      name &&
      password &&
      confirmPassword &&
      phoneNumber &&
      password === confirmPassword
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [email, name, password, confirmPassword, phoneNumber]);

  return (
    <SignUpForm
      setEmail={setEmail}
      setName={setName}
      setPassword={setPassword}
      setConfirmPassword={setConfirmPassword}
      setPhoneNumber={setPhoneNumber}
      handleSignup={handleSignup}
      email={email}
      name={name}
      password={password}
      confirmPassword={confirmPassword}
      phoneNumber={phoneNumber}
      isButtonDisabled={isButtonDisabled}
    />
  );
}

const styles = StyleSheet.create({});
