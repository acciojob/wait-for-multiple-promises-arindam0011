let trow = document.getElementById("output");

// Create and add the loading row
let Default = document.createElement("tr");
Default.innerHTML = `<td colspan="2">Loading...</td>`;
trow.appendChild(Default);

let totalTime = 0;

// Function to create a promise that resolves after a random delay
let createPromise = (name) => {
	let delay = Math.floor(Math.random() * (3000 - 1000 + 1) + 1000);
	totalTime += delay;
	return new Promise((resolve) => {
		setTimeout(() => {
			let tr = document.createElement("tr");
			tr.innerHTML = `<td>${name}</td>
                            <td class="time">${parseInt(delay / 1000)}</td>`;
			trow.appendChild(tr);
			resolve();
		}, delay);
	});
}

// Create three promises
let promise1 = createPromise("Promise 1");
let promise2 = createPromise("Promise 2");
let promise3 = createPromise("Promise 3");

// Array of promises
let promises = [promise1, promise2, promise3];

// Use Promise.all() to wait for all promises to resolve
Promise.all(promises)
	.then((results) => {
		let tr = document.createElement("tr");
			tr.innerHTML = `<td>Total</td>
                            <td class="time">${totalTime.toFixed(3)/1000}</td>`;
			trow.appendChild(tr);
		trow.removeChild(Default); // Remove the loading row
	})
	.catch(error => {
		console.error("An error occurred:", error);
	});