function sortTable(columnIndex) {
            const table = document.getElementById("scooterTable");
            const tbody = table.querySelector("tbody");
            const rows = Array.from(tbody.rows);

            let sortDirection = "asc";
            if (table.querySelector("th.sorted-asc") === table.rows[0].cells[columnIndex]) {
                sortDirection = "desc";
            }

            rows.sort((a, b) => {
                const cellA = a.cells[columnIndex].textContent.trim();
                const cellB = b.cells[columnIndex].textContent.trim();

                // You can modify the sorting behavior here.
                // For example, for numeric values, you can use parseInt(cellA) and parseInt(cellB).
                return sortDirection === "asc" ? cellA.localeCompare(cellB, undefined, { numeric: true, sensitivity: "base" }) : cellB.localeCompare(cellA, undefined, { numeric: true, sensitivity: "base" });
            });

            // Clear the table body and re-append sorted rows
            tbody.innerHTML = "";
            rows.forEach(row => tbody.appendChild(row));

            // Reset the sorted classes on all headers and set the class on the sorted column header
            const thHeaders = table.querySelectorAll("th");
            thHeaders.forEach(header => header.classList.remove("sorted-asc", "sorted-desc"));
            table.rows[0].cells[columnIndex].classList.add(sortDirection === "asc" ? "sorted-asc" : "sorted-desc");
        }

function filterTable() {
    const input = document.getElementById("filterInput");
    const filterValue = input.value.toLowerCase();
    const table = document.getElementById("scooterTable");
    const tbody = table.querySelector("tbody");
    const rows = Array.from(tbody.rows);

    rows.forEach(row => {
        const nameCell = row.cells[1];
        const name = nameCell.textContent.toLowerCase();

        // Show/hide the row based on the filter value
        row.style.display = name.includes(filterValue) ? "" : "none";
    });
}