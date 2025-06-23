import { useState } from "react";

import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

import { RoundedButton } from "../components/RoundedButton";
import { spacing } from "../utils/sizes";


export function Focus({ addSubject }) {
  const [subject, setSubject] = useState('Kiss Japinha');


  return (
    <View style={styles.container}>      
      <View style={styles.inputContainer}>
        <TextInput 
            label="What would you like to focus on?" 
            value={subject} 
            onChangeText={setSubject} 
            style={styles.textInput} 
        />
        <View style={styles.button}>
          <RoundedButton title="+" size={50} onPress={() => {
            addSubject(subject);
          }} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {    
  },
  inputContainer: {    
    flexDirection: "row",
    padding: spacing.lg,
    justifyContent: "top",    
  },  
  textInput: {
    flex: 1,
    marginRight: spacing.lg,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
  }
});
