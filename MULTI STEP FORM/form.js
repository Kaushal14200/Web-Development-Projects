const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");
const btnComplete = document.querySelector(".btn-complete");
let inputs=document.querySelectorAll("input")
console.log(inputs)
// add experience and add social links
const experiencesGroup = document.querySelector(".experiences-group");
const addExperienceBtn = document.querySelector(".add-exp-btn");
let AddSociallink = document.querySelector(".add-sl-btn");
const aadlinks = document.querySelector(".add-solical-links")


btnComplete.addEventListener("click", () => {


    
   let submt=  document.querySelector('form').innerHTML=`
  <center>
  <h2> Thanyou for submiting</h2>
   <img src="./submit.gif"  class="submitchecked">
   <center>
   `;

   setTimeout(()=>{
    window.location.href='form.html';
   },3000)
//    let neewsub = submt.innerHTML="Thanyou for submiting form ☺"
//  submt.style.color="#ff9a76"
//  submt.style.fontSize="1.5rem"
    // document.querySelector('form').submit();
})
let formStepsNum = 0;
let experienceNum = 1;



function updateFormSteps() {

    formSteps.forEach(formStep => {
        formStep.classList.contains("active") && formStep.classList.remove("active");
    })
    formSteps[formStepsNum].classList.add("active");
}

function updateProgressBar() {
    progressSteps.forEach((progressStep, idx) => {
        if (idx < formStepsNum + 1) {
            progressStep.classList.add("active");
        } else {
            progressStep.classList.remove("active");
        }
    })

    const progressActive = document.querySelectorAll(".progress-step.active");
    progress.style.width = ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + '%';
}


nextBtns.forEach(btn => {
  
    btn.addEventListener("click", function () {
        formStepsNum++;
        updateFormSteps();
        updateProgressBar();
    
    })
})


prevBtns.forEach(btn => {
    btn.addEventListener("click", function () {
        formStepsNum--;
        updateFormSteps();
        updateProgressBar();
    })
})



// add the experience
addExperienceBtn.addEventListener("click", () => {
    experienceNum++;
    let text = `
    <h3> Experience</h3>
     
    <div class='experience-item'>
        <div class='input-group' >
        <label for='title'>Company Name</label>
        <input type='text' name='title[]' id='title'>
    </div>
    <div class='input-group' >
    <label for='title'>Possition</label>
    <input type='text' name='title[]' id='title'>
</div>
    <div class='input-group'>
        <label for='start-date'>Start date</label>
        <input type='date' name='start-date[]' id='start-date'>
    </div>
    <div class='input-group'>
        <label for='end-date'>End date</label>
        <input type='date' name='nd-date[]' id='end-date'>
    </div>
    <div class='input-group' >
    <label for='title'>Salary</label>
    <input type='text' name='title[]' id='title'>
</div>
    <div class='input-group'>
        <label for='job-description'>Description</label>
        <textarea name='job-description[]' id='job-description' cols='42' rows='6'></textarea>
    </div>
</div > `
    experiencesGroup.insertAdjacentHTML('beforeend', text);
})



let isSocialLinksAdded = false;
let aadoptional;

AddSociallink.addEventListener("click", () => {
    if (!isSocialLinksAdded) {
        aadoptional = () => {
            
            let socialtext = `
                <h3>Social Links</h3>
                <div class='solical-item'>
                <div class="input-group">
                    <label for="linkedin">LinkedIn</label>
                    <div class="input-box">
                        <span class="prefix">linkedin.com/in/</span>
                        <input id="linkedin" name="linkedin" type="text" placeholder="USER123" />
                    </div>
                </div>
                <div class="input-group">
                    <label for="twitter">Twitter</label>
                    <div class="input-box">
                        <span class="prefix">twitter.com/</span>
                        <input id="twitter" name="twitter" type="text" placeholder="USER123" />
                    </div>
                </div>
                <div class="input-group">
                    <label for="github">Github</label>
                    <div class="input-box">
                        <span class="prefix">github.com/</span>
                        <input id="github" name="facebook" type="text" placeholder="USER123" />
                    </div>
                </div>
                </div>`;

            aadlinks.insertAdjacentHTML('beforeend', socialtext);
            AddSociallink.textContent = " - Remove Social Links";
            isSocialLinksAdded = true;
        };

        aadoptional();
    } else {
        aadlinks.innerHTML =`
        <div class="add-solical-links">
            <div class="experience-item">
                <div class="input-group">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email">
                </div>
                <div class="input-group">
                    <label for="phone">Phone Number</label>
                    <input type="phone" name="phone" id="phone">
                </div>
               
        <div class="input-group">
            <label for="address">Address</label>
            <input type="text" name="address" id="address">
        </div>
            </div>
        </div>
       `;
        AddSociallink.textContent = " + Add Social Links";
        isSocialLinksAdded = false;
    }
});

// Optionally, you can add the following code to remove the event listener after the links are added
AddSociallink.addEventListener("click", () => {
    AddSociallink.removeEventListener("click", aadoptional);
});


function previewFile() {
    console.log("kdfjkkjs")
    const fileInput = document.getElementById('fileInput');
    const previewImage = document.getElementById('previewImage');
    previewImage.classList .add("Uplode-img");
   previewImage.src=URL.createObjectURL(fileInput.files[0]) 
   
}

