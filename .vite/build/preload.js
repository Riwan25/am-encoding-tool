"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("localDb", {
  getResults: () => electron.ipcRenderer.invoke("get-results"),
  connectDb: () => electron.ipcRenderer.invoke("connect-db"),
  executeQuery: (query) => electron.ipcRenderer.invoke("execute-query", query)
});
