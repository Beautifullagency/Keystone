const t = document.getElementsByClassName('t')
for (let item of t) {
  item.addEventListener('mouseover', function changeDefOver(e) {
    item.getElementsByClassName('t-title1')[0].classList.add('hidde')
    item.getElementsByClassName('m')[0].classList.remove('contract')
    item.getElementsByClassName('m')[0].classList.add('expand')
  }
  );
  item.addEventListener('mouseout', function changeDefOut(e) {
    item.getElementsByClassName('t-title1')[0].classList.remove('hidde')
    item.getElementsByClassName('m')[0].classList.add('contract')
    item.getElementsByClassName('m')[0].classList.remove('expand')    
  });

}


grecaptcha.ready(function() {
  grecaptcha.execute( '6LfFf8oaAAAAAJEnFqr1kZAeobLezLOYXUrGS5J9', {action: 'homepage'}).then(function(token) {
      // Add your logic to submit to your backend server here.
      $('#google-response').val(token)
  });
});

