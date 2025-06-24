import { colors, fontSizes, spacing } from "@/constants";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.rootContainer}
    >
      <Text style={styles.text}>Home Page</Text>
      <Link href="/login" style={styles.link}>Login</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.grayLight,
  },
  text: {
    color: colors.primaryDark,
    fontSize: fontSizes.xxxl,    
  },
  link: {
    color: colors.primary,
    textDecorationLine: "underline",
    fontSize: fontSizes.md,
    marginTop: spacing.md,
  },
});