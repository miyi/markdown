window.onload = function() {
    var converter = new showdown.Converter();
    var pad = document.getElementById('pad');
    var markdownArea = document.getElementById('markdown');

    var prevMarkdown;


    var convertTextAreaToMarkdown = function(){
        var markdownText = pad.value;
        prevMarkdown = markdownText;
        html = converter.makeHtml(markdownText);
        markdownArea.innerHTML = html;
    };

    var didChangeOccur = function(){
        if(prevMarkdown != pad.value){
            return true;
            console.log('run');

        } else {
            return false;
        };
    };

    setInterval(function() {
        if(didChangeOccur()) {
            convertTextAreaToMarkdown();
        };
    }, 1000);

    pad.addEventListener('input', convertTextAreaToMarkdown);

    sharejs.open('home', 'text', function(error, doc) {
        doc.attach_textarea(pad);
        convertTextAreaToMarkdown();
        console.log('run');
    });
};