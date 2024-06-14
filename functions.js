function showFields1() {
  var Other_country = document.getElementById("Other_country");
  if (document.getElementById("Others").checked) {
    Other_country.classList.remove("hidden");
  } else {
    Other_country.classList.add("hidden")
  }
  }
  function hideFields1() {
  var Other_country = document.getElementById("Other_country");
  if (document.getElementById("India").checked) {
    Other_country.classList.add("hidden");
  }
}
function showFields2() {
  var disability = document.getElementById("disability");
  if (document.getElementById("yes").checked) {
    disability.classList.remove("hidden");
  } else {
    disability.classList.add("hidden");
  }
}
function hideFields2() {
  var disability = document.getElementById("disability");
  if (document.getElementById("no").checked) {
    disability.classList.add("hidden");
  }
}
function showFields3() {
  var Ill = document.getElementById("Ill");
  if (document.getElementById("Yes1").checked) {
    Ill.classList.remove("hidden");
  } else {
    Ill.classList.add("hidden");
  }
}
function hideFields3() {
  var Ill = document.getElementById("Ill");
  if (document.getElementById("No1").checked) {
    Ill.classList.add("hidden");
  }
}
function showFields4() {
  var Same_as = document.getElementById("Same_as");
  if (document.getElementById("Correpondence").checked) {
    Same_as.classList.remove("hidden");
  } else {
    Same_as.classList.add("hidden");
  }
}
function showFields_4() {
  var Same_as = document.getElementById("Same_as");
  if (document.getElementById("Local").checked) {
    Same_as.classList.remove("hidden");
  } else {
    Same_as.classList.add("hidden");
  }
}
function hideFields4() {
  var Same_as = document.getElementById("Same_as");
  if (document.getElementById("Same").checked) {
    Same_as.classList.add("hidden");
  }
}
function validatePAN() {
  var panFormat = /[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  var panInput = document.getElementById("panInput");
  var panMessage = document.getElementById("panMessage");

  if (panFormat.test(panInput.value)) {
    panMessage.textContent = "PAN number is valid";
    panMessage.style.color = "green";
  } else {
    panMessage.textContent = "Invalid PAN number";
    panMessage.style.color = "red";
  }
} 
function generateRandomNumber(length) {
  let result = '';
  const characters = '0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function generateIDs() {
  const accountNo = generateRandomNumber(11);
  const customerId = generateRandomNumber(9);
  document.getElementById('accountNo').value = accountNo;
  document.getElementById('customerId').value = customerId;
}

window.onload = generateIDs;
function previewImage() {
  var preview = document.getElementById('preview');
  var fileInput = document.getElementById('fileToUpload');
  var file = fileInput.files[0];
  var reader = new FileReader();

  reader.onload = function(e) {
    preview.src = e.target.result;
    preview.style.display = 'block';
  }

  reader.readAsDataURL(file);
}

function clearFile() {
  var fileInput = document.getElementById('fileToUpload');
  fileInput.value = ''; // Clear the file input
  document.getElementById('preview').style.display = 'none'; // Hide the preview
}
function previewImage1() {
  var preview = document.getElementById('preview');
  var fileInput = document.getElementById('fileToUpload');
  var file = fileInput.files[0];
  var reader = new FileReader();

  reader.onload = function(e) {
    preview.src = e.target.result;
    preview.style.display = 'block';
  }

  reader.readAsDataURL(file);
}

function clearFile1() {
  var fileInput = document.getElementById('fileToUpload');
  fileInput.value = ''; // Clear the file input
  document.getElementById('preview').style.display = 'none'; // Hide the preview
}
document.addEventListener('DOMContentLoaded', function() {
  var currentDate = new Date();
  var day = String(currentDate.getDate()).padStart(2, '0');
  var month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
  var year = currentDate.getFullYear();

  var formattedDate = day + '-' + month + '-' + year;
  
  document.getElementById('currentDate').value = formattedDate;
});
function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};
function submitForm() {
  var accountNo = document.getElementById("accountNo").value;
  var customerId = document.getElementById("customerId").value;
  var name = document.getElementById("name").value;

  
  // Redirect to Success.html with parameters
  window.location = "Success.html?accountNo=" + encodeURIComponent(accountNo) + "&customerId=" + encodeURIComponent(customerId) + "&name=" + encodeURIComponent(name);
}
// Get the parameters from the URL
var accountNo = getUrlParameter('accountNo');
var customerId = getUrlParameter('customerId');
var name = getUrlParameter('name');


// Set the values to the HTML elements
document.getElementById("accountNo").innerText = accountNo;
document.getElementById("customerId").innerText = customerId;
document.getElementById("name").innerText = name;