import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Category from "../models/category";
import Meal from "../models/meal";

export type RootStackParamList = {
  Home: undefined;
  MealsCategories: undefined;
  MealsOverview: Category;
  MealDetails: Meal;
};

export const Stack = createNativeStackNavigator<RootStackParamList>();
