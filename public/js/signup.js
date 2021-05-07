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

const SingUp = async (e) => {
  const url = baseUrl + '/users'
  const firstName = document.getElementById('SingUpFirstName').value
  const lastName = document.getElementById('SingUpLastName').value
  const emailAddress = document.getElementById('emailSingUp').value
  const userPassword = document.getElementById('passwordSingUp').value
  const userCity = document.getElementById('city').value
  const userCountry = document.getElementById('country').value
  const data = { firstName, lastName, emailAddress, userPassword, userCity, userCountry }

  PostRequest(url, data).then(res => res.json()).then(res => {
    if (res.data) {
      localStorage.setItem('token', res.token)
      let location = window.location.href
      location = location.split('/')
      location.pop()
      location = location.join('/')
      window.location = location + '/index.html'
    }
  })
}

document.getElementById('SingUpButton').addEventListener('click', SingUp)
