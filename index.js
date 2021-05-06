// function myFunction () {
//   alert('Successfully')
// },
const token = "token";
baseUrl = 'https://waterco-apiii.herokuapp.com'

const PostRequest = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      authorization: 'Bearer ' + localStorage.getItem(token)
    },
    body: JSON.stringify(data)
  })

  return response
}

const GetRequest = async (url) => {
  const response = await fetch(url, {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      authorization: 'Bearer ' + localStorage.getItem(token)
    }
  })

  return response
}

const PutRequest = async (url, data) => {
  const response = await fetch(url, {
    method: 'PUT',
    mode: 'no-cors',
    headers: {
      authorization: 'Bearer ' + localStorage.getItem(token)
    },
    body: JSON.stringify(data)
  })
  return response
}

const submitAddClient = async (e) => {
  const url = baseUrl + "/client"
  let firstName = document.getElementById("AddClientFirstName").value;
  let lastName = document.getElementById("AddClientLastName").value;
  let email = document.getElementById("AddClientEmailAddress").value;
  let clientPassword = document.getElementById("AddClientPassword").value;
  let clientAddress = document.getElementById("AddClientAddress").value;
  let balance = document.getElementById("AddClientBalance").value;
  let paymentPlan = document.getElementById("AddClientPaymentPlan").value;
  let clientSectorId = document.getElementById("AddClientSectorId").value;
  let clientZoneId = document.getElementById("AddClientZoneId").value;

  const data = {
    firstName, lastName, email, clientAddress, clientPassword, balance, paymentPlan, clientSectorId,
    clientZoneId
  }
  console.log(data);
  PostRequest(url, data)
}

const Login = async (e) => {
  const url = baseUrl + "/users/signing";
  const emailAddress = document.getElementById("loginEmail").value;
  const userPassword = document.getElementById("loginPassword").value;
  const data = { emailAddress, userPassword }
  PostRequest(url, data).then( res => {
    if (res.data.success){
      localStorage.setItem("token", res.data.token)
    }
  })
}

async function postData (url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  })
  return response.json() // parses JSON response into native JavaScript objects
}

// postData('https://example.com/answer', { answer: 42 })
//   .then(data => {
//     console.log(data) // JSON data parsed by `data.json()` call
//   })



// document.getElementById("addClientS").addEventListener("click", submitAddClient)
document.getElementById("loginButton").addEventListener("click", Login)
