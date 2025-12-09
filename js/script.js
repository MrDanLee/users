console.log('hello world')
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

const listaUsuarios = document.getElementById('listaUsuarios');

function renderUsers () {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to load resource')
      }
      return response.json()
    })
    .then(data => {
      const usersInfo = data;
      const displayUsers = usersInfo.map(user => {
        console.log(user)
        const {name, username, phone, email, company, address} = user
        // console.log(name, username, phone, email, company, address)
        const template = `
          <li>
              <div class="card">
                  <p><strong>Nombre:</strong> ${name}</p>
                  <p><strong>Username:</strong> ${username}</p>
                  <p><strong>Teléfono:</strong> ${phone}</p>
                  <p><strong>Email:</strong> ${email}</p>
              </div>
              <div>
                <p><strong>Compañía:</strong> ${company.name}</p>
                <p><strong>Dirección:</strong> ${address.street}, ${address.suite}, ${address.city}</p>
              </div>
          </li>
        `;
        return template;
      }).join("")  
      listaUsuarios.innerHTML = displayUsers;
    })
    .catch(error => console.log(error))
  }
  
  renderUsers()
  
  // for (i = 0; i < usersInfo.length; i++ ) {
    //   console.log(usersInfo[0])
    //   const {name, username, phone, email, company, address} = usersInfo[i]
  //   console.log(name, username, phone, email, company, address)
    // const template = `
    // <li>
    //     <div>
    //         <p>${name}</p>
    //         <p>${username}</p>
    //         <p>${phone}</p>
    //         <p>${email}</p>
    //     </div>
    //     <p>${company}</p>
    //     <p>${address}</p>
    // </li>
    // `;
    // return template;
// }
// listaUsuarios.innerHTML = template;

// const {id, name, username, email, adress} = usersInfo
// console.log(usersInfo[0])