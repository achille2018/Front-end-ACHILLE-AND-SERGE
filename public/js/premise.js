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

const AddPremise = async () => {
  console.log('I am adding')
  const url = baseUrl + '/premise?authorization=b {{token}}'
  const premiseClientId = Number(document.getElementById('AddPremiseClientId').value)
  const premiseZoneId = Number(document.getElementById('AddPremiseZoneId').value)
  const premiseSectorId = Number(document.getElementById('AddPremiseSectorId').value)
  const classfication = document.getElementById('AddClassfication').value
  const premiseStatus = document.getElementById('AddPremiseStatus').value

  const data = {
    premiseClientId,
    premiseZoneId,
    premiseSectorId,
    classfication,
    premiseStatus
  }
  PostRequest(url, data).then(res => res.json).then(data => {
    console.log(data)
  }).catch(err => {
    console.log(err)
  })
}

document.getElementById('AddPremiseButton').addEventListener('click', AddPremise)

const UpdatePremise = async () => {
  console.log('I am adding')
  const url = baseUrl + '/premise?authorization=b {{token}}'
  const premiseClientId = Number(document.getElementById('UpdatePremiseClientId').value)
  const premiseZoneId = Number(document.getElementById('UpdatePremiseZoneId').value)
  const premiseSectorId = Number(document.getElementById('UpdatePremiseSectorId').value)
  const classfication = document.getElementById('UpdateClassfication').value
  const premiseStatus = document.getElementById('UpdatePremiseStatus').value

  const data = {
    premiseClientId,
    premiseZoneId,
    premiseSectorId,
    classfication,
    premiseStatus
  }
  PutRequest(url, data).then(res => res.json).then(data => {
    console.log(data)
  }).catch(err => {
    console.log(err)
  })
}

document.getElementById('UpdatePremiseButton').addEventListener('click', UpdatePremise)

window.addEventListener('load', function () {
  const url = baseUrl + '/premise'
  GetRequest(url).then(res => res.json()).then(data => {
    console.log(data.data)
    if (data.data) {
      data.data.map((item, idx) => {
        const tableRow = document.createElement('tr')
        const tableDataPremiseClientId = document.createElement('th')
        tableDataPremiseClientId.innerHTML = item.premiseClientId
        tableRow.appendChild(tableDataPremiseClientId)

        const tablePremiseZoneId = document.createElement('td')
        tablePremiseZoneId.innerHTML = item.premiseZoneId
        tableRow.appendChild(tablePremiseZoneId)

        const tablePremiseSectorId = document.createElement('td')
        tablePremiseSectorId.innerHTML = item.premiseSectorId
        tableRow.appendChild(tablePremiseSectorId)

        const tableClassfication = document.createElement('td')
        tableClassfication.innerHTML = item.classficationd
        tableRow.appendChild(tableClassfication)

        const tablePremiseStatus = document.createElement('td')
        tablePremiseStatus.innerHTML = item.premiseStatus
        tableRow.appendChild(tablePremiseStatus)

        const TableBody = document.getElementById('PremiseBody')
        TableBody.appendChild(tableRow)
      })
    }
  })
})
