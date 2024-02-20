import React, { useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import FaPlay from "react-native-vector-icons/FontAwesome";

const screen = Dimensions.get("window");
const styles = StyleSheet.create({
  instructionsStyles: {
    position: "absolute",
    top: "0",
    fontSize: 25,
    color: "hsl(0, 0%, 96%)",
  },
  timerContainerStyles: {
    position: "fixed",
    width: "1000%",
    height: "1000%",
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "16",
  },
  timerStyles: {
    fontSize: 50,
    fontVariant: "tabular-nums",
    color: "hsl(0, 0%, 96%)",
  },
});

const startTimeMin = 24;
const breakTimeMin = 5;

export default function Timer() {
  const [startTimer, setStartTimer] = useState(false);
  const [onBreak, setOnBreak] = useState(false);
  const [timeRemainingMin, setTimeRemainingMin] = useState(startTimeMin);
  const [breakRemainingMin, setBreakRemainingMin] = useState(breakTimeMin);
  const [remainingSec, setRemainingSec] = useState(59);
  const timeRemaining = `${timeRemainingMin}:${remainingSec}`;
  const breakRemaining = `${breakRemainingMin}:${remainingSec}`;

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
    }
    if (onBreak && breakRemainingMin === 0 && remainingSec === 0) {
      setTimeout(() => {
        setOnBreak(false);
        setTimeRemainingMin(startTimeMin);
        setBreakRemainingMin(breakTimeMin);
        setRemainingSec(59);
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
          ? "25:00"
          : onBreak
          ? breakRemaining
          : timeRemaining}
      </Text>
    </TouchableOpacity>
  );
}
