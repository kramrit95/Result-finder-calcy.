

const calcy = () =>{

  let wb = document.getElementById('wb').value;

  let os = document.getElementById('os').value;

  let ds = document.getElementById('ds').value;

  let db = document.getElementById('db').value;

  let grades = "";



  let totalGrades = parseFloat(wb) + parseFloat(os) + parseFloat(ds) + parseFloat(db);

  alert(totalGrades);


  let perc = (totalGrades/400) * 100;

  alert(perc);


 


  if(perc <= 100  && perc >= 80){

    grades = 'A';

  }else if(perc <= 79  && perc >= 60){

     grades = 'B';

  }else if(perc <= 59  && perc >= 40){

     grades = 'C';

  }else{

     grades = 'F';

  }


  if(perc >= 39.5){

    document.getElementById('showData').innerHTML = ` Out of 400 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Pass. `

  }

  else{

    document.getElementById('showData').innerHTML = ` Out of 400 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Fail. `

  }


  

}




