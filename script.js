const questions=[
 {   'que':'which of the following is a markup language?',
    'a':'HTML',
    'b':'CSS',
    'c':'Java Script',
    'd':'PHP',
    'correct':'a'
},

{   'que':'what year was java script launched?',
    'a':'1996',
    'b':'1995',
    'c':'1994',
    'd':'none of the above',
    'correct':'b'
},

{   'que':'what does CSS stands for?',
    'a':'Hyperrext Markup Language',
    'b':'Cascading Style Sheet',
    'c':'Jason Object Notation',
    'd':'Helicopters Terminals Motorboats Lamborginis',
    'correct':'b'
},

]

let index=0;
let total=questions.length;
let right=0,
    wrong=0;
    
const quesBox=document.getElementById("quesBox")
const optionsInputs=document.querySelectorAll('.options')
const loadQuestion=()=>{
    if(index===total){
        return endQuiz()
    }
    reset();
    const data=questions[index]
    
    
    quesBox.innerText=`${index+1})${data.que}`;
    optionsInputs[0].nextElementSibling.innerText=data.a;
    optionsInputs[1].nextElementSibling.innerText=data.b;
    optionsInputs[2].nextElementSibling.innerText=data.c;
    optionsInputs[3].nextElementSibling.innerText=data.d;
}

//question submitted

const submitQuiz=()=>{
    const data=questions[index];
    const ans =getAnswer()
    if(ans=== data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;                       //enter the next question
    loadQuestion();
    return;

}

// get answer 
const getAnswer=()=>{
    let answer;
    optionsInputs.forEach(
    (input)=>{
        if(input.checked){
            answer= input.value;
        }
    }

    )
    return answer;
}
            
            
        
            
            

const reset =()=>{
    optionsInputs.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}
           

   //decleare result
            
   const endQuiz =()=>{
    document.getElementById("box").innerHTML =`
    <h3> thank you for playing the quiz <h3>
    <h2>${right}/${total}are correct </h2>   `

    
   }     
    
    



    

//initial call
loadQuestion();



