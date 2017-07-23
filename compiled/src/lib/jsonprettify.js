'use strict';

function JSONprettify(json) {
    if (typeof json != 'string') {
        json = JSON.stringify(json, undefined, '\t');
    }

    var arr = [],
        _string = 'color:green',
        _number = 'color:darkorange',
        _boolean = 'color:blue',
        _null = 'color:magenta',
        _key = 'color:red';

    json = json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var style = _number;
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                style = _key;
            } else {
                style = _string;
            }
        } else if (/true|false/.test(match)) {
            style = _boolean;
        } else if (/null/.test(match)) {
            style = _null;
        }
        arr.push(style);
        arr.push('');
        return '%c' + match + '%c';
    });

    arr.unshift(json);

    console.log.apply(console, arr);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvanNvbnByZXR0aWZ5LmpzIl0sIm5hbWVzIjpbIkpTT05wcmV0dGlmeSIsImpzb24iLCJKU09OIiwic3RyaW5naWZ5IiwidW5kZWZpbmVkIiwiYXJyIiwiX3N0cmluZyIsIl9udW1iZXIiLCJfYm9vbGVhbiIsIl9udWxsIiwiX2tleSIsInJlcGxhY2UiLCJtYXRjaCIsInN0eWxlIiwidGVzdCIsInB1c2giLCJ1bnNoaWZ0IiwiY29uc29sZSIsImxvZyIsImFwcGx5Il0sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVNBLFlBQVQsQ0FBc0JDLElBQXRCLEVBQTRCO0FBQ3hCLFFBQUksT0FBT0EsSUFBUCxJQUFlLFFBQW5CLEVBQTZCO0FBQ3pCQSxlQUFPQyxLQUFLQyxTQUFMLENBQWVGLElBQWYsRUFBcUJHLFNBQXJCLEVBQWdDLElBQWhDLENBQVA7QUFDSDs7QUFFRCxRQUNJQyxNQUFNLEVBRFY7QUFBQSxRQUVJQyxVQUFVLGFBRmQ7QUFBQSxRQUdJQyxVQUFVLGtCQUhkO0FBQUEsUUFJSUMsV0FBVyxZQUpmO0FBQUEsUUFLSUMsUUFBUSxlQUxaO0FBQUEsUUFNSUMsT0FBTyxXQU5YOztBQVFBVCxXQUFPQSxLQUFLVSxPQUFMLENBQWEsd0dBQWIsRUFBdUgsVUFBVUMsS0FBVixFQUFpQjtBQUMzSSxZQUFJQyxRQUFRTixPQUFaO0FBQ0EsWUFBSSxLQUFLTyxJQUFMLENBQVVGLEtBQVYsQ0FBSixFQUFzQjtBQUNsQixnQkFBSSxLQUFLRSxJQUFMLENBQVVGLEtBQVYsQ0FBSixFQUFzQjtBQUNsQkMsd0JBQVFILElBQVI7QUFDSCxhQUZELE1BRU87QUFDSEcsd0JBQVFQLE9BQVI7QUFDSDtBQUNKLFNBTkQsTUFNTyxJQUFJLGFBQWFRLElBQWIsQ0FBa0JGLEtBQWxCLENBQUosRUFBOEI7QUFDakNDLG9CQUFRTCxRQUFSO0FBQ0gsU0FGTSxNQUVBLElBQUksT0FBT00sSUFBUCxDQUFZRixLQUFaLENBQUosRUFBd0I7QUFDM0JDLG9CQUFRSixLQUFSO0FBQ0g7QUFDREosWUFBSVUsSUFBSixDQUFTRixLQUFUO0FBQ0FSLFlBQUlVLElBQUosQ0FBUyxFQUFUO0FBQ0EsZUFBTyxPQUFPSCxLQUFQLEdBQWUsSUFBdEI7QUFDSCxLQWhCTSxDQUFQOztBQWtCQVAsUUFBSVcsT0FBSixDQUFZZixJQUFaOztBQUVBZ0IsWUFBUUMsR0FBUixDQUFZQyxLQUFaLENBQWtCRixPQUFsQixFQUEyQlosR0FBM0I7QUFDSCIsImZpbGUiOiJqc29ucHJldHRpZnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBKU09OcHJldHRpZnkoanNvbikge1xuICAgIGlmICh0eXBlb2YganNvbiAhPSAnc3RyaW5nJykge1xuICAgICAgICBqc29uID0gSlNPTi5zdHJpbmdpZnkoanNvbiwgdW5kZWZpbmVkLCAnXFx0Jyk7XG4gICAgfVxuXG4gICAgdmFyIFxuICAgICAgICBhcnIgPSBbXSxcbiAgICAgICAgX3N0cmluZyA9ICdjb2xvcjpncmVlbicsXG4gICAgICAgIF9udW1iZXIgPSAnY29sb3I6ZGFya29yYW5nZScsXG4gICAgICAgIF9ib29sZWFuID0gJ2NvbG9yOmJsdWUnLFxuICAgICAgICBfbnVsbCA9ICdjb2xvcjptYWdlbnRhJyxcbiAgICAgICAgX2tleSA9ICdjb2xvcjpyZWQnO1xuXG4gICAganNvbiA9IGpzb24ucmVwbGFjZSgvKFwiKFxcXFx1W2EtekEtWjAtOV17NH18XFxcXFtedV18W15cXFxcXCJdKSpcIihcXHMqOik/fFxcYih0cnVlfGZhbHNlfG51bGwpXFxifC0/XFxkKyg/OlxcLlxcZCopPyg/OltlRV1bK1xcLV0/XFxkKyk/KS9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgICAgdmFyIHN0eWxlID0gX251bWJlcjtcbiAgICAgICAgaWYgKC9eXCIvLnRlc3QobWF0Y2gpKSB7XG4gICAgICAgICAgICBpZiAoLzokLy50ZXN0KG1hdGNoKSkge1xuICAgICAgICAgICAgICAgIHN0eWxlID0gX2tleTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3R5bGUgPSBfc3RyaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKC90cnVlfGZhbHNlLy50ZXN0KG1hdGNoKSkge1xuICAgICAgICAgICAgc3R5bGUgPSBfYm9vbGVhbjtcbiAgICAgICAgfSBlbHNlIGlmICgvbnVsbC8udGVzdChtYXRjaCkpIHtcbiAgICAgICAgICAgIHN0eWxlID0gX251bGw7XG4gICAgICAgIH1cbiAgICAgICAgYXJyLnB1c2goc3R5bGUpO1xuICAgICAgICBhcnIucHVzaCgnJyk7XG4gICAgICAgIHJldHVybiAnJWMnICsgbWF0Y2ggKyAnJWMnO1xuICAgIH0pO1xuXG4gICAgYXJyLnVuc2hpZnQoanNvbik7XG5cbiAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcnIpO1xufSJdfQ==