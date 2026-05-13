// Patches fs.readlink to treat EISDIR as EINVAL on Windows drives
// that incorrectly return EISDIR for regular files/dirs (e.g. A: drive).
const fs = require("fs");

const patchReadlink = (fn) =>
  function (path, options, callback) {
    if (typeof options === "function") {
      callback = options;
      options = {};
    }
    fn.call(this, path, options, (err, linkString) => {
      if (err && err.code === "EISDIR") {
        const e = Object.assign(new Error(`EINVAL: invalid argument, readlink '${path}'`), {
          errno: -4071,
          code: "EINVAL",
          syscall: "readlink",
          path,
        });
        callback(e);
      } else {
        callback(err, linkString);
      }
    });
  };

const patchReadlinkSync = (fn) =>
  function (path, options) {
    try {
      return fn.call(this, path, options);
    } catch (err) {
      if (err.code === "EISDIR") {
        const e = Object.assign(new Error(`EINVAL: invalid argument, readlink '${path}'`), {
          errno: -4071,
          code: "EINVAL",
          syscall: "readlink",
          path,
        });
        throw e;
      }
      throw err;
    }
  };

fs.readlink = patchReadlink(fs.readlink.bind(fs));
fs.readlinkSync = patchReadlinkSync(fs.readlinkSync.bind(fs));

// Also patch fs.promises.readlink
if (fs.promises && fs.promises.readlink) {
  const origAsync = fs.promises.readlink.bind(fs.promises);
  fs.promises.readlink = async function (path, options) {
    try {
      return await origAsync(path, options);
    } catch (err) {
      if (err.code === "EISDIR") {
        const e = Object.assign(new Error(`EINVAL: invalid argument, readlink '${path}'`), {
          errno: -4071,
          code: "EINVAL",
          syscall: "readlink",
          path,
        });
        throw e;
      }
      throw err;
    }
  };
}
