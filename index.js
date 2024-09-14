//  const height = parseInt(document.querySelector('#height').value); // we can't write it here, because when the page it loaded ibside height variable NaN value will be stored.

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // We have to prevent default submit. Because by default value will go to the server by get or post method by clicking submit. But here no server is present so we have to prevent it.
    let height = parseInt(document.querySelector('#height').value);
    //console.log(height);

    const weight = parseInt(document.querySelector('#weight').value);
    //console.log(weight);
    const result = document.querySelector('#result');

    if(height == '' || height <= 0 || isNaN(height)){
        result.innerHTML = "Invalid Height! Please Check..";
        document.querySelector('#height').value = "";
        document.querySelector('#weight').value = "";
    }
    else if(weight == '' || weight <=0 || isNaN(weight)){
         result.innerHTML = "Invalid Weight! Please Check..";
         document.querySelector('#height').value = "";
         document.querySelector('#weight').value = "";
    }
    else{
        height = height / 100;
        const value = (weight / Math.pow(height,2)).toFixed(2);
        
        if(value < 18.6 ){
            result.innerHTML = `<span> Under Weight, BMI Value = ${value} <br><br>&nbsp; &nbsp;  <img src="illustration-underweight-man-skin-bones-260nw-1329921086.jpg" alt = "Under weight Human Image" style="mix-blend-mode:multiply"></img></span>` ;
            document.querySelector('#height').value = "";
         document.querySelector('#weight').value = "";
        }
        else if(value >= 18.6 && value <= 24.9){
            result.innerHTML = `<span> Normal, BMI Value = ${value} <br><br>&nbsp; &nbsp; <img src="healthy-people-cartoon-2018-41.png" alt = "Fit Human Image" height="auto" style="mix-blend-mode:multiply"></img></span>`;
            document.querySelector('#height').value = "";
         document.querySelector('#weight').value = "";
        }
        else{
            result.innerHTML = `<span> Over Weight, BMI Value = ${value}<br><br> &nbsp; &nbsp; <img src="overweight-man-standing-on-body-260nw-2249186219.jpg" alt = "Over Weight Human Image" style="mix-blend-mode:multiply"></img></span>`;
            document.querySelector('#height').value = "";
         document.querySelector('#weight').value = "";
        }
    }
})

