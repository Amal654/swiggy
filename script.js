const form = document.getElementById('conatactForm');

form.addEventListener('submit', function(event){
    event.preventDefault();  // prevents form from the auto submitting

    const firstname = document.getElementById('firstname').value;

    const lastname = document.getElementById('lastname').value;

    const email = document.getElementById('email').value;

    const phone = document.getElementById('phone').value;

    const gender = document.querySelector('input[name="gender"]:checked').value;

    const birthday = document.getElementById('date').value;

    const week = document.getElementById('week').value;

    const time = document.getElementById('time').value;

    const culture = [];
    document.querySelectorAll('input[name="culture[]"]:checked').forEach((checkbox) => {
        culture.push(checkbox.value);
      });
    
    const totalItems = document.getElementById('totalitems').value;  

    const color = document.getElementById('color').value;

    const range = document.getElementById('range').value;

    const password = document.getElementById('password').value;

    const formData = {
       First_Name  : firstname,
       Last_Name : lastname,
       Email : email,
       Phone : phone,
       Gender : gender,
       Birthday : birthday,
       Week : week,
       Time : time, 
       Culture : culture,
       Color : color,
       Range : range,
       Password : password
    };
    console.log("Form Data:", formData);
    
    form.reset();
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        form.reset();
    });


