console.log('hello from the browser JavaScript')
const rantSubmitButton = document.getElementById('rant-submit')
if (rantSubmitButton) {
  rantSubmitButton.addEventListener('click', (event) => {
    event.preventDefault()
    console.log(document.getElementById('rant-title').value)
    fetch(window.location.href + '/rants', {
      method: 'POST',
      credentials: 'include',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        title: document.getElementById('rant-title').value,
        rant: document.getElementById('rant').value,
      })
    })
      .then((response) => {
        console.log(response)
      })
      .catch((e) => { throw e })
  })
}
