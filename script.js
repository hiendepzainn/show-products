// Hiển thị All categories & All products
var showCategorysAndAllProducts = () => {
  fetch("https://dummyjson.com/products")
    .then((result1) => {
      return result1.json();
    })

    .then((data) => {
      console.log(data);
      let products = data.products;
      let htmlProductList = "";
      let categoryOfProduct = [];
      products.forEach((element) => {
        categoryOfProduct.push(element.category);
        htmlProductList += `<div class="outer-product col-sm-2 col-2">
          <div class="product">
            <div class="image">
              <img
                src=${element.thumbnail}
                alt="image"
              />
            </div>

            <div class="info-product">
              <h4 class="name-product">${element.title}</h4>
              <div class="details">
                <span class="price">${element.price}</span>
                <span>Còn lại: ${element.stock}sp</span>
              </div>
            </div>
            <div class="discount">-${Math.round(
              element.discountPercentage
            )}%</div>
          </div>
        </div>`;
      });

      let category = [...new Set(categoryOfProduct)];
      let htmlCategory = "";
      category.forEach((element) => {
        htmlCategory += `
        <div class="outer-item-category col-sm-2 col-2">
          <div class="item-category">${element}</div>
        </div>`;
      });
      let rowShowCategorys = document.querySelector(".category-block .row");
      rowShowCategorys.innerHTML = htmlCategory;

      // Gán sự kiện "click" thì hiển thị theo Category
      let categoryButtonList = document.querySelectorAll(".item-category");
      categoryButtonList.forEach((button) => {
        button.addEventListener("click", () => {
          showProductsByCategory(button.innerHTML);
        });
      });

      let rowShowProducts = document.querySelector(".show-products-block .row");
      rowShowProducts.innerHTML = htmlProductList;
    })

    .catch((error) => {
      console.log(error);
    });
};

// Show products theo Category cụ thể
var showProductsByCategory = (nameCategory) => {
  fetch("https://dummyjson.com/products")
    .then((result1) => {
      return result1.json();
    })

    .then((data) => {
      console.log(data);
      let products = data.products;
      let htmlProductList = "";

      products.forEach((element) => {
        if (element.category == nameCategory) {
          htmlProductList += `<div class="outer-product col-sm-2 col-2">
          <div class="product">
            <div class="image">
              <img
                src=${element.thumbnail}
                alt="image"
              />
            </div>

            <div class="info-product">
              <h4 class="name-product">${element.title}</h4>
              <div class="details">
                <span class="price">${element.price}</span>
                <span>Còn lại: ${element.stock}sp</span>
              </div>
            </div>
            <div class="discount">-${Math.round(
              element.discountPercentage
            )}%</div>
          </div>
        </div>`;
        }
      });

      let rowShowProducts = document.querySelector(".show-products-block .row");
      rowShowProducts.innerHTML = htmlProductList;
    })

    .catch((error) => {
      console.log(error);
    });
};

//Show Products mà title có từ keyName
var showProductsByKeyName = (keyName) => {
  fetch("https://dummyjson.com/products")
    .then((result1) => {
      return result1.json();
    })

    .then((data) => {
      console.log(data);
      let products = data.products;
      let htmlProductList = "";

      products.forEach((element) => {
        if (element.title.toLowerCase().includes(keyName)) {
          htmlProductList += `<div class="outer-product col-sm-2 col-2">
          <div class="product">
            <div class="image">
              <img
                src=${element.thumbnail}
                alt="image"
              />
            </div>

            <div class="info-product">
              <h4 class="name-product">${element.title}</h4>
              <div class="details">
                <span class="price">${element.price}</span>
                <span>Còn lại: ${element.stock}sp</span>
              </div>
            </div>
            <div class="discount">-${Math.round(
              element.discountPercentage
            )}%</div>
          </div>
        </div>`;
        }
      });

      let rowShowProducts = document.querySelector(".show-products-block .row");
      rowShowProducts.innerHTML = htmlProductList;
    })

    .catch((error) => {
      console.log(error);
    });
};

//Chức năng tìm kiếm
var searchButton = document.querySelector("button");
var searchInput = document.querySelector("#searchInput");
console.log(searchButton);
searchButton.addEventListener("click", () => {
  if (searchInput.value == "") {
    showCategorysAndAllProducts();
  } else {
    showProductsByKeyName(searchInput.value);
  }
});

showCategorysAndAllProducts();
