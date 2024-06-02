let model = document.getElementById("selectModel");
let iphoneModel = document.getElementById("iphoneModel");
let samsungModel = document.getElementById("samsungModel");
let infinixModel = document.getElementById("infinixModel");
let products = document.getElementById("products");

let mobilePhones = {
  iphone: {
    11: {
      company: "Apple",
      model: "Iphone 11",
      ram: "8gb",
      rom: "256gb",
      chargingPort: "C-type",
      price: "77,000 PKR",
    },
    12: {
      company: "Apple",
      model: "Iphone 12",
      ram: "8gb",
      rom: "256gb",
      chargingPort: "C-type",
      price: "100,000 PKR",
    },
  },
  Samsung: {
    a13: {
      company: "Samusng",
      model: "Samsung A13",
      ram: "8gb",
      rom: "256gb",
      chargingPort: "C-type",
      price: "50,000 PKR",
    },
    s20: {
      company: "Samsung",
      model: "Samsung S20",
      ram: "8gb",
      rom: "256gb",
      chargingPort: "C-type",
      price: "120,000 PKR",
    },
  },
  infinix: {
    hot40Pro: {
      company: "Infinix",
      model: "infinix Hot 40 Pro",
      ram: "8gb",
      rom: "256gb",
      chargingPort: "C-type",
      price: "45,499 PKR",
    },
    note30: {
      company: "infinix",
      model: "Infinix Note 30",
      ram: "8gb",
      rom: "256gb",
      chargingPort: "C-type",
      price: "43,799 PKR",
    },
  },
};
function showModel(answer) {
  if (answer.value === "") {
    model.style.display = "inline-block";
    iphoneModel.style.display = "none";
    samsungModel.style.display = "none";
    infinixModel.style.display = "none";
  } else if (answer.value === "iphone") {
    model.style.display = "none";
    iphoneModel.style.display = "inline-block";
    samsungModel.style.display = "none";
    infinixModel.style.display = "none";
  } else if (answer.value === "samsung") {
    iphoneModel.style.display = "none";
    model.style.display = "none";
    samsungModel.style.display = "inline-block";
    infinixModel.style.display = "none";
  } else if (answer.value === "infinix") {
    iphoneModel.style.display = "none";
    model.style.display = "none";
    samsungModel.style.display = "none";
    infinixModel.style.display = "inline-block";
  }
}
function showMobiles(show) {
  if (show.value === "iphone 11") {
    document.getElementById("mobileDetails").innerHTML = mobilePhones;
  }
  // if (answer){

  // }
}
// console.log(mobilePhones.Samsung);
// for(let i = 0; i < mobilePhones.key.length; i++){
//   console.log(mobilePhones[i])

// }

// console.log(mobilePhones[key]
// le
// for (const property in mobilePhones.Samsung.a13) {
//   console.log(mobilePhones[property])
// }

// Object.keys(mobilePhones.Samsung.a13).forEach(key => {
//   // console.log(`${key}: ${mobilePhones.Samsung.a13[key]}`);
//   // console.log(mobilePhones.Samsung.a13[key])
// });
// function showMobiles(type){
//   console.log(type.parentNode)
// for (const company in mobilePhones){
//   console.log(company)
// }

// }
