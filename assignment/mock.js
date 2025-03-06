fetch('https://673b07a0339a4ce4451a3c69.mockapi.io/api/v1/:endpoint', {
    method: 'GET',
    headers: {'content-type':'application/json'},
  }).then(res => {
    if (res.ok) {
        // return res.json();
        console.log(res.json());
    }
    // handle error
  }).then(tasks => {
    // Do something with the list of tasks
  }).catch(error => {
    // handle error
  })