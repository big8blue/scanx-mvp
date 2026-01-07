function loadMarketData() {
  fetch("data/market.json")
    .then(response => response.json())
    .then(data => {
      const tableBody = document.getElementById("market-data");
      tableBody.innerHTML = "";

      data.forEach(stock => {
        const row = document.createElement("tr");

        row.innerHTML = `
          <td class="p-3">${stock.symbol}</td>
          <td class="p-3">${stock.price}</td>
          <td class="p-3 ${stock.change >= 0 ? "text-green-400" : "text-red-400"}">
            ${stock.change}%
          </td>
        `;

        tableBody.appendChild(row);
      });
    });
}

loadMarketData();
