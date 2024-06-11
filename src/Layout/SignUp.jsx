import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SignUpForm from "../Component/SignUpForm";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSignup = () => {
    console.log("Email:", email);
    console.log("Name:", name);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    console.log("Phone Number:", phoneNumber);
  };

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
    />
  );
}

const styles = StyleSheet.create({});
