import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../constants/stack";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import List from "../components/MealDetails/List";
import { useLayoutEffect, useState } from "react";
import IconBtn from "../components/IconBtn";

type Props = NativeStackScreenProps<RootStackParamList, "MealDetails">;

function MealDetailsScreen({ route, navigation }: Props) {
  const { title, ingredients, steps, imageUrl } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);

  function headerButtonPressHandler() {
    setIsFavorite((old) => !old);
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconBtn
          icon={isFavorite ? "star" : "staro"}
          onPress={headerButtonPressHandler}
        />
      ),
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.details}>
          <List title="Ingredients" items={ingredients} />
          <List title="Steps" items={steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  details: {
    marginBottom: 20,
    maxWidth: "70%",
  },
});

export default MealDetailsScreen;
