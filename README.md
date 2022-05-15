# Tamanna Weather App

This app is part of a challenge proposed by Tamanna, where I needed to create a Weather App using OpenWeatherMap API. This app was created using React, Next.js, TypeScript and Styled Components.

## Features

- [x] Get user's geo location;
- [x] Show current weather, based on user's location (or default location);
- [x] Forecast for the next 7 days;
- [x] User can add and save cities at Locations page;
- [x] User can remove already saved cities from Locations page;
- [x] The list of cities added by the user will persist in order to continue when he leaves and comes back to the app.

## Requirements

Before you start, please check if you have [Node.js LTS](https://nodejs.org/en) installed as well as [Git](https://git-scm.com).

Optionally you can use [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) extensions in your VSCode.

## How to run?

Use git to clone this repository

```bash
git clone https://github.com/brunoalvs/tammana-weather-app.git
```

Make a copy of `.env.local.example` file and rename copy to `.env.local`, then add your [OpenWeatherMap API Key](https://openweathermap.org/appid) and [Open Cage Data API Key](https://opencagedata.com/api)

```bash
cp .env.local.example .env.local
```

Install dependencies

```bash
npm install
```

Start app running

```bash
npm run dev
```
