const listaUsuarios = document.getElementById('listaUsuarios');

/*
Nombre 
Edad
Username
Teléfono
Email
-------------------
Compañía
Dirección
*/

function getUsers () {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error(console.log(response.status))
    }
    return response.json()
  })
  .then(data => {
    const users = data.map( user => {
      const {id, address} = user 
      return {...user,
        age: randomAge(18, 65),
        img: `../assets/img/${id}.jpeg`,
        address: `${address.street}, ${address.suite}, ${address.city}`,
      }
    }).map(user => {
      const {name, age, username, img, phone, email, company: {name: companyName}, address} = user
      const template = `
        <li>
          <div class="user-content">
            <div class="user-info" >
              <h2><strong>Nombre:</strong>${name}</h2>
              <p><strong>Edad:</strong>${age}</p>
              <p><strong>Username:</strong>${username}</p>
              <p><strong>Teléfono:</strong>${phone}}</p>
              <p><strong>Email:</strong>${email}</p>
            </div>
            <div class="user-image">
              <img src="${img}" alt="${name}">            
            </div>
          </div>
          <div class="user-company">
            <p><strong>Compañía:</strong>${companyName}</p>
            <p><strong>Dirección:</strong>${address}</p>
          </div>
        </li>
      `
      return template
    }).join("")
    listaUsuarios.innerHTML = users
  })
}

getUsers()

function randomAge (min, max) {
  return Math.floor(Math.random() * (max - min +1)) + min
}