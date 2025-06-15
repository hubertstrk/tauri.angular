import {
  BaseDirectory
} from "./chunk-SLESAKMU.js";
import {
  Channel,
  Resource,
  invoke
} from "./chunk-HWGTYOU6.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// node_modules/@tauri-apps/plugin-fs/dist-js/index.js
var SeekMode;
(function(SeekMode2) {
  SeekMode2[SeekMode2["Start"] = 0] = "Start";
  SeekMode2[SeekMode2["Current"] = 1] = "Current";
  SeekMode2[SeekMode2["End"] = 2] = "End";
})(SeekMode || (SeekMode = {}));
function parseFileInfo(r) {
  return {
    isFile: r.isFile,
    isDirectory: r.isDirectory,
    isSymlink: r.isSymlink,
    size: r.size,
    mtime: r.mtime !== null ? new Date(r.mtime) : null,
    atime: r.atime !== null ? new Date(r.atime) : null,
    birthtime: r.birthtime !== null ? new Date(r.birthtime) : null,
    readonly: r.readonly,
    fileAttributes: r.fileAttributes,
    dev: r.dev,
    ino: r.ino,
    mode: r.mode,
    nlink: r.nlink,
    uid: r.uid,
    gid: r.gid,
    rdev: r.rdev,
    blksize: r.blksize,
    blocks: r.blocks
  };
}
function fromBytes(buffer) {
  const bytes = new Uint8ClampedArray(buffer);
  const size2 = bytes.byteLength;
  let x = 0;
  for (let i = 0; i < size2; i++) {
    const byte = bytes[i];
    x *= 256;
    x += byte;
  }
  return x;
}
var FileHandle = class extends Resource {
  /**
   * Reads up to `p.byteLength` bytes into `p`. It resolves to the number of
   * bytes read (`0` < `n` <= `p.byteLength`) and rejects if any error
   * encountered. Even if `read()` resolves to `n` < `p.byteLength`, it may
   * use all of `p` as scratch space during the call. If some data is
   * available but not `p.byteLength` bytes, `read()` conventionally resolves
   * to what is available instead of waiting for more.
   *
   * When `read()` encounters end-of-file condition, it resolves to EOF
   * (`null`).
   *
   * When `read()` encounters an error, it rejects with an error.
   *
   * Callers should always process the `n` > `0` bytes returned before
   * considering the EOF (`null`). Doing so correctly handles I/O errors that
   * happen after reading some bytes and also both of the allowed EOF
   * behaviors.
   *
   * @example
   * ```typescript
   * import { open, BaseDirectory } from "@tauri-apps/plugin-fs"
   * // if "$APPCONFIG/foo/bar.txt" contains the text "hello world":
   * const file = await open("foo/bar.txt", { baseDir: BaseDirectory.AppConfig });
   * const buf = new Uint8Array(100);
   * const numberOfBytesRead = await file.read(buf); // 11 bytes
   * const text = new TextDecoder().decode(buf);  // "hello world"
   * await file.close();
   * ```
   *
   * @since 2.0.0
   */
  read(buffer) {
    return __async(this, null, function* () {
      if (buffer.byteLength === 0) {
        return 0;
      }
      const data = yield invoke("plugin:fs|read", {
        rid: this.rid,
        len: buffer.byteLength
      });
      const nread = fromBytes(data.slice(-8));
      const bytes = data instanceof ArrayBuffer ? new Uint8Array(data) : data;
      buffer.set(bytes.slice(0, bytes.length - 8));
      return nread === 0 ? null : nread;
    });
  }
  /**
   * Seek sets the offset for the next `read()` or `write()` to offset,
   * interpreted according to `whence`: `Start` means relative to the
   * start of the file, `Current` means relative to the current offset,
   * and `End` means relative to the end. Seek resolves to the new offset
   * relative to the start of the file.
   *
   * Seeking to an offset before the start of the file is an error. Seeking to
   * any positive offset is legal, but the behavior of subsequent I/O
   * operations on the underlying object is implementation-dependent.
   * It returns the number of cursor position.
   *
   * @example
   * ```typescript
   * import { open, SeekMode, BaseDirectory } from '@tauri-apps/plugin-fs';
   *
   * // Given hello.txt pointing to file with "Hello world", which is 11 bytes long:
   * const file = await open('hello.txt', { read: true, write: true, truncate: true, create: true, baseDir: BaseDirectory.AppLocalData });
   * await file.write(new TextEncoder().encode("Hello world"));
   *
   * // Seek 6 bytes from the start of the file
   * console.log(await file.seek(6, SeekMode.Start)); // "6"
   * // Seek 2 more bytes from the current position
   * console.log(await file.seek(2, SeekMode.Current)); // "8"
   * // Seek backwards 2 bytes from the end of the file
   * console.log(await file.seek(-2, SeekMode.End)); // "9" (e.g. 11-2)
   *
   * await file.close();
   * ```
   *
   * @since 2.0.0
   */
  seek(offset, whence) {
    return __async(this, null, function* () {
      return yield invoke("plugin:fs|seek", {
        rid: this.rid,
        offset,
        whence
      });
    });
  }
  /**
   * Returns a {@linkcode FileInfo } for this file.
   *
   * @example
   * ```typescript
   * import { open, BaseDirectory } from '@tauri-apps/plugin-fs';
   * const file = await open("file.txt", { read: true, baseDir: BaseDirectory.AppLocalData });
   * const fileInfo = await file.stat();
   * console.log(fileInfo.isFile); // true
   * await file.close();
   * ```
   *
   * @since 2.0.0
   */
  stat() {
    return __async(this, null, function* () {
      const res = yield invoke("plugin:fs|fstat", {
        rid: this.rid
      });
      return parseFileInfo(res);
    });
  }
  /**
   * Truncates or extends this file, to reach the specified `len`.
   * If `len` is not specified then the entire file contents are truncated.
   *
   * @example
   * ```typescript
   * import { open, BaseDirectory } from '@tauri-apps/plugin-fs';
   *
   * // truncate the entire file
   * const file = await open("my_file.txt", { read: true, write: true, create: true, baseDir: BaseDirectory.AppLocalData });
   * await file.truncate();
   *
   * // truncate part of the file
   * const file = await open("my_file.txt", { read: true, write: true, create: true, baseDir: BaseDirectory.AppLocalData });
   * await file.write(new TextEncoder().encode("Hello World"));
   * await file.truncate(7);
   * const data = new Uint8Array(32);
   * await file.read(data);
   * console.log(new TextDecoder().decode(data)); // Hello W
   * await file.close();
   * ```
   *
   * @since 2.0.0
   */
  truncate(len) {
    return __async(this, null, function* () {
      yield invoke("plugin:fs|ftruncate", {
        rid: this.rid,
        len
      });
    });
  }
  /**
   * Writes `data.byteLength` bytes from `data` to the underlying data stream. It
   * resolves to the number of bytes written from `data` (`0` <= `n` <=
   * `data.byteLength`) or reject with the error encountered that caused the
   * write to stop early. `write()` must reject with a non-null error if
   * would resolve to `n` < `data.byteLength`. `write()` must not modify the
   * slice data, even temporarily.
   *
   * @example
   * ```typescript
   * import { open, write, BaseDirectory } from '@tauri-apps/plugin-fs';
   * const encoder = new TextEncoder();
   * const data = encoder.encode("Hello world");
   * const file = await open("bar.txt", { write: true, baseDir: BaseDirectory.AppLocalData });
   * const bytesWritten = await file.write(data); // 11
   * await file.close();
   * ```
   *
   * @since 2.0.0
   */
  write(data) {
    return __async(this, null, function* () {
      return yield invoke("plugin:fs|write", {
        rid: this.rid,
        data
      });
    });
  }
};
function create(path, options) {
  return __async(this, null, function* () {
    if (path instanceof URL && path.protocol !== "file:") {
      throw new TypeError("Must be a file URL.");
    }
    const rid = yield invoke("plugin:fs|create", {
      path: path instanceof URL ? path.toString() : path,
      options
    });
    return new FileHandle(rid);
  });
}
function open(path, options) {
  return __async(this, null, function* () {
    if (path instanceof URL && path.protocol !== "file:") {
      throw new TypeError("Must be a file URL.");
    }
    const rid = yield invoke("plugin:fs|open", {
      path: path instanceof URL ? path.toString() : path,
      options
    });
    return new FileHandle(rid);
  });
}
function copyFile(fromPath, toPath, options) {
  return __async(this, null, function* () {
    if (fromPath instanceof URL && fromPath.protocol !== "file:" || toPath instanceof URL && toPath.protocol !== "file:") {
      throw new TypeError("Must be a file URL.");
    }
    yield invoke("plugin:fs|copy_file", {
      fromPath: fromPath instanceof URL ? fromPath.toString() : fromPath,
      toPath: toPath instanceof URL ? toPath.toString() : toPath,
      options
    });
  });
}
function mkdir(path, options) {
  return __async(this, null, function* () {
    if (path instanceof URL && path.protocol !== "file:") {
      throw new TypeError("Must be a file URL.");
    }
    yield invoke("plugin:fs|mkdir", {
      path: path instanceof URL ? path.toString() : path,
      options
    });
  });
}
function readDir(path, options) {
  return __async(this, null, function* () {
    if (path instanceof URL && path.protocol !== "file:") {
      throw new TypeError("Must be a file URL.");
    }
    return yield invoke("plugin:fs|read_dir", {
      path: path instanceof URL ? path.toString() : path,
      options
    });
  });
}
function readFile(path, options) {
  return __async(this, null, function* () {
    if (path instanceof URL && path.protocol !== "file:") {
      throw new TypeError("Must be a file URL.");
    }
    const arr = yield invoke("plugin:fs|read_file", {
      path: path instanceof URL ? path.toString() : path,
      options
    });
    return arr instanceof ArrayBuffer ? new Uint8Array(arr) : Uint8Array.from(arr);
  });
}
function readTextFile(path, options) {
  return __async(this, null, function* () {
    if (path instanceof URL && path.protocol !== "file:") {
      throw new TypeError("Must be a file URL.");
    }
    const arr = yield invoke("plugin:fs|read_text_file", {
      path: path instanceof URL ? path.toString() : path,
      options
    });
    const bytes = arr instanceof ArrayBuffer ? arr : Uint8Array.from(arr);
    return new TextDecoder().decode(bytes);
  });
}
function readTextFileLines(path, options) {
  return __async(this, null, function* () {
    if (path instanceof URL && path.protocol !== "file:") {
      throw new TypeError("Must be a file URL.");
    }
    const pathStr = path instanceof URL ? path.toString() : path;
    return yield Promise.resolve({
      path: pathStr,
      rid: null,
      next() {
        return __async(this, null, function* () {
          if (this.rid === null) {
            this.rid = yield invoke("plugin:fs|read_text_file_lines", {
              path: pathStr,
              options
            });
          }
          const arr = yield invoke("plugin:fs|read_text_file_lines_next", { rid: this.rid });
          const bytes = arr instanceof ArrayBuffer ? new Uint8Array(arr) : Uint8Array.from(arr);
          const done = bytes[bytes.byteLength - 1] === 1;
          if (done) {
            this.rid = null;
            return { value: null, done };
          }
          const line = new TextDecoder().decode(bytes.slice(0, bytes.byteLength));
          return {
            value: line,
            done
          };
        });
      },
      [Symbol.asyncIterator]() {
        return this;
      }
    });
  });
}
function remove(path, options) {
  return __async(this, null, function* () {
    if (path instanceof URL && path.protocol !== "file:") {
      throw new TypeError("Must be a file URL.");
    }
    yield invoke("plugin:fs|remove", {
      path: path instanceof URL ? path.toString() : path,
      options
    });
  });
}
function rename(oldPath, newPath, options) {
  return __async(this, null, function* () {
    if (oldPath instanceof URL && oldPath.protocol !== "file:" || newPath instanceof URL && newPath.protocol !== "file:") {
      throw new TypeError("Must be a file URL.");
    }
    yield invoke("plugin:fs|rename", {
      oldPath: oldPath instanceof URL ? oldPath.toString() : oldPath,
      newPath: newPath instanceof URL ? newPath.toString() : newPath,
      options
    });
  });
}
function stat(path, options) {
  return __async(this, null, function* () {
    const res = yield invoke("plugin:fs|stat", {
      path: path instanceof URL ? path.toString() : path,
      options
    });
    return parseFileInfo(res);
  });
}
function lstat(path, options) {
  return __async(this, null, function* () {
    const res = yield invoke("plugin:fs|lstat", {
      path: path instanceof URL ? path.toString() : path,
      options
    });
    return parseFileInfo(res);
  });
}
function truncate(path, len, options) {
  return __async(this, null, function* () {
    if (path instanceof URL && path.protocol !== "file:") {
      throw new TypeError("Must be a file URL.");
    }
    yield invoke("plugin:fs|truncate", {
      path: path instanceof URL ? path.toString() : path,
      len,
      options
    });
  });
}
function writeFile(path, data, options) {
  return __async(this, null, function* () {
    if (path instanceof URL && path.protocol !== "file:") {
      throw new TypeError("Must be a file URL.");
    }
    if (data instanceof ReadableStream) {
      const file = yield open(path, options);
      const reader = data.getReader();
      try {
        while (true) {
          const { done, value } = yield reader.read();
          if (done)
            break;
          yield file.write(value);
        }
      } finally {
        reader.releaseLock();
        yield file.close();
      }
    } else {
      yield invoke("plugin:fs|write_file", data, {
        headers: {
          path: encodeURIComponent(path instanceof URL ? path.toString() : path),
          options: JSON.stringify(options)
        }
      });
    }
  });
}
function writeTextFile(path, data, options) {
  return __async(this, null, function* () {
    if (path instanceof URL && path.protocol !== "file:") {
      throw new TypeError("Must be a file URL.");
    }
    const encoder = new TextEncoder();
    yield invoke("plugin:fs|write_text_file", encoder.encode(data), {
      headers: {
        path: encodeURIComponent(path instanceof URL ? path.toString() : path),
        options: JSON.stringify(options)
      }
    });
  });
}
function exists(path, options) {
  return __async(this, null, function* () {
    if (path instanceof URL && path.protocol !== "file:") {
      throw new TypeError("Must be a file URL.");
    }
    return yield invoke("plugin:fs|exists", {
      path: path instanceof URL ? path.toString() : path,
      options
    });
  });
}
var Watcher = class extends Resource {
};
function watchInternal(paths, cb, options) {
  return __async(this, null, function* () {
    const watchPaths = Array.isArray(paths) ? paths : [paths];
    for (const path of watchPaths) {
      if (path instanceof URL && path.protocol !== "file:") {
        throw new TypeError("Must be a file URL.");
      }
    }
    const onEvent = new Channel();
    onEvent.onmessage = cb;
    const rid = yield invoke("plugin:fs|watch", {
      paths: watchPaths.map((p) => p instanceof URL ? p.toString() : p),
      options,
      onEvent
    });
    const watcher = new Watcher(rid);
    return () => {
      void watcher.close();
    };
  });
}
function watch(paths, cb, options) {
  return __async(this, null, function* () {
    return yield watchInternal(paths, cb, __spreadValues({
      delayMs: 2e3
    }, options));
  });
}
function watchImmediate(paths, cb, options) {
  return __async(this, null, function* () {
    return yield watchInternal(paths, cb, __spreadProps(__spreadValues({}, options), {
      delayMs: void 0
    }));
  });
}
function size(path) {
  return __async(this, null, function* () {
    if (path instanceof URL && path.protocol !== "file:") {
      throw new TypeError("Must be a file URL.");
    }
    return yield invoke("plugin:fs|size", {
      path: path instanceof URL ? path.toString() : path
    });
  });
}
export {
  BaseDirectory,
  FileHandle,
  SeekMode,
  copyFile,
  create,
  exists,
  lstat,
  mkdir,
  open,
  readDir,
  readFile,
  readTextFile,
  readTextFileLines,
  remove,
  rename,
  size,
  stat,
  truncate,
  watch,
  watchImmediate,
  writeFile,
  writeTextFile
};
//# sourceMappingURL=@tauri-apps_plugin-fs.js.map
