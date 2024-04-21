function night_dayhandler(self){
    var target=document.querySelector('body');
   if (self.value==='night'){
    target.style.color='white';
    target.style.backgroundColor='black';
    self.value='day';

     var color = document.querySelectorAll('a');
     var i =0;
     while(i<color.length){
        color[i].style.color = 'powderblue';
        i = i+1;
     }
   }
   else {
    target.style.color='black';
    target.style.backgroundColor='white';
    self.value='night';

    var color = document.querySelectorAll('a');
     var i =0;
     while(i<color.length){
        color[i].style.color = 'blue';
        i = i+1;
   }
}
}