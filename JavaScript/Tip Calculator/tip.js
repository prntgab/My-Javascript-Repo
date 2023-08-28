let InputPrice;
let InputTips;
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

  function tipInput(){   
  let tips = document.getElementById('tips');     
  InputTips = tips.value;
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


let subMenu = document.getElementById("subMenu");

  function toggleCustom(){
    subMenu.classList.toggle("open-menu")
  }


  