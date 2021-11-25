import { Launch } from "@lightningjs/sdk";
import App from "./App.js";
import axios from "axios";

export default function () {
  return Launch(App, ...arguments);
}

// Comment this code and the app will build/run properly
axios.create({
  baseURL: "https://some-domain.com/api/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
