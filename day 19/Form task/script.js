

function Data(evt) {
    evt.preventDefault();

    
    const Id = document.getElementById("inputId").value;
    const FirstName = document.getElementById("fname").value;
    const LastName = document.getElementById("lname").value
    const Address = document.getElementById("address").value
    const Gender = document.getElementById("Gender").value
    const Gender1 = document.getElementById("female").value
    const Foods = document.getElementById("foods").value
    const State = document.getElementById("state").value
    const Country = document.getElementById("country").value
    const Pincode = document.getElementById("inputZip").value;

    // for(var i=0;i<evt.lenght;i++){
    const data =document.getElementById("data") 
    data.innerHTML = `<tr>
    <th scope="row">${Id}</th>
    <td>${FirstName}</td>
    <td>${LastName}</td>
    <td>${Address}</td>
    <td>${Gender}</td>
    <td>${Foods}</td>
    <td>${State}</td>
    <td>${Country}</td>
    <td>${Pincode}</td>
  </tr>`;

    
document.getElementById("formdata").reset();
  

}


