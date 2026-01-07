async function loadMarketData() {
  try {
    const response = await fetch("data/market.json", { cache: "no-store" });
    const data = await response.json();

    const tableBody = document.getElementById("market-data");
    tableBody.innerHTML = "";

    data.forEach(stock => {
      const row = document.createElement("tr");

      const changeClass =
        stock.change >= 0 ? "text-green-400" : "text-red-400";

      row.innerHTML = `
        <td class="p-3">${stock.symbol}</td>
        <td class="p-3">${stock.price}</td>
        <td class="p-3 ${changeClass}">
          ${stock.change.toFixed(2)}%
        </td>
      `;

      tableBody.appendChild(row);
    });

  } catch (error) {
    console.error("Failed to load market data", error);
  }
}

// Initial load
loadMarketData();

// Auto refresh every 30 seconds (UI refresh)
setInterval(loadMarketData, 30000);
