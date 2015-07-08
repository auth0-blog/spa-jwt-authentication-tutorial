module.exports = function (View) {
  View.directive('ref', {
    bind: function(){
      this.view.refs = this.view.refs || {};
    },
    update: function(value){
      this.view.refs[value] = this.node;
    },
    unbind: function(){
      this.view.refs = null;
    }
  });
};
