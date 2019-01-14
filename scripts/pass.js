var answers = ["B", "C", "D", "B", "A", "D", "C", "A", "C", "B"],
        total = answers.length;
        
    function getChoiceValue( radioName){
        var radios = document.getElementsByName( radioName);
        for(var y=0; y<radios.length; y++)
            if(radios[y].checked)
                return radios[y].value;
        
    }
/*function alertChecked(input){
    var input = document.getElementsByTagName( input);
    for(var i=0; i< input.length; y++);
        if(input[i].checked);
            return input[i].checked;
}*/
    function getScores(){
            score = 0;
        for (var i=0; i<total; i++)
            if(getChoiceValue("question"+i)===answers[i]) score += 1;
        return score;
    }
        
    function getUser(){
        userName = document.getElementById('userId').value;
        if(userName.length==0){
            alert('Please input your name');
        }
        /*return userName;*/
        display = document.getElementById('displayId');
        display.innerHTML = userName;
        }
      /* document.write(userName);*/ 
        
    function returnScore(){
        var str = '<button style="color:white; background-color:darkblue; font-size:20px; width:20%; border-radius:10px;">Try Again</button>';
        var result = str.link("pass.html");
        
        document.write('<b>Name:</b><span style="color:blue"> '+userName+"</span><b> your score is:</b><span style = 'color:green;'> " +getScores() +"</span>/" +total+"<br>");

        if(score <= 4){
            document.write('<br><b style="color:red;">Grading:</b> Your performance is:<b> Below average!</b><br><br><b> Remark:</b> You need to study hard.<br><br>');} 
        else if(score <= 6){
            document.write('<br><b style="color:red;">Grading:</b> Your performance is:<b> Average!</b><br><br><b>Remark:</b> You can do better.<br><br>');}
        else if(score <= 8){
            document.write('<br><b style="color:red;">Grading:</b> Your Performance is:<b> Good!</b><br><br><b>Remark:</b> Keep it Up!<br><br>');}
        else
            document.write('<br><b style="color:red;">Grading:</b> Your Performance is: Excellent!<br><br><b>Remark</b> It shows you are burning night candle<br><br>');
        document.write(result);
    }