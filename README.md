# Pomodoro Timer

Pomodoro Timers are used to enhance focus time.  The theory behind them is to focus for 25 minutes and take a break for 5 minutes. I decided to build my own Pomodoro Timer to learn React Native.

# In This Document

1) Demo
2) How to use Application
3) Technologies Used
4) Code Highlights

# Demo
Focus timer begins once user clicks anywhere on the screen

https://github.com/tytwitchell/pomodoro/assets/135183794/48bb997b-0785-4a8f-b8d9-5b18372677c3

After focus timer finishes, break timer begins automatically

https://github.com/tytwitchell/pomodoro/assets/135183794/0364f6e2-d0eb-4d36-9f93-05d942413e94


# How to use Application
1) Click on the screen to start the timer
2) Once timer finishes, repeat step 1 to restart the timer. 

# Technologies
1) React Native

# Code Highlights

I created a touchable area using TouchableOpacity to allow users to start the timer by pressing the screen. I used dynamic text content to switch between the initial start display, focus timer, and break timer.

![image](https://github.com/tytwitchell/pomodoro/assets/135183794/37e62859-b4d2-4c6e-b382-4c751fa945f7)

I'm using fontVariant: "tabular-nums" to stablize the timer's font as it changes values

![image](https://github.com/tytwitchell/pomodoro/assets/135183794/8a4c7dce-b321-4450-afad-e0173af9d39f)
