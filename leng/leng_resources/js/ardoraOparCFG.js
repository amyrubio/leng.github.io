//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=120; timeIni=120; timeBon=1;
var successes=0; successesMax=3; attempts=0; attemptsMax=1;
var score=0; scoreMax=3; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicidades, acertaste!"; messageTime="Acabo el tiempo"; messageError="Ups! verifica tus respuestas"; messageErrorG="Ups! verifica tus respuestas"; messageAttempts="Lo siento, vuelve a intentarlo "; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="bGVuZw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var actMaxWidth="600"; actMaxHeight="400";profG=0;dirMedia="leng_resources/media/";
var indexG=0;
var words1G=["RXMgdW4gY2zDoXNpY28sIHBlcm8gZXMgY2llcnRhLiAiUXVpZW4gbm8gYXJyaWVzZ2EsIG5vIGdhbmEiLg=="];
var words2G=["TGEgc3VlcnRlIGRlIHR1IGTDrWEgZGVwZW5kZSBkZSBjw7NtbyBsbyBhZnJvbnRlcyBkZXNkZSBwcmltZXJhIGhvcmEgZGUgbGEgbWHDsWFuYS4="];
var words3G=["Q8OpbnRyYXRlIGhhY2lhIGTDs25kZSBxdWllcmVzIGlyLCBubyBlbiBsbyBxdWUgdGVtZXM="];
var c1=[60];
var c2=[80];
var c3=[51];
