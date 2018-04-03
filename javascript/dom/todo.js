// when user clicks on addtask button we are supposed to create a task in 'to be completed' section
	// addBtn-> when clicked -> create Div element with children as checkbox , 
		// inputtext ,label to hold content , edit and delete buttons 
	// editbutton - > when clicked -> 
		// hide label and copy the label content to inputtext element . hide label element
		// we need to toggle the view of label element and inputtext 
	// deleteButton -> when clicked -> 
		// remove the whole task 
	// checkbox is checked 
		// when checkbox is checked we are supposed to move task to other section


var addTaskObject = document.getElementsByName('Addtask')[0];
var addBtn = document.getElementsByTagName('button')[0];
var editBtn = document.getElementsByClassName('edit');
var deleteBtn = document.getElementsByClassName('delete');
var checkBox = document.getElementsByName("checkbox");
var toBeCompleted = document.getElementsByClassName('tobecompleted')[0];
var done =  document.getElementsByClassName('done')[0];

function createElementsForTask(){
	var wraper = document.createElement('div');
	var checkBox = document.createElement('input');
	var inputText = document.createElement('input');
	var label = document.createElement('label');
	var editBtn  = document.createElement('button');
	var deleteBtn = document.createElement('button');

	checkBox.setAttribute('type','checkbox');
	inputText.setAttribute('type','text');
	inputText.setAttribute('name','edittask');
	label.innerText = addTaskObject.value;
	editBtn.innerText = 'Edit/ Save';
	editBtn.setAttribute('class','edit');
	deleteBtn.setAttribute('class','delete');
	deleteBtn.innerText = 'Delete';

	// event binding 
	editBtn.onclick = editTask;
	deleteBtn.onclick = deleteTask;
	checkBox.onchange = toggleTaskToDifferentSections

	var arrayOfElements = [checkBox,inputText,label,editBtn,deleteBtn];
	for(i= 0; i < arrayOfElements.length; i++){
		wraper.appendChild(arrayOfElements[i])	
	}
	
	toBeCompleted.appendChild(wraper);

}

function addTask(){
	console.log('addTask');
	createElementsForTask()
}
var checkFlag= true;
function editTask(){
	console.log('edit');
	
	var label = this.parentNode.querySelector('label')
	var inputText = this.parentNode.querySelector('input[type=text]');
	// debugger;
	console.log(label.style.display !== '' && label.style.display === 'none' );
	if(label.style.display !== '' && label.style.display === 'none'){
		label.style.display = 'inline';
		inputText.style.display = 'none';
		label.innerText = inputText.value ;	
		
	}else{
		console.log('else condition ' + inputText.value )

		inputText.value = label.innerText;
		
		label.style.display = 'none';
		inputText.style.display = 'inline';
		
		
	}

	

}
function deleteTask(){
	console.log('delete')
	
	var divEl = this.parentNode.parentNode;
	divEl.removeChild(this.parentNode);
}
function toggleTaskToDifferentSections(){
	console.log(this);
	var divEl = this.parentNode;
	var classAttribute = divEl.parentNode.getAttribute('class');
	if(classAttribute === "tobecompleted"){
		done.appendChild(divEl);
	}else{
		toBeCompleted.appendChild(divEl);
	}
}


addBtn.onclick = addTask;
 

for(i=0; i < editBtn.length; i++){
	editBtn[i].onclick = editTask;
	deleteBtn[i].onclick = deleteTask;
	checkBox[i].onchange = toggleTaskToDifferentSections;
}

