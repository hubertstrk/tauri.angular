import {
  invoke
} from "./chunk-HWGTYOU6.js";
import {
  __async
} from "./chunk-WDMUDEB6.js";

// node_modules/@tauri-apps/api/path.js
var BaseDirectory;
(function(BaseDirectory2) {
  BaseDirectory2[BaseDirectory2["Audio"] = 1] = "Audio";
  BaseDirectory2[BaseDirectory2["Cache"] = 2] = "Cache";
  BaseDirectory2[BaseDirectory2["Config"] = 3] = "Config";
  BaseDirectory2[BaseDirectory2["Data"] = 4] = "Data";
  BaseDirectory2[BaseDirectory2["LocalData"] = 5] = "LocalData";
  BaseDirectory2[BaseDirectory2["Document"] = 6] = "Document";
  BaseDirectory2[BaseDirectory2["Download"] = 7] = "Download";
  BaseDirectory2[BaseDirectory2["Picture"] = 8] = "Picture";
  BaseDirectory2[BaseDirectory2["Public"] = 9] = "Public";
  BaseDirectory2[BaseDirectory2["Video"] = 10] = "Video";
  BaseDirectory2[BaseDirectory2["Resource"] = 11] = "Resource";
  BaseDirectory2[BaseDirectory2["Temp"] = 12] = "Temp";
  BaseDirectory2[BaseDirectory2["AppConfig"] = 13] = "AppConfig";
  BaseDirectory2[BaseDirectory2["AppData"] = 14] = "AppData";
  BaseDirectory2[BaseDirectory2["AppLocalData"] = 15] = "AppLocalData";
  BaseDirectory2[BaseDirectory2["AppCache"] = 16] = "AppCache";
  BaseDirectory2[BaseDirectory2["AppLog"] = 17] = "AppLog";
  BaseDirectory2[BaseDirectory2["Desktop"] = 18] = "Desktop";
  BaseDirectory2[BaseDirectory2["Executable"] = 19] = "Executable";
  BaseDirectory2[BaseDirectory2["Font"] = 20] = "Font";
  BaseDirectory2[BaseDirectory2["Home"] = 21] = "Home";
  BaseDirectory2[BaseDirectory2["Runtime"] = 22] = "Runtime";
  BaseDirectory2[BaseDirectory2["Template"] = 23] = "Template";
})(BaseDirectory || (BaseDirectory = {}));
function appConfigDir() {
  return __async(this, null, function* () {
    return invoke("plugin:path|resolve_directory", {
      directory: BaseDirectory.AppConfig
    });
  });
}
function appDataDir() {
  return __async(this, null, function* () {
    return invoke("plugin:path|resolve_directory", {
      directory: BaseDirectory.AppData
    });
  });
}
function appLocalDataDir() {
  return __async(this, null, function* () {
    return invoke("plugin:path|resolve_directory", {
      directory: BaseDirectory.AppLocalData
    });
  });
}
function appCacheDir() {
  return __async(this, null, function* () {
    return invoke("plugin:path|resolve_directory", {
      directory: BaseDirectory.AppCache
    });
  });
}
function audioDir() {
  return __async(this, null, function* () {
    return invoke("plugin:path|resolve_directory", {
      directory: BaseDirectory.Audio
    });
  });
}
function cacheDir() {
  return __async(this, null, function* () {
    return invoke("plugin:path|resolve_directory", {
      directory: BaseDirectory.Cache
    });
  });
}
function configDir() {
  return __async(this, null, function* () {
    return invoke("plugin:path|resolve_directory", {
      directory: BaseDirectory.Config
    });
  });
}
function dataDir() {
  return __async(this, null, function* () {
    return invoke("plugin:path|resolve_directory", {
      directory: BaseDirectory.Data
    });
  });
}
function desktopDir() {
  return __async(this, null, function* () {
    return invoke("plugin:path|resolve_directory", {
      directory: BaseDirectory.Desktop
    });
  });
}
function documentDir() {
  return __async(this, null, function* () {
    return invoke("plugin:path|resolve_directory", {
      directory: BaseDirectory.Document
    });
  });
}
function downloadDir() {
  return __async(this, null, function* () {
    return invoke("plugin:path|resolve_directory", {
      directory: BaseDirectory.Download
    });
  });
}
function executableDir() {
  return __async(this, null, function* () {
    return invoke("plugin:path|resolve_directory", {
      directory: BaseDirectory.Executable
    });
  });
}
function fontDir() {
  return __async(this, null, function* () {
    return invoke("plugin:path|resolve_directory", {
      directory: BaseDirectory.Font
    });
  });
}
function homeDir() {
  return __async(this, null, function* () {
    return invoke("plugin:path|resolve_directory", {
      directory: BaseDirectory.Home
    });
  });
}
function localDataDir() {
  return __async(this, null, function* () {
    return invoke("plugin:path|resolve_directory", {
      directory: BaseDirectory.LocalData
    });
  });
}
function pictureDir() {
  return __async(this, null, function* () {
    return invoke("plugin:path|resolve_directory", {
      directory: BaseDirectory.Picture
    });
  });
}
function publicDir() {
  return __async(this, null, function* () {
    return invoke("plugin:path|resolve_directory", {
      directory: BaseDirectory.Public
    });
  });
}
function resourceDir() {
  return __async(this, null, function* () {
    return invoke("plugin:path|resolve_directory", {
      directory: BaseDirectory.Resource
    });
  });
}
function resolveResource(resourcePath) {
  return __async(this, null, function* () {
    return invoke("plugin:path|resolve_directory", {
      directory: BaseDirectory.Resource,
      path: resourcePath
    });
  });
}
function runtimeDir() {
  return __async(this, null, function* () {
    return invoke("plugin:path|resolve_directory", {
      directory: BaseDirectory.Runtime
    });
  });
}
function templateDir() {
  return __async(this, null, function* () {
    return invoke("plugin:path|resolve_directory", {
      directory: BaseDirectory.Template
    });
  });
}
function videoDir() {
  return __async(this, null, function* () {
    return invoke("plugin:path|resolve_directory", {
      directory: BaseDirectory.Video
    });
  });
}
function appLogDir() {
  return __async(this, null, function* () {
    return invoke("plugin:path|resolve_directory", {
      directory: BaseDirectory.AppLog
    });
  });
}
function tempDir() {
  return __async(this, null, function* () {
    return invoke("plugin:path|resolve_directory", {
      directory: BaseDirectory.Temp
    });
  });
}
function sep() {
  return window.__TAURI_INTERNALS__.plugins.path.sep;
}
function delimiter() {
  return window.__TAURI_INTERNALS__.plugins.path.delimiter;
}
function resolve(...paths) {
  return __async(this, null, function* () {
    return invoke("plugin:path|resolve", { paths });
  });
}
function normalize(path) {
  return __async(this, null, function* () {
    return invoke("plugin:path|normalize", { path });
  });
}
function join(...paths) {
  return __async(this, null, function* () {
    return invoke("plugin:path|join", { paths });
  });
}
function dirname(path) {
  return __async(this, null, function* () {
    return invoke("plugin:path|dirname", { path });
  });
}
function extname(path) {
  return __async(this, null, function* () {
    return invoke("plugin:path|extname", { path });
  });
}
function basename(path, ext) {
  return __async(this, null, function* () {
    return invoke("plugin:path|basename", { path, ext });
  });
}
function isAbsolute(path) {
  return __async(this, null, function* () {
    return invoke("plugin:path|is_absolute", { path });
  });
}

export {
  BaseDirectory,
  appConfigDir,
  appDataDir,
  appLocalDataDir,
  appCacheDir,
  audioDir,
  cacheDir,
  configDir,
  dataDir,
  desktopDir,
  documentDir,
  downloadDir,
  executableDir,
  fontDir,
  homeDir,
  localDataDir,
  pictureDir,
  publicDir,
  resourceDir,
  resolveResource,
  runtimeDir,
  templateDir,
  videoDir,
  appLogDir,
  tempDir,
  sep,
  delimiter,
  resolve,
  normalize,
  join,
  dirname,
  extname,
  basename,
  isAbsolute
};
//# sourceMappingURL=chunk-SLESAKMU.js.map
