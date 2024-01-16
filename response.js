
var cararray = [
    {
        Vehicle: 'Suzuki Swift',
        price: "2.85 Lakh",
        km: 57000,
        color: 'red',
        registration: 'TN 38',
        year: 2016,
        model: 'LXi',
        fueltype: 'petrol',
        fuelcapacity: 25,
        owners: 2,
        img1:"./img/swift/wp2681435.webp",
        img2:"./img/swift/wp4455833.webp",
        img3:"./img/swift/2018-suzuki-swift-wallpaper-preview.jpg"
    },
    {
        Vehicle: 'Mahindra Xuv 700',
        price:"1500/day",
        km: 42000,
        color: 'silver',
        registration: 'TN 37',
        year: 2019,
        model: 'XUV700',
        fueltype: 'Diesel',
        fuelcapacity: 60,
        owners: 1,
        img1:"./img/xuv/xuv1.jpeg",
        img2:"./img/xuv/xuv2.jpeg",
        img3:"./img/xuv/xuv3.webp",
    },
    {
        Vehicle: 'Mahindra thar',
        price: '13 lakhs',
        km: 50000,
        color: 'black',
        registration: 'TN 07',
        year: 2021,
        model: '4x4',
        fueltype: 'Diesel',
        fuelcapacity: 57,
        owners: 1,
        img1:"./img/thar/thar1.jpeg",
        img2:"./img/thar/thar2.jpeg",
        img3:"./img/thar/thar3.jpeg",
    },
    {
        Vehicle: 'Volkswagen Jetta',
        price: "2500/day",
        km: 50000,
        color: 'silver',
        registration: 'TN 99',
        year: 2016,
        model: 'Jetta 2016',
        fueltype: 'petrol',
        fuelcapacity: 55,
        owners: 2,
        
        img1:"./img/jetta/jetta1.jpg",
        img2:"./img/jetta/jetta2.jpeg",
        img3:"./img/jetta/jetta3.jpg",
    }
];
var index=localStorage.getItem('index1');
        // Update HTML content based on the selected index
        document.querySelector(".vehicle").textContent = cararray[index].Vehicle;
        document.querySelector(".Price").textContent = cararray[index].price;
        document.querySelector(".Kilometers").textContent = cararray[index].km;
        document.querySelector(".Color").textContent = cararray[index].color;
        document.querySelector(".Registration").textContent = cararray[index].registration;
        document.querySelector(".carname").textContent = cararray[index].Vehicle;
        document.querySelector(".img1").src = cararray[index].img1;
        document.querySelector(".img2").src = cararray[index].img2;
        document.querySelector(".img3").src = cararray[index].img3;

        document.querySelector(".Year").textContent = cararray[index].year;
        document.querySelector(".Model").textContent = cararray[index].model;
        document.querySelector(".FuelType").textContent = cararray[index].fueltype;
        document.querySelector(".FuelCapacity").textContent = cararray[index].fuelcapacity;
        document.querySelector(".Owners").textContent = cararray[index].owners;