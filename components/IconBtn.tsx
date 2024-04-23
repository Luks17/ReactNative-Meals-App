import { AntDesign } from "@expo/vector-icons";
import { GestureResponderEvent, Pressable } from "react-native";

interface Props {
  icon: keyof typeof AntDesign.glyphMap;
  color?: string;
  onPress?: (e?: GestureResponderEvent) => void;
}

function IconBtn({ icon, onPress, color = "white" }: Props) {
  return (
    <Pressable onPress={onPress}>
      <AntDesign name={icon} size={24} color={color} />
    </Pressable>
  );
}

export default IconBtn;
