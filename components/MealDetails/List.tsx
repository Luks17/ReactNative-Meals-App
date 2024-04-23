import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

interface Props {
  title: string;
  items: string[];
  style?: StyleProp<ViewStyle>;
}

function List({ title, items, style }: Props) {
  return (
    <View style={style}>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{title}</Text>
      </View>
      <View style={styles.list}>
        {items.map((item) => (
          <Text style={styles.listItem} key={item}>
            {item}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitleContainer: {
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    marginVertical: 12,
    padding: 6,
  },
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  list: {
    rowGap: 5,
  },
  listItem: {
    backgroundColor: "#e2b497",
    borderRadius: 4,
    textAlign: "center",
    paddingVertical: 4,
  },
});

export default List;
