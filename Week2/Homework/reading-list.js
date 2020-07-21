// reading list : add a specific string to each element based on property value.
"use strict";
let myLibrary = [
  { title: "The Idiot", author: "Fyodor Dostoyvsky", alreadyRead: true },
  {
    title: "The Unbearable Lightness of Being",
    author: "Milan Kundera",
    alreadyRead: true,
  },
  {
    title: "Brief History of time",
    author: "Stephen Hawkings",
    alreadyRead: false,
  },
];
myLibrary.forEach((element) => {
  if (element.alreadyRead) {
    console.log(" You already read " + element.title + " by " + element.author);
  } else {
    console.log(
      " You still need to read " + element.title + " by " + element.author
    );
  }
});
