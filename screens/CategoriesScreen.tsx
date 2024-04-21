import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../constants/stack";
import Category from "../models/category";

type Props = NativeStackScreenProps<RootStackParamList, "MealsCategories">;

function CategoriesScreen({ navigation }: Props) {
  function CategoryItem(item: Category) {
    function pressHandler() {
      navigation.navigate("MealsOverview", item);
    }
    return (
      <CategoryGridTile
        categoryTitle={item.title}
        categoryColor={item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={({ item }) => <CategoryItem {...item} />}
    />
  );
}

export default CategoriesScreen;
