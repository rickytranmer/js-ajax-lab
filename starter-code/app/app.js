$(function() {
    console.log( "DOM is ready" );
    //TODO - Create a list of all books as list items
    var booksObject = {};
    var ajax = $.get('https://den-super-crud.herokuapp.com/books/')//;
    .done(function(data) {
        	console.log(data.books);
        	for (let i=0; i<data.books.length; i++) {
        		// - Makes li ul for each book, with title, author, releaseDate, & image as li
        		booksObject = JSON.parse(JSON.stringify(data.books[i]));
        		console.log(booksObject.author);
        		console.log(data.books[i]);
        		$('#books').append($('<li><ul id="' + booksObject._id + '"><li>' + booksObject.title + '</li><li>' + booksObject.author + '</li><li>' + booksObject.releaseDate + '</li><li><img src="' + booksObject.image + '"></li></ul></li>'));
        	}
    });

    //TODO - Put all form info in variable newBook
    //TODO - Post newBook to den-super-crud
    //TODO - Remove list of books, create new one
    // $('#books').empty();
});