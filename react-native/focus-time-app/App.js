import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';

import { colours } from "./src/utils/colours"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hello World!!!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colours.darkBlue,    
  },
  text: {
    color: colours.white,
  }
});
