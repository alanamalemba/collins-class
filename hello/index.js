import fs from "fs";

// Reading a file
// const data = fs.readFileSync("test.txt", "utf-8");

// console.log(data);


// writing into a file - create, overwrite
// fs.writeFileSync("test2.txt", "This is the text for test2.txt");
// fs.writeFileSync("test2.txt", "This is text that will overwrite the original file");

// appending into a file's content \n
// fs.appendFileSync("test.txt","This is the appended text")
// fs.appendFileSync("test.txt","\nThis is the appended text but on a new line")
// fs.appendFileSync("test.txt","This is the \nappended text")

// deleting a file
fs.unlinkSync("index.html")
