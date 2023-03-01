const questionNum = document.querySelector('#progressText')
console.log(questionNum);
const question = document.querySelector('#question')
console.log(question);
const scoreVal = document.querySelector('#score')
const choices = document.querySelectorAll('.choice-container')

const a = document.querySelector('.a')
const b = document.querySelector('.b')
const c = document.querySelector('.c')
const d = document.querySelector('.d')

let currentQuestion = 1;

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion === 2) {
    question2();
  } else if (currentQuestion === 3) {
    question3();
  } else if (currentQuestion === 4) {
    question4();
  } else if (currentQuestion === 5) {
    question5();
  } else if (currentQuestion === 6) {
    question6();
  } else if (currentQuestion === 7) {
    question7();
  } else if (currentQuestion === 8) {
    question8();
  } else if (currentQuestion === 9) {
    question9();
  } else if (currentQuestion === 10) {
    question10();
  } else {
    // no more questions, display end of quiz message
    question.innerHTML = "Congratulations, you've completed the quiz!";
    a.style.display = 'none';
    b.style.display = 'none';
    c.style.display = 'none';
    d.style.display = 'none';
  }
}
// choices.forEach((choice) =>{
//     choice.addEventListener('click', function(){
//         console.log('click')})
//         // nextQuestion()
// })


function question1(){
    question.innerHTML = 'What type of animal was Dumbo?'
    a.innerHTML = 'A: Girrafe'
    b.innerHTML = 'B: Meercat'
    c.innerHTML = 'C: Elephant'
    d.innerHTML = 'D: A Flying Pig'

    a.addEventListener('click',()=>{
        a.classList.add('incorrect')
        c.classList.add('correct');
        nextQuestion()
    })
    b.addEventListener('click',()=>{
        b.classList.add('incorrect')
        c.classList.add('correct')
        nextQuestion()
    })
    c.addEventListener('click',()=>{
        c.classList.add('correct')
        setInterval(()=>{
            c.classList.remove('correct')
            question2()
            a.classList.remove('incorrect')
            b.classList.remove('incorrect')
            d.classList.remove('incorrect')

        },1500)

    })
    d.addEventListener('click',()=>{
        d.classList.add('incorrect')
        c.classList.add('correct')
    })

}
question1()
function question2(){
    question.innerHTML = 'The Statue of Liberty was originally supposed to function as what?'
    a.innerHTML = 'A: A port of entry'
    b.innerHTML = 'B: A border marker'
    c.innerHTML = 'C: A gift shop'
    d.innerHTML = 'D: A lighthouse'

    a.addEventListener('click',()=>{
        a.classList.add('incorrect')
        d.classList.add('correct')
        nextQuestion()
    })
    b.addEventListener('click',()=>{
        b.classList.add('incorrect')
        d.classList.add('correct')
        nextQuestion()
    })
    c.addEventListener('click',()=>{
        c.classList.add('incorrect')
        d.classList.add('correct');
        nextQuestion()

    })
    d.addEventListener('click',()=>{
        d.classList.add('correct')
        setInterval(()=>{
            c.classList.remove('correct')
            a.classList.remove('false')
            b.classList.remove('false')
            d.classList.remove('false')
            question3()
        },1500)
    })
}
function question3(){
    question.innerHTML = 'When playing Blackjack, how many points would be considered a bust?'
    a.innerHTML = 'A: 22'
    b.innerHTML = 'B: 21'
    c.innerHTML = 'C: 15'
    d.innerHTML = 'D: 19'

    a.addEventListener('click',()=>{
        a.classList.add('correct')
        nextQuestion()
    })
    b.addEventListener('click',()=>{
        b.classList.add('incorrect')
        a.classList.add('correct')
        nextQuestion()
    })
    c.addEventListener('click',()=>{
        c.classList.add('incorrect')
        a.classList.add('correct')
        nextQuestion()
    })
    d.addEventListener('click',()=>{
        d.classList.add('incorrect')
        a.classList.add('correct')
        nextQuestion()
    })
}
function question4(){
    question.innerHTML = 'Oysters can change something most other animals cannot. What is it?'
    a.innerHTML = 'A: Their size'
    b.innerHTML = 'B: The thickness of their shell'
    c.innerHTML = 'C: Their gender'
    d.innerHTML = 'D: Their color'

    a.addEventListener('click',()=>{
        a.classList.add('incorrect')
        c.classList.add('correct')
        nextQuestion()
    })
    b.addEventListener('click',()=>{
        b.classList.add('incorrect')
        c.classList.add('correct')
        nextQuestion()
    })
    c.addEventListener('click',()=>{
        c.classList.add('correct')
        nextQuestion()
    })
    d.addEventListener('click',()=>{
        d.classList.add('incorrect')
        c.classList.add('correct')
        nextQuestion()
    })
}
function question5(){
    question.innerHTML = `What was Will Ferrell's character's name in the 2003 hit movie "Elf"?`
    a.innerHTML = 'A: Elf'
    b.innerHTML = 'B: Buddy'
    c.innerHTML = 'C: Sam'
    d.innerHTML = 'D: Billy'

    a.addEventListener('click',()=>{
        a.classList.add('incorrect')
        b.classList.add('correct')
        nextQuestion()
    })
    b.addEventListener('click',()=>{
        b.classList.add('correct')
        nextQuestion()
    })
    c.addEventListener('click',()=>{
        c.classList.add('incorrect')
        b.classList.add('correct')
        nextQuestion()
    })
    d.addEventListener('click',()=>{
        d.classList.add('incorrect')
        b.classList.add('correct')
        nextQuestion()
    })
}
function question6(){
    question.innerHTML = `Which of these lazy animals sleeps up to 22 hours a day?`
    a.innerHTML = 'A: Koala'
    b.innerHTML = 'B: Lion'
    c.innerHTML = 'C: Copperhead'
    d.innerHTML = 'D: Beagle'

    a.addEventListener('click',()=>{
        a.classList.add('correct')
        nextQuestion()
    })
    b.addEventListener('click',()=>{
        b.classList.add('incorrect')
        a.classList.add('correct')
        nextQuestion()
    })
    c.addEventListener('click',()=>{
        c.classList.add('incorrect')
        a.classList.add('correct')
        nextQuestion()
    })
    d.addEventListener('click',()=>{
        d.classList.add('incorrect')
        a.classList.add('correct')
        nextQuestion()
    })
}
function question7(){
    question.innerHTML = `Where did Noah's Ark come to rest after the flood?`
    a.innerHTML = 'A: Mount Everest'
    b.innerHTML = 'B: Mount Fuji'
    c.innerHTML = 'C: K2'
    d.innerHTML = 'D: Mount Ararat'

    a.addEventListener('click',()=>{
        a.classList.add('incorrect')
        d.classList.add('correct')
        nextQuestion()
    })
    b.addEventListener('click',()=>{
        b.classList.add('incorrect')
        d.classList.add('correct')
        nextQuestion()
    })
    c.addEventListener('click',()=>{
        c.classList.add('incorrect')
        d.classList.add('correct');
        nextQuestion()

    })
    d.addEventListener('click',()=>{
        d.classList.add('correct')
        nextQuestion()
    })
}
function question8(){
    question.innerHTML = `How many years are there in an eon?`
    a.innerHTML = 'A: 35 years'
    b.innerHTML = 'B: 1 billion years'
    c.innerHTML = 'C: 100,000 years'
    d.innerHTML = 'D: 25,000 years'

    a.addEventListener('click',()=>{
        a.classList.add('incorrect')
        b.classList.add('correct')
        nextQuestion()
    })
    b.addEventListener('click',()=>{
        b.classList.add('correct')
        nextQuestion()
    })
    c.addEventListener('click',()=>{
        c.classList.add('incorrect')
        b.classList.add('correct')
        nextQuestion()
    })
    d.addEventListener('click',()=>{
        d.classList.add('incorrect')
        b.classList.add('correct')
        nextQuestion()
    })
}
function question9(){
    question.innerHTML = `Out of these European countries, which has the smallest population density?`
    a.innerHTML = 'A: Bulgaria'
    b.innerHTML = 'B: Norway'
    c.innerHTML = 'C: Iceland'
    d.innerHTML = 'D: France'

    a.addEventListener('click',()=>{
        a.classList.add('incorrect')
        c.classList.add('correct')
        nextQuestion()
    })
    b.addEventListener('click',()=>{
        b.classList.add('incorrect')
        c.classList.add('correct')
        nextQuestion()
    })
    c.addEventListener('click',()=>{
        c.classList.add('correct')
        nextQuestion()
    })
    d.addEventListener('click',()=>{
        d.classList.add('incorrect')
        c.classList.add('correct')
        nextQuestion()
    })
}
function question10(){
    question.innerHTML = `According to Albert Einstein, what is the "hardest thing in the world to understand"?`
    a.innerHTML = 'A: Astronomy'
    b.innerHTML = 'B: Income taxes'
    c.innerHTML = 'C: Physics'
    d.innerHTML = 'D: Sewing'

    a.addEventListener('click',()=>{
        a.classList.add('incorrect')
        b.classList.add('correct')
        nextQuestion()
    })
    b.addEventListener('click',()=>{
        b.classList.add('correct')
        nextQuestion()
    })
    c.addEventListener('click',()=>{
        c.classList.add('incorrect')
        b.classList.add('correct')
        nextQuestion()
    })
    d.addEventListener('click',()=>{
        d.classList.add('incorrect')
        b.classList.add('correct')
        nextQuestion()
    })
}

