import CategoriesScreen from "./screens/CategoriesScreen";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import { Stack } from "./constants/navigators/stack";
import MealDetailsScreen from "./screens/MealDetailsScreen";

export default function App() {
  return (
    <>
      <StatusBar style="inverted" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            options={({ route }) => ({ title: route.params.title })}
          />
          <Stack.Screen
            name="MealDetails"
            component={MealDetailsScreen}
            options={({ route }) => ({
              title: route.params.title,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
