function isWhiteSpaceOrEmpty(str) {
 return /^[\s\t\r\n]*$/.test(str);
}
function checkString(spr,msg){
if	(isWhiteSpaceOrEmpty(spr)==true){
	alert(msg);
	return false;
}
else{
	return true;
}
}

function checkStringAndFocus(obj, msg) {
 let str = obj.value;
 let errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
 if (isWhiteSpaceOrEmpty(str)) {
 document.getElementById(errorFieldName).innerHTML = msg;
 obj.focus();
 return false;
 }
 else {
 return true;
 }
}



function checkEmail(str) {
 let email = /^[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+$/;
 if (email.test(str))
 return true;
 else {
 alert("Podaj właściwy e-mail");
 return false;
 }
}


function isEmpty(p1) {
	var n = p1.length;
  if (n <1){
	  return true;
  }	 else{
	  return false;
  }
}

function validate(formularz) {
	if(!checkString(formularz.elements["f_imie"].value,"podaj imie")) return false;
	if(!checkString(formularz.elements["f_nazwisko"].value,"podaj nazwisko")) return false;
	if(!checkString(formularz.elements["f_kod"].value,"podaj kod")) return false;
	if(!checkString(formularz.elements["f_ulica"].value,"podaj ulica")) return false;
	if(!checkString(formularz.elements["f_miasto"].value,"podaj miasto")) return false;
	if(!checkString(formularz.elements["f_email"].value,"podaj email")){
		return false;
}else{
	if(!checkEmail(formularz.elements["f_email"].value))return false;;
}
}