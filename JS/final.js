// For lightbox hover:
$('.small-img').hover(function() {
    var imgSrc = $(this).attr('src');
    $('#primary-img').attr('src', imgSrc);
    $('#primary-img').parent().attr('href', imgSrc);
});

$('.article-text').hover(function() {
    var orgPic = $('href="images/netflix.jpg"');
    $('#primary-img').attr(orgPic);
});


// for form validation:
$('.needs-validation').submit(function() {
    $('.error-msg').hide();
    var isValid = true;

    if ($('#username').val() == '') {
        $('#username-error').show();
        isValid = false;
    }
    if ($('#my-password').val() == '') {
        $('#password-error-fill').show();
        isValid = false;
    }
    if ($('#my-password').val() != $('#password-confirm').val()) {
        $('#password-error-match').show();
        isValid = false;
    }
    if ($('#first-name').val() == '') {
        $('#first-name-error').show();
        isValid = false;
    }
    if ($('#last-name').val() == '') {
        $('#last-name-error').show();
        isValid = false;
    }
    if ($('#input-state').val() == 'Country*') {
        $('#option-error').show();
        isValid = false;
    }
    if (!$('#example-check').prop('checked')) {
        $('#check-error').show();
        isValid = false;
    }
    return isValid;
});

// for chat:
var date = new Date();
var formattedDate = date.getDate() + '.' + '0' + date.getMonth() + '.' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();
$('#chat-form').submit(function() {
    var username = $('#username').val();
    $('#chat-container').append('<h6 class="text-muted mr-3 ml-3">' + username + '  ' + formattedDate + '</h6>');

    var message = $('#message').val();
    $('#chat-container').append('<p class="border-bottom border-dark mr-3 ml-3">' + message + '</p>');

    $('#username').val('');
    $('#message').val('');
    return false;
});

// for audio player:
audioPlayer();
function audioPlayer(){
    var currentSong = 0;
    $('#audio-player')[0].src = $('playlist li a')[0];
    $('#audio-player')[0].play();
    $('#playlist li a').click(function(e){
        e.preventDefault();
        $('#audio-player')[0].src = this;
        $('#audio-player')[0].play();
        $('#playlist li').removeClass('current-song');
        currentSong = $(this).parent().index();
        $(this).parent().addClass('current-song');
    });
    $('#audio-player')[0].addEventListener('ended', function() {
       currentSong++; 
        if (currentSong == $('#playlist li a').length)
            currentSong = 0;
        $('#playlist li').removeClass('current-song');
        $('#playlist li:eq('+ currentSong +')').addClass('current-song');
        $('audio-player')[0].src = $('#playlist li a')[currentSong].href;
        $('#audio-player')[0].play();
    });
};