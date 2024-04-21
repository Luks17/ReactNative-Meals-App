import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Category from "../models/category";

export type RootStackParamList = {
  Home: undefined;
  MealsCategories: undefined;
  MealsOverview: Category;
};

export const Stack = createNativeStackNavigator<RootStackParamList>();
