/*
 * Youtube Loader
 * 
 * Significantly optimise video heavy page loading times by dynamically 
 * swapping out YouTube iframes. Requires Jquery.
 *
 * Copyright (c) 2012-2014 LJXDM
 *
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 *
 * Project home: http://www.github.com/LJXDM/youtube-loader
 *
 * Version:  3.1
 */

// load the real YouTube iframe
function youtubeLoaderVideo(id, width, height) {
    var youtube = '<iframe src="https://www.youtube.com/embed/' + id + '/?autoplay=1&amp;border=0&amp;wmode=opaque&amp;autohide=1&amp;enablejsapi=1" width="' + width + '" height="' + height + '" allowfullscreen class="youtube"></iframe>';
    $("#youtube-loader-" + id).after(youtube);
    $("#youtube-loader-" + id).remove();
}

function youtubeLoader() {    
	
	var buttonWidth = 85;
	var buttonHeight = 60;
	var buttonImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAAA8CAYAAAAXDvbIAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAABVAAAAPAA6Yl2yAAAEB0lEQVR42u2cT28TRxjGn3fWDapE4qAiGpeYWGoFEn+EGwWp4YJPVW/1oX+O5RuQCs4o4hyk7RVLxkcCbeWeilAPQYIElcjafgOXuHUSUSWLc6kT78vBO87G2RDHcTQzZn8Xr2dX62d/Gs++9u4O4YCUEokxsJXyIFIEpNrXMziFkPYwmGmYCOmDZnj3PuEQ8Xqn2wqiXdsyUBbwyqBGebxa/fugGWg/gQ0vNrV94JTppQBz4LnmCxVRrxUm1tbcd20dKrWUSIx5XswGUVb14WgHY53BBapvTO8ld5fU0sjoNY9FEYRh1fl1hhmOJTazYcPDDqmlU6cve2TNRUI7gxkO1WuZ9h4rgm8aZBUioZ1DhDQGjhfa21tSF0fO/NDrM/F7AVH25cfJr4NNwZ46rTqfqRCRHXwvgOZYig5ry4hQUr5DAL5UFlZWdSrTCTpsSmVOqw5lOgzOyGV/TKVMNzuKCEIZuSRKp05fjsqo3lAaGb0GAAKChlWH6TcEQ2RUh+g3xOF3ESGRHVQEz1oRvSHqqUeAFlI/zd9D4uYUrKEh1VEOhaz3tZBqxYfwya0fcfHPZ0jcnFIdp3v80lToVPjH4vGW3I+++0Z1nK7Roqe2cyyZROqnu8bJZW7W/FpKlZgmV/4frbVUSVBu/KsvVcfZFyOkSo4lk/jsfg5nf3mA45NfqI6zJ0ZJlQxencS5X2e1lWukVImuco2WKgnK/fDCedVx+kOqZPDqJM7/8TvG7BkMjI4qy9FXUiUnv/8Wl14+V/brLKZawFGw5bqo3L6D/x7+rOTz+0rqlutiNZfHai6Pxps3ynL0hVRdZEqMl/p69hEqt+9oIVNirNTXs49QnbFRr1RUR9mFcVJr8wso37ilpUyJMVJr8wv4d8bGxsIL1VH2JQagDI1vTjNJJjMcAIgBXAYopTpQO/8vLaE6YyurNbtBPhWj3dffRJntaCN1y3VRvWtjNZdXHaV7GOuAJlJXcnlszL/QqtbsBiJyAE2kuo+fqI7QU4Q8Y0X0DhH2bGbE4RDcrFMjeoDH7ACAEF7DUR2mX7D8OpUAYHHkDKsO1A9MLL8iYPtySll1IPPxH19HS+p2Q0R3EGhOLgsAEJ5nqw5lOuQ1inJZAMD46j9/IRoCuoYZju8QQPASNcNWHc5UiHa6a02isHjiRBwDg+XoQbWDwQznysqrz4NtrZ46sbbmCvKyqkMaBWPd4sb19uYdd6iML1eeMnNW/oUVsTfMcAQ3MsGxVLLrtp8rK0u/CbGZBrigOriuEDBN9VqoUH/93jSnUvogC3AGRGlofC3r6OE5MBWF2CzuNwEYdbpLIDB7Gos0+Se0sBnTjmJmtJ7KCWsNmU1NzqQ2vlx5qjr1e89bUmtx22uCSEAAAAAASUVORK5CYII="

    $('iframe').each(function(index,video) {
    	var src = $(video).attr('src');
        if(src && src.match(/http(s)?:\/\/www\.youtube\.com/)) {
            var width = $(video).width();
            var height = $(video).height();
            // play button position
            var buttonLeft = Math.ceil(width/2 - (buttonWidth/2));
            var buttonTop = Math.ceil(height/2 - (buttonHeight/2));
            // Regex YouTube ID.
            var str = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
            var id = (src.match(str) ? RegExp.$1 : false);
            if(id) { 
	            var placeholder = '<div style="position: relative; width: ' + width + 'px; height: ' + height + 'px;">';
	            placeholder += '<a href="#" onclick="youtubeLoaderVideo(\'' + id + '\',' + width + ',' + height +'); return false;" id="youtube-loader-' + id + '" style="display: block; position: absolute; background: url(http://i.ytimg.com/vi/'+id+'/hqdefault.jpg) no-repeat; background-size: '+ width +'px '+ height +'px; width: '+ width +'px; height: '+ height +'px;">'; 
	            placeholder += '<div style="position: absolute; background: url(' + buttonImage + ') no-repeat scroll 0 0 transparent; width: ' + buttonWidth + 'px; height: ' + buttonHeight + 'px; left: ' + buttonLeft + 'px; top: ' + buttonTop + 'px; margin: auto; z-index: 999;">';
	            placeholder += '</div></a></div>';
	            $(video).after(placeholder);
	            $(video).remove();
            }
        }
    });
}

// run it!
youtubeLoader();
