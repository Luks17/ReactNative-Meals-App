import {
  GestureResponderEvent,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface Props {
  categoryTitle: string;
  categoryColor: string;
  onPress: (e?: GestureResponderEvent) => void;
}

function CategoryGridTile({ categoryTitle, categoryColor, onPress }: Props) {
  return (
    <View style={[styles.tileContainer, { backgroundColor: categoryColor }]}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "ccc" }}
        style={styles.useAllSpace}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{categoryTitle}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  useAllSpace: {
    flex: 1,
  },
  tileContainer: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.select({ android: "hidden", ios: "visible" }),
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CategoryGridTile;
