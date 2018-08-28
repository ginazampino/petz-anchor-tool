function clearEditor() {
    let editor = document.getElementById('editor');

    editor.value = '';
};

function anchorAll() {
    var editor = document.getElementById('editor');

    if (editor.value != '') {
        var lines = editor.value.split('\n');

        var anchoredArray = lines.map(function (item) {
            return item.concat(',\t0');
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