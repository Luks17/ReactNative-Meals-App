import { StyleSheet, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { StatusBar } from "expo-status-bar";
import { colors } from "./constants/colors";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.rootScreen}>
        <CategoriesScreen />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: colors.primary800,
  },
});
