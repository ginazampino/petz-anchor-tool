function clearEditor() {
    document.getElementById('base').value = '';
    document.getElementById('size').value = '';
    document.getElementById('color').value = '';
    document.getElementById('outline-color').value = '';
    document.getElementById('fuzz').value = '';
    document.getElementById('outline').value = '';
    document.getElementById('texture').value = '';
    document.getElementById('group').value = '';
    document.getElementById('editor').value = '';
};

function anchorAll() {
    var base = document.getElementById('base').value;
    var size = document.getElementById('size').value;
    var color = document.getElementById('color').value;
    var outlineColor = document.getElementById('outline-color').value;
    var fuzz = document.getElementById('fuzz').value;
    var outline = document.getElementById('outline').value;
    var texture = document.getElementById('texture').value;
    var group = document.getElementById('group').value;
    var editor = document.getElementById('editor');
 
    if (editor.value) {
        var paintBallz = editor.value.split('\n');

        var splitArray = paintBallz.map(function (item) {
            return item.split(',');
        });

        var baseStep = !base ? splitArray : splitArray.map(function (item) {
            item[0] = item[0].replace(/-?\d+/, base);
            return item;
        });

        var sizeStep = !size ? baseStep : baseStep.map(function (item) {
            item[1] = item[1].replace(/-?\d+/, size);
            return item;
        });

        var colorStep = !color ? sizeStep : sizeStep.map(function (item) {
            item[5] = item[5].replace(/-?\d+/, color);
            return item;
        });

        var outlineColorStep = !outlineColor ? colorStep : colorStep.map(function (item) {
            item[6] = item[6].replace(/-?\d+/, outlineColor);
            return item;
        }); 

        var fuzzStep = !fuzz ? outlineColorStep : outlineColorStep.map(function (item) {
            item[7] = item[7].replace(/-?\d+/, fuzz);
            return item;
        });

        var outlineStep = !outline ? fuzzStep : fuzzStep.map(function (item) {
            item[8] = item[8].replace(/-?\d+/, outline);
            return item;
        });

        var groupStep = !group ? outlineStep : outlineStep.map(function (item) {
            item[9] = item[9].replace(/-?\d+/, group);
            return item;
        });

        var textureStep = !texture ? groupStep : groupStep.map(function (item) {
            item[10] = item[10].replace(/-?\d+/, texture);
            return item;
        });

        var anchoredArray = textureStep.map(function (item) {
            if (item.length <= 11) {
                return item.concat('\t0');
            }
            return item;
        });

        var anchoredString = anchoredArray.join('\n');
        editor.value = anchoredString;
    }
};

function copyAll() {
    var text = document.getElementById('editor');   
    text.select();
    document.execCommand('copy');
};