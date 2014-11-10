var $ = require('jquery');

$.ajaxSetup({
  beforeSend: function(xhr) {
    if (localStorage.getItem('jwt')) {
      xhr.setRequestHeader('Authorization',
            'Bearer ' + localStorage.getItem('jwt'));
    }
  }
});

