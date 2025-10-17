import { Stack } from "expo-router";
import { TaskProvider } from "../src/context/TaskProvider";

export default function RootLayout() {
  return( 
  <TaskProvider>
    <Stack screenOptions={{headerShown: false}}></Stack> 
  </TaskProvider>
  );
}
