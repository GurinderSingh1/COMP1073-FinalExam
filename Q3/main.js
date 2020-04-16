// Javascript document 
// creating a loadAsset function that will help us loading the data from the json file to the browser.
function loadAsset(url, type, callback) 
{
	//Using the fretch Api to geyt the data fro  the json file uploaded ont he web server.
	//fetching the url and then setting the reponse function to response.json and then creating a PEoducts function that will reteive the data from the json file.
	fetch(url)
	.then(function (response)
	{
		  response.json()
		.then(function(cats)
		  {
			callback(cats);
		});
	 });
}



		   /* Parse the JSON in Products() */   
//define a function Products , passing jsonObj as a parameter or placeholder 
	function cats(jsonObj){
		// store the JSON object in a variable, JavaScript provides us with a built in JSON object to work with, complete with methods and properties 
        let cats = jsonObj.cats;

        let section = document.querySelector('section');
let submitButton = document.querySelector('input[type="submit"]');
submitButton.addEventListener('click', function(e) { 
		
		for (let i = 0; i < cats.length; i++) {
			//build HTML elements for the content
			let article = document.createElement('article');
			let h2 = document.createElement('h2');
			let img = document.createElement('img');
			let p1 = document.createElement('p');
			let p2 = document.createElement('p');
	//store a reference to the section element in var section 
	let section = document.querySelector('section');
	//set the image src attribute 
			img.setAttribute('src', 'https://jessicagilfillan.github.io/Final_Exam_Prep/Q3/assets' + cats[i].photo);
	//set the image alt attribute 
			img.setAttribute('alt', cats[i].Name);
	//set the text content of the h2 to name
			h2.textContent = cats[i].Name;
	//set the text contenxt of the first paragraph 
			p1.textContent = 'Animal Species: ' +
			cats[i].species +'<br> Age: '+cats.age;
			p2.textContent = cats[i].name +'favourite food is: ' + cats[i].favFoods;
			// append each of the above HTML elements to the ARTICLE element, then append the article element to the section
			
			}
			article.appendChild(img);
			article.appendChild(h2);
			article.appendChild(p1);
			article.appendChild(p2);
			section.appendChild(article);
    });
}
// calling the load asset function to load data of the json file from the server.
		loadAsset('https://jessicagilfillan.github.io/Final_Exam_Prep/Q3/cats.json', 'json', cats);
