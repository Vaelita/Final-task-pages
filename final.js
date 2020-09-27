$('.small-img').hover(function() {
    var imgSrc = $(this).attr('src');
    $('#primary-img').attr('src', imgSrc);
    $('#primary-img').parent().attr('href', imgSrc);
});

$('.article-text').hover(function() {
    var orgPic = $('href="images/netflix.jpg"');
    $('#primary-img').attr(orgPic);
})