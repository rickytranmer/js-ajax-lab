$(function() {
    console.log( "DOM is ready" );
    // - Create a list of all books as list items
    function showBooks() {
    	var ajax = $.get('https://den-super-crud.herokuapp.com/books/')//;
    	  .done(function(data) {
    	    console.log(data);
    	  	for (let i = 0; i < data.books.length; i++) {
    	   		// - Makes li ul for each book, with title, author, releaseDate, & image as li
    	   		$('#books').append($('<li><ul id="' + data.books[i]._id + '"><li>' + data.books[i].title + '</li><li>' + data.books[i].author + '</li><li>' + data.books[i].releaseDate + '</li><li><img src="' + data.books[i].image + '"></li></ul></li>'));
    	   	}
    	  });
    }

    showBooks();
    
    // - Put all form info in variable newBook
    $("form").on("submit", function(event){
        event.preventDefault();
    	let newBook = {
    		title: $('#book-title').val(),
    		author: $('#book-author').val(),
    		image: $('#book-image').val(),
    		releaseDate: $('#book-release-date').val()
    	};
    	console.log(newBook);

    	// - Post newBook to den-super-crud
	    $.post('https://den-super-crud.herokuapp.com/books', newBook)//;
	      .done(function(data) {
	      console.log(data);
		});
	      
	    // - Remove list of books, create new one
	    $('#books').empty();
	    showBooks();
    });
});