//function for calculation

function afterExpenseBalance(check){
    const totalIncome=document.getElementById('income-amount')
    const foodExpense=document.getElementById('food-cost')
    const rentExpense=document.getElementById('rent-cost')
    const clothExpense=document.getElementById('cloth-cost')
    const savingInput=document.getElementById('save-input')
    
    
  if (
        totalIncome.value==""||
        totalIncome.value < 0 ||
        foodExpense.value == "" ||
        foodExpense.value < 0 ||
        rentExpense.value < 0 ||
        rentExpense.value == "" ||
        clothExpense.value == ""||
        clothExpense.value <0 
       
  
    ) {
        let moreThan =document.getElementById('more-than') 
        let cheakingValue=document.getElementById('input-value')
        let lessThan =document.getElementById('less-than')

        cheakingValue.style.display='block'
        lessThan.style.display='none'
        moreThan.style.display='none'
        return
     }
      
  
    
    const totalExpense=parseFloat(foodExpense.value)+parseFloat(rentExpense.value)+parseFloat(clothExpense.value)
    const  Balance = parseFloat(totalIncome.value)- totalExpense
    

    if(check==true){
        document.getElementById('total-expense').innerText = totalExpense
        if(Balance>totalExpense){
            document.getElementById('after-balance').innerText = Balance
        }
    
        else{
            const moreThan =document.getElementById('more-than') 
            const cheakingValue=document.getElementById('input-value')
            const lessThan =document.getElementById('less-than')

            lessThan.style.display='block'
            cheakingValue.style.display='none'
            moreThan.style.display='none'
        }
    }

    
    if(check==false) {
        
        return Balance
        
        
    }   
    
}
  
 
//calculate button click

document.getElementById("calculate-button").addEventListener('click',function(){
      afterExpenseBalance(true)
      
    })


  //saving button click

document.getElementById("save-button").addEventListener('click',function(){
    
    let Balance = afterExpenseBalance(false)
  
      
    const totalIncome=document.getElementById('income-amount')
    const savingInput=document.getElementById('save-input')
  
    const saveAmount=parseFloat(totalIncome.value)*((savingInput.value)/100)
    

    if(Balance> saveAmount){
        const remainingAmount = Balance-saveAmount
        document.getElementById('saving-amount').innerText   = parseFloat(saveAmount)
        document.getElementById('remaing-balance').innerText = remainingAmount
    }
    
    else{
        const moreThan =document.getElementById('more-than') 
        const cheakingValue=document.getElementById('input-value')
        const lessThan =document.getElementById('less-than')

          moreThan.style.display='block'
          cheakingValue.style.display='none'
          lessThan.style.display='none'
         
    }
    
        
    })
  
  
  
  