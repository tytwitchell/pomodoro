
import { StyleSheet, Text, View } from "react-native";


export default function Timer() {
  return (
    <View>
      <Text style={styles.timerStyles}>24</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  timerStyles: {
    fontSize: "50rem",
    color: "hsl(0 0% 96%)"
  },
});
