$(function () {
    // Copy link to clipboard
    // No lib to do this ;)
    $("#copy").on('click', function () {
        /* Get the text field */
        var copyText = document.getElementById("direct-gif-link");

        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/

        /* Copy the text inside the text field */
        document.execCommand("copy");

        /* Alert the copied text */
        $('.alert').addClass('show');
        setTimeout(function () {
            $('.alert').removeClass('show');
        }, 3000);
    });


    $("#clear-input").on('click', function () {
        $('#giphyLink').val('').change();
    });

    // Should work with URLs like:
    // https://giphy.com/gifs/3ornjSZp9jUtEFlsL6
    // https://giphy.com/stickers/dance-lol-4QFzDdeLmo19MTm9AF
    //
    // Process:
    // 1. split by slashes (get last)
    // 2. split by dashes (get last)

    $("#giphyLink").on("change paste keyup", function () {

        // If input is blank
        if (!$(this).val().length) {
            $("#preview").attr('src', 'https://media.giphy.com/media/igFbuVNCTNQ1V516Ng/giphy.gif');
            $("#direct-gif-link").val('');
            return;
        }

        const gifPath = $(this).val().split('/')[$(this).val().split('/').length - 1];
        const gifId = gifPath.split('-')[gifPath.split('-').length - 1];
        const gifDirectLink = 'https://media.giphy.com/media/' + gifId + '/giphy.gif';

        $("#preview").attr('src', gifDirectLink);
        $("#direct-gif-link").val(gifDirectLink);
    });
});
