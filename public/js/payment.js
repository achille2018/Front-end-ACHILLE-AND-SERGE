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

const AddPaymentFunction = async () => {
  console.log('I am adding payment')
  const url = baseUrl + '/payment'
  const payment = Number(document.getElementById('AddPayment').value)
  const paymentClientId = Number(document.getElementById('AddClientPaymentId').value)
  const paymentDate = document.getElementById('AddPaymentDate').value

  const data = {
    payment,
    paymentClientId,
    paymentDate
  }
  PostRequest(url, data).then(res => res.json).then(data => {
    console.log(data)
  }).catch(err => {
    console.log(err)
  })
}

document.getElementById('AddPaymentButton').addEventListener('click', AddPaymentFunction)

window.addEventListener('load', function () {
  const url = baseUrl + '/payment/4'
  GetRequest(url).then(res => res.json()).then(data => {
    if (data.data) {
      data.data.map((item, idx) => {
        const tableRow = document.createElement('tr')
        const tableDataPayment = document.createElement('th')
        tableDataPayment.innerHTML = item.payment
        tableRow.appendChild(tableDataPayment)

        const tablePaymentClientId = document.createElement('td')
        tablePaymentClientId.innerHTML = item.paymentClientId
        tableRow.appendChild(tablePaymentClientId)

        const tablePaymentDate = document.createElement('td')
        tablePaymentDate.innerHTML = item.paymentDate
        tableRow.appendChild(tablePaymentDate)

        const TableBody = document.getElementById('paymentBody')
        TableBody.appendChild(tableRow)
      })
    }
  })
})
