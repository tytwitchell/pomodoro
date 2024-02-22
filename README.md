# Pomodoro Timer

Pomodoro Timers are used to enhance focus time.  The theory behind them is to focus for 25 minutes and take a break for 5 minutes. I decided to build my own Pomodoro Timer as a method for learning React Native.

# In This Document

1) Demo
2) How to use Application
3) Technologies Used
4) Code Highlights

# Demo
Focus timer begins once user clicks anywhere on the screen.

<img width="832" alt="start" src="https://github.com/tytwitchell/pomodoro/assets/135183794/f07dcd32-5836-4a5f-abae-138ba6a26d2f">

Border rotates every second.

<img width="743" alt="focus" src="https://github.com/tytwitchell/pomodoro/assets/135183794/48d4c067-2fac-443a-bf8f-a905028693b2">

After focus timer finishes, break timer begins automatically.
After break timer finishes, the user has the option to restart the focus timer.


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
