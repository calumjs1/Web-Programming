
  document.onkeydown = detectKey;
    function detectKey(e) {
        var posLeft = document.getElementById('myCircle').offsetLeft;
        var posTop = document.getElementById('myCircle').offsetTop;
        e = e || window.event;
        if (e.keyCode == '38') {
            // up arrow
            document.getElementById('myCircle').style.marginTop  = (posTop-58)+"px";
        }
        else if (e.keyCode == '40') {
            // down arrow
            document.getElementById('myCircle').style.marginTop  = (posTop+58)+"px";
        }
        else if (e.keyCode == '37') {
           // left arrow
            document.getElementById('myCircle').style.marginLeft  = (posLeft-58)+"px";
        }
        else if (e.keyCode == '39') {
           // right arrow
            document.getElementById('myCircle').style.marginLeft  = (posLeft+58)+"px";
        }
        if (e.keyCode == '87') {
            // W key
            document.getElementById('myCircle').style.marginTop  = (posTop-58)+"px";
        }
        else if (e.keyCode == '83') {
            // S key
            document.getElementById('myCircle').style.marginTop  = (posTop+58)+"px";
        }
        else if (e.keyCode == '65') {
           // A key
            document.getElementById('myCircle').style.marginLeft  = (posLeft-58)+"px";
        }
        else if (e.keyCode == '68') {
           // D key
            document.getElementById('myCircle').style.marginLeft  = (posLeft+58)+"px";
        }
    }

