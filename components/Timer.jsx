import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
const styles = StyleSheet.create({
  timerContainerStyles: {
    position: "fixed",
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "16",
  },
  timerStyles: {
    fontFamily: "ubuntu-regular",
    fontSize: 50,
    fontVariant: "tabular-nums",
    color: "hsl(0, 0%, 90%)",
  },
});
const startTimeMin = 25;
const breakTimeMin = 5;

export default function Timer({
  onBreak,
  setOnBreak,
  startTimer,
  setStartTimer,
  setTriggerAnimation,
  pressed,
  setPressed,
}) {
  const [timeRemainingMin, setTimeRemainingMin] = useState(startTimeMin);
  const [breakRemainingMin, setBreakRemainingMin] = useState(breakTimeMin);
  const [remainingSec, setRemainingSec] = useState(59);

  useFonts({
    "ubuntu-regular": require("../assets/Ubuntu-Regular.ttf"),
    "ubuntu-light": require("../assets/Ubuntu-Light.ttf"),
  });

  useEffect(() => {
    let timer;
    if (!startTimer && !onBreak) {
      clearInterval(timer);
      return;
    }
    if (startTimer && remainingSec > 1) {
      timer = setInterval(() => {
        setRemainingSec((prevTime) => prevTime - 1);
      }, 1000);
    }
    if (startTimer && remainingSec <= 1 && timeRemainingMin > 1) {
      setTimeRemainingMin((prevTime) => prevTime - 1);
      setRemainingSec(59);
      setTriggerAnimation(true);
    }
    if (startTimer && timeRemainingMin === 1 && remainingSec === 1) {
      setTimeout(() => {
        setOnBreak(true);
        setStartTimer(false);
      }, 1000);
    }
    if (onBreak && remainingSec > 1) {
      timer = setInterval(() => {
        setRemainingSec((prevTime) => prevTime - 1);
      }, 1000);
    }
    if (onBreak && remainingSec <= 1 && breakRemainingMin > 1) {
      setBreakRemainingMin((prevTime) => prevTime - 1);
      setRemainingSec(59);
      setTriggerAnimation(true);
    }
    if (onBreak && breakRemainingMin === 1 && remainingSec === 1) {
      setTimeout(() => {
        setOnBreak(false);
        setTimeRemainingMin(startTimeMin);
        setBreakRemainingMin(breakTimeMin);
        setRemainingSec(59);
        setTriggerAnimation(true);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [startTimer, timeRemainingMin, remainingSec, onBreak]);

  return (
    <TouchableOpacity
      style={styles.timerContainerStyles}
      onPress={() => setStartTimer(true)}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      <Text style={[styles.timerStyles, { fontSize: pressed ? 47 : 50 }]}>
        {!startTimer && !onBreak ? "Start" : onBreak ? "Take a break" : "Focus"}
      </Text>
      <Text style={[styles.timerStyles, { fontSize: pressed ? 47 : 50 }]}>
        {!startTimer && !onBreak
          ? timeRemainingMin
          : (!onBreak && timeRemainingMin < 1) ||
            (onBreak && breakRemainingMin < 1)
          ? remainingSec
          : onBreak
          ? breakRemainingMin
          : timeRemainingMin}
      </Text>
    </TouchableOpacity>
  );
}
