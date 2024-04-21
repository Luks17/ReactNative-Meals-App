import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../constants/stack";
import { Text, View } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "MealDetails">;

function MealDetailsScreen({ route }: Props) {
  return (
    <View>
      <Text>{route.params.title}</Text>
    </View>
  );
}

export default MealDetailsScreen;
