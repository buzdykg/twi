$(document).ready(function() {
    var handleAjaxComplete = function(event, xhr, settings) {
        var response = xhr.responseJSON;

        switch (xhr.status) {
            case 200:
            case 400:
            case 500:
                alert('Message occured while serving your request ' + response.message);
                break;
        }
    }

    $(document).ajaxError(handleAjaxComplete);
});
