const buttons=document.querySelectorAll('.button')
const body=document.querySelector("body")

// event object has a lot of detail=>e
buttons.forEach(function (button){
console.log(button);
button.addEventListener('click', function(e){
     console.log(e);
     // return whole tag
     console.log(e.target);
     // return only id text
     let color=e.target.id
     console.log(color);
     switch (color) {
          case 'grey':
               body.style.background=e.target.id
               break;
          case 'white':
               body.style.background=e.target.id
          case 'blue':
               body.style.background=e.target.id
               break;
          case 'yellow':
               body.style.background=e.target.id
               break; 
          case 'purple':
                    body.style.background=e.target.id
                    break;          
          default:
               break;
     }


})
})