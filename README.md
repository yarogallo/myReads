# MyReads
The application allows to categorize books into **Currently Reading**, **Want To Read** and **Read**. Each category represent a bookshelf, users are able to move books between bookshelfs and add new books to any bookshelf.

## Development overview
The app has two main views:
1. **BookList**: displays a list of books, each book inside its respective **Bookshelf**.
2. **BooksSearch**: displays an input field that allows to search books by name, author or theme and show them in the screen.

Each **Book** has a **Selector** that allows to select a bookshelf for moving the book or select none to remove the book completely. 
 
To go from **BookList** page to **BooksSearch** page use the circular green button in the right-bottom corner.
To return to **BookList** from **BooksSearch** page use the back arrow in the up-left corner.

## Getting started
Make sure Nodejs and npm are installed by running.<br>
```batch
node -v
npm -v
```
If you do not have them, check [here](https://docs.npmjs.com/getting-started/installing-node)

## Installing 
Project available in: [https://github.com/yarogallo/myReads](https://github.com/yarogallo/myReads)

Once you have the project, open a terminal, move to the project directory and run. 

```batch
npm install
npm start
``` 
 
## Built with
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Browser compatibility
The app was successfully tested in:
* **Google Chrome:** Version 65.0.3325.162 (Official Build) (64-bit)
* **Safari:** Version 11.0.3 (12604.5.6.1.1)
* **Mozilla Firefox:** Version 57.0.3 (64-bit)

