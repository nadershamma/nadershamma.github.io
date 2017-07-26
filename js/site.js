function getPages(input){
    console.log("Ajax started");
    var output;
    var meta = $.getJSON(input);
    console.log(meta);
    meta.done(function(data, output){
      console.log(data);
      output = data;
    }).fail(function(){
      output = null;
    });
    console.log(output);
    console.log("AJAX complete");
    return output;
}

function parseContent(page){
  var content;

}

function navigation(p){
  var pages = p;

  var links = $('.menu li > a');
  console.log(links);
}

function init(p){
  var pages = p;
  console.log("init triggered");
  console.log(pages);
  console.log(pages.content);
}

function main(){
  console.log("main started");
  var pages = getPages("js/json/content.json");

  init(pages);
  navigation(pages);

  $('.collapsible').collapsible();
  $(".button-collapse").sideNav();
}

$(document).ready(main());
