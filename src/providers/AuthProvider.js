import { createContext, useContext, useEffect, useState } from "react";

import auth from "@react-native-firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");
  const [confirm, setConfirm] = useState("");

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      if (user) setUser(user);
      if (loading) setLoading(false);
    });
    return subscriber; // unsubscribe on unmount
  }, []);

  const handleChangePhoneNumber = (value) => {
    setPhoneNumber(value);
  };
  const handleChangeConfirmationCode = (value) => {
    setConfirmationCode(value);
  };
  useEffect(() => {
    console.log(phoneNumber);
  }, [phoneNumber]);

  // login screen
  const signInWithPhoneNumber = async () => {
    // Handle the button press
    try {
      const confirmation = await auth().signInWithPhoneNumber(
        `+976${phoneNumber}`
      );
      setConfirm(confirmation);
    } catch (error) {
      console.log(error);
    }
  };
  // OTP screen
  const confirmCode = async () => {
    try {
      return await confirm.confirm(confirmationCode);
    } catch (error) {
      console.log("Invalid code.");
    }
  };

  const logOut = async () => {
    await auth().signOut();
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        handleChangePhoneNumber,
        handleChangeConfirmationCode,
        signInWithPhoneNumber,
        confirmCode,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
