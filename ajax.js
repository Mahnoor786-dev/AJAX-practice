let fruitBtn = document.getElementById('fruitbtn');
fruitBtn.addEventListener('click', FruitHandler)

let vegBtn = document.getElementById('vegebtn');
vegBtn.addEventListener('click', VegetablesHandler)


function FruitHandler(){

    //insert fruits heading
    let fruitlist = document.getElementById('fruitlist');
    let text = document.createTextNode("Our FRUITS");
    fruitlist.appendChild(text);

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();
    // Open the object
    xhr.open('GET', 'fruits.json' , true);
    // What to do when response is ready
     xhr.onload = function(){
        if(this.status==200)
        {
            let obj = JSON.parse(this.responseText);
            let fruits = document.getElementById('fruit');
            let str="";
            console.log(obj);
            for(i in obj.fruits)
            {
                str+= `<li> ${(obj.fruits)[i]} </li>`;
                if(i==20)
                break;
            }
            fruits.innerHTML=str;
        }
        else{
            console.log("Some error occured")
        }
     }
     xhr.send();
     console.log("We are done fetching fruits!");
     
}



function VegetablesHandler(){

    //insert fruits heading
    let fruitlist = document.getElementById('vegelist');
    let text = document.createTextNode("Our VEGETABLES");
    fruitlist.appendChild(text);

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();
    // Open the object
    xhr.open('GET', 'vegetables.json' , true);
    // What to do when response is ready
     xhr.onload = function(){
        if(this.status==200)
        {
            let obj = JSON.parse(this.responseText);
            let fruits = document.getElementById('vege');
            let str="";
            console.log(obj);
            for(i in obj.vegetables)
            {
                str+= `<li> ${(obj.vegetables)[i]} </li>`;
                if(i==20)
                break;
            }
            fruits.innerHTML=str;
        }
        else{
            console.log("Some error occured")
        }
     }
     xhr.send();
     console.log("We are done fetching vegetables!");
}
