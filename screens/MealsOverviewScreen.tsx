import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, StyleSheet, View } from "react-native";
import { RootStackParamList } from "../constants/stack";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

type Props = NativeStackScreenProps<RootStackParamList, "MealsOverview">;

function MealsOverviewScreen({ route }: Props) {
  const categoryId = route.params.id;

  const mealsOfCategory = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={mealsOfCategory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MealItem title={item.title} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverviewScreen;
