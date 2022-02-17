
function afterExpenseBalance(check){
    const totalIncome=document.getElementById('income-amount')
    const foodExpense=document.getElementById('food-cost')
    const rentExpense=document.getElementById('rent-cost')
    const clothExpense=document.getElementById('cloth-cost')
  
  
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
        
        alert(" Input value is negative or emty")
        return
      }
  
    
    const totalExpense=parseFloat(foodExpense.value)+parseFloat(rentExpense.value)+parseFloat(clothExpense.value)
    const  Balance = parseFloat(totalIncome.value)- totalExpense
    document.getElementById('total-expense').innerText = totalExpense

    if(check==true){
        if(Balance>totalExpense){
            document.getElementById('after-balance').innerText = Balance
        }
    
        else{
            alert("Income amount is  less than total Expense amount")
       }
    }

    
    if(check==false) {
        return Balance
    }   
    
        
}
  
 

document.getElementById("calculate-button").addEventListener('click',function(){
      afterExpenseBalance(true)
      
    })

  
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
        return alert("Saving amount is  more than balance amounr")
    }
    
        
    })
  
  
  
  