const { app, BrowserWindow } = require("electron");
const path = require("path");

function create() {
  const win = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 960,
    minHeight: 640,
    title: "FlowAtlas",
    autoHideMenuBar: true,
    backgroundColor: "#121612",
    webPreferences: { contextIsolation: true, nodeIntegration: false, sandbox: true },
  });
  win.setMenuBarVisibility(false);
  win.loadFile(path.join(__dirname, "index.html"));
}

app.whenReady().then(create);
app.on("window-all-closed", () => app.quit());
