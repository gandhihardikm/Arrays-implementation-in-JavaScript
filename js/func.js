/**
 * 
 */

function addCourse()
{
	totalNoOfCourse = getNoOfCourse();
		
	var courseCode=[];
	var courseName=[];
	var courseTiming=[];
	
	for(var i=0;i<totalNoOfCourse;i++)
	{
		courseCode[i]=prompt("Enter Course code");
		courseName[i]=prompt("Enter Course name");
		courseTiming[i]=prompt("Enter Couse Timing");
	}
	//alert(courseCode[0]+courseName[0],courseTiming[0]);
	var table = document.getElementById("Table");
	for(var i=0;i<totalNoOfCourse;i++)
	{
		var row = table.insertRow(1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		cell1.innerHTML = courseCode[i];
		cell2.innerHTML = courseName[i];
		cell3.innerHTML = courseTiming[i];
	}
}

function getNoOfCourse()
{
	return parseInt(prompt("Enter no of Couses you want to add : "));
}