let result = document.getElementById("result");
let temp = "";


function getData(data){
    let input = data.innerHTML;
    
    if(input == "="){
        result.innerHTML = eval(temp);//1+2
        temp = eval(temp);
    }else{
        temp += input;
        console.log(input);
        result.innerHTML = temp;
    }
}

function clearForm(){
    result.innerHTML = 0;
    temp = "";
}