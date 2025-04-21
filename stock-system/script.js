document.getElementById("productForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(this);
  
    fetch("add_product.php", {
      method: "POST",
      body: formData,
    }).then(() => {
      loadProducts();
      this.reset();
      alert("✅ Product added successfully!");
    });
  });
  
  function loadProducts() {
    fetch("get_products.php")
      .then((res) => res.json())
      .then((data) => {
        const tbody = document.querySelector("#productTable tbody");
        tbody.innerHTML = "";
        data.forEach((p) => {
          const lowStock = p.quantity <= p.threshold ? "⚠️" : "";
          tbody.innerHTML += `
            <tr>
              <td>${p.id}</td>
              <td>${p.name}</td>
              <td>${p.category}</td>
              <td>₹${p.price}</td>
              <td>${p.quantity} ${lowStock}</td>
              <td>
                <button onclick="updateStock(${p.id}, 1)">➕</button>
                <button onclick="updateStock(${p.id}, -1)">➖</button>
                <button onclick="deleteProduct(${p.id})">🗑️</button>
              </td>
            </tr>`;
        });
      });
  }
  
  function updateStock(id, change) {
    fetch(`update_stock.php?id=${id}&change=${change}`).then(() => loadProducts());
  }
  
  function deleteProduct(id) {
    if (confirm("Are you sure you want to delete this product? 🗑️")) {
      fetch(`delete_product.php?id=${id}`).then(() => loadProducts());
    }
  }
  
  window.onload = loadProducts;
  