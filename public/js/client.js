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
    }
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
    }
  })

  return response
}

const submitAddClient = async () => {
  console.log('I am here')
  const url = baseUrl + '/client'
  const firstName = document.getElementById('AddClientFirstName').value
  const lastName = document.getElementById('AddClientLastName').value
  const email = document.getElementById('AddClientEmailAddress').value
  const clientPassword = document.getElementById('AddClientPassword').value
  const clientAddress = document.getElementById('AddClientAddress').value
  const balance = Number(document.getElementById('AddClientBalance').value)
  const paymentPlan = document.getElementById('AddClientPaymentPlan').value
  const clientSectorId = Number(document.getElementById('AddClientSectorId').value)
  const clientzoneId = Number(document.getElementById('AddClientZoneId').value)

  const data = {
    firstName,
    lastName,
    email,
    clientAddress,
    clientPassword,
    balance,
    paymentPlan,
    clientSectorId,
    clientzoneId
  }
  PostRequest(url, data).then(res => res.json).then(data => {
    console.log(data)
  }).catch(err => {
    console.log(err)
  })
}

document.getElementById('addClientButton').addEventListener('click', submitAddClient)

const submitUpdateClient = async () => {
  console.log('I am here')
  const url = baseUrl + '/client/24'
  const firstName = document.getElementById('UpdateClientFirstName').value
  const lastName = document.getElementById('UpdateClientLastName').value
  const email = document.getElementById('UpdateClientEmailAddress').value
  const clientPassword = document.getElementById('UpdateClientPassword').value
  const clientAddress = document.getElementById('UpdateClientAddress').value
  const balance = Number(document.getElementById('UpdateClientBalance').value)
  const paymentPlan = document.getElementById('UpdateClientPaymentPlan').value
  const clientSectorId = Number(document.getElementById('UpdateClientSectorId').value)
  const clientzoneId = Number(document.getElementById('UpdateClientZoneId').value)

  const data = {
    firstName,
    lastName,
    email,
    clientAddress,
    clientPassword,
    balance,
    paymentPlan,
    clientSectorId,
    clientzoneId
  }

  PutRequest(url, data).then(res => res.json).then(data => {
    console.log(data)
  }).catch(err => {
    console.log(err)
  })
}

document.getElementById('updateClientButton').addEventListener('click', submitUpdateClient)

const submitDeleteClient = async () => {
  const id = Number(document.getElementById('deleteClientFirstName').value)
  const url = baseUrl + '/client/' + id

  DeleteRequest(url).then(res => res.json).then(data => {
    console.log(data)
  }).catch(err => {
    console.log(err)
  })
}

document.getElementById('deleteClientButton').addEventListener('click', submitDeleteClient)

window.addEventListener('load', function () {
  // get request
  // garde cela quelque part
  // loop => create itemes
  // append to table
  const url = baseUrl + '/client';
  GetRequest(url).then(res => res.json()).then(data => {
    if (data.data) {
      data.data.map((item, idx) => {
        let tableRow = document.createElement('tr')
        let tableDataId = document.createElement('th')
        tableDataId.innerHTML = item.clientId
        tableRow.appendChild(tableDataId)

        let tableFirstName = document.createElement('td')
        tableFirstName.innerHTML = item.firstName
        tableRow.appendChild(tableFirstName)

        let tableLastName = document.createElement('td')
        tableLastName.innerHTML = item.lastName
        tableRow.appendChild(tableLastName)

        let tableEmail = document.createElement('td')
        tableEmail.innerHTML = item.email
        tableRow.appendChild(tableEmail)

        
        let tablePassword = document.createElement('td')
        tablePassword.innerHTML = item.clientPassword
        tableRow.appendChild(tablePassword)

        let tableAddress = document.createElement('td')
        tableAddress.innerHTML = item.clientAddress
        tableRow.appendChild(tableAddress)

        let tableBalance = document.createElement('td')
        tableBalance.innerHTML = item.balance
        tableRow.appendChild(tableBalance)

        let tablePaymentPlan = document.createElement('td')
        tablePaymentPlan.innerHTML = item.paymentPlan
        tableRow.appendChild(tablePaymentPlan)
        
        let tableSectorId = document.createElement('td')
        tableSectorId.innerHTML = item.clientSectorId
        tableRow.appendChild(tableSectorId)

        let tableZoneId = document.createElement('td')
        tableZoneId.innerHTML = item.clientzoneId
        tableRow.appendChild(tableZoneId)

        let TableBody = document.getElementById("clentBody")
        TableBody.appendChild(tableRow)
      })
    }
  })
})
