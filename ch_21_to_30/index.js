var City = prompt("Enter city name : ");
City = City.toUpperCase();

var cleanestCity = ['lahore','islamabad','karachi'];

for (let i = 0; i < cleanestCity.length; i++) {
    if (City === cleanestCity[i].toUpperCase()) {
        alert("You are Right");
    }
    
}