const form = document.querySelector('form')
// this usecase will give you empty value
//  const height=parseInt(DocumentTimeline.querySelector('#height').value)

form.addEventListener('submit', function(e){
     // console.log(e);
     e.preventDefault()
     const height=parseInt(document.querySelector('#height').value)
     console.log(height);
     const weight=parseInt(document.querySelector('#weight').value)
     const results=document.querySelector('#results')

     if(height==='' || height < 0 || isNaN(height)){
          results.innerHTML=`please give a valid height ${height}`
     }
    else if(weight==='' || weight < 0 || isNaN(weight)){
          results.innerHTML=`please give a valid weight ${weight}`
     }
     else{
          // tofix=>two digit after decimal places
        const bmi=  (weight/((height*height)/10000)).toFixed(2)
        results.innerHTML=`<span>${bmi}</span>`
        const message=document.querySelector('#message')
        if (bmi < 18.6){
          message.style.background='red'
          message.innerHTML= document.querySelector('#firstmsg').innerHTML
        }
        else if(bmi >= 24.6 ){
          message.style.background='red'
          message.innerHTML= document.querySelector('#thirdmsg').innerHTML
        }
        else{
          message.style.background='green'
       message.innerHTML= document.querySelector('#secondmsg').innerHTML
        }
     }
    
})