        const num = document.getElementById("input")
        const submit = document.getElementById("submit")
        const random = document.getElementById("random")
        const score = document.getElementById("score")
        let sc = score.textContent
        function check(){
            var a = Math.random()
            var b = Math.floor((a*10)+1)
            random.innerText=b
            if(num.value==b){
                alert("Congratulation you won..!!!\n Your score is "+sc)
                score.textContent = 3

            }else{
                if(score.textContent != 1){
                    sc = score.textContent - 1
                    score.textContent = sc
                }
                else{
                    alert("Sorry you lost...Try again!!!")
                    score.textContent = 3
                }
            }
            //console.log(num.value)
            num.value=""
        }
        
        submit.addEventListener('click',check)