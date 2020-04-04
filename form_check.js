function isWhiteSpaceOrEmpty(str) {
 return /^[\s\t\r\n]*$/.test(str);
}
function alterRows(i, e) {
 if (e) {
 if (i % 2 == 1) {
 e.setAttribute("style", "background-color: Aqua;");
 }
 e = e.nextSibling;
 while (e && e.nodeType != 1) {
 e = e.nextSibling;
 }
 alterRows(++i, e);
 }
}
function nextNode(e) {
 while (e && e.nodeType != 1) {
 e = e.nextSibling;
 }
 return e;
}
function prevNode(e) {
 while (e && e.nodeType != 1) {
 e = e.previousSibling;
 }
 return e;
}
function cnt(form, msg, maxSize) {
 if (form.value.length > maxSize)
 form.value = form.value.substring(0, maxSize);
 else
 msg.innerHTML = maxSize - form.value.length;
}

function swapRows(b) {
 let tab = prevNode(b.previousSibling);
 let tBody = nextNode(tab.firstChild);
 let lastNode = prevNode(tBody.lastChild);
 tBody.removeChild(lastNode);
 let firstNode = nextNode(tBody.firstChild);
 tBody.insertBefore(lastNode, firstNode);
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

function showElement(e) {
    document.getElementById(e).style.visibility = 'visible';
}

function hideElement(e) {
    document.getElementById(e).style.visibility = 'hidden';
}

function isEmailValid(str) {
 let email = /^[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+$/;
 if (email.test(str))
 return false;
 else {
 return true;
 }
}



function validate(formularz) {
	if(!checkStringAndFocus(formularz.elements["f_imie"],"podaj imie",isWhiteSpaceOrEmpty)) return false;
	if(!checkStringAndFocus(formularz.elements["f_nazwisko"],"podaj nazwisko",isWhiteSpaceOrEmpty)) return false;
	if(!checkStringAndFocus(formularz.elements["f_email"],"podaj wlasciwy email",isEmailValid)) return false;
	if(!checkStringAndFocus(formularz.elements["f_kod"],"podaj kod",isWhiteSpaceOrEmpty)) return false;
	if(!checkStringAndFocus(formularz.elements["f_ulica"],"podaj ulica",isWhiteSpaceOrEmpty)) return false;
	if(!checkStringAndFocus(formularz.elements["f_miasto"],"podaj miasto",isWhiteSpaceOrEmpty)) return false;
}