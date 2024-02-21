import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

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
    fontSize: 50,
    fontWeight: "500",
    fontVariant: "tabular-nums",
    color: "hsl(0, 0%, 90%)",
  },
});
const startTimeMin = 24;
const breakTimeMin = 5;

export default function Timer({
  onBreak,
  setOnBreak,
  startTimer,
  setStartTimer,
  setTriggerAnimation
}) {
  const [timeRemainingMin, setTimeRemainingMin] = useState(startTimeMin);
  const [breakRemainingMin, setBreakRemainingMin] = useState(breakTimeMin);
  const [remainingSec, setRemainingSec] = useState(59);
  const timeRemaining = `${timeRemainingMin}`;
  const breakRemaining = `${breakRemainingMin}`;

  useEffect(() => {
    let timer;
    if (!startTimer && !onBreak) {
      clearInterval(timer);
      return;
    }
    if (startTimer && remainingSec > 0) {
      timer = setInterval(() => {
        setRemainingSec((prevTime) => prevTime - 1);
      }, 1000);
    }
    if (startTimer && remainingSec <= 0 && timeRemainingMin > 0) {
      setTimeRemainingMin((prevTime) => prevTime - 1);
      setRemainingSec(59);
      setTriggerAnimation(true)
    }
    if (startTimer && timeRemainingMin === 0 && remainingSec === 0) {
      setTimeout(() => {
        setOnBreak(true);
        setStartTimer(false);
      }, 1000);
    }
    if (onBreak && remainingSec > 0) {
      timer = setInterval(() => {
        setRemainingSec((prevTime) => prevTime - 1);
      }, 1000);
    }
    if (onBreak && remainingSec <= 0 && breakRemainingMin > 0) {
      setBreakRemainingMin((prevTime) => prevTime - 1);
      setRemainingSec(59);
      setTriggerAnimation(true);
    }
    if (onBreak && breakRemainingMin === 0 && remainingSec === 0) {
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
    >
      <Text style={styles.timerStyles}>
        {!startTimer && !onBreak ? "Start" : onBreak ? "Take a break" : "Focus"}
      </Text>
      <Text style={styles.timerStyles}>
        {!startTimer && !onBreak
          ? "25"
          : onBreak
          ? breakRemaining
          : timeRemaining}
      </Text>
    </TouchableOpacity>
  );
}
