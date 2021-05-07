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

const AddRoute = async () => {
  console.log('I am here')
  const url = baseUrl + '/routes'
  const routeName = document.getElementById('AddRouteName').value
  const routeZoneId = Number(document.getElementById('AddRouteZoneId').value)
  const routeStatus = document.getElementById('AddRouteStatus').value

  const data = {
    routeName,
    routeZoneId,
    routeStatus
  }
  PostRequest(url, data).then(res => res.json).then(data => {
    console.log(data)
  }).catch(err => {
    console.log(err)
  })
}

document.getElementById('AddRoutes').addEventListener('click', AddRoute)

const UpdateRoute = async () => {
  console.log('I am updating')
  const url = baseUrl + '/routes/4'
  const routeName = document.getElementById('UpdateRouteName').value
  const routeZoneId = Number(document.getElementById('UpdateRouteZoneId').value)
  const routeStatus = document.getElementById('UpdateRouteStatus').value

  const data = {
    routeName,
    routeZoneId,
    routeStatus
  }
  PutRequest(url, data).then(res => res.json).then(data => {
    console.log(data)
  }).catch(err => {
    console.log(err)
  })
}

document.getElementById('UpdateRoutes').addEventListener('click', UpdateRoute)

window.addEventListener('load', function () {
  const url = baseUrl + '/routes/4';
  GetRequest(url).then(res => res.json()).then(data => {
    if (data.data) {
      data.data.map((item, idx) => {
        let tableRow = document.createElement('tr')
        let tableDataRouteName = document.createElement('th')
        tableDataRouteName.innerHTML = item.routeName
        tableRow.appendChild(tableDataRouteName)

        let tableDataRouteZoneId = document.createElement('td')
        tableDataRouteZoneId.innerHTML = item.routeZoneId
        tableRow.appendChild(tableDataRouteZoneId)

        let tableRouteStatus = document.createElement('td')
        tableRouteStatus.innerHTML = item.routeStatus
        tableRow.appendChild(tableRouteStatus)

        let TableBody = document.getElementById("RouteBody")
        TableBody.appendChild(tableRow)
      })
    }
  })
})
