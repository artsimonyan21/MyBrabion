let brabionFlowers = JSON.parse(stringDataToBrabionFlowers);
// console.log(brabionFlowers);

const global = document.getElementById("global");

let inCart = [];

function showFlowers(data) {
  data.forEach((element) => {
    let cartDiv = document.createElement("div");
    cartDiv.classList.add("cartDiv");

    let addToCartButton = document.createElement("button");
    addToCartButton.classList.add("addToCartButton");
    addToCartButton.innerHTML = "Add To Cart";
    addToCartButton.onclick = () => {
      inCart.push(element);
      console.log("yes");
      // console.log(inCart);
    };
    cartDiv.appendChild(addToCartButton);

    let flower = document.createElement("div");
    flower.classList.add("flowerDiv");

    let nameAndPrice = document.createElement("div");
    nameAndPrice.classList.add("nameAndPrice");

    let name = document.createElement("h4");
    let price = document.createElement("p");

    let imgFlower = document.createElement("img");
    imgFlower.classList.add("imgFlower");
    imgFlower.setAttribute("src", element.src);

    flower.appendChild(imgFlower);

    name.innerHTML = element.name;
    price.innerHTML = element.price;

    nameAndPrice.appendChild(name);
    nameAndPrice.appendChild(price);
    flower.appendChild(nameAndPrice);
    flower.appendChild(cartDiv);
    global.appendChild(flower);
  });
}

showFlowers(brabionFlowers);

let cartListInMenu = document.querySelector(".cartListInMenu");

cartListInMenu.onclick = () => {
  console.log("hello");
  let full_wrapper = document.createElement("div");
  full_wrapper.classList.add("full_wrapper");

  let cart_wrapper = document.createElement("div");
  cart_wrapper.classList.add("cart_wrapper");

  full_wrapper.onclick = (e) => {
    if (e.target === full_wrapper) {
      full_wrapper.remove();
    } else {
      e.preventDefault();
    }
  };

  full_wrapper.appendChild(cart_wrapper);
  document.body.appendChild(full_wrapper);
  ppp();
  function ppp() {
    inCart.forEach((element) => {
      let flowerInCart = document.createElement("div");
      flowerInCart.classList.add("flowerInCart");

      let imgFlowerInCart = document.createElement("img");
      imgFlowerInCart.classList.add("imgFlowerInCart");
      imgFlowerInCart.setAttribute("src", element.src);

      let priceAndNameInCart = document.createElement("div");
      priceAndNameInCart.classList.add("priceAndNameInCart");

      let nameFlowerInCart = document.createElement("h3");
      nameFlowerInCart.classList.add("nameFlowerInCart");
      nameFlowerInCart.innerHTML = element.name;
      priceAndNameInCart.appendChild(nameFlowerInCart);

      let priceFlowerInCart = document.createElement("p");
      priceFlowerInCart.innerHTML = element.price;
      priceFlowerInCart.classList.add("priceFlowerInCart");
      priceAndNameInCart.appendChild(priceFlowerInCart);

      let deleteButtonINCart = document.createElement("div");
      let buttonInCart = document.createElement("button");
      buttonInCart.innerHTML = "Delete From Cart";
      deleteButtonINCart.appendChild(buttonInCart);
      buttonInCart.classList.add("deleteButtonInCart");

      flowerInCart.appendChild(imgFlowerInCart);
      flowerInCart.appendChild(priceAndNameInCart);
      flowerInCart.appendChild(deleteButtonINCart);

      cart_wrapper.appendChild(flowerInCart);

      function deleteFlower() {
        let flowerName = element.name;
        inCart = inCart.filter((el) => el.name !== flowerName);
      }

      deleteButtonINCart.onclick = () => {
        deleteFlower();
        console.log("i am delete");

        cart_wrapper.innerHTML = "";
        ppp();
      };
    });
  }
};

let searchFlowerInput = document.getElementById("searchFlowerInput");

searchFlowerInput.addEventListener("input", (event) => {
  let searchValue = event.target.value;
  let global = document.querySelector("#global");

  let list = [...global.children];

  if (searchValue.length) {
    console.log("list", list);

    list = list.map((item) => {
      let content = item?.children[1]?.firstChild?.innerText.toLowerCase();

      if (!content.includes(searchValue.toLowerCase())) {
        item.style.display = "none";
      } else {
        item.style.display = "block";
      }
      return item;
    });
  } else {
    list.map((item) => {
      item.style.display = "block";
      return item;
    });
  }
  global.innerHTML = "";
  global.append(...list);
});
