const Pabrik = [{
    Nama : 'Lamborghini Urus',  
    pintu : 4,   
},
{
    Nama : 'Audi A5',
    pintu : 2,    
},
{
    Nama : 'Mitsubishi Expander',
    pintu : 4,
},
{
    Nama : 'Porsche 911',
    pintu : 2,
},
]

let b = (prompt("Tentukan jeumlah pintu"));
const cars = Pabrik.filter((Pabrik) => Pabrik.pintu == b);
console.log(cars);

