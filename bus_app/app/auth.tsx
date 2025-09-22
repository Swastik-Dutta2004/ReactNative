import { KeyboardAvoidingView, Platform, View, StyleSheet } from "react-native";
import { Button, Text, TextInput, } from 'react-native-paper'
import { useState } from "react";

export default function AuthScreen() {
    const [isSignUp, setisSignUp] = useState<boolean>(false)

    const HandleSwitch = () => {
        setisSignUp((prev) => !prev)
    }

    return (
        <KeyboardAvoidingView
         behavior={Platform.OS === "ios" ? "padding" : "height"}
         style = {styles.container}
         >
            <View>
                <Text>{isSignUp ? "Create Account" : "Welcome Back"}</Text>

                <TextInput
                    label="Email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    placeholder="example@gmail.com"
                    mode="outlined"
                />

                <TextInput
                    label="Password"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    placeholder="example@gmail.com"
                    mode="outlined"
                />

                <Button mode="contained">{isSignUp ? "Sign Up" : "Sign In"}</Button>

                <Button mode="text" onPress={HandleSwitch}>{isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign up"}</Button>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5"
    }
})