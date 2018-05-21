function htmlTags(info){
    var startTags = new RegExp("<([^>|/>]*)>","gi");
    var endTags= /<\/(\w)+>/g;
    var temp = info.replace(startTags, '$1:{');
    var result = temp.replace(endTags, '}');
    return console.log(result);
}
let info = "<html><head><title>My Title</title></head><body><h1>Heading</h1><p>This is a paragraph</p></body></html>";
htmlTags(info);