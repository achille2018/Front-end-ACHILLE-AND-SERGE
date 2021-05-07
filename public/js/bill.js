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

const submitAddBill = async () => {
  console.log('I am here')
  const url = baseUrl + '/bill'
  const balance = Number(document.getElementById('balancebill').value)
  const billClientId = Number(document.getElementById('billClientId').value)
  const billStaffId = Number(document.getElementById('billStaffId').value)

  const data = {
    balance,
    billClientId,
    billStaffId
  }
  PostRequest(url, data).then(res => res.json).then(data => {
    console.log(data)
  }).catch(err => {
    console.log(err)
  })
}

document.getElementById('AddBillButton').addEventListener('click', submitAddBill)


window.addEventListener('load', function () {
  const url = baseUrl + '/bill';
  GetRequest(url).then(res => res.json()).then(data => {
    if (data.data) {
      data.data.map((item, idx) => {
        let tableRow = document.createElement('tr')
        let tableDataBalance = document.createElement('th')
        tableDataBalance.innerHTML = item.balance
        tableRow.appendChild(tableDataBalance)

        let tablebillClientId = document.createElement('td')
        tablebillClientId.innerHTML = item.billClientId
        tableRow.appendChild(tablebillClientId)

        let tablebillStaffId = document.createElement('td')
        tablebillStaffId.innerHTML = item.billStaffId
        tableRow.appendChild(tablebillStaffId)

        let TableBody = document.getElementById("billBody")
        TableBody.appendChild(tableRow)
      })
    }
  })
})
