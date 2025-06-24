import {
  Platform,
  SafeAreaView,
  View,
  StyleSheet,
  Text,
} from 'react-native';

import { colours, spacing, fontSize } from "./src/utils"

export default function App() {  
  return (
    <>
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.searchContainer}>
          <Text>Search</Text>      
        </View>
        <View style={styles.resultsContainer}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,    
  },  
  searchContainer: {
    padding: spacing.md,
    backgroundColor: "red"
  },
  resultsContainer: {
    flex: 1,
    padding: spacing.md,
    backgroundColor: "blue"
  }
});
