const token = 'token'
const baseUrl = 'https://waterco-apiii.herokuapp.com'
// const baseUrl = 'http://localhost:3001'

const PostRequest = async (url, data) => {
  const response = fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'default',
    headers: {
      accept: 'application/json',
      'content-Type': 'application/json',
      authorization: 'Bearer ' + localStorage.getItem(token)
    },
    body: JSON.stringify(data)
  })

  return response
}

const GetRequest = async (url) => {
  const response = fetch(url, {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
    headers: {
      accept: 'application/json',
      'content-Type': 'application/json',
      authorization: 'Bearer ' + localStorage.getItem(token)
    },
  })

  return response
}

const PutRequest = async (url, data) => {
  const response = fetch(url, {
    method: 'PUT',
    mode: 'cors',
    cache: 'default',
    headers: {
      accept: 'application/json',
      'content-Type': 'application/json',
      authorization: 'Bearer ' + localStorage.getItem(token)
    },
    data: JSON.stringify(data)
  })

  return response
}

const DeleteRequest = async (url) => {
  const response = fetch(url, {
    method: 'DELETE',
    mode: 'cors',
    cache: 'default',
    headers: {
      accept: 'application/json',
      'content-Type': 'application/json',
      authorization: 'Bearer ' + localStorage.getItem(token)
    },
  })

  return response
}


const submitAddClient = async (e) => {
  const url = baseUrl + '/client'
  const firstName = document.getElementById('AddClientFirstName').value
  const lastName = document.getElementById('AddClientLastName').value
  const email = document.getElementById('AddClientEmailAddress').value
  const clientPassword = document.getElementById('AddClientPassword').value
  const clientAddress = document.getElementById('AddClientAddress').value
  const balance = document.getElementById('AddClientBalance').value
  const paymentPlan = document.getElementById('AddClientPaymentPlan').value
  const clientSectorId = document.getElementById('AddClientSectorId').value
  const clientZoneId = document.getElementById('AddClientZoneId').value

  const data = {
    firstName,
    lastName,
    email,
    clientAddress,
    clientPassword,
    balance,
    paymentPlan,
    clientSectorId,
    clientZoneId
  }
  PostRequest(url, data)
}

const Login = async (e) => {
  const url = baseUrl + '/users/signing'
  const emailAddress = document.getElementById('loginEmail').value
  const userPassword = document.getElementById('loginPassword').value
  const data = { emailAddress, userPassword }
  PostRequest(url, data).then(res => res.json()).then( res => {
    if (res.user) {
      localStorage.setItem('token', res.token)
      let location = window.location.href
      location = location.split("/")
      location.pop()
      location = location.join("/")
      window.location = location + '/admin.html'
    }
  })
}


// document.getElementById('loginButton').addEventListener('click', Login)
