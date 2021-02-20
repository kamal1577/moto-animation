 m=0;
var x,y;

function start(){
    y = setInterval(run,100);
    function run(){
        if(m == 1800){
            clearInterval(x);
            m=0;
        }
        else{
           m+=30;
           var x = document.getElementById("Moto");
           x.style.marginLeft =m+'px';
        }
    };
}

function stop(){
    
    clearInterval(y);

}