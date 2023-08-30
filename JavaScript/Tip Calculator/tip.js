let InputPrice;
let InputTips =0;
let InputNumOfP;

let buttonCalc = document.getElementById('calc');
buttonCalc.addEventListener('click', CalcButton);
let buttonClear = document.getElementById('clear');
buttonClear.addEventListener('click', ClearButton);


  function ClearButton(){
    location.reload();
  }

  function CalcButton() {
    priceInput();
    tipInput();
    numPeopleInput();

    let PriceC = document.getElementById('Price-Color');
    let TipC = document.getElementById('Tip-Color'); 
    let NumPC = document.getElementById('NumP-Color');

    if(InputPrice <= 0){
      console.log("Price is Missing!");
      TipC.classList.remove("PriceC");
      NumPC.classList.remove("PriceC");
      PriceC.classList.remove("PriceC");

      PriceC.classList.add("PriceC");
      
    }else if(InputTips <= 0){
      console.log("Select Tip is Missing");
      TipC.classList.remove("PriceC");
      NumPC.classList.remove("PriceC");
      PriceC.classList.remove("PriceC");

      TipC.classList.add("PriceC");
    }else if(InputNumOfP <= 0){
      console.log("Number of People is Missing!");
      TipC.classList.remove("PriceC");
      NumPC.classList.remove("PriceC");
      PriceC.classList.remove("PriceC");

      NumPC.classList.add("PriceC");
    }else{
      calcPandT();
      console.log('done');
      TipC.classList.remove("PriceC");
      NumPC.classList.remove("PriceC");
      PriceC.classList.remove("PriceC");
    }

  }



  function priceInput() {  
  let price = document.getElementById('prices');
  InputPrice = price.value;    
  console.log(InputPrice);
  return InputPrice;
  }

  function tip5calc(price){
    var tip5 = (price * 5) / 100;
    console.log(tip5);
  }
  //==========TipInput===============
  let countTips = 0;  
  let tip5 = document.getElementById("tip5");
  let tip10 = document.getElementById("tip10");
  let tip15 = document.getElementById("tip15");
  let tip25 = document.getElementById("tip25");
  let tip50 = document.getElementById("tip50");
    tip5.addEventListener('click', function() { 
      console.log("this is 5");
      if (!subMenu.classList.contains("open-menu")) {
        countTips = 5;
        
      } else {
        subMenu.classList.remove("open-menu");
        countTips = 5;
        if(!toggleCustom2.classList.contains("active")){

        }else{
          toggleCustom2.classList.remove("active");
        }
      }
    });
     tip10.addEventListener('click', function() {  
      console.log("this is 10");
      if (!subMenu.classList.contains("open-menu")) {
        countTips = 10;
        
      } else {
        subMenu.classList.remove("open-menu");
        countTips = 10;
        if(!toggleCustom2.classList.contains("active")){

        }else{
          toggleCustom2.classList.remove("active");
        }
      }
    });
    tip15.addEventListener('click', function() {
     
      console.log("this is 15");
      if (!subMenu.classList.contains("open-menu")) {
        countTips = 15;
        
      } else {
        subMenu.classList.remove("open-menu");
        countTips = 15;
        if(!toggleCustom2.classList.contains("active")){

        }else{
          toggleCustom2.classList.remove("active");
        }
      }
      });
    tip25.addEventListener('click', function() {
      console.log("this is 25");
      if (!subMenu.classList.contains("open-menu")) {
        countTips = 25;
        
      } else {
        subMenu.classList.remove("open-menu");
        countTips = 25;
        if(!toggleCustom2.classList.contains("active")){

        }else{
          toggleCustom2.classList.remove("active");
        }
      }
    });
    tip50.addEventListener('click', function() {
      console.log("this is 50");
      if (!subMenu.classList.contains("open-menu")) {
        countTips = 50;
        
      } else {
        subMenu.classList.remove("open-menu");
        countTips = 50;
        if(!toggleCustom2.classList.contains("active")){

        }else{
          toggleCustom2.classList.remove("active");
        }
      }
    }); 

  let subMenu = document.getElementById("subMenu");

  let toggleCustom2 = document.querySelector('.collapsible');
    
    toggleCustom2.addEventListener('click', function() {
      this.classList.toggle('active');
    
    });

    function toggleCustom(){
      subMenu.classList.toggle("open-menu")
    
        
        countTips = 0;
        console.log("returned to 0");
     

    }
 //==========TipInput===============
  function tipInput(){   
    let tips = document.getElementById('tips');   
    
   
  
   
  
    if (countTips == 5){   
      console.log("this is 5");
      InputTips = 5;
      
    }else if(countTips == 10) {
      console.log("this is 10");
      InputTips = 10;
    }else if(countTips == 15) {
      console.log("this is 15");
      InputTips = 15;
    }else if(countTips == 25) {
      console.log("this is 25");
      InputTips = 25;
    }else if(countTips == 50) {
      console.log("this is 50");
      InputTips = 50;
    }
    else{
      InputTips = tips.value;
    }
    console.log(InputTips);
    return InputTips;
  }

  function numPeopleInput(){
  let numOfP = document.getElementById('numOfP');
  InputNumOfP = numOfP.value;
  console.log(InputNumOfP);
  return(InputNumOfP);
  }


  function calcPandT(){
    let price = parseFloat(InputPrice, 10);
    let tips = parseInt(InputTips, 10);
    let numP = parseInt(InputNumOfP, 10);

    let sum = (price * tips) /100 ;
    let tipquotient = sum / numP;
    let totalamount = tipquotient + price;
    let totalper = totalamount / numP;

    document.getElementById('result').innerHTML =  "&#8369; " + sum;
    document.getElementById('total-amount').innerHTML = "&#8369; " + totalamount;
    document.getElementById('tip-per').innerHTML =  "&#8369; " +  tipquotient;
    document.getElementById('total-per').innerHTML =  "&#8369; " + totalper; 

    document.getElementById('result').classList.add('numering-result');
    document.getElementById('total-amount').classList.add('numering-result');
    document.getElementById('tip-per').classList.add('numering-result');
    document.getElementById('total-per').classList.add('numering-result');
  }



  
