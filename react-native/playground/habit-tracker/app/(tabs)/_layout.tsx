import { colors, spacing } from "@/constants";
import { Tabs } from "expo-router";
import React from "react";

import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function RootLayout() {
  return (
    <>      
      <Tabs screenOptions={{tabBarActiveTintColor: colors.primaryDark, tabBarInactiveTintColor: colors.gray, tabBarStyle: { backgroundColor: colors.white, paddingTop: spacing.sm }}}>
        <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon: ({ color, size }) => <FontAwesome name="home" color={color} size={size} /> }} />
        <Tabs.Screen name="login" options={{ title: "Login", tabBarIcon: ({ color, size }) => <FontAwesome name="user" color={color} size={size} /> }} />
      </Tabs>
    </>
  );
}
