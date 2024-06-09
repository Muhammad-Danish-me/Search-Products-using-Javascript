let mobilephones = {
  iphone: {
    iphone11: {
      company: "Apple",
      model: "Iphone 11",
      ram: "8gb",
      rom: "256gb",
      chargingPort: "C-type",
      price: "77,000 PKR",
      color: "Black",
      image: "images/Iphone 11.jpeg",
    },
    iphone12: {
      company: "Apple",
      model: "Iphone 12",
      ram: "8gb",
      rom: "256gb",
      chargingPort: "C-type",
      price: "100,000 PKR",
      color: "Blue",
      image: "images/Iphone 12.jpg",
    },
  },
  Samsung: {
    galaxy_A13: {
      company: "Samusng",
      model: "Samsung A13",
      ram: "8gb",
      rom: "256gb",
      chargingPort: "C-type",
      price: "50,000 PKR",
      color: "Grey",
      image: "images/samsung a13.jpeg",
    },
    galaxy_S20: {
      company: "Samsung",
      model: "Samsung S20",
      ram: "8gb",
      rom: "256gb",
      chargingPort: "C-type",
      price: "120,000 PKR",
      color: "Dark Blue",
      image: "images/Iphone 12.jpg",
    },
  },
  infinix: {
    hot_40_Pro: {
      company: "Infinix",
      model: "infinix Hot 40 Pro",
      ram: "8gb",
      rom: "256gb",
      chargingPort: "C-type",
      price: "45,499 PKR",
      color: "Blue",
      image: "images/Iphone 12.jpg",
    },
    note_30: {
      company: "infinix",
      model: "Infinix Note 30",
      ram: "8gb",
      rom: "256gb",
      chargingPort: "C-type",
      price: "43,799 PKR",
      color: "Red",
      image: "images/Iphone 12.jpg",
    },
  },
};
const companySelect = document.getElementById("company");
const modelSelect = document.getElementById("model");
const list = document.getElementById("list");
for (let company in mobilephones) {
  let option = `
        <option value="${company}">${company}</option>
    `;
  companySelect.innerHTML += option;
}

for (let company in mobilephones) {
  for (let model in mobilephones[company]) {
    const mobile = mobilephones[company][model];
    let card = `<div class="card" style="width: 20rem;">
    <img src="${mobilephones[company][model].image}" class="card-img-top " alt="...">
    <div class="card-body">
      <h5 class="card-title">${mobile.model}</h5>
      <p class="card-text">Price: ${mobile.price}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Storage: ${mobile.ram} / ${mobile.rom}</li>
      <li class="list-group-item">Color: ${mobile.color}</li>
      <li class="list-group-item">Charging Port: ${mobile.chargingPort}</li>
    </ul>
  </div>`;
    list.innerHTML += card;
  }
}

function handleSelectCompany() {
  modelSelect.innerHTML = "";
  const company = companySelect.value;
  for (let model in mobilephones[company]) {
    let option = `
            <option value="${model}">${model}</option>
        `;
    modelSelect.innerHTML += option;
  }
}

function search() {
  const company = companySelect.value;
  const model = modelSelect.value;

  //TODO: add input validation

  const mobile = mobilephones[company][model];
  let card = `<div class="card" style="width: 18rem;">
  <img src="${mobilephones[company][model].image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${mobile.model}</h5>
      <p class="card-text">Price: ${mobile.price}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Storage: ${mobile.ram} / ${mobile.rom}</li>
      <li class="list-group-item">Color: ${mobile.color}</li>
      <li class="list-group-item">Charging Port: ${mobile.chargingPort}</li>
    </ul>
  </div>`;
  list.innerHTML = card;
}
