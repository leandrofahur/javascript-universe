import { SafeAreaView, View, StyleSheet, Platform } from 'react-native';
import { Searchbar } from 'react-native-paper';

import { RestaurantsInfoCard } from "../features/Restaurants/RestaurantsInfoCard";

import { colours, spacing } from "../utils"


export function RestaurantsScreen() {
    return (    
        <SafeAreaView style={styles.rootContainer}>
        <View style={styles.searchContainer}>
            <Searchbar placeholder="Search" />
        </View>
        <View style={styles.restaurantsInfoCardContainer}>
            <RestaurantsInfoCard />
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
    restaurantsInfoCardContainer: {
      flex: 1,
      padding: spacing.md,
      backgroundColor: "blue"
    }
  });
  