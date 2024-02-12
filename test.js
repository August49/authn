import fs from "fs";
const path = "../auth.json";

setInterval(() => {
  fs.access(path, fs.constants.F_OK, (err) => {
    if (err) {
      console.log("File does not exist");
      return;
    } else {
      fs.unlink(path, (err) => {
        if (err) {
          console.error(`Error deleting file: ${err}`);
        } else {
          console.log("auth.json file deleted successfully");
        }
      });
    }
  });
}, 1000);
