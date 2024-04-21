import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import { RootStackParamList } from "../constants/stack";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import Meal from "../models/meal";

type Props = NativeStackScreenProps<RootStackParamList, "MealsOverview">;

function MealsOverviewScreen({ navigation, route }: Props) {
  const categoryId = route.params.id;

  const mealsOfCategory = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  function renderMealItem({ item }: ListRenderItemInfo<Meal>) {
    function pressHandler() {
      navigation.navigate("MealDetails", item);
    }

    return <MealItem {...item} onPress={pressHandler} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={mealsOfCategory}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
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
