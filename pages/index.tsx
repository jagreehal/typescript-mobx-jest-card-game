import * as React from "react";
import { render } from "react-dom";
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import App from "../containers/App";
import Head from "next/head";
import {
  Card,
  GameState,
  GameStatus,
  AppState,
  Level,
  Guess,
} from "../types";

// enable MobX strict mode
useStrict(true);

export default function Index() {
  return (
    <div>
      <Head>
        <title>▲ Higher or ▼ Lower?</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="static/tachyons.css" media="all" rel="stylesheet" />
        <link href="static/style.css" media="all" rel="stylesheet" />
      </Head>
      <App />
    </div>
  );
}
