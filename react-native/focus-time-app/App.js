import { useState } from "react";

import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import { Focus } from "./src/features/Focus";
import { Timer } from "./src/features/Timer";

import { colours } from "./src/utils/colours"

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      {
        !currentSubject ? (
          <Focus addSubject={setCurrentSubject} />
        ) : (
          <Timer focusSubject={currentSubject} onTimerEnd={() => {}} clearSubject={() => {}} />
        )
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colours.darkBlue,    
  },  
});
