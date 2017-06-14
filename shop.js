//billing
function billingInfo(){
    var a=document.getElementById("populateinfo");
    if(a.checked==true){
        document.getElementById("fname1").value=document.getElementById("fname").value;
        document.getElementById("lname1").value=document.getElementById("lname").value;
        document.getElementById("address3").value=document.getElementById("address1").value;
        document.getElementById("address4").value=document.getElementById("address2").value;
        document.getElementById("city1").value=document.getElementById("city").value;
        document.getElementById("state1").value= document.getElementById("state").value;
        document.getElementById("zipcode1").value= document.getElementById("zipcode").value;
        document.getElementById("country1").value= document.getElementById("country").value;
        document.getElementById("phone1").value=document.getElementById("phone").value;
        document.getElementById("email1").value=document.getElementById("email").value;
    }
}

/*
function loadDoc() {
  var myObj;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        document.getElementById("picture1").src=myObj.allProducts[0].image_path;
        document.getElementById("description1").innerHTML="Description:"+" "+myObj.allProducts[0].product_description;
        document.getElementById("shipping1").innerHTML=myObj.allProducts[0].shipping_details;
        document.getElementById("no_of_items1").innerHTML="In Stock....."+myObj.allProducts[0].no_of_items+" "+"left";
    }
  };
  xhttp.open("GET", "dressInfo.txt", true);
  xhttp.send();
}*/

function loadHome(){
     var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "dressInfo.json", true);
  xhttp.send();
    var myObj;
     xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        document.getElementById("dress1").src=myObj.allProducts[0].image_path; document.getElementById("dress2").src=myObj.allProducts[1].image_path;
        document.getElementById("dress3").src=myObj.allProducts[2].image_path;
        document.getElementById("dress4").src=myObj.allProducts[3].image_path;
        document.getElementById("dress5").src=myObj.allProducts[4].image_path;
        document.getElementById("dress6").src=myObj.allProducts[5].image_path;
        document.getElementById("dress7").src=myObj.allProducts[6].image_path;
        document.getElementById("dress8").src=myObj.allProducts[7].image_path;
        }
     }
}

/*
var i;
function loadData(){
    i=localStorage.getItem("Index");
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "dressInfo.json", true);
    xhttp.send();
    var myObj,x; 
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        for (i = 0; i < myObj.allProducts.length; i++) {

    document.getElementById("picture1").src=myObj.allProducts[i].image_path;   
        document.getElementById("description1").innerHTML="Description:"+" "+myObj.allProducts[i].product_description;
      document.getElementById("price1").innerHTML="Price:"+" "+myObj.allProducts[i].price;  document.getElementById("shipping1").innerHTML=myObj.allProducts[i].shipping_details;
        document.getElementById("no_of_items1").innerHTML="In Stock....."+myObj.allProducts[i].no_of_items+" "+"left";
    
}
} 
}
}

function buying(){
        localStorage.setItem("Index",i);
    
        window.location.href="productPage.html";
}
*/

var i;   
var myObj=[];
var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "dressInfo.json", true);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
    
    }}
  
function previous() {
 
        if(i>0)
        {
            i--;
            
        }
    else{
        i=0;
    }
    
        document.getElementById("picture1").src=myObj.allProducts[i].image_path;   
        document.getElementById("description1").innerHTML="Description:"+" "+myObj.allProducts[i].product_description;
        document.getElementById("price1").innerHTML="Price:"+" "+myObj.allProducts[i].price; document.getElementById("shipping1").innerHTML=myObj.allProducts[i].shipping_details;
        document.getElementById("no_of_items1").innerHTML="In Stock....."+myObj.allProducts[i].no_of_items+" "+"left";
   
    }


function next(){
   
       if(i< myObj.allProducts.length-1)
        {
            i++;  
        }
    else{
        i=0;
    }
        document.getElementById("picture1").src=myObj.allProducts[i].image_path;   
        document.getElementById("description1").innerHTML="Description:"+" "+myObj.allProducts[i].product_description;
        document.getElementById("price1").innerHTML="Price:"+" "+myObj.allProducts[i].price; document.getElementById("shipping1").innerHTML=myObj.allProducts[i].shipping_details;
        document.getElementById("no_of_items1").innerHTML="In Stock....."+myObj.allProducts[i].no_of_items+" "+"left";
    }
     
    
function buying(){
        localStorage.setItem("Index",i);
    
        window.location.href="productPage.html";
}

function display()
   {
        i=localStorage.getItem("Index");
    
        document.getElementById("picture1").src=myObj.allProducts[i].image_path;   
        document.getElementById("description1").innerHTML="Description:"+" "+myObj.allProducts[i].product_description;
        document.getElementById("price1").innerHTML="Price:"+" "+myObj.allProducts[i].price; document.getElementById("shipping1").innerHTML=myObj.allProducts[i].shipping_details;
        document.getElementById("no_of_items1").innerHTML="In Stock....."+myObj.allProducts[i].no_of_items+" "+"left";
}

//adding to cart
function payment(){
    window.location.href="order.html";
}