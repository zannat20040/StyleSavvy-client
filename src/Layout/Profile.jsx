import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export default function Profile() {
  const [userDetails, setUserDetails] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic
      .get("/users")
      .then((res) => setUserDetails(res.data))
      .catch((err) => console.log(err));
  }, []);

  // toggle state and function
  const [selectedUser, setSelectedUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = (user) => {
    setIsOpen(!isOpen);
    setSelectedUser(user);
  };

  return (
    <View className="space-y-2 ">
      {userDetails.length > 0 ? (
        userDetails.map((user) => (
          <View
            key={user._id}
            className={`bg-white p-3 flex  ${
              isOpen && selectedUser._id === user._id
                ? "flex-col gap-2  items-start"
                : "flex-row  items-center"
            } justify-between  m-3`}
          >
            <Image
              source={{
                uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
              }}
              height={80}
              width={80}
              className={`rounded-md ${
                isOpen && selectedUser._id === user._id
                  ? "w-full h-36 image-cover"
                  : ""
              }`}
            />
            <View>
              <Text className="font-Lora_400Light text-lg text-customPink">
                {user.name}
              </Text>
              {isOpen && selectedUser._id === user._id && (
                <View style={styles.detailsContainer}>
                  <Text className="font-Lora_400Light">
                    Email: {user.email}
                  </Text>
                  <Text className="font-Lora_400Light">
                    Phone Number: {user.phoneNumber}
                  </Text>
                </View>
              )}
            </View>
            <Pressable
              className={` bg-customPink rounded-md w-auto p-3 ${
                isOpen && selectedUser._id === user._id ? "w-full" : "w-auto "
              }`}
              onPress={() => handleToggle(user)}
            >
              <Text className="font-Lora_400Light text-white text-sm text-center">
                {isOpen ? "Hide Details" : "Show Details"}
              </Text>
            </Pressable>
          </View>
        ))
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  userContainer: {
    backgroundColor: "#F3F4F6",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  detailsButton: {
    backgroundColor: "#FF2A5E",
    padding: 10,
    borderRadius: 5,
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
  },
  detailsContainer: {
    marginTop: 10,
  },
});
