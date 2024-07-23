
let trow = document.getElementById("output");

let Default = document.createElement("tr");
Default.innerHTML = `<td colspan="2">Loading...</td>`;

trow.appendChild(Default);
let totaRandomTime = 0;
new Promise((resolve, reject) => {
	let delay=Math.floor(Math.random()*(3000-1000+1)+1000);
		totaRandomTime += delay;
	setTimeout(() => {
		let tr = document.createElement("tr");
		tr.innerHTML = `<td>Promise 1</td>
					  <td class="time">${parseInt(delay/1000)}</td>`;
		trow.insertBefore(tr, Default);
		resolve();
	}, delay)
})
	.then(() => {
		let delay=Math.floor(Math.random()*(3000-1000+1)+1000);
		totaRandomTime += delay;
		return new Promise((resolve, reject) => {
			
			setTimeout(() => {
				let tr = document.createElement("tr");
				tr.innerHTML = `<td>Promise 2</td>
						  <td class="time">${parseInt(delay/1000)}</td>`;
				trow.insertBefore(tr, Default);
				resolve();
			}, delay)
		})
	})
	.then(() => {
		let delay=Math.floor(Math.random()*(3000-1000+1)+1000);
			totaRandomTime += delay;
		return new Promise((resolve, reject) => {
			
			setTimeout(() => {
				let tr = document.createElement("tr");
				tr.innerHTML = `<td>Promise 3</td>
						  <td class="time">${parseInt(delay/1000)}</td>`;
				trow.insertBefore(tr, Default);
				resolve();
			}, delay)
		})
	})
	.then(() => {

		return new Promise((resolve, reject) => {
			let tr = document.createElement("tr");
			tr.innerHTML = `<td>Total</td>
						  <td>${totaRandomTime/1000}</td>`;
			trow.insertBefore(tr, Default);
			resolve();
		})
	}).then(()=>{
		let allRows = Array.from(document.querySelectorAll("tr"));

		new Promise.all(allRows)
			.then((rows) => {
				trow.removeChild(Default);
			})
	})

