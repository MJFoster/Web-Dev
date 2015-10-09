$(document).ready(function() {
    $('#button').click(function(){  // Upon click of the <div> with ID="button"
        var toAdd = $("input[name=checkListItem]").val();  //Save VALUE of input >>> toAdd.
        $('.list').append('<div class="item">' + toAdd + '</div>'); // Append to end of "list" CLASS element this string
        });
    $(document).on('click', '.item', function() {  // Upon click of an ITEM in your <div> list ... remove THIS item clicked.
        $(this).remove();
    });
});