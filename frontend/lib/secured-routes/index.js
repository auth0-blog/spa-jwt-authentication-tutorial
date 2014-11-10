var $ = require('jquery');

var page = require('page');

$.ajaxSetup({
  beforeSend: function(xhr) {
    if (localStorage.getItem('jwt')) {
      xhr.setRequestHeader('Authorization',
            'Bearer ' + localStorage.getItem('jwt'));
    }
  }
});


page(new RegExp('^(?!.*(/signin)|(/signup)).*$'), function(ctx, next) {
  if (!localStorage.getItem('jwt')) {
    setTimeout(function() {
      page('/signin');
    });
  } else {
    next();
  }
})
