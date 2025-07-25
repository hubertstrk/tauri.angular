import {
  Resource,
  SERIALIZE_TO_IPC_FN,
  invoke,
  transformCallback
} from "./chunk-HWGTYOU6.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// node_modules/@tauri-apps/api/dpi.js
var LogicalSize = class {
  constructor(...args) {
    this.type = "Logical";
    if (args.length === 1) {
      if ("Logical" in args[0]) {
        this.width = args[0].Logical.width;
        this.height = args[0].Logical.height;
      } else {
        this.width = args[0].width;
        this.height = args[0].height;
      }
    } else {
      this.width = args[0];
      this.height = args[1];
    }
  }
  /**
   * Converts the logical size to a physical one.
   * @example
   * ```typescript
   * import { LogicalSize } from '@tauri-apps/api/dpi';
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   *
   * const appWindow = getCurrentWindow();
   * const factor = await appWindow.scaleFactor();
   * const size = new LogicalSize(400, 500);
   * const physical = size.toPhysical(factor);
   * ```
   *
   * @since 2.0.0
   */
  toPhysical(scaleFactor) {
    return new PhysicalSize(this.width * scaleFactor, this.height * scaleFactor);
  }
  [SERIALIZE_TO_IPC_FN]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[SERIALIZE_TO_IPC_FN]();
  }
};
var PhysicalSize = class {
  constructor(...args) {
    this.type = "Physical";
    if (args.length === 1) {
      if ("Physical" in args[0]) {
        this.width = args[0].Physical.width;
        this.height = args[0].Physical.height;
      } else {
        this.width = args[0].width;
        this.height = args[0].height;
      }
    } else {
      this.width = args[0];
      this.height = args[1];
    }
  }
  /**
   * Converts the physical size to a logical one.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const appWindow = getCurrentWindow();
   * const factor = await appWindow.scaleFactor();
   * const size = await appWindow.innerSize(); // PhysicalSize
   * const logical = size.toLogical(factor);
   * ```
   */
  toLogical(scaleFactor) {
    return new LogicalSize(this.width / scaleFactor, this.height / scaleFactor);
  }
  [SERIALIZE_TO_IPC_FN]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[SERIALIZE_TO_IPC_FN]();
  }
};
var Size = class {
  constructor(size) {
    this.size = size;
  }
  toLogical(scaleFactor) {
    return this.size instanceof LogicalSize ? this.size : this.size.toLogical(scaleFactor);
  }
  toPhysical(scaleFactor) {
    return this.size instanceof PhysicalSize ? this.size : this.size.toPhysical(scaleFactor);
  }
  [SERIALIZE_TO_IPC_FN]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[SERIALIZE_TO_IPC_FN]();
  }
};
var LogicalPosition = class {
  constructor(...args) {
    this.type = "Logical";
    if (args.length === 1) {
      if ("Logical" in args[0]) {
        this.x = args[0].Logical.x;
        this.y = args[0].Logical.y;
      } else {
        this.x = args[0].x;
        this.y = args[0].y;
      }
    } else {
      this.x = args[0];
      this.y = args[1];
    }
  }
  /**
   * Converts the logical position to a physical one.
   * @example
   * ```typescript
   * import { LogicalPosition } from '@tauri-apps/api/dpi';
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   *
   * const appWindow = getCurrentWindow();
   * const factor = await appWindow.scaleFactor();
   * const position = new LogicalPosition(400, 500);
   * const physical = position.toPhysical(factor);
   * ```
   *
   * @since 2.0.0
   */
  toPhysical(scaleFactor) {
    return new PhysicalPosition(this.x * scaleFactor, this.y * scaleFactor);
  }
  [SERIALIZE_TO_IPC_FN]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[SERIALIZE_TO_IPC_FN]();
  }
};
var PhysicalPosition = class {
  constructor(...args) {
    this.type = "Physical";
    if (args.length === 1) {
      if ("Physical" in args[0]) {
        this.x = args[0].Physical.x;
        this.y = args[0].Physical.y;
      } else {
        this.x = args[0].x;
        this.y = args[0].y;
      }
    } else {
      this.x = args[0];
      this.y = args[1];
    }
  }
  /**
   * Converts the physical position to a logical one.
   * @example
   * ```typescript
   * import { PhysicalPosition } from '@tauri-apps/api/dpi';
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   *
   * const appWindow = getCurrentWindow();
   * const factor = await appWindow.scaleFactor();
   * const position = new PhysicalPosition(400, 500);
   * const physical = position.toLogical(factor);
   * ```
   *
   * @since 2.0.0
   */
  toLogical(scaleFactor) {
    return new LogicalPosition(this.x / scaleFactor, this.y / scaleFactor);
  }
  [SERIALIZE_TO_IPC_FN]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[SERIALIZE_TO_IPC_FN]();
  }
};
var Position = class {
  constructor(position) {
    this.position = position;
  }
  toLogical(scaleFactor) {
    return this.position instanceof LogicalPosition ? this.position : this.position.toLogical(scaleFactor);
  }
  toPhysical(scaleFactor) {
    return this.position instanceof PhysicalPosition ? this.position : this.position.toPhysical(scaleFactor);
  }
  [SERIALIZE_TO_IPC_FN]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[SERIALIZE_TO_IPC_FN]();
  }
};

// node_modules/@tauri-apps/api/event.js
var TauriEvent;
(function(TauriEvent2) {
  TauriEvent2["WINDOW_RESIZED"] = "tauri://resize";
  TauriEvent2["WINDOW_MOVED"] = "tauri://move";
  TauriEvent2["WINDOW_CLOSE_REQUESTED"] = "tauri://close-requested";
  TauriEvent2["WINDOW_DESTROYED"] = "tauri://destroyed";
  TauriEvent2["WINDOW_FOCUS"] = "tauri://focus";
  TauriEvent2["WINDOW_BLUR"] = "tauri://blur";
  TauriEvent2["WINDOW_SCALE_FACTOR_CHANGED"] = "tauri://scale-change";
  TauriEvent2["WINDOW_THEME_CHANGED"] = "tauri://theme-changed";
  TauriEvent2["WINDOW_CREATED"] = "tauri://window-created";
  TauriEvent2["WEBVIEW_CREATED"] = "tauri://webview-created";
  TauriEvent2["DRAG_ENTER"] = "tauri://drag-enter";
  TauriEvent2["DRAG_OVER"] = "tauri://drag-over";
  TauriEvent2["DRAG_DROP"] = "tauri://drag-drop";
  TauriEvent2["DRAG_LEAVE"] = "tauri://drag-leave";
})(TauriEvent || (TauriEvent = {}));
function _unlisten(event, eventId) {
  return __async(this, null, function* () {
    yield invoke("plugin:event|unlisten", {
      event,
      eventId
    });
  });
}
function listen(event, handler, options) {
  return __async(this, null, function* () {
    var _a;
    const target = typeof (options === null || options === void 0 ? void 0 : options.target) === "string" ? { kind: "AnyLabel", label: options.target } : (_a = options === null || options === void 0 ? void 0 : options.target) !== null && _a !== void 0 ? _a : { kind: "Any" };
    return invoke("plugin:event|listen", {
      event,
      target,
      handler: transformCallback(handler)
    }).then((eventId) => {
      return () => __async(this, null, function* () {
        return _unlisten(event, eventId);
      });
    });
  });
}
function once(event, handler, options) {
  return __async(this, null, function* () {
    return listen(event, (eventData) => {
      _unlisten(event, eventData.id);
      handler(eventData);
    }, options);
  });
}
function emit(event, payload) {
  return __async(this, null, function* () {
    yield invoke("plugin:event|emit", {
      event,
      payload
    });
  });
}
function emitTo(target, event, payload) {
  return __async(this, null, function* () {
    const eventTarget = typeof target === "string" ? { kind: "AnyLabel", label: target } : target;
    yield invoke("plugin:event|emit_to", {
      target: eventTarget,
      event,
      payload
    });
  });
}

// node_modules/@tauri-apps/api/image.js
var Image = class _Image extends Resource {
  /**
   * Creates an Image from a resource ID. For internal use only.
   *
   * @ignore
   */
  constructor(rid) {
    super(rid);
  }
  /** Creates a new Image using RGBA data, in row-major order from top to bottom, and with specified width and height. */
  static new(rgba, width, height) {
    return __async(this, null, function* () {
      return invoke("plugin:image|new", {
        rgba: transformImage(rgba),
        width,
        height
      }).then((rid) => new _Image(rid));
    });
  }
  /**
   * Creates a new image using the provided bytes by inferring the file format.
   * If the format is known, prefer [@link Image.fromPngBytes] or [@link Image.fromIcoBytes].
   *
   * Only `ico` and `png` are supported (based on activated feature flag).
   *
   * Note that you need the `image-ico` or `image-png` Cargo features to use this API.
   * To enable it, change your Cargo.toml file:
   * ```toml
   * [dependencies]
   * tauri = { version = "...", features = ["...", "image-png"] }
   * ```
   */
  static fromBytes(bytes) {
    return __async(this, null, function* () {
      return invoke("plugin:image|from_bytes", {
        bytes: transformImage(bytes)
      }).then((rid) => new _Image(rid));
    });
  }
  /**
   * Creates a new image using the provided path.
   *
   * Only `ico` and `png` are supported (based on activated feature flag).
   *
   * Note that you need the `image-ico` or `image-png` Cargo features to use this API.
   * To enable it, change your Cargo.toml file:
   * ```toml
   * [dependencies]
   * tauri = { version = "...", features = ["...", "image-png"] }
   * ```
   */
  static fromPath(path) {
    return __async(this, null, function* () {
      return invoke("plugin:image|from_path", { path }).then((rid) => new _Image(rid));
    });
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  rgba() {
    return __async(this, null, function* () {
      return invoke("plugin:image|rgba", {
        rid: this.rid
      }).then((buffer) => new Uint8Array(buffer));
    });
  }
  /** Returns the size of this image.  */
  size() {
    return __async(this, null, function* () {
      return invoke("plugin:image|size", { rid: this.rid });
    });
  }
};
function transformImage(image) {
  const ret = image == null ? null : typeof image === "string" ? image : image instanceof Image ? image.rid : image;
  return ret;
}

// node_modules/@tauri-apps/api/window.js
var UserAttentionType;
(function(UserAttentionType2) {
  UserAttentionType2[UserAttentionType2["Critical"] = 1] = "Critical";
  UserAttentionType2[UserAttentionType2["Informational"] = 2] = "Informational";
})(UserAttentionType || (UserAttentionType = {}));
var CloseRequestedEvent = class {
  constructor(event) {
    this._preventDefault = false;
    this.event = event.event;
    this.id = event.id;
  }
  preventDefault() {
    this._preventDefault = true;
  }
  isPreventDefault() {
    return this._preventDefault;
  }
};
var ProgressBarStatus;
(function(ProgressBarStatus2) {
  ProgressBarStatus2["None"] = "none";
  ProgressBarStatus2["Normal"] = "normal";
  ProgressBarStatus2["Indeterminate"] = "indeterminate";
  ProgressBarStatus2["Paused"] = "paused";
  ProgressBarStatus2["Error"] = "error";
})(ProgressBarStatus || (ProgressBarStatus = {}));
function getCurrentWindow() {
  return new Window(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: true
  });
}
function getAllWindows() {
  return __async(this, null, function* () {
    return invoke("plugin:window|get_all_windows").then((windows) => windows.map((w) => new Window(w, {
      // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
      skip: true
    })));
  });
}
var localTauriEvents = ["tauri://created", "tauri://error"];
var Window = class {
  /**
   * Creates a new Window.
   * @example
   * ```typescript
   * import { Window } from '@tauri-apps/api/window';
   * const appWindow = new Window('my-label');
   * appWindow.once('tauri://created', function () {
   *  // window successfully created
   * });
   * appWindow.once('tauri://error', function (e) {
   *  // an error happened creating the window
   * });
   * ```
   *
   * @param label The unique window label. Must be alphanumeric: `a-zA-Z-/:_`.
   * @returns The {@link Window} instance to communicate with the window.
   */
  constructor(label, options = {}) {
    var _a;
    this.label = label;
    this.listeners = /* @__PURE__ */ Object.create(null);
    if (!(options === null || options === void 0 ? void 0 : options.skip)) {
      invoke("plugin:window|create", {
        options: __spreadProps(__spreadValues({}, options), {
          parent: typeof options.parent === "string" ? options.parent : (_a = options.parent) === null || _a === void 0 ? void 0 : _a.label,
          label
        })
      }).then(() => __async(this, null, function* () {
        return this.emit("tauri://created");
      })).catch((e) => __async(this, null, function* () {
        return this.emit("tauri://error", e);
      }));
    }
  }
  /**
   * Gets the Window associated with the given label.
   * @example
   * ```typescript
   * import { Window } from '@tauri-apps/api/window';
   * const mainWindow = Window.getByLabel('main');
   * ```
   *
   * @param label The window label.
   * @returns The Window instance to communicate with the window or null if the window doesn't exist.
   */
  static getByLabel(label) {
    return __async(this, null, function* () {
      var _a;
      return (_a = (yield getAllWindows()).find((w) => w.label === label)) !== null && _a !== void 0 ? _a : null;
    });
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return getCurrentWindow();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static getAll() {
    return __async(this, null, function* () {
      return getAllWindows();
    });
  }
  /**
   *  Gets the focused window.
   * @example
   * ```typescript
   * import { Window } from '@tauri-apps/api/window';
   * const focusedWindow = Window.getFocusedWindow();
   * ```
   *
   * @returns The Window instance or `undefined` if there is not any focused window.
   */
  static getFocusedWindow() {
    return __async(this, null, function* () {
      for (const w of yield getAllWindows()) {
        if (yield w.isFocused()) {
          return w;
        }
      }
      return null;
    });
  }
  /**
   * Listen to an emitted event on this window.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const unlisten = await getCurrentWindow().listen<string>('state-changed', (event) => {
   *   console.log(`Got error: ${payload}`);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @param event Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.
   * @param handler Event handler.
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  listen(event, handler) {
    return __async(this, null, function* () {
      if (this._handleTauriEvent(event, handler)) {
        return () => {
          const listeners = this.listeners[event];
          listeners.splice(listeners.indexOf(handler), 1);
        };
      }
      return listen(event, handler, {
        target: { kind: "Window", label: this.label }
      });
    });
  }
  /**
   * Listen to an emitted event on this window only once.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const unlisten = await getCurrentWindow().once<null>('initialized', (event) => {
   *   console.log(`Window initialized!`);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @param event Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.
   * @param handler Event handler.
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  once(event, handler) {
    return __async(this, null, function* () {
      if (this._handleTauriEvent(event, handler)) {
        return () => {
          const listeners = this.listeners[event];
          listeners.splice(listeners.indexOf(handler), 1);
        };
      }
      return once(event, handler, {
        target: { kind: "Window", label: this.label }
      });
    });
  }
  /**
   * Emits an event to all {@link EventTarget|targets}.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().emit('window-loaded', { loggedIn: true, token: 'authToken' });
   * ```
   *
   * @param event Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.
   * @param payload Event payload.
   */
  emit(event, payload) {
    return __async(this, null, function* () {
      if (localTauriEvents.includes(event)) {
        for (const handler of this.listeners[event] || []) {
          handler({
            event,
            id: -1,
            payload
          });
        }
        return;
      }
      return emit(event, payload);
    });
  }
  /**
   * Emits an event to all {@link EventTarget|targets} matching the given target.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().emit('main', 'window-loaded', { loggedIn: true, token: 'authToken' });
   * ```
   * @param target Label of the target Window/Webview/WebviewWindow or raw {@link EventTarget} object.
   * @param event Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.
   * @param payload Event payload.
   */
  emitTo(target, event, payload) {
    return __async(this, null, function* () {
      if (localTauriEvents.includes(event)) {
        for (const handler of this.listeners[event] || []) {
          handler({
            event,
            id: -1,
            payload
          });
        }
        return;
      }
      return emitTo(target, event, payload);
    });
  }
  /** @ignore */
  _handleTauriEvent(event, handler) {
    if (localTauriEvents.includes(event)) {
      if (!(event in this.listeners)) {
        this.listeners[event] = [handler];
      } else {
        this.listeners[event].push(handler);
      }
      return true;
    }
    return false;
  }
  // Getters
  /**
   * The scale factor that can be used to map physical pixels to logical pixels.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const factor = await getCurrentWindow().scaleFactor();
   * ```
   *
   * @returns The window's monitor scale factor.
   */
  scaleFactor() {
    return __async(this, null, function* () {
      return invoke("plugin:window|scale_factor", {
        label: this.label
      });
    });
  }
  /**
   * The position of the top-left hand corner of the window's client area relative to the top-left hand corner of the desktop.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const position = await getCurrentWindow().innerPosition();
   * ```
   *
   * @returns The window's inner position.
   */
  innerPosition() {
    return __async(this, null, function* () {
      return invoke("plugin:window|inner_position", {
        label: this.label
      }).then((p) => new PhysicalPosition(p));
    });
  }
  /**
   * The position of the top-left hand corner of the window relative to the top-left hand corner of the desktop.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const position = await getCurrentWindow().outerPosition();
   * ```
   *
   * @returns The window's outer position.
   */
  outerPosition() {
    return __async(this, null, function* () {
      return invoke("plugin:window|outer_position", {
        label: this.label
      }).then((p) => new PhysicalPosition(p));
    });
  }
  /**
   * The physical size of the window's client area.
   * The client area is the content of the window, excluding the title bar and borders.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const size = await getCurrentWindow().innerSize();
   * ```
   *
   * @returns The window's inner size.
   */
  innerSize() {
    return __async(this, null, function* () {
      return invoke("plugin:window|inner_size", {
        label: this.label
      }).then((s) => new PhysicalSize(s));
    });
  }
  /**
   * The physical size of the entire window.
   * These dimensions include the title bar and borders. If you don't want that (and you usually don't), use inner_size instead.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const size = await getCurrentWindow().outerSize();
   * ```
   *
   * @returns The window's outer size.
   */
  outerSize() {
    return __async(this, null, function* () {
      return invoke("plugin:window|outer_size", {
        label: this.label
      }).then((s) => new PhysicalSize(s));
    });
  }
  /**
   * Gets the window's current fullscreen state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const fullscreen = await getCurrentWindow().isFullscreen();
   * ```
   *
   * @returns Whether the window is in fullscreen mode or not.
   */
  isFullscreen() {
    return __async(this, null, function* () {
      return invoke("plugin:window|is_fullscreen", {
        label: this.label
      });
    });
  }
  /**
   * Gets the window's current minimized state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const minimized = await getCurrentWindow().isMinimized();
   * ```
   */
  isMinimized() {
    return __async(this, null, function* () {
      return invoke("plugin:window|is_minimized", {
        label: this.label
      });
    });
  }
  /**
   * Gets the window's current maximized state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const maximized = await getCurrentWindow().isMaximized();
   * ```
   *
   * @returns Whether the window is maximized or not.
   */
  isMaximized() {
    return __async(this, null, function* () {
      return invoke("plugin:window|is_maximized", {
        label: this.label
      });
    });
  }
  /**
   * Gets the window's current focus state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const focused = await getCurrentWindow().isFocused();
   * ```
   *
   * @returns Whether the window is focused or not.
   */
  isFocused() {
    return __async(this, null, function* () {
      return invoke("plugin:window|is_focused", {
        label: this.label
      });
    });
  }
  /**
   * Gets the window's current decorated state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const decorated = await getCurrentWindow().isDecorated();
   * ```
   *
   * @returns Whether the window is decorated or not.
   */
  isDecorated() {
    return __async(this, null, function* () {
      return invoke("plugin:window|is_decorated", {
        label: this.label
      });
    });
  }
  /**
   * Gets the window's current resizable state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const resizable = await getCurrentWindow().isResizable();
   * ```
   *
   * @returns Whether the window is resizable or not.
   */
  isResizable() {
    return __async(this, null, function* () {
      return invoke("plugin:window|is_resizable", {
        label: this.label
      });
    });
  }
  /**
   * Gets the window's native maximize button state.
   *
   * #### Platform-specific
   *
   * - **Linux / iOS / Android:** Unsupported.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const maximizable = await getCurrentWindow().isMaximizable();
   * ```
   *
   * @returns Whether the window's native maximize button is enabled or not.
   */
  isMaximizable() {
    return __async(this, null, function* () {
      return invoke("plugin:window|is_maximizable", {
        label: this.label
      });
    });
  }
  /**
   * Gets the window's native minimize button state.
   *
   * #### Platform-specific
   *
   * - **Linux / iOS / Android:** Unsupported.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const minimizable = await getCurrentWindow().isMinimizable();
   * ```
   *
   * @returns Whether the window's native minimize button is enabled or not.
   */
  isMinimizable() {
    return __async(this, null, function* () {
      return invoke("plugin:window|is_minimizable", {
        label: this.label
      });
    });
  }
  /**
   * Gets the window's native close button state.
   *
   * #### Platform-specific
   *
   * - **iOS / Android:** Unsupported.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const closable = await getCurrentWindow().isClosable();
   * ```
   *
   * @returns Whether the window's native close button is enabled or not.
   */
  isClosable() {
    return __async(this, null, function* () {
      return invoke("plugin:window|is_closable", {
        label: this.label
      });
    });
  }
  /**
   * Gets the window's current visible state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const visible = await getCurrentWindow().isVisible();
   * ```
   *
   * @returns Whether the window is visible or not.
   */
  isVisible() {
    return __async(this, null, function* () {
      return invoke("plugin:window|is_visible", {
        label: this.label
      });
    });
  }
  /**
   * Gets the window's current title.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const title = await getCurrentWindow().title();
   * ```
   */
  title() {
    return __async(this, null, function* () {
      return invoke("plugin:window|title", {
        label: this.label
      });
    });
  }
  /**
   * Gets the window's current theme.
   *
   * #### Platform-specific
   *
   * - **macOS:** Theme was introduced on macOS 10.14. Returns `light` on macOS 10.13 and below.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const theme = await getCurrentWindow().theme();
   * ```
   *
   * @returns The window theme.
   */
  theme() {
    return __async(this, null, function* () {
      return invoke("plugin:window|theme", {
        label: this.label
      });
    });
  }
  /**
   * Whether the window is configured to be always on top of other windows or not.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const alwaysOnTop = await getCurrentWindow().isAlwaysOnTop();
   * ```
   *
   * @returns Whether the window is visible or not.
   */
  isAlwaysOnTop() {
    return __async(this, null, function* () {
      return invoke("plugin:window|is_always_on_top", {
        label: this.label
      });
    });
  }
  // Setters
  /**
   * Centers the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().center();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  center() {
    return __async(this, null, function* () {
      return invoke("plugin:window|center", {
        label: this.label
      });
    });
  }
  /**
   *  Requests user attention to the window, this has no effect if the application
   * is already focused. How requesting for user attention manifests is platform dependent,
   * see `UserAttentionType` for details.
   *
   * Providing `null` will unset the request for user attention. Unsetting the request for
   * user attention might not be done automatically by the WM when the window receives input.
   *
   * #### Platform-specific
   *
   * - **macOS:** `null` has no effect.
   * - **Linux:** Urgency levels have the same effect.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().requestUserAttention();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  requestUserAttention(requestType) {
    return __async(this, null, function* () {
      let requestType_ = null;
      if (requestType) {
        if (requestType === UserAttentionType.Critical) {
          requestType_ = { type: "Critical" };
        } else {
          requestType_ = { type: "Informational" };
        }
      }
      return invoke("plugin:window|request_user_attention", {
        label: this.label,
        value: requestType_
      });
    });
  }
  /**
   * Updates the window resizable flag.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setResizable(false);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  setResizable(resizable) {
    return __async(this, null, function* () {
      return invoke("plugin:window|set_resizable", {
        label: this.label,
        value: resizable
      });
    });
  }
  /**
   * Enable or disable the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setEnabled(false);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   *
   * @since 2.0.0
   */
  setEnabled(enabled) {
    return __async(this, null, function* () {
      return invoke("plugin:window|set_enabled", {
        label: this.label,
        value: enabled
      });
    });
  }
  /**
   * Whether the window is enabled or disabled.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setEnabled(false);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   *
   * @since 2.0.0
   */
  isEnabled() {
    return __async(this, null, function* () {
      return invoke("plugin:window|is_enabled", {
        label: this.label
      });
    });
  }
  /**
   * Sets whether the window's native maximize button is enabled or not.
   * If resizable is set to false, this setting is ignored.
   *
   * #### Platform-specific
   *
   * - **macOS:** Disables the "zoom" button in the window titlebar, which is also used to enter fullscreen mode.
   * - **Linux / iOS / Android:** Unsupported.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setMaximizable(false);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  setMaximizable(maximizable) {
    return __async(this, null, function* () {
      return invoke("plugin:window|set_maximizable", {
        label: this.label,
        value: maximizable
      });
    });
  }
  /**
   * Sets whether the window's native minimize button is enabled or not.
   *
   * #### Platform-specific
   *
   * - **Linux / iOS / Android:** Unsupported.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setMinimizable(false);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  setMinimizable(minimizable) {
    return __async(this, null, function* () {
      return invoke("plugin:window|set_minimizable", {
        label: this.label,
        value: minimizable
      });
    });
  }
  /**
   * Sets whether the window's native close button is enabled or not.
   *
   * #### Platform-specific
   *
   * - **Linux:** GTK+ will do its best to convince the window manager not to show a close button. Depending on the system, this function may not have any effect when called on a window that is already visible
   * - **iOS / Android:** Unsupported.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setClosable(false);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  setClosable(closable) {
    return __async(this, null, function* () {
      return invoke("plugin:window|set_closable", {
        label: this.label,
        value: closable
      });
    });
  }
  /**
   * Sets the window title.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setTitle('Tauri');
   * ```
   *
   * @param title The new title
   * @returns A promise indicating the success or failure of the operation.
   */
  setTitle(title) {
    return __async(this, null, function* () {
      return invoke("plugin:window|set_title", {
        label: this.label,
        value: title
      });
    });
  }
  /**
   * Maximizes the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().maximize();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  maximize() {
    return __async(this, null, function* () {
      return invoke("plugin:window|maximize", {
        label: this.label
      });
    });
  }
  /**
   * Unmaximizes the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().unmaximize();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  unmaximize() {
    return __async(this, null, function* () {
      return invoke("plugin:window|unmaximize", {
        label: this.label
      });
    });
  }
  /**
   * Toggles the window maximized state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().toggleMaximize();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  toggleMaximize() {
    return __async(this, null, function* () {
      return invoke("plugin:window|toggle_maximize", {
        label: this.label
      });
    });
  }
  /**
   * Minimizes the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().minimize();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  minimize() {
    return __async(this, null, function* () {
      return invoke("plugin:window|minimize", {
        label: this.label
      });
    });
  }
  /**
   * Unminimizes the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().unminimize();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  unminimize() {
    return __async(this, null, function* () {
      return invoke("plugin:window|unminimize", {
        label: this.label
      });
    });
  }
  /**
   * Sets the window visibility to true.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().show();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  show() {
    return __async(this, null, function* () {
      return invoke("plugin:window|show", {
        label: this.label
      });
    });
  }
  /**
   * Sets the window visibility to false.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().hide();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  hide() {
    return __async(this, null, function* () {
      return invoke("plugin:window|hide", {
        label: this.label
      });
    });
  }
  /**
   * Closes the window.
   *
   * Note this emits a closeRequested event so you can intercept it. To force window close, use {@link Window.destroy}.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().close();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  close() {
    return __async(this, null, function* () {
      return invoke("plugin:window|close", {
        label: this.label
      });
    });
  }
  /**
   * Destroys the window. Behaves like {@link Window.close} but forces the window close instead of emitting a closeRequested event.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().destroy();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  destroy() {
    return __async(this, null, function* () {
      return invoke("plugin:window|destroy", {
        label: this.label
      });
    });
  }
  /**
   * Whether the window should have borders and bars.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setDecorations(false);
   * ```
   *
   * @param decorations Whether the window should have borders and bars.
   * @returns A promise indicating the success or failure of the operation.
   */
  setDecorations(decorations) {
    return __async(this, null, function* () {
      return invoke("plugin:window|set_decorations", {
        label: this.label,
        value: decorations
      });
    });
  }
  /**
   * Whether or not the window should have shadow.
   *
   * #### Platform-specific
   *
   * - **Windows:**
   *   - `false` has no effect on decorated window, shadows are always ON.
   *   - `true` will make undecorated window have a 1px white border,
   * and on Windows 11, it will have a rounded corners.
   * - **Linux:** Unsupported.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setShadow(false);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  setShadow(enable) {
    return __async(this, null, function* () {
      return invoke("plugin:window|set_shadow", {
        label: this.label,
        value: enable
      });
    });
  }
  /**
   * Set window effects.
   */
  setEffects(effects) {
    return __async(this, null, function* () {
      return invoke("plugin:window|set_effects", {
        label: this.label,
        value: effects
      });
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  clearEffects() {
    return __async(this, null, function* () {
      return invoke("plugin:window|set_effects", {
        label: this.label,
        value: null
      });
    });
  }
  /**
   * Whether the window should always be on top of other windows.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setAlwaysOnTop(true);
   * ```
   *
   * @param alwaysOnTop Whether the window should always be on top of other windows or not.
   * @returns A promise indicating the success or failure of the operation.
   */
  setAlwaysOnTop(alwaysOnTop) {
    return __async(this, null, function* () {
      return invoke("plugin:window|set_always_on_top", {
        label: this.label,
        value: alwaysOnTop
      });
    });
  }
  /**
   * Whether the window should always be below other windows.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setAlwaysOnBottom(true);
   * ```
   *
   * @param alwaysOnBottom Whether the window should always be below other windows or not.
   * @returns A promise indicating the success or failure of the operation.
   */
  setAlwaysOnBottom(alwaysOnBottom) {
    return __async(this, null, function* () {
      return invoke("plugin:window|set_always_on_bottom", {
        label: this.label,
        value: alwaysOnBottom
      });
    });
  }
  /**
   * Prevents the window contents from being captured by other apps.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setContentProtected(true);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  setContentProtected(protected_) {
    return __async(this, null, function* () {
      return invoke("plugin:window|set_content_protected", {
        label: this.label,
        value: protected_
      });
    });
  }
  /**
   * Resizes the window with a new inner size.
   * @example
   * ```typescript
   * import { getCurrentWindow, LogicalSize } from '@tauri-apps/api/window';
   * await getCurrentWindow().setSize(new LogicalSize(600, 500));
   * ```
   *
   * @param size The logical or physical inner size.
   * @returns A promise indicating the success or failure of the operation.
   */
  setSize(size) {
    return __async(this, null, function* () {
      return invoke("plugin:window|set_size", {
        label: this.label,
        value: size instanceof Size ? size : new Size(size)
      });
    });
  }
  /**
   * Sets the window minimum inner size. If the `size` argument is not provided, the constraint is unset.
   * @example
   * ```typescript
   * import { getCurrentWindow, PhysicalSize } from '@tauri-apps/api/window';
   * await getCurrentWindow().setMinSize(new PhysicalSize(600, 500));
   * ```
   *
   * @param size The logical or physical inner size, or `null` to unset the constraint.
   * @returns A promise indicating the success or failure of the operation.
   */
  setMinSize(size) {
    return __async(this, null, function* () {
      return invoke("plugin:window|set_min_size", {
        label: this.label,
        value: size instanceof Size ? size : size ? new Size(size) : null
      });
    });
  }
  /**
   * Sets the window maximum inner size. If the `size` argument is undefined, the constraint is unset.
   * @example
   * ```typescript
   * import { getCurrentWindow, LogicalSize } from '@tauri-apps/api/window';
   * await getCurrentWindow().setMaxSize(new LogicalSize(600, 500));
   * ```
   *
   * @param size The logical or physical inner size, or `null` to unset the constraint.
   * @returns A promise indicating the success or failure of the operation.
   */
  setMaxSize(size) {
    return __async(this, null, function* () {
      return invoke("plugin:window|set_max_size", {
        label: this.label,
        value: size instanceof Size ? size : size ? new Size(size) : null
      });
    });
  }
  /**
   * Sets the window inner size constraints.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setSizeConstraints({ minWidth: 300 });
   * ```
   *
   * @param constraints The logical or physical inner size, or `null` to unset the constraint.
   * @returns A promise indicating the success or failure of the operation.
   */
  setSizeConstraints(constraints) {
    return __async(this, null, function* () {
      function logical(pixel) {
        return pixel ? { Logical: pixel } : null;
      }
      return invoke("plugin:window|set_size_constraints", {
        label: this.label,
        value: {
          minWidth: logical(constraints === null || constraints === void 0 ? void 0 : constraints.minWidth),
          minHeight: logical(constraints === null || constraints === void 0 ? void 0 : constraints.minHeight),
          maxWidth: logical(constraints === null || constraints === void 0 ? void 0 : constraints.maxWidth),
          maxHeight: logical(constraints === null || constraints === void 0 ? void 0 : constraints.maxHeight)
        }
      });
    });
  }
  /**
   * Sets the window outer position.
   * @example
   * ```typescript
   * import { getCurrentWindow, LogicalPosition } from '@tauri-apps/api/window';
   * await getCurrentWindow().setPosition(new LogicalPosition(600, 500));
   * ```
   *
   * @param position The new position, in logical or physical pixels.
   * @returns A promise indicating the success or failure of the operation.
   */
  setPosition(position) {
    return __async(this, null, function* () {
      return invoke("plugin:window|set_position", {
        label: this.label,
        value: position instanceof Position ? position : new Position(position)
      });
    });
  }
  /**
   * Sets the window fullscreen state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setFullscreen(true);
   * ```
   *
   * @param fullscreen Whether the window should go to fullscreen or not.
   * @returns A promise indicating the success or failure of the operation.
   */
  setFullscreen(fullscreen) {
    return __async(this, null, function* () {
      return invoke("plugin:window|set_fullscreen", {
        label: this.label,
        value: fullscreen
      });
    });
  }
  /**
   * Bring the window to front and focus.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setFocus();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  setFocus() {
    return __async(this, null, function* () {
      return invoke("plugin:window|set_focus", {
        label: this.label
      });
    });
  }
  /**
   * Sets the window icon.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setIcon('/tauri/awesome.png');
   * ```
   *
   * Note that you may need the `image-ico` or `image-png` Cargo features to use this API.
   * To enable it, change your Cargo.toml file:
   * ```toml
   * [dependencies]
   * tauri = { version = "...", features = ["...", "image-png"] }
   * ```
   *
   * @param icon Icon bytes or path to the icon file.
   * @returns A promise indicating the success or failure of the operation.
   */
  setIcon(icon) {
    return __async(this, null, function* () {
      return invoke("plugin:window|set_icon", {
        label: this.label,
        value: transformImage(icon)
      });
    });
  }
  /**
   * Whether the window icon should be hidden from the taskbar or not.
   *
   * #### Platform-specific
   *
   * - **macOS:** Unsupported.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setSkipTaskbar(true);
   * ```
   *
   * @param skip true to hide window icon, false to show it.
   * @returns A promise indicating the success or failure of the operation.
   */
  setSkipTaskbar(skip) {
    return __async(this, null, function* () {
      return invoke("plugin:window|set_skip_taskbar", {
        label: this.label,
        value: skip
      });
    });
  }
  /**
   * Grabs the cursor, preventing it from leaving the window.
   *
   * There's no guarantee that the cursor will be hidden. You should
   * hide it by yourself if you want so.
   *
   * #### Platform-specific
   *
   * - **Linux:** Unsupported.
   * - **macOS:** This locks the cursor in a fixed location, which looks visually awkward.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setCursorGrab(true);
   * ```
   *
   * @param grab `true` to grab the cursor icon, `false` to release it.
   * @returns A promise indicating the success or failure of the operation.
   */
  setCursorGrab(grab) {
    return __async(this, null, function* () {
      return invoke("plugin:window|set_cursor_grab", {
        label: this.label,
        value: grab
      });
    });
  }
  /**
   * Modifies the cursor's visibility.
   *
   * #### Platform-specific
   *
   * - **Windows:** The cursor is only hidden within the confines of the window.
   * - **macOS:** The cursor is hidden as long as the window has input focus, even if the cursor is
   *   outside of the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setCursorVisible(false);
   * ```
   *
   * @param visible If `false`, this will hide the cursor. If `true`, this will show the cursor.
   * @returns A promise indicating the success or failure of the operation.
   */
  setCursorVisible(visible) {
    return __async(this, null, function* () {
      return invoke("plugin:window|set_cursor_visible", {
        label: this.label,
        value: visible
      });
    });
  }
  /**
   * Modifies the cursor icon of the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setCursorIcon('help');
   * ```
   *
   * @param icon The new cursor icon.
   * @returns A promise indicating the success or failure of the operation.
   */
  setCursorIcon(icon) {
    return __async(this, null, function* () {
      return invoke("plugin:window|set_cursor_icon", {
        label: this.label,
        value: icon
      });
    });
  }
  /**
   * Sets the window background color.
   *
   * #### Platform-specific:
   *
   * - **Windows:** alpha channel is ignored.
   * - **iOS / Android:** Unsupported.
   *
   * @returns A promise indicating the success or failure of the operation.
   *
   * @since 2.1.0
   */
  setBackgroundColor(color) {
    return __async(this, null, function* () {
      return invoke("plugin:window|set_background_color", { color });
    });
  }
  /**
   * Changes the position of the cursor in window coordinates.
   * @example
   * ```typescript
   * import { getCurrentWindow, LogicalPosition } from '@tauri-apps/api/window';
   * await getCurrentWindow().setCursorPosition(new LogicalPosition(600, 300));
   * ```
   *
   * @param position The new cursor position.
   * @returns A promise indicating the success or failure of the operation.
   */
  setCursorPosition(position) {
    return __async(this, null, function* () {
      return invoke("plugin:window|set_cursor_position", {
        label: this.label,
        value: position instanceof Position ? position : new Position(position)
      });
    });
  }
  /**
   * Changes the cursor events behavior.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setIgnoreCursorEvents(true);
   * ```
   *
   * @param ignore `true` to ignore the cursor events; `false` to process them as usual.
   * @returns A promise indicating the success or failure of the operation.
   */
  setIgnoreCursorEvents(ignore) {
    return __async(this, null, function* () {
      return invoke("plugin:window|set_ignore_cursor_events", {
        label: this.label,
        value: ignore
      });
    });
  }
  /**
   * Starts dragging the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().startDragging();
   * ```
   *
   * @return A promise indicating the success or failure of the operation.
   */
  startDragging() {
    return __async(this, null, function* () {
      return invoke("plugin:window|start_dragging", {
        label: this.label
      });
    });
  }
  /**
   * Starts resize-dragging the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().startResizeDragging();
   * ```
   *
   * @return A promise indicating the success or failure of the operation.
   */
  startResizeDragging(direction) {
    return __async(this, null, function* () {
      return invoke("plugin:window|start_resize_dragging", {
        label: this.label,
        value: direction
      });
    });
  }
  /**
   * Sets the badge count. It is app wide and not specific to this window.
   *
   * #### Platform-specific
   *
   * - **Windows**: Unsupported. Use @{linkcode Window.setOverlayIcon} instead.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setBadgeCount(5);
   * ```
   *
   * @param count The badge count. Use `undefined` to remove the badge.
   * @return A promise indicating the success or failure of the operation.
   */
  setBadgeCount(count) {
    return __async(this, null, function* () {
      return invoke("plugin:window|set_badge_count", {
        label: this.label,
        value: count
      });
    });
  }
  /**
   * Sets the badge cont **macOS only**.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setBadgeLabel("Hello");
   * ```
   *
   * @param label The badge label. Use `undefined` to remove the badge.
   * @return A promise indicating the success or failure of the operation.
   */
  setBadgeLabel(label) {
    return __async(this, null, function* () {
      return invoke("plugin:window|set_badge_label", {
        label: this.label,
        value: label
      });
    });
  }
  /**
   * Sets the overlay icon. **Windows only**
   * The overlay icon can be set for every window.
   *
   *
   * Note that you may need the `image-ico` or `image-png` Cargo features to use this API.
   * To enable it, change your Cargo.toml file:
   *
   * ```toml
   * [dependencies]
   * tauri = { version = "...", features = ["...", "image-png"] }
   * ```
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setOverlayIcon("/tauri/awesome.png");
   * ```
   *
   * @param icon Icon bytes or path to the icon file. Use `undefined` to remove the overlay icon.
   * @return A promise indicating the success or failure of the operation.
   */
  setOverlayIcon(icon) {
    return __async(this, null, function* () {
      return invoke("plugin:window|set_overlay_icon", {
        label: this.label,
        value: icon ? transformImage(icon) : void 0
      });
    });
  }
  /**
   * Sets the taskbar progress state.
   *
   * #### Platform-specific
   *
   * - **Linux / macOS**: Progress bar is app-wide and not specific to this window.
   * - **Linux**: Only supported desktop environments with `libunity` (e.g. GNOME).
   *
   * @example
   * ```typescript
   * import { getCurrentWindow, ProgressBarStatus } from '@tauri-apps/api/window';
   * await getCurrentWindow().setProgressBar({
   *   status: ProgressBarStatus.Normal,
   *   progress: 50,
   * });
   * ```
   *
   * @return A promise indicating the success or failure of the operation.
   */
  setProgressBar(state) {
    return __async(this, null, function* () {
      return invoke("plugin:window|set_progress_bar", {
        label: this.label,
        value: state
      });
    });
  }
  /**
   * Sets whether the window should be visible on all workspaces or virtual desktops.
   *
   * #### Platform-specific
   *
   * - **Windows / iOS / Android:** Unsupported.
   *
   * @since 2.0.0
   */
  setVisibleOnAllWorkspaces(visible) {
    return __async(this, null, function* () {
      return invoke("plugin:window|set_visible_on_all_workspaces", {
        label: this.label,
        value: visible
      });
    });
  }
  /**
   * Sets the title bar style. **macOS only**.
   *
   * @since 2.0.0
   */
  setTitleBarStyle(style) {
    return __async(this, null, function* () {
      return invoke("plugin:window|set_title_bar_style", {
        label: this.label,
        value: style
      });
    });
  }
  /**
   * Set window theme, pass in `null` or `undefined` to follow system theme
   *
   * #### Platform-specific
   *
   * - **Linux / macOS**: Theme is app-wide and not specific to this window.
   * - **iOS / Android:** Unsupported.
   *
   * @since 2.0.0
   */
  setTheme(theme) {
    return __async(this, null, function* () {
      return invoke("plugin:window|set_theme", {
        label: this.label,
        value: theme
      });
    });
  }
  // Listeners
  /**
   * Listen to window resize.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from "@tauri-apps/api/window";
   * const unlisten = await getCurrentWindow().onResized(({ payload: size }) => {
   *  console.log('Window resized', size);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  onResized(handler) {
    return __async(this, null, function* () {
      return this.listen(TauriEvent.WINDOW_RESIZED, (e) => {
        e.payload = new PhysicalSize(e.payload);
        handler(e);
      });
    });
  }
  /**
   * Listen to window move.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from "@tauri-apps/api/window";
   * const unlisten = await getCurrentWindow().onMoved(({ payload: position }) => {
   *  console.log('Window moved', position);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  onMoved(handler) {
    return __async(this, null, function* () {
      return this.listen(TauriEvent.WINDOW_MOVED, (e) => {
        e.payload = new PhysicalPosition(e.payload);
        handler(e);
      });
    });
  }
  /**
   * Listen to window close requested. Emitted when the user requests to closes the window.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from "@tauri-apps/api/window";
   * import { confirm } from '@tauri-apps/api/dialog';
   * const unlisten = await getCurrentWindow().onCloseRequested(async (event) => {
   *   const confirmed = await confirm('Are you sure?');
   *   if (!confirmed) {
   *     // user did not confirm closing the window; let's prevent it
   *     event.preventDefault();
   *   }
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  onCloseRequested(handler) {
    return __async(this, null, function* () {
      return this.listen(TauriEvent.WINDOW_CLOSE_REQUESTED, (event) => __async(this, null, function* () {
        const evt = new CloseRequestedEvent(event);
        yield handler(evt);
        if (!evt.isPreventDefault()) {
          yield this.destroy();
        }
      }));
    });
  }
  /**
   * Listen to a file drop event.
   * The listener is triggered when the user hovers the selected files on the webview,
   * drops the files or cancels the operation.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from "@tauri-apps/api/webview";
   * const unlisten = await getCurrentWindow().onDragDropEvent((event) => {
   *  if (event.payload.type === 'over') {
   *    console.log('User hovering', event.payload.position);
   *  } else if (event.payload.type === 'drop') {
   *    console.log('User dropped', event.payload.paths);
   *  } else {
   *    console.log('File drop cancelled');
   *  }
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  onDragDropEvent(handler) {
    return __async(this, null, function* () {
      const unlistenDrag = yield this.listen(TauriEvent.DRAG_ENTER, (event) => {
        handler(__spreadProps(__spreadValues({}, event), {
          payload: {
            type: "enter",
            paths: event.payload.paths,
            position: new PhysicalPosition(event.payload.position)
          }
        }));
      });
      const unlistenDragOver = yield this.listen(TauriEvent.DRAG_OVER, (event) => {
        handler(__spreadProps(__spreadValues({}, event), {
          payload: {
            type: "over",
            position: new PhysicalPosition(event.payload.position)
          }
        }));
      });
      const unlistenDrop = yield this.listen(TauriEvent.DRAG_DROP, (event) => {
        handler(__spreadProps(__spreadValues({}, event), {
          payload: {
            type: "drop",
            paths: event.payload.paths,
            position: new PhysicalPosition(event.payload.position)
          }
        }));
      });
      const unlistenCancel = yield this.listen(TauriEvent.DRAG_LEAVE, (event) => {
        handler(__spreadProps(__spreadValues({}, event), { payload: { type: "leave" } }));
      });
      return () => {
        unlistenDrag();
        unlistenDrop();
        unlistenDragOver();
        unlistenCancel();
      };
    });
  }
  /**
   * Listen to window focus change.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from "@tauri-apps/api/window";
   * const unlisten = await getCurrentWindow().onFocusChanged(({ payload: focused }) => {
   *  console.log('Focus changed, window is focused? ' + focused);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  onFocusChanged(handler) {
    return __async(this, null, function* () {
      const unlistenFocus = yield this.listen(TauriEvent.WINDOW_FOCUS, (event) => {
        handler(__spreadProps(__spreadValues({}, event), { payload: true }));
      });
      const unlistenBlur = yield this.listen(TauriEvent.WINDOW_BLUR, (event) => {
        handler(__spreadProps(__spreadValues({}, event), { payload: false }));
      });
      return () => {
        unlistenFocus();
        unlistenBlur();
      };
    });
  }
  /**
   * Listen to window scale change. Emitted when the window's scale factor has changed.
   * The following user actions can cause DPI changes:
   * - Changing the display's resolution.
   * - Changing the display's scale factor (e.g. in Control Panel on Windows).
   * - Moving the window to a display with a different scale factor.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from "@tauri-apps/api/window";
   * const unlisten = await getCurrentWindow().onScaleChanged(({ payload }) => {
   *  console.log('Scale changed', payload.scaleFactor, payload.size);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  onScaleChanged(handler) {
    return __async(this, null, function* () {
      return this.listen(TauriEvent.WINDOW_SCALE_FACTOR_CHANGED, handler);
    });
  }
  /**
   * Listen to the system theme change.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from "@tauri-apps/api/window";
   * const unlisten = await getCurrentWindow().onThemeChanged(({ payload: theme }) => {
   *  console.log('New theme: ' + theme);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  onThemeChanged(handler) {
    return __async(this, null, function* () {
      return this.listen(TauriEvent.WINDOW_THEME_CHANGED, handler);
    });
  }
};
var BackgroundThrottlingPolicy;
(function(BackgroundThrottlingPolicy2) {
  BackgroundThrottlingPolicy2["Disabled"] = "disabled";
  BackgroundThrottlingPolicy2["Throttle"] = "throttle";
  BackgroundThrottlingPolicy2["Suspend"] = "suspend";
})(BackgroundThrottlingPolicy || (BackgroundThrottlingPolicy = {}));
var Effect;
(function(Effect2) {
  Effect2["AppearanceBased"] = "appearanceBased";
  Effect2["Light"] = "light";
  Effect2["Dark"] = "dark";
  Effect2["MediumLight"] = "mediumLight";
  Effect2["UltraDark"] = "ultraDark";
  Effect2["Titlebar"] = "titlebar";
  Effect2["Selection"] = "selection";
  Effect2["Menu"] = "menu";
  Effect2["Popover"] = "popover";
  Effect2["Sidebar"] = "sidebar";
  Effect2["HeaderView"] = "headerView";
  Effect2["Sheet"] = "sheet";
  Effect2["WindowBackground"] = "windowBackground";
  Effect2["HudWindow"] = "hudWindow";
  Effect2["FullScreenUI"] = "fullScreenUI";
  Effect2["Tooltip"] = "tooltip";
  Effect2["ContentBackground"] = "contentBackground";
  Effect2["UnderWindowBackground"] = "underWindowBackground";
  Effect2["UnderPageBackground"] = "underPageBackground";
  Effect2["Mica"] = "mica";
  Effect2["Blur"] = "blur";
  Effect2["Acrylic"] = "acrylic";
  Effect2["Tabbed"] = "tabbed";
  Effect2["TabbedDark"] = "tabbedDark";
  Effect2["TabbedLight"] = "tabbedLight";
})(Effect || (Effect = {}));
var EffectState;
(function(EffectState2) {
  EffectState2["FollowsWindowActiveState"] = "followsWindowActiveState";
  EffectState2["Active"] = "active";
  EffectState2["Inactive"] = "inactive";
})(EffectState || (EffectState = {}));

// node_modules/@tauri-apps/api/webview.js
function getCurrentWebview() {
  return new Webview(getCurrentWindow(), window.__TAURI_INTERNALS__.metadata.currentWebview.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: true
  });
}
function getAllWebviews() {
  return __async(this, null, function* () {
    return invoke("plugin:webview|get_all_webviews").then((webviews) => webviews.map((w) => new Webview(new Window(w.windowLabel, {
      // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
      skip: true
    }), w.label, {
      // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
      skip: true
    })));
  });
}
var localTauriEvents2 = ["tauri://created", "tauri://error"];
var Webview = class {
  /**
   * Creates a new Webview.
   * @example
   * ```typescript
   * import { Window } from '@tauri-apps/api/window'
   * import { Webview } from '@tauri-apps/api/webview'
   * const appWindow = new Window('my-label')
   * const webview = new Webview(appWindow, 'my-label', {
   *   url: 'https://github.com/tauri-apps/tauri'
   * });
   * webview.once('tauri://created', function () {
   *  // webview successfully created
   * });
   * webview.once('tauri://error', function (e) {
   *  // an error happened creating the webview
   * });
   * ```
   *
   * @param window the window to add this webview to.
   * @param label The unique webview label. Must be alphanumeric: `a-zA-Z-/:_`.
   * @returns The {@link Webview} instance to communicate with the webview.
   */
  constructor(window2, label, options) {
    this.window = window2;
    this.label = label;
    this.listeners = /* @__PURE__ */ Object.create(null);
    if (!(options === null || options === void 0 ? void 0 : options.skip)) {
      invoke("plugin:webview|create_webview", {
        windowLabel: window2.label,
        label,
        options
      }).then(() => __async(this, null, function* () {
        return this.emit("tauri://created");
      })).catch((e) => __async(this, null, function* () {
        return this.emit("tauri://error", e);
      }));
    }
  }
  /**
   * Gets the Webview for the webview associated with the given label.
   * @example
   * ```typescript
   * import { Webview } from '@tauri-apps/api/webview';
   * const mainWebview = Webview.getByLabel('main');
   * ```
   *
   * @param label The webview label.
   * @returns The Webview instance to communicate with the webview or null if the webview doesn't exist.
   */
  static getByLabel(label) {
    return __async(this, null, function* () {
      var _a;
      return (_a = (yield getAllWebviews()).find((w) => w.label === label)) !== null && _a !== void 0 ? _a : null;
    });
  }
  /**
   * Get an instance of `Webview` for the current webview.
   */
  static getCurrent() {
    return getCurrentWebview();
  }
  /**
   * Gets a list of instances of `Webview` for all available webviews.
   */
  static getAll() {
    return __async(this, null, function* () {
      return getAllWebviews();
    });
  }
  /**
   * Listen to an emitted event on this webview.
   *
   * @example
   * ```typescript
   * import { getCurrentWebview } from '@tauri-apps/api/webview';
   * const unlisten = await getCurrentWebview().listen<string>('state-changed', (event) => {
   *   console.log(`Got error: ${payload}`);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @param event Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.
   * @param handler Event handler.
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  listen(event, handler) {
    return __async(this, null, function* () {
      if (this._handleTauriEvent(event, handler)) {
        return () => {
          const listeners = this.listeners[event];
          listeners.splice(listeners.indexOf(handler), 1);
        };
      }
      return listen(event, handler, {
        target: { kind: "Webview", label: this.label }
      });
    });
  }
  /**
   * Listen to an emitted event on this webview only once.
   *
   * @example
   * ```typescript
   * import { getCurrentWebview } from '@tauri-apps/api/webview';
   * const unlisten = await getCurrent().once<null>('initialized', (event) => {
   *   console.log(`Webview initialized!`);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @param event Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.
   * @param handler Event handler.
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  once(event, handler) {
    return __async(this, null, function* () {
      if (this._handleTauriEvent(event, handler)) {
        return () => {
          const listeners = this.listeners[event];
          listeners.splice(listeners.indexOf(handler), 1);
        };
      }
      return once(event, handler, {
        target: { kind: "Webview", label: this.label }
      });
    });
  }
  /**
   * Emits an event to all {@link EventTarget|targets}.
   *
   * @example
   * ```typescript
   * import { getCurrentWebview } from '@tauri-apps/api/webview';
   * await getCurrentWebview().emit('webview-loaded', { loggedIn: true, token: 'authToken' });
   * ```
   *
   * @param event Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.
   * @param payload Event payload.
   */
  emit(event, payload) {
    return __async(this, null, function* () {
      if (localTauriEvents2.includes(event)) {
        for (const handler of this.listeners[event] || []) {
          handler({
            event,
            id: -1,
            payload
          });
        }
        return;
      }
      return emit(event, payload);
    });
  }
  /**
   * Emits an event to all {@link EventTarget|targets} matching the given target.
   *
   * @example
   * ```typescript
   * import { getCurrentWebview } from '@tauri-apps/api/webview';
   * await getCurrentWebview().emitTo('main', 'webview-loaded', { loggedIn: true, token: 'authToken' });
   * ```
   *
   * @param target Label of the target Window/Webview/WebviewWindow or raw {@link EventTarget} object.
   * @param event Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.
   * @param payload Event payload.
   */
  emitTo(target, event, payload) {
    return __async(this, null, function* () {
      if (localTauriEvents2.includes(event)) {
        for (const handler of this.listeners[event] || []) {
          handler({
            event,
            id: -1,
            payload
          });
        }
        return;
      }
      return emitTo(target, event, payload);
    });
  }
  /** @ignore */
  _handleTauriEvent(event, handler) {
    if (localTauriEvents2.includes(event)) {
      if (!(event in this.listeners)) {
        this.listeners[event] = [handler];
      } else {
        this.listeners[event].push(handler);
      }
      return true;
    }
    return false;
  }
  // Getters
  /**
   * The position of the top-left hand corner of the webview's client area relative to the top-left hand corner of the desktop.
   * @example
   * ```typescript
   * import { getCurrentWebview } from '@tauri-apps/api/webview';
   * const position = await getCurrentWebview().position();
   * ```
   *
   * @returns The webview's position.
   */
  position() {
    return __async(this, null, function* () {
      return invoke("plugin:webview|webview_position", {
        label: this.label
      }).then((p) => new PhysicalPosition(p));
    });
  }
  /**
   * The physical size of the webview's client area.
   * The client area is the content of the webview, excluding the title bar and borders.
   * @example
   * ```typescript
   * import { getCurrentWebview } from '@tauri-apps/api/webview';
   * const size = await getCurrentWebview().size();
   * ```
   *
   * @returns The webview's size.
   */
  size() {
    return __async(this, null, function* () {
      return invoke("plugin:webview|webview_size", {
        label: this.label
      }).then((s) => new PhysicalSize(s));
    });
  }
  // Setters
  /**
   * Closes the webview.
   * @example
   * ```typescript
   * import { getCurrentWebview } from '@tauri-apps/api/webview';
   * await getCurrentWebview().close();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  close() {
    return __async(this, null, function* () {
      return invoke("plugin:webview|webview_close", {
        label: this.label
      });
    });
  }
  /**
   * Resizes the webview.
   * @example
   * ```typescript
   * import { getCurrent, LogicalSize } from '@tauri-apps/api/webview';
   * await getCurrentWebview().setSize(new LogicalSize(600, 500));
   * ```
   *
   * @param size The logical or physical size.
   * @returns A promise indicating the success or failure of the operation.
   */
  setSize(size) {
    return __async(this, null, function* () {
      return invoke("plugin:webview|set_webview_size", {
        label: this.label,
        value: size instanceof Size ? size : new Size(size)
      });
    });
  }
  /**
   * Sets the webview position.
   * @example
   * ```typescript
   * import { getCurrent, LogicalPosition } from '@tauri-apps/api/webview';
   * await getCurrentWebview().setPosition(new LogicalPosition(600, 500));
   * ```
   *
   * @param position The new position, in logical or physical pixels.
   * @returns A promise indicating the success or failure of the operation.
   */
  setPosition(position) {
    return __async(this, null, function* () {
      return invoke("plugin:webview|set_webview_position", {
        label: this.label,
        value: position instanceof Position ? position : new Position(position)
      });
    });
  }
  /**
   * Bring the webview to front and focus.
   * @example
   * ```typescript
   * import { getCurrentWebview } from '@tauri-apps/api/webview';
   * await getCurrentWebview().setFocus();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  setFocus() {
    return __async(this, null, function* () {
      return invoke("plugin:webview|set_webview_focus", {
        label: this.label
      });
    });
  }
  /**
   * Hide the webview.
   * @example
   * ```typescript
   * import { getCurrentWebview } from '@tauri-apps/api/webview';
   * await getCurrentWebview().hide();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  hide() {
    return __async(this, null, function* () {
      return invoke("plugin:webview|webview_hide", {
        label: this.label
      });
    });
  }
  /**
   * Show the webview.
   * @example
   * ```typescript
   * import { getCurrentWebview } from '@tauri-apps/api/webview';
   * await getCurrentWebview().show();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  show() {
    return __async(this, null, function* () {
      return invoke("plugin:webview|webview_show", {
        label: this.label
      });
    });
  }
  /**
   * Set webview zoom level.
   * @example
   * ```typescript
   * import { getCurrentWebview } from '@tauri-apps/api/webview';
   * await getCurrentWebview().setZoom(1.5);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  setZoom(scaleFactor) {
    return __async(this, null, function* () {
      return invoke("plugin:webview|set_webview_zoom", {
        label: this.label,
        value: scaleFactor
      });
    });
  }
  /**
   * Moves this webview to the given label.
   * @example
   * ```typescript
   * import { getCurrentWebview } from '@tauri-apps/api/webview';
   * await getCurrentWebview().reparent('other-window');
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  reparent(window2) {
    return __async(this, null, function* () {
      return invoke("plugin:webview|reparent", {
        label: this.label,
        window: typeof window2 === "string" ? window2 : window2.label
      });
    });
  }
  /**
   * Clears all browsing data for this webview.
   * @example
   * ```typescript
   * import { getCurrentWebview } from '@tauri-apps/api/webview';
   * await getCurrentWebview().clearAllBrowsingData();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  clearAllBrowsingData() {
    return __async(this, null, function* () {
      return invoke("plugin:webview|clear_all_browsing_data");
    });
  }
  /**
   * Specify the webview background color.
   *
   * #### Platfrom-specific:
   *
   * - **macOS / iOS**: Not implemented.
   * - **Windows**:
   *   - On Windows 7, transparency is not supported and the alpha value will be ignored.
   *   - On Windows higher than 7: translucent colors are not supported so any alpha value other than `0` will be replaced by `255`
   *
   * @returns A promise indicating the success or failure of the operation.
   *
   * @since 2.1.0
   */
  setBackgroundColor(color) {
    return __async(this, null, function* () {
      return invoke("plugin:webview|set_webview_background_color", { color });
    });
  }
  // Listeners
  /**
   * Listen to a file drop event.
   * The listener is triggered when the user hovers the selected files on the webview,
   * drops the files or cancels the operation.
   *
   * @example
   * ```typescript
   * import { getCurrentWebview } from "@tauri-apps/api/webview";
   * const unlisten = await getCurrentWebview().onDragDropEvent((event) => {
   *  if (event.payload.type === 'over') {
   *    console.log('User hovering', event.payload.position);
   *  } else if (event.payload.type === 'drop') {
   *    console.log('User dropped', event.payload.paths);
   *  } else {
   *    console.log('File drop cancelled');
   *  }
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * When the debugger panel is open, the drop position of this event may be inaccurate due to a known limitation.
   * To retrieve the correct drop position, please detach the debugger.
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  onDragDropEvent(handler) {
    return __async(this, null, function* () {
      const unlistenDragEnter = yield this.listen(TauriEvent.DRAG_ENTER, (event) => {
        handler(__spreadProps(__spreadValues({}, event), {
          payload: {
            type: "enter",
            paths: event.payload.paths,
            position: new PhysicalPosition(event.payload.position)
          }
        }));
      });
      const unlistenDragOver = yield this.listen(TauriEvent.DRAG_OVER, (event) => {
        handler(__spreadProps(__spreadValues({}, event), {
          payload: {
            type: "over",
            position: new PhysicalPosition(event.payload.position)
          }
        }));
      });
      const unlistenDragDrop = yield this.listen(TauriEvent.DRAG_DROP, (event) => {
        handler(__spreadProps(__spreadValues({}, event), {
          payload: {
            type: "drop",
            paths: event.payload.paths,
            position: new PhysicalPosition(event.payload.position)
          }
        }));
      });
      const unlistenDragLeave = yield this.listen(TauriEvent.DRAG_LEAVE, (event) => {
        handler(__spreadProps(__spreadValues({}, event), { payload: { type: "leave" } }));
      });
      return () => {
        unlistenDragEnter();
        unlistenDragDrop();
        unlistenDragOver();
        unlistenDragLeave();
      };
    });
  }
};

// node_modules/@tauri-apps/api/webviewWindow.js
function getCurrentWebviewWindow() {
  const webview = getCurrentWebview();
  return new WebviewWindow(webview.label, { skip: true });
}
function getAllWebviewWindows() {
  return __async(this, null, function* () {
    return invoke("plugin:window|get_all_windows").then((windows) => windows.map((w) => new WebviewWindow(w, {
      // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
      skip: true
    })));
  });
}
var WebviewWindow = class _WebviewWindow {
  /**
   * Creates a new {@link Window} hosting a {@link Webview}.
   * @example
   * ```typescript
   * import { WebviewWindow } from '@tauri-apps/api/webviewWindow'
   * const webview = new WebviewWindow('my-label', {
   *   url: 'https://github.com/tauri-apps/tauri'
   * });
   * webview.once('tauri://created', function () {
   *  // webview successfully created
   * });
   * webview.once('tauri://error', function (e) {
   *  // an error happened creating the webview
   * });
   * ```
   *
   * @param label The unique webview label. Must be alphanumeric: `a-zA-Z-/:_`.
   * @returns The {@link WebviewWindow} instance to communicate with the window and webview.
   */
  constructor(label, options = {}) {
    var _a;
    this.label = label;
    this.listeners = /* @__PURE__ */ Object.create(null);
    if (!(options === null || options === void 0 ? void 0 : options.skip)) {
      invoke("plugin:webview|create_webview_window", {
        options: __spreadProps(__spreadValues({}, options), {
          parent: typeof options.parent === "string" ? options.parent : (_a = options.parent) === null || _a === void 0 ? void 0 : _a.label,
          label
        })
      }).then(() => __async(this, null, function* () {
        return this.emit("tauri://created");
      })).catch((e) => __async(this, null, function* () {
        return this.emit("tauri://error", e);
      }));
    }
  }
  /**
   * Gets the Webview for the webview associated with the given label.
   * @example
   * ```typescript
   * import { Webview } from '@tauri-apps/api/webviewWindow';
   * const mainWebview = Webview.getByLabel('main');
   * ```
   *
   * @param label The webview label.
   * @returns The Webview instance to communicate with the webview or null if the webview doesn't exist.
   */
  static getByLabel(label) {
    return __async(this, null, function* () {
      var _a;
      const webview = (_a = (yield getAllWebviewWindows()).find((w) => w.label === label)) !== null && _a !== void 0 ? _a : null;
      if (webview) {
        return new _WebviewWindow(webview.label, { skip: true });
      }
      return null;
    });
  }
  /**
   * Get an instance of `Webview` for the current webview.
   */
  static getCurrent() {
    return getCurrentWebviewWindow();
  }
  /**
   * Gets a list of instances of `Webview` for all available webviews.
   */
  static getAll() {
    return __async(this, null, function* () {
      return getAllWebviewWindows();
    });
  }
  /**
   * Listen to an emitted event on this webivew window.
   *
   * @example
   * ```typescript
   * import { WebviewWindow } from '@tauri-apps/api/webviewWindow';
   * const unlisten = await WebviewWindow.getCurrent().listen<string>('state-changed', (event) => {
   *   console.log(`Got error: ${payload}`);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @param event Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.
   * @param handler Event handler.
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  listen(event, handler) {
    return __async(this, null, function* () {
      if (this._handleTauriEvent(event, handler)) {
        return () => {
          const listeners = this.listeners[event];
          listeners.splice(listeners.indexOf(handler), 1);
        };
      }
      return listen(event, handler, {
        target: { kind: "WebviewWindow", label: this.label }
      });
    });
  }
  /**
   * Listen to an emitted event on this webview window only once.
   *
   * @example
   * ```typescript
   * import { WebviewWindow } from '@tauri-apps/api/webviewWindow';
   * const unlisten = await WebviewWindow.getCurrent().once<null>('initialized', (event) => {
   *   console.log(`Webview initialized!`);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @param event Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.
   * @param handler Event handler.
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  once(event, handler) {
    return __async(this, null, function* () {
      if (this._handleTauriEvent(event, handler)) {
        return () => {
          const listeners = this.listeners[event];
          listeners.splice(listeners.indexOf(handler), 1);
        };
      }
      return once(event, handler, {
        target: { kind: "WebviewWindow", label: this.label }
      });
    });
  }
  /**
   * Set the window and webview background color.
   *
   * #### Platform-specific:
   *
   * - **Android / iOS:** Unsupported for the window layer.
   * - **macOS / iOS**: Not implemented for the webview layer.
   * - **Windows**:
   *   - alpha channel is ignored for the window layer.
   *   - On Windows 7, alpha channel is ignored for the webview layer.
   *   - On Windows 8 and newer, if alpha channel is not `0`, it will be ignored.
   *
   * @returns A promise indicating the success or failure of the operation.
   *
   * @since 2.1.0
   */
  setBackgroundColor(color) {
    return __async(this, null, function* () {
      return invoke("plugin:window|set_background_color", { color }).then(() => {
        return invoke("plugin:webview|set_webview_background_color", { color });
      });
    });
  }
};
applyMixins(WebviewWindow, [Window, Webview]);
function applyMixins(baseClass, extendedClasses) {
  (Array.isArray(extendedClasses) ? extendedClasses : [extendedClasses]).forEach((extendedClass) => {
    Object.getOwnPropertyNames(extendedClass.prototype).forEach((name) => {
      var _a;
      if (typeof baseClass.prototype === "object" && baseClass.prototype && name in baseClass.prototype)
        return;
      Object.defineProperty(
        baseClass.prototype,
        name,
        // eslint-disable-next-line
        (_a = Object.getOwnPropertyDescriptor(extendedClass.prototype, name)) !== null && _a !== void 0 ? _a : /* @__PURE__ */ Object.create(null)
      );
    });
  });
}
export {
  WebviewWindow,
  getAllWebviewWindows,
  getCurrentWebviewWindow
};
//# sourceMappingURL=@tauri-apps_api_webviewWindow.js.map
