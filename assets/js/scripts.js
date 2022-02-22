jQuery(document).ready(function($){

  var book = $(".book");
  var controls = $(".controls");
  var currentFace = '';

  function spinBook() {
    var activeFace = $("input[name='spin-book']:checked").val();
    console.log(activeFace);
    var showFace = 'show-' + activeFace;
    if (currentFace) {
      book.removeClass(currentFace);
    }
    book.addClass(showFace);
    currentFace = showFace
  }

  // Set initial view
  spinBook();

  controls.on('change', spinBook);

});
