var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var trash = document.getElementsByClassName("fa-trash-o");

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const haircut = this.parentNode.parentNode.childNodes[3].innerText
        const price = this.parentNode.parentNode.childNodes[5].innerText
        const tip = this.parentNode.parentNode.childNodes[7].innerText
        const total = this.parentNode.parentNode.childNodes[9].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[11].innerText)
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'haircut': haircut,
            'price': price,
            'thumbUp':thumbUp,
            'tip': tip,
            'total': total
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        confirm("are you sure you want to delete")
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const haircut = this.parentNode.parentNode.childNodes[3].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'haircut': haircut
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
