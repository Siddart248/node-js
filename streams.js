const fs = require("fs");

const readableStream = fs.createReadStream("Hugefile.txt", "utf-8");
console.log(readableStream);
const writableStream = fs.createWriteStream("Hugefile2.txt");

// reading data
readableStream.on("data", (buffer) => {
   
    writableStream.write(buffer);
});

// end of reading
readableStream.on("end", () => {
  console.log("file copied successfully");
});

// error handling
readableStream.on("error", (err) => {
    console.log(err.message);
});

