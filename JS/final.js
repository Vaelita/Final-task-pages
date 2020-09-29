$('.small-img').hover(function() {
    var imgSrc = $(this).attr('src');
    $('#primary-img').attr('src', imgSrc);
    $('#primary-img').parent().attr('href', imgSrc);
});

$('.article-text').hover(function() {
    var orgPic = $('href="images/netflix.jpg"');
    $('#primary-img').attr(orgPic);
});


// bootstrapValidate('.form-control', 'required: Please fill out this field!')
// $(this).bootstrapValidate('#my-password', 'matches:#password-confirm:Your passwords should match!')

// $(function(){
//     $('.needs-validation')
// })

$('.needs-validation').submit(function() {
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
    if ($('#option').val() == '') {
        $('#option-error').show();
        isValid = false;
    }
    if ($('#check').prop('checked')) {
        $('#check-error').show();
        isValid = false;
    }
    return isValid;
});