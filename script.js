//your JS code here. If required.
let btn = document.querySelector("#btn");
let data = document.querySelector("#ip");
let output = document.querySelector("#output");

btn.addEventListener("click",()=>{
	// alert("click")
	new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(`${data.value}`);
		},2000)
	}).then((number)=>{

		// alert(number)
		output.innerText=`Result: ${number}`;
	return	new Promise((resolve)=>{
			setTimeout(()=>{
				 resolve(`${Number(number*2)}`)
			},2000)
		})
		
	}).then((result)=>{
		// alert("result");
		// alert(result)
		output.innerText=`Result: ${result}`;
		return new Promise((resolve)=>{
		   setTimeout(()=>{
			   resolve(Number(result-3))
		   },1000)	
		})
	}).then((result3)=>{
		output.innerText=`Result: ${result3}`;
		return new Promise((resolve)=>{
			setTimeout(()=>{
				resolve(Number(result3/2));
			},1000)
		})
	}).then((result4)=>{
		output.innerText=`Result: ${result4}`;
		return new Promise((resolve)=>{
			setTimeout(()=>{
				resolve(Number(result4+10))
			},1000)
		})
	}).then((result5)=>{
		output.innerText=`Final Result: ${result5}`;
	})
})