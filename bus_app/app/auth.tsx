import { KeyboardAvoidingView, Platform, View, StyleSheet } from "react-native";
import { Button, Text, TextInput,useTheme } from 'react-native-paper'
import { useState } from "react";
import { red400 } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

export default function AuthScreen() {
    const [isSignUp, setisSignUp] = useState<boolean>(false)
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Error, setError] = useState<string | null>("")

    const HandleSwitch = () => {
        setisSignUp((prev) => !prev)
    }

    const handleAuth = async () => {
        if(!Email || ! Password){
            setError("Please fill all the fields.")
            return
        }
        if(Password.length < 6) {
            setError("Password should be at least 6 characters long")
            return
        }

        setError(null)
    }

    const Theme =useTheme()

    return (
        <KeyboardAvoidingView
         behavior={Platform.OS === "ios" ? "padding" : "height"}
         style = {styles.container}
         >
            <View style = {styles.contain}>
                <Text style = {styles.title}
                variant="headlineMedium">{isSignUp ? "Create Account" : "Welcome Back"}</Text>

                <TextInput
                    label="Email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    placeholder="example@gmail.com"
                    mode="outlined"
                    style = {styles.input}
                    onChangeText={setEmail}
                />

                <TextInput
                    label="Password"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    placeholder="example@gmail.com"
                    mode="outlined"
                    style = {styles.input}
                    onChangeText={setPassword}
                />
                {Error && <Text style={{color:Theme.colors.error}}>{Error}</Text>}

                <Button mode="contained"
                style = {styles.button}
                onPress={handleAuth}
                >{isSignUp ? "Sign Up" : "Sign In"}</Button>

                <Button mode="text"
                onPress={HandleSwitch}
                 style = {styles.switch}
                >{isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign up"}</Button>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5"
    },
    contain:{
        flex: 1,
        padding:16,
        justifyContent: "center"
    },
    title:{
        textAlign: "center",
        marginBottom: 24,
    },
    input:{
        marginBottom:16
    },
    button:{
        marginTop: 8
    },
    switch:{
        marginTop: 20
    },
})