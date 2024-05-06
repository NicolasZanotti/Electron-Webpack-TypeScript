import { app, BrowserWindow } from "electron";
import hello from "../hello";

console.info(hello("from main"));

app.whenReady().then(() => {
  new BrowserWindow().loadFile("index.html");
});
