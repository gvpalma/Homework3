
function goToThankYouPage() {
  window.location.href = "homework3-thankyou.html";}

const currentDate = new Date();
document.getElementById("today").innerHTML = currentDate.toLocaleDateString();

function validateDob() {
  const dobElement = document.getElementById("dob");
  const dobValue = new Date(dobElement.value);
  const current = new Date();
  const minValidDate = new Date();
  minValidDate.setFullYear(current.getFullYear() - 120);

  if (dobValue > current) {
    document.getElementById("dob-error").innerHTML = "Date can't be in the future";
    dobElement.value = "";
    return false;} 
    else if (dobValue < minValidDate) {
    document.getElementById("dob-error").innerHTML = "Date can't be more than 120 years ago";
    dobElement.value = "";
    return false;} 
    else {document.getElementById("dob-error").innerHTML = "";
    return true;}
}

function validateSsn() {
  const ssn = document.getElementById("ssn").value;
  const ssnPattern = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;
  if (!ssnPattern.test(ssn)) {
    document.getElementById("ssn-error").innerHTML = "Please enter a valid SSN";
    return false;} 
    else {document.getElementById("ssn-error").innerHTML = "";
    return true;}
}

function validateZip() {
  const zipInput = document.getElementById("zip");
  let zip = zipInput.value.replace(/[^\d-]/g, "");
  if (!zip) {
    document.getElementById("zip-error").innerHTML = "Zip code can't be blank";
    return false;
  }
  if (zip.length > 5) {
    zip = zip.slice(0, 5) + "-" + zip.slice(5, 9);
  } else {
    zip = zip.slice(0, 5);
  }
  zipInput.value = zip;
  document.getElementById("zip-error").innerHTML = "";
  return true;
}

function validateEmail() {
  const emailInput = document.getElementById("email").value;
  const emailPattern = /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/;
  const emailError = document.getElementById("email-error");

  if (emailInput.trim() === "") {
    emailError.textContent = "Email cannot be blank.";
    emailError.style.color = "red";
    return false;} 
    else if (!emailPattern.test(emailInput)) {
    emailError.textContent = "Please enter a valid email address.";
    emailError.style.color = "red";
    return false;} 
    else {emailError.textContent = "";
    return true;}
}

function formatPhoneNumber() {
  const phoneInput = document.getElementById("pnumber");
  const phoneError = document.getElementById("pnumber-error");
  const cleaned = phoneInput.value.replace(/\D/g, "");

  if (cleaned.length === 0) {
    phoneError.textContent = "Phone number cannot be blank.";
    phoneError.style.color = "red";
    phoneInput.value = "";
    return false;} 
    else if (cleaned.length < 10) {
    phoneError.textContent = "Enter a valid phone number.";
    phoneError.style.color = "red";
    return false;} 
    else {phoneError.textContent = "";}
  
  const formatted = cleaned.replace(/^(\d{3})(\d{3})(\d{4}).*/, "$1-$2-$3");
  phoneInput.value = formatted;
  return true;
}
function reviewInput() {
    const firstname = document.getElementById("firstname").value;
    const middleinit = document.getElementById("middleinit").value;
    const lastname = document.getElementById("lastname").value;
    const dob = document.getElementById("dob").value;
    const ssn = document.getElementById("ssn").value;
    const addr1 = document.getElementById("addr1").value;
    const addr2 = document.getElementById("addr2").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("states").value;
    const zip = document.getElementById("zip").value;
    const phone = document.getElementById("pnumber").value;
    const email = document.getElementById("email").value;
    const userid = document.getElementById("userid").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const insurance = document.querySelector('input[name="insurance"]:checked');
    const ekg = document.querySelector('input[name="ekg"]:checked');
    const pain = document.getElementById("Range").value;
    const symptoms = document.querySelector('textarea[name="message"]').value;
    //checkbox values
    const conditions = [];
    if (document.getElementById("anemia").checked) conditions.push("Anemia");
    if (document.getElementById("asthma").checked) conditions.push("Asthma");
    if (document.getElementById("diabetes").checked) conditions.push("Diabetes");
    if (document.getElementById("epilepsy").checked) conditions.push("Epilepsy");
    if (document.getElementById("highbloodpressure").checked) conditions.push("High Blood Pressure");
    // Display the data in an alert
    let message = `*** Please Review Your Information ***\n\n`;
    message += `First Name: ${firstname}\n`;
    message += `Middle Initial: ${middleinit}\n`;
    message += `Last Name: ${lastname}\n`;
    message += `Date of Birth: ${dob}\n`;
    message += `SSN: ${ssn}\n`;
    message += `Address Line 1: ${addr1}\n`;
    message += `Address Line 2: ${addr2}\n`;
    message += `City: ${city}\n`;
    message += `State: ${state}\n`;
    message += `Zip Code: ${zip}\n`;
    message += `Phone Number: ${phone}\n`;
    message += `Email: ${email}\n`;
    message += `Username: ${userid}\n`;
    message += `Gender: ${gender ? gender.value : 'Not selected'}\n`;
    message += `Has Insurance: ${insurance ? insurance.value : 'Not selected'}\n`;
    message += `Had EKG: ${ekg ? ekg.value : 'Not selected'}\n`;
    message += `Pain Level: ${pain}/10\n`;
    message += `Symptoms: ${symptoms}\n`;
    message += `Known Conditions: ${conditions.length > 0 ? conditions.join(", ") : "None"}\n`;
    //message in pop-up alert
    alert(message);}
