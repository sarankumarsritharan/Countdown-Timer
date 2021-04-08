 var counter = 10;

 setTimeout(() => {
     let count = document.getElementById("count");
     count.innerHTML = counter;
     setTimeout(() => {
         count.innerHTML = counter--;
         setTimeout(() => {
             count.innerHTML = counter--;
             setTimeout(() => {
                 count.innerHTML = counter--;
                 setTimeout(() => {
                     count.innerHTML = counter--;
                     setTimeout(() => {
                         count.innerHTML = counter--;
                         setTimeout(() => {
                             count.innerHTML = counter--;
                             setTimeout(() => {
                                 count.innerHTML = counter--;
                                 setTimeout(() => {
                                     count.innerHTML = counter--;
                                     setTimeout(() => {
                                         count.innerHTML = counter--;
                                         setTimeout(() => {
                                             count.innerHTML = counter--;
                                             setTimeout(() => {
                                                 count.innerHTML = "Happy Independence Day";
                                             }, 1000);
                                         }, 1000);
                                     }, 1000);
                                 }, 1000);
                             }, 1000);
                         }, 1000);
                     }, 1000);
                 }, 1000);
             }, 1000);
         }, 1000);
     }, 1000);
 }, 1000);