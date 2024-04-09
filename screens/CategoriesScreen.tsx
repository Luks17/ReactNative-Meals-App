import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={({ item }) => (
        <CategoryGridTile
          categoryTitle={item.title}
          categoryColor={item.color}
        />
      )}
    />
  );
}

export default CategoriesScreen;
