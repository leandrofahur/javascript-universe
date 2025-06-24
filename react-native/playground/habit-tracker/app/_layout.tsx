import { Stack, useRouter } from "expo-router";
import React, { useEffect } from "react";

const RouteGuard = ({children}: {children: React.ReactNode}) => {
  const router = useRouter();
  const isAuthenticated = false;

  useEffect(() => {
    if(!isAuthenticated) {
      router.replace("/auth");
    }
  });

  return <>{children}</>;
};

export default function TabsLayout() {
  return (
    // <AuthProvider>
      <RouteGuard>      
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />        
        </Stack>
      </RouteGuard>
    // </AuthProvider>
  );
}
