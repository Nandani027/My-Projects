const base_url="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const dropdown=document.querySelectorAll(".drop-down select");
const btn=document.querySelector("button");
const fromcurr=document.querySelector(".from select");
const tocurr=document.querySelector(".to select");
message=document.querySelector(".msg");


for (let select of dropdown){
    for (currcode in countryList) {
   let newOption=document.createElement("option");
   newOption.innerText=currcode;
   newOption.value=currcode;
   select.append(newOption);
   if(select.name==="from" && currcode==="USD" ){
    newOption.selected="selected";
   }
    if(select.name==="to" && currcode==="INR" ){
    newOption.selected="selected";
   }

}


select.addEventListener("change",(evt)=>{
    flag(evt.target);
}
);
}


const flag=(element) =>{
    let currcode=element.value;
    let countryCode=countryList[currcode];
    let newsrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newsrc;

}

btn.addEventListener("click", async(evt)=>{
    evt.preventDefault();
    let amount=document.querySelector(".amount input");
    let amtval=amount.value;
    if(amtval===""|| amtval<1){
        amtval=1;
        amount.value="1";
        
    }
    
 
 let fromval=fromcurr.value.toLowerCase();
let toval=tocurr.value.toLowerCase();
 

 const url=`${base_url}/${fromval}.json`;

 let response=await fetch(url);
 let data=await response.json();
 
 rate=data[fromval][toval];
 
let finalamount=amount.value*rate;
message.innerText=`${amtval} ${fromcurr.value} = ${finalamount} ${tocurr.value}`;
 


}

);