var fs = require('fs');
var extra=require('fs-extra');
// var HTMLParser = require('node-html-parser');
// const process = require('process');
var jsdom = require('jsdom');

 exports.revfunction  = function (sourcecode,distinctcode){
        // var root = HTMLParser.parse("<span>ali is a childer </span><span> he does learn english everyday  </span>");
    
    // var x = root
    // for(var i=0 ; i< root.childNodes.length ; i++)
    // {
    //     var y = reverseString(root.childNodes[i].innerHTML);
    //     var z = root.childNodes[i].innerHTML;
    //     console.log("y:" , y)
    //     console.log("z:" , z)
    //     root.childNodes[i].innerHTML = y;
    //     //root.childNodes[i].rawText.replace(z,y)
    //     //x.push(root.childNodes[i].rawText);
    //     //console.log(1321453341353, root.childNodes[i].rawText);
    //     console.log(1321453341353, root.childNodes[i].innerHTML);
    // }
   
    //extra.outputFileSync('./index2.txt',root,'utf8');

    //return;



revfile = "./ReverseFile/"
disfile = "./DistinctFile/"
function reverseString(str) {

    var splitString = str.split(" "); 
    console.log(23545412,splitString)
    var joinArray = "";
    for (var i=0;i< splitString.length ; i ++ )
{
    if (!splitString[i].match(/[0-9a-zA-Z]+/g))
    {
        console.log(1)
        var splitChar = str.split("");
        var reverseArray = splitChar.reverse(); 
        var joinArray = reverseArray.join(""); 
    }
    else 
    {
       console.log(2)
        var joinArray = joinArray + " " + splitString[i];
    }
}
    console.log(23545412,joinArray)    
    return joinArray;
}

//var source=process.argv.find(function(a){return a.match(/-source:*/g);})
//source = 'source:index.txt';
// if (source === undefined)
//     console.log("file name not found. \n")
// else
// {
    //let sourcecode=source.split(":")[1];
    var filename = revfile + sourcecode
// }
    

var file = require.resolve(filename);
var intxt=fs.readFileSync(file,'utf8');


const { JSDOM } = jsdom;
const { window } = new JSDOM(intxt)

var $ = require("jquery")(window);
    var scripts = $("span");
    for(var i=0 ; i< scripts.length ; i++)
    {   
        scripts[i].innerHTML = reverseString(scripts[i].innerHTML);
        //console.log(1321453341353, scripts[i].innerHTML);
    }
    
    var result = $('html').append($(scripts).clone()).html(); 
    //console.log(987845145, result)
    extra.outputFileSync(disfile + distinctcode,result,'utf8');
 }

// Reverce();