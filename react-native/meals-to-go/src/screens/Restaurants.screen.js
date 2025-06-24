import { SafeAreaView, View, StyleSheet, Platform } from 'react-native';
import { Searchbar } from 'react-native-paper';

import { RestaurantsInfo } from "../features/Restaurants/RestaurantsInfo";

import { colours, spacing } from "../utils"


export function RestaurantsScreen() {
    return (    
        <SafeAreaView style={styles.rootContainer}>
        <View style={styles.searchContainer}>
            <Searchbar placeholder="Search" />
        </View>
        <View style={styles.restaurantsInfoContainer}>
            <RestaurantsInfo />
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,      
    },  
    searchContainer: {
      padding: spacing.md,    
    },
    restaurantsInfoContainer: {
      flex: 1,
      padding: spacing.md,
      backgroundColor: "blue"
    }
  });
  