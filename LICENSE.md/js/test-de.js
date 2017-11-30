function checkuncheck(a){
    var parentlabel = a.parentNode;
    if (a.checked) {
        parentlabel.className = "answer checked";
    } else {
        parentlabel.className = "answer"
    }
}
function radioOne(b){
    document.getElementById('first1').parentNode.className="answer";
    document.getElementById('first2').parentNode.className="answer";
    document.getElementById('first3').parentNode.className="answer";
    document.getElementById('first4').parentNode.className="answer";
    b.parentNode.className="answer checked";
}
function checkname(a){
    var b = document.getElementById('checkerrorname')
    a = document.getElementById(a);
    if(!a.value){
        a.focus();
        a.className += ' error';
        b.style.display="block";
        b.innerHTML="Enter your name";
    } else if(a.value.length>14){
        a.focus();
        a.className += ' error';
        b.style.display="block";
        b.innerHTML="Name is too long";
    } else {
        nextSlide(9,10);
    }
}
function checkemail(a){
    var b = document.getElementById('checkerroremail');
    a = document.getElementById(a)
    if(!a.value){
        a.focus();
        a.className += ' error';
        b.style.display="block";
        b.innerHTML="Enter your e-mail";
        return false
    } else if(! (/^[a-zA-Z0-9_\-\.]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/.test(a.value))){
        a.focus();
        a.className += ' error';
        b.style.display="block";
        b.innerHTML="Invalid e-mail format";
        return false
    } else {
        return true
    }
}
function resetstylename(a){

    var b=document.getElementById('checkerrorname'),
        c=' error';
    a = document.getElementById(a)
    a.className = a.className.replace(c,'')
    b.style.block="none"
}
function resetstyleemail(a){
    var b=document.getElementById('checkerroremail'),
        c=' error';
    a = document.getElementById(a)
    a.className = a.className.replace(c,'')
    b.style.block="none"
}

function changebg(){
    if(document.getElementById('first1').checked){
        document.body.className = "wedding";
    } else {
        if(document.getElementById('first3').checked){
            document.body.className = "sex";
        } else {
            document.body.className = "friend";
        }
    }
}

function changebg_btn(el) {
    var a = el.id;
    if (a == 'first1') {
        document.body.className = "wedding";
    } else if (a == 'first3') {
        document.body.className = "sex";
    } else {
        document.body.className = "friend";
    }
}

function startAnimation(){
    var start = 0
    function startProgress (){
        if(start < 40) {
            start++;
            document.getElementById('progress').style.width = start + '%';
        } else if (start < 75){
            document.getElementById('registerallow').style.display="block";
            start++;
            document.getElementById('progress').style.width = start + '%';
        } else {
            document.getElementById('progressbar').style.display="none";
            document.getElementById('resulttest').style.display = "block";
            document.getElementById('resultheader').innerHTML = "Ergebnisse:";
        }
    }
    setInterval(startProgress, 35)
}
function nextSlide(curr,next){
    var nextsl,
        currsl = document.getElementById('slide'+curr);

    if (document.body.className != "wedding" && next == 4 ){
        next = 5;
        nextsl = document.getElementById('slide'+next);
    } else {
        nextsl = document.getElementById('slide'+next);
    }
    if (document.body.className != "sex" && next == 6 ){
        next = 7;
        nextsl = document.getElementById('slide'+next);
    } else {
        nextsl = document.getElementById('slide'+next);
    }
    currsl.style.display="none"
    nextsl.style.display="block"
    return false;
}
function addPol(a){
    document.getElementById('landpol').value=a
}