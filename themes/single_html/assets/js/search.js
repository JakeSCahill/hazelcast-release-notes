   function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    $(function() {
        var q = getParameterByName('q'), 
            ul = $('#search-results').empty(),
            results = index.search(q);

        $('#search-q').text(q);
        if (results.length > 0) {
            for (var i = 0; i < results.length; i++) {
                ul.append($('<li><a href="' + results[i].ref + '">' + documentTitles[results[i].ref] + '</a></li>'));
            }
        } else {
            ul.append($('<li class="no-results">No results found</li>'));
        }
    })
