/*
tsc ./html/FontDesign/HW5/hw05/index.ts
*/
var responseText = document.getElementById("Response");
var demoText1 = document.getElementById("DemoText1");
var demoText2 = document.getElementById("DemoText2");
var EASY_FONT_NAME = "EasyFontFace";
var MEDIUM_FONT_NAME = "MediumFontFace";
//----------------------------------------------------------------------
function LoadResponseText(){
    var dataLoader = new XMLHttpRequest();
    var startLoad = ()=>{
        responseText.appendChild( document.createTextNode(
            dataLoader.responseText
        ) );
    };//-------------------------------------------------------------
    setTimeout( ()=>{
        try{
            dataLoader.onload = startLoad;
            dataLoader.open("GET", "./src/心得.txt");
            //dataLoader.overrideMimeType("text/plain; charset=BIG5");
            dataLoader.send();
        }catch(e){

        }
    }, 100 );
}//---------------------------------------------------------------------
function LoadFont(){
    setTimeout( ()=>{
        try{
            var font = new FontFace(EASY_FONT_NAME, "url(./src/easy.ttf)");
            document.fonts.add(font);
            demoText1.style.fontFamily = EASY_FONT_NAME;
        }catch(e){

        }
    }, 125 );
    setTimeout( ()=>{
        try{
            var font = new FontFace(MEDIUM_FONT_NAME, "url(./src/medium.ttf)");
            document.fonts.add(font);
            demoText2.style.fontFamily = MEDIUM_FONT_NAME;
        }catch(e){
            
        }
    }, 150 );
    
}//----------------------------------------------------------------------
LoadResponseText();
LoadFont();