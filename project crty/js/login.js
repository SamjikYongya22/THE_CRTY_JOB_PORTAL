


let container = document.getElementById('container')
// const signIn =()=>{
// 	// Redirect to job-list.html upon signing in
// 	window.location.href = "job-list.html";
//   }

//   function signUp() {
// 	// Redirect to job-detail.html upon signing up
// 	window.location.href = "job-detail.html";
//   }
  function signIn() {
    // Check if the "Recruiter" checkbox is checked
    var isRecruiter = document.querySelector('input[name="check_recruit"]:checked');
    if (isRecruiter) {
        // If recruiter, redirect to recruiter-register.html
        window.location.href = "recruiter-register.html";
    } else {
        // If not recruiter, redirect to job-list.html
        window.location.href = "job-list.html";
    }
}

function signUp() {
    // Check if the "Recruiter" checkbox is checked
    var isRecruiter = document.querySelector('input[name="check_recruit"]:checked');
    if (isRecruiter) {
        // If recruiter, redirect to recruiter-register.html
        window.location.href = "recruiter-register.html";
    } else {
        // If not recruiter, redirect to job-detail.html
        window.location.href = "job-detail.html";
    }
}



const homepage =()=>{
	window.location.href="index.html";
}

toggle = () => {
	container.classList.toggle('sign-in')
	container.classList.toggle('sign-up')
}

setTimeout(() => {
	container.classList.add('sign-in')
}, 200)



function opendashboard(){
	var rec=document.getElementById('recruiter');
	var job=document.getElementById('jobseeker');
    
    if(job.checked && rec.checked){
		alert("choose any one option")}
	else if(job.checked){
		window.location.href="dashboard.html";
	}
	else if(rec.checked){
		window.location.href="recruiter.html";
	}else
	{
		alert("choose any one option"); 
	}
}
function backbutton(){
	window.location.href="job-list.html";
}