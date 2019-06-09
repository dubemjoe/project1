
//get the input elements and the buttons element in the form
let topicNameInput = document.getElementById('topic-name');
let topicSummaryInput = document.querySelector('#topic-summary');
let topicSubmitBtn = document.querySelector('#submit-topic');
let clearTopicsBtn = document.querySelector('#clear');

//listen for when the buttons are clicked
topicSubmitBtn.addEventListener('click', getFormStuff);
clearTopicsBtn.addEventListener('click', clearValues);

function clearValues(){
	localStorage.removeItem('lessonone:formvalues'); //when the clear button is clicked, the items should be removed
	//the lessonone namespace is not necessary... it's just to prevent overwriting when in another code we write formvalues again
}

function getFormStuff(e){
	e.preventDefault();
	//get the values that the user types
	let topicName = topicNameInput.value;
	let topicSummary = topicSummaryInput.value;

	let formValuesObject = {topic: topicName, summary: topicSummary}
	let savedValues  = localStorage.getItem('lessonone:formvalues'); //"{key: value}"
	let parsedSavedValues = savedValues? JSON.parse(savedValues): [];

	//save the form object to the laptop browser
	//let allFormValues = [...parsedSavedValues, formValuesObject]
	let allFormValues = parsedSavedValues.concat(formValuesObject);
	localStorage.setItem('lessonone:formvalues', JSON.stringify(allFormValues))
	
	displaySavedFormValues(allFormValues);

}
//after getting the list, the following part will display
// the list on the page

function displaySavedFormValues(data){
	let toReturn = data.map((item) => {
		return "<li><h2>" +	 item.topic + "</h2><p>" + item.summary + "</p></li> "	
	})

	let page2UlElement = document.querySelector('#page-2-ul');
	page2UlElement.innerHTML = toReturn

}

// $("#main").append([Dubem]);