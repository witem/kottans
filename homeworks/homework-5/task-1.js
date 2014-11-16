
function deepCopy(obj) {
    var new_obj = {};
    if (obj instanceof Object)
        for (name in obj) {
            if (obj[name] instanceof Array ) {
                var new_arr = [];
                for (var i = 0; i < obj[name].length; i++) {
                    new_arr[i] = obj[name][i];
                }
                console.log(new_arr)
                new_obj[name] = new_arr;
            } else {
                new_obj[name] = obj[name];
            }
        }
    else
        new_obj = obj;
    return new_obj;
}

var copy = deepCopy(null);
console.log(copy)