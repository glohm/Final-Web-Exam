var listOfProducts = [];

document.write("<pre class= 'alert alert-secondary'>");
document.write(JSON.stringify(listOfProducts));
document.write("</pre>");


function calculateAverage(){

    var sum = 0;
    listOfProducts.forEach(product => {
        sum = sum + product.price;
    });
    average = sum / listOfProducts.length;

    return average;
}


function displayResults()
{
    var quantityPurchased0 = document.getElementById("quantity0")
    var quantityPurchased1 = document.getElementById("quantity1")
    var quantityPurchased2 = document.getElementById("quantity2")
    var quantityPurchased3 = document.getElementById("quantity3")
    var quantityPurchased4 = document.getElementById("quantity4")

    var subtotal0 = quantityPurchased0.value +" "+ listOfProducts[0].name +" x $"+ listOfProducts[0].price + '= $'+ quantityPurchased0.value*parseFloat(listOfProducts[0].price);
    var subtotal1 = quantityPurchased1.value +" "+ listOfProducts[1].name +" x $"+ listOfProducts[1].price + '= $'+ quantityPurchased1.value*parseFloat(listOfProducts[1].price);
    var subtotal2 = quantityPurchased2.value +" "+ listOfProducts[2].name +" x $"+ listOfProducts[2].price + '= $'+ quantityPurchased2.value*parseFloat(listOfProducts[2].price);
    var subtotal3 = quantityPurchased3.value +" "+ listOfProducts[3].name +" x $"+ listOfProducts[3].price + '= $'+ quantityPurchased3.value*parseFloat(listOfProducts[3].price);
    var subtotal4 = quantityPurchased4.value +" "+ listOfProducts[4].name +" x $"+ listOfProducts[4].price + '= $'+ quantityPurchased4.value*parseFloat(listOfProducts[4].price);
    var sumofamounts = quantityPurchased0.value*parseFloat(listOfProducts[0].price)+quantityPurchased1.value*parseFloat(listOfProducts[1].price)+quantityPurchased2.value*parseFloat(listOfProducts[2].price)+quantityPurchased3.value*parseFloat(listOfProducts[3].price)+quantityPurchased4.value*parseFloat(listOfProducts[4].price)
    var totalamount = "Total amount = $" + sumofamounts

    result0.innerText = subtotal0
    result1.innerText = subtotal1
    result2.innerText = subtotal2
    result3.innerText = subtotal3
    result4.innerText = subtotal4
    total.innerText = totalamount
}


function fillTable(){
    
    var table = document.getElementById("grid");


    listOfProducts.forEach(function(product,i) {
        var row = document.createElement('section') 
        row.className = 'row'
        
        var column1 = document.createElement('section')
        var column2 = document.createElement('section')

        column1.className = "col-sm-4"
        column2.className = "col-sm-4"

       /// column3.className = "col-sm-4"


        table.append(row);
        row.appendChild(column1);
        column1.innerText = product.name;
        row.appendChild(column2);
        column2.innerText = product.price;
        column2.setAttribute("type", "number");
        //row.appendChild(column3);
        //column3.innerText = addQuantity

        fillQuantity(row, i)
    });
}

function fillQuantity(row,i){
        

    var column3 = document.createElement('input')     
    column3.className = "col-sm-4"
    column3.setAttribute("type", "number");
    column3.value = Number
    row.appendChild(column3);
    column3.id = "quantity" + i;
    

    console.log('input.id');
}

