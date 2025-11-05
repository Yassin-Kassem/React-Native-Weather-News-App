# ☁️ CloudWatch — Weather & News App

A React Native (Expo Bare Workflow) app for real-time weather and news.

## Features
- Live weather by GPS
- Top news (NewsData.io)
- Firebase Auth
- Expo Location
- Pull-to-refresh & search
- Expo Router navigation
- AsyncStorage caching

## Tech Stack
- React Native + Expo Bare
- Expo Router
- Firebase Auth
- DayJS
- react-native-responsive-screen
- Ionicons

## Setup

### Prerequisites
- Node.js ≥ 18
- npm or yarn
- Expo CLI
- Android Studio (Android)
- Xcode (iOS, macOS only)

### Steps

1. **Clone & install**
   ```bash
   git clone <your-repo-url>
   cd weatherapp
   npm install
# ☁️ CloudWatch — Weather & News App

A cross-platform **React Native (Expo Bare Workflow)** application that provides real-time weather updates and trending news, powered by **OpenWeather API** and **NewsData.io**.  
Includes Firebase Authentication and a modern, minimal UI optimized for both Android and iOS.

---

## ✨ Features

- 🌦️ **Live Weather Forecasts** (based on user’s location)
- 📰 **Latest News** (category-based + search)
- 🔐 **Firebase Authentication** (sign up / sign in)
- 📍 **Location Services** using Expo Location
- 🌈 **Modern Responsive UI**
- 🧭 **Expo Router Navigation**
- 💾 **Local Data Storage** using AsyncStorage
- 🔄 **Pull-to-Refresh and Search Functionality**
- 🕒 **Date Formatting** via DayJS

---

## 🧰 Tech Stack

| Category | Tools |
|-----------|-------|
| Framework | React Native (Expo Bare Workflow) |
| Navigation | Expo Router |
| Styling | React Native, Responsive Screen, Ionicons |
| Authentication | Firebase Auth |
| APIs | OpenWeather, NewsData.io |
| Location | Expo Location |
| Date/Time | DayJS |
| State | React Hooks |

---

## 🚀 Getting Started

### 🪄 Prerequisites

Make sure you have these installed:

- Node.js ≥ 18  
- npm or yarn  
- Expo CLI  
- Android Studio (for Android testing)  
- Xcode (for iOS testing — macOS only)  

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```powershell
git clone <your_repo_url>
cd weatherApp
```

### 2️⃣ Install Dependencies
```powershell
npm install
```

### 3️⃣ Configure Firebase
Download your Firebase config files and add them:

```
android/app/google-services.json
ios/GoogleService-Info.plist
```

### 4️⃣ Configure Environment Variables
Create a `.env` file in the project root:

```env
WEATHER_API_KEY=your_openweather_api_key
NEWS_API_KEY=your_newsdata_api_key
```

_(Optionally include `.env.example` for teammates.)_

### 5️⃣ iOS Setup (for teammate)
Run these on macOS before running the app:
```bash
cd ios
pod install
cd ..
```

---

## ▶️ Running the App

### 🟢 On Android
```powershell
npx expo run:android
```
_(Or use Android Studio emulator / connected device)_

### 🍎 On iOS (Mac Only)
```bash
npx expo run:ios
```
_(Or open `ios/CloudWatch.xcworkspace` in Xcode and hit ▶️)_

---

## 🏗️ Building for Release

### Android
```powershell
eas build -p android --profile production
```

### iOS
_(requires Apple Developer account and macOS)_
```bash
eas build -p ios --profile production
```

---

## 🧹 Cleaning the Project (Windows PowerShell)

If your build fails or dependencies get corrupted:
```powershell
Remove-Item -Recurse -Force node_modules, android\app\build, ios\build, .expo, .gradle -ErrorAction SilentlyContinue
npm install
cd ios && pod install && cd ..
```

---

## 📦 Preparing to Send to Another Engineer (Windows PowerShell)

Before zipping or pushing to GitHub:

```powershell
# Clean up unnecessary build files
Remove-Item -Recurse -Force node_modules, android\app\build, ios\build, .expo, .gradle -ErrorAction SilentlyContinue

# Zip it up
Compress-Archive -Path * -DestinationPath ..\weatherapp_clean.zip
```

This creates `weatherapp_clean.zip` one folder above your project directory.

---

## 🧾 .gitignore Recommendations

Ensure your `.gitignore` includes:
```
node_modules/
.expo/
build/
android/app/build/
ios/build/
.gradle/
.env
google-services.json
GoogleService-Info.plist
```

---

## 🧠 Troubleshooting

| Issue | Fix |
|-------|-----|
| App won't start on iOS | Run `cd ios && pod install` |
| Firebase Auth fails | Check Firebase configuration and bundle ID |
| Location permission denied | Enable manually in device settings |
| Gradle build failed | Run `cd android && ./gradlew clean` then retry |
| "Text strings must be rendered..." warning | Already suppressed via LogBox |
