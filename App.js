import { StyleSheet, Text, View, Dimensions } from "react-native";
import TimerLayout from "./pages/TimerLayout";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "hsl(0 0% 4%)",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    width: "350px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TimerLayout />
      </View>
    </View>
  );
}
