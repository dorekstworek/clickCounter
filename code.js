    //variables
        let counter = 0;
        //get elements
       const spanResult = document.querySelector('span');
       const btn = document.querySelector('button');
    //    const body = document.querySelector('body');
       //event and action
       btn.addEventListener('click', function(){
           counter++;
           spanResult.textContent = counter
       })