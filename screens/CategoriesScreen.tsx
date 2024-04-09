import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Home: undefined;
  MealsCategories: { title: string; colors: string }[];
  MealsOverview: {};
};

type Props = NativeStackScreenProps<RootStackParamList, "MealsCategories">;

function CategoriesScreen({ navigation }: Props) {
  function pressHandler() {
    navigation.navigate("MealsOverview", {});
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={({ item }) => (
        <CategoryGridTile
          categoryTitle={item.title}
          categoryColor={item.color}
          onPress={pressHandler}
        />
      )}
    />
  );
}

export default CategoriesScreen;
