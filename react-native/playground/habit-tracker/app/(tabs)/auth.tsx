import { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

import { colors, spacing } from "@/constants";

export default function AuthScreen() {  
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleAuth = () => {
    if(!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    if(password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    

    console.log({email, password});
  }


  const handleSwitchMode = () => {
    setIsSignUp(prev => !prev);
  }
  
  return ( 
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.rootContainer}>      
      <View style={styles.formContainer}>
        <Text style={styles.title}>{isSignUp ? "Create Account" : "Welcome Back"}</Text>
        
        <TextInput
          // label="Email"
          autoCapitalize="none"
          keyboardType="email-address"          
          placeholder="Email"
          mode="outlined"
          style={styles.input}
          onChangeText={setEmail}
        />
        
        <TextInput
          label="Password"
          autoCapitalize="none"
          keyboardType="visible-password"                    
          mode="outlined"
          style={styles.input}
          onChangeText={setPassword}
        />

        {error && <Text style={styles.error}>{error}</Text>}

        <Button mode="contained"  onPress={handleAuth} style={styles.button}>{isSignUp ? "Sign Up" : "Sign In"}</Button>
        <Button mode="text" textColor={colors.primary} onPress={handleSwitchMode} style={styles.switchModeButton}>{isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}</Button>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,    
    backgroundColor: colors.grayLight
  },
  formContainer: {
    flex: 1,
    padding: spacing.md,
    justifyContent: "center",    
  },
  title: {
    fontSize: 24,    
    marginBottom: spacing.lg,
    textAlign: "center"
  },
  input: {
    marginBottom: spacing.md,
    borderRadius: spacing.xs
  },
  button: {
    marginTop: spacing.sm,
    padding: spacing.sm,
    borderRadius: spacing.xs,
    backgroundColor: colors.primary,    
  },
  switchModeButton: {
    marginTop: spacing.sm,
    outlineColor: colors.primary,        
  },
  error: {
    color: colors.error,
    marginBottom: spacing.sm,
    textAlign: "center"
  }
});