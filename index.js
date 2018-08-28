function clearEditor() {
    let editor = document.getElementById('editor');

    editor.value = '';
};

function anchorAll() {
    var color = document.getElementById('color').value;
    var texture = document.getElementById('texture').value;
    var editor = document.getElementById('editor');
 
    if (editor.value) {
        var paintBallz = editor.value.split('\n');

        var splitArray = paintBallz.map(function (item) {
            return item.split(',');
        });

        var colorStep = !color ? splitArray : splitArray.map(function (item) {
            item[5] = item[5].replace(/-?\d+/, color);
            return item;
        });

        var textureStep = !texture ? colorStep : colorStep.map(function (item) {
            item[item.length -1] = item[item.length -1].replace(/-?\d+/, texture);
            return item;
        });

        var anchoredArray = textureStep.map(function (item) {
            return item.concat('\t0');
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