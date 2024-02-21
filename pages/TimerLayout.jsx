import React, { useRef, useEffect, useState } from "react";
import { StyleSheet, View, Animated, Easing } from "react-native";
import Timer from "../components/Timer";
import { LinearGradient } from "expo-linear-gradient";

const styles = StyleSheet.create({
  gradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: "500",
  },
  layerOne: {
    position: "absolute",
    width: "100%",
    aspectRatio: "1",
    borderRadius: "500",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  layerTwo: {
    width: "99%",
    aspectRatio: "1",
    borderRadius: "500",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "hsl(0 0% 4%)",
  },
});
export default function TimerLayout() {
  const [startTimer, setStartTimer] = useState(false);
  const [onBreak, setOnBreak] = useState(false);
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const rotationValue = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    rotationValue.setValue(0);
    Animated.loop(
      Animated.timing(rotationValue, {
        toValue: 1,
        duration: 60000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };
  const rotateStyle = {
    transform: [
      {
        rotate: rotationValue.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "361deg"],
        }),
      },
    ],
  };
  useEffect(() => {
    if (startTimer || onBreak) {
      startAnimation();
      setTriggerAnimation(false);
    }
  }, [startTimer, onBreak, triggerAnimation]);

  return (
    <>
      <View style={styles.layerOne}>
        <Animated.View style={[styles.layerOne, rotateStyle]}>
          <LinearGradient
            colors={[
              "hsla(0, 0%, 98%, 1)",
              "transparent",
              "transparent",
              "transparent",
              "transparent",
              "transparent",
              "transparent",
              "transparent",
              "transparent",
              "transparent",
            ]}
            style={styles.gradient}
          />
        </Animated.View>
      </View>
      <View style={styles.layerTwo}>
        <Timer
          onBreak={onBreak}
          setOnBreak={setOnBreak}
          startTimer={startTimer}
          setStartTimer={setStartTimer}
          setTriggerAnimation={setTriggerAnimation}
        />
      </View>
    </>
  );
}
