Template.friendItem.rendered = function() {
  $(this.find('.color')).colorpicker({
    format: 'hex',
    customClass: 'colorpicker-2x',
      sliders: {
        saturation: {
          maxLeft: 200,
          maxTop: 200
        },
        hue: {
          maxTop: 200
        },
        alpha: {
          maxTop: 200
        }
      }
  }).on('hidePicker.colorpicker', function(event){
    $(this).find("input").trigger('change');
  });;

  $(this.find(".name-input")).bind( "taphold", function(event){
    event.preventDefault();
    $(this).focus();
    $(this).click();
  });

  $(this.find(".name-input")).bind( "click", function(event){
    event.preventDefault();
    // $(this).find('input').focus();
    // $(this).find('input').click();
  });

  $(this.find(".name-input")).bind( "vmousedown", function(event){
    event.preventDefault();
    $(this).addClass('fadein');
  });

  $(this.find(".name-input")).bind( "mouseup", function(event){
    $(this).removeClass('fadein');
  });

  $(this.find(".name-input")).bind( "vmouseout", function(event){
    $(this).removeClass('fadein');
  });
}

Template.friendItem.events({
  'change .color-input': function (event) {
    event.preventDefault();
    Friends.update(this._id, {name: this.name, color: event.target.value });
  },

  'change .name-input': function (event) {
    event.preventDefault();
    Friends.update(this._id, {name: event.target.value, color: this.color });
  },

  'edit .name': function (event) {
    event.preventDefault();
    debugger
  }

});
