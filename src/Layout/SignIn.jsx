import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SigninForm from "../Component/SigninForm";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
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
