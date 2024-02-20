import { StyleSheet, Text, View } from 'react-native';
import Timer from './components/Timer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "hsl(0 0% 4%)",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Timer />
    </View>
  );
}


