var Mobile=true;
var el = document.getElementById("body"); 
function Funk(){
    Mobile=!Mobile;
    if(Mobile==true){
        el.style.cssText="display: flex; flex-direction: column;flex-wrap: wrap;height: 10150px;align-items: stretch;max-width: 1440px;width: 100%;min-width: 375px;margin: 0px auto;"; 
    }
    else{
        el.style.cssText="display: flex; flex-direction: column;flex-wrap: wrap;height: 10150px;align-items: stretch;max-width: 375px;width: 100%;min-width: 0px;margin: 0px auto;"; 
    }
}

console.log(Mobile)
