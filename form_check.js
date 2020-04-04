function isWhiteSpaceOrEmpty(str) {
 return /^[\s\t\r\n]*$/.test(str);
}

function checkStringAndFocus(obj, msg,val) {
 let str = obj.value;
 let errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
 if (val(str)) {
 document.getElementById(errorFieldName).innerHTML = msg;
 obj.focus();
 return false;
 }
 else {
 document.getElementById(errorFieldName).innerHTML = null;
 return true;
 }
}

function checkEmailAndFocus(obj,msg,val){
 let str = obj.value;
 let errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
 if(isWhiteSpaceOrEmpty(str)){
 document.getElementById(errorFieldName).innerHTML = msg;
 obj.focus();
 return false;
 }
 if(!val(str)){
	document.getElementById(errorFieldName).innerHTML = "podaj właściwy mail";
	obj.focus();
	return false;
 }else{
	 document.getElementById(errorFieldName).innerHTML = null;
	 return true;
 }

}


function isEmailValid(str) {
 let email = /^[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+$/;
 if (email.test(str))
 return true;
 else {
 return false;
 }
}



function validate(formularz) {
	if(!checkStringAndFocus(formularz.elements["f_imie"],"podaj imie",isWhiteSpaceOrEmpty)) return false;
	if(!checkStringAndFocus(formularz.elements["f_nazwisko"],"podaj nazwisko",isWhiteSpaceOrEmpty)) return false;
	if(!checkEmailAndFocus(formularz.elements["f_email"],"podaj email",isEmailValid)) return false;
	if(!checkStringAndFocus(formularz.elements["f_kod"],"podaj kod",isWhiteSpaceOrEmpty)) return false;
	if(!checkStringAndFocus(formularz.elements["f_ulica"],"podaj ulica",isWhiteSpaceOrEmpty)) return false;
	if(!checkStringAndFocus(formularz.elements["f_miasto"],"podaj miasto",isWhiteSpaceOrEmpty)) return false;
}