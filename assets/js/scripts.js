
jQuery(document).ready(function($){

  function slideTo(el) {
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#" + el.id).offset().top
    }, 750);
  }

  $(document).on('keydown',function(e) {
    switch(e.which) {
      case 68:
        window.location.href = "/#studioIntro";
        break;
      case 71:
        slideTo(contact);
        break;
      case 72:
        window.location.href = "/";
        break;
      case 78:
        var nextSection = this;
        console.log(nextSection);
        break;
      case 80:
        window.location.href = "/process";
        break;
      case 83:
        window.location.href = "/about";
        break;
      case 84:
        $([document.documentElement, document.body]).animate({
          scrollTop: 0
        }, 750);
        break;
      case 87:
        window.location.href = "/work";
        break;
      default:
        // No thing
        break;
    }
  });

  const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://public.ecologi.com/users/samuelmead/trees",
    "method": "GET",
    "headers": {
      "Content-Type": "application/json"
    }
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    $(".treespan").html(response.total);
  });

  // All book spinning shiz
  // var book = $(".book");
  // var controls = $(".controls");
  // var currentFace = '';
  //
  // function spinBook(cover) {
  //   // var activeFace = $("input[name='spin-book']:checked").val();
  //   var activeFace = cover;
  //   var showFace = 'show-' + activeFace;
  //   if (currentFace) {
  //     book.removeClass(currentFace);
  //   }
  //   book.addClass(showFace);
  //   currentFace = showFace
  // }
  //
  // // Set initial view
  // spinBook('spine');
  //
  // // controls.on('change', spinBook);
  //
  // var intersectionOptions = {
  //   root: null,  // use the viewport
  //   rootMargin: '0px',
  //   threshold: 1.0
  // }
  //
  // function intersectionCallback(entries, observer) {
  //   entries.forEach(entry => {
  //     if (entry.target.id == "transition1" && entry.intersectionRatio >= 0.9) {
  //       spinBook('front');
  //     } else if (entry.target.id == "transition2" && entry.intersectionRatio >= 0.9) {
  //       spinBook('back');
  //     } else {
  //       spinBook('spine');
  //     }
  //   });
  // }
  //
  // var observer = new IntersectionObserver(intersectionCallback, intersectionOptions);
  //
  // var target1 = document.querySelector('#transition1');
  // var target2 = document.querySelector('#transition2');
  //
  // observer.observe(target1);
  // observer.observe(target2);
  //
  // $.get( "https://public.ecologi.com/users/samuelmead/impact", function(data) {
  //   console.log(data);
  // });

});
