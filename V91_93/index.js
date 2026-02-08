// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg
// 7. harry.pdf

// this:
// jpg/name.jpg, jpg/cat.jpg
// png/name.png
// pdf/this.pdf pdf/harry.pdf
// zip/harry.zip zip/Rohan.zip

// This program organizes files inside a folder
// It groups files based on their extension
// Example: image.jpg -> jpg/image.jpg

// fs/promises → for async file operations (read folder, move files, etc.)
import fs from "fs/promises";

// fs (normal version) → for sync operations like existsSync()
import fsn from "fs";

// path → helps safely create file paths (works on Windows/Mac/Linux)
import path from "path";


// Base folder path you want to organize
// 👉 Change this to your own folder path
const basepath = "C:\\Users\\hp\\Desktop\\SigmaWebDev\\V91_93";


// Read all files inside the folder
// returns array like ["a.jpg", "b.pdf", "c.zip"]
let files = await fs.readdir(basepath);


// Loop through every file one by one
for (const item of files) {

  console.log("running for", item); // just for debugging

  // Get file extension
  // example: "cat.jpg" → ["cat","jpg"] → take last → "jpg"
  let ext = item.split(".")[item.split(".").length - 1];


  // Ignore .js and .json files (so we don't move our program files)
  // Also ensure it's actually a file with extension
  if (ext != "js" && ext != "json" && item.split(".").length > 1) {

    // Check if folder with extension name already exists
    // Example: does "jpg" folder exist?
    if (fsn.existsSync(path.join(basepath, ext))) {

      // If YES → move file inside that folder
      // rename() is used to move files
      // from: basepath/item
      // to:   basepath/ext/item
      await fs.rename(
        path.join(basepath, item),
        path.join(basepath, ext, item)
      );

    } else {

      // If folder doesn't exist → create it
      await fs.mkdir(path.join(basepath, ext));

      // Then move file into it
      await fs.rename(
        path.join(basepath, item),
        path.join(basepath, ext, item)
      );
    }
  }
}
