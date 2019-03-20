window.onload = function() {

  var buttons = document.getElementById('buttons');
  var clear = document.getElementById('clear');
  var answer = document.getElementById('answer');

  // button
  buttons.addEventListener('click', function(e) {

    if (e.target.nodeName === 'LI') {

      // value of button
      var v = e.target.innerHTML;

      if (v === '=') {
        try {
          answer.innerHTML = eval(answer.innerHTML);
        } catch(e) {
          answer.innerHTML = e.message;
        }
      } else {
        answer.innerHTML += v;
      }

    }

  });

  // click
  clear.addEventListener('click', function() {
    answer.innerHTML = '';
  });

};
