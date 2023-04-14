$(document).ready(function() {

    $('#movie-form').on('submit', function(event) {
        event.preventDefault();

        var title = $('#title-input').val();
        var rating = $('#rating-input').val();

        if (title.length < 2) {
            alert("Title must have at least 2 characters.");
            return;
        }

        $('#movies').append('<li><span class="title">' + title + '</span> - <span class="rating">' + rating + '</span><button class="remove-button">Remove</button></li>');

        $('#title-input').val('');
        $('#rating-input').val('');
    });

    $('#movies').on('click', '.remove-button', function() {
        $(this).parent().remove();
    });

    $('#sort-title').on('click', function() {
        var moviesList = $('#movies');
        var movies = moviesList.children('li').get();
        movies.sort(function(a, b) {
            var titleA = $(a).find('.title').text().toUpperCase();
            var titleB = $(b).find('.title').text().toUpperCase();
            return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0;
        });
        $.each(movies, function(index, movie) {
            moviesList.append(movie);
        });
    });

    $('#sort-rating').on('click', function() {
        var moviesList = $('#movies');
        var movies = moviesList.children('li').get();
        movies.sort(function(a, b) {
            var ratingA = parseFloat($(a).find('.rating').text());
            var ratingB = parseFloat($(b).find('.rating').text());
            return ratingA - ratingB;
        });
        $.each(movies, function(index, movie) {
            moviesList.append(movie);
        });
    });
});
