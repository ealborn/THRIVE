
//Loop for generating our button design with a new "a href" element with a classname of "knapp"

  var x = document.getElementsByClassName("knapp");
  var i;
  for (i = 0; i < x.length; i++) {
     var knapptxt = x[i].textContent; x[i].innerHTML='<svg id="knapp" class="knappsvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 244 60"><path id="skugga" class="skugga" d="M234 10h8v48H10v-7.9"/><path id="rektangel" class="rektangel" d="M2 2h232v48H2z"/><path id="rektangelhover" class="rektangelhover" d="M2 2h232v48H2z"/><path id="pil" class="pil" d="M198.5 26.9h8.2v-2l2 2-2 2v-2"/><text class="txt">'+ knapptxt +'</text></svg>'

    ;}

      // below will be script for lookbook. Still under development

    $(function() {
        $(".lookbook_one, .lookbook2").click(function() {
          $(".lookbook_one").toggleClass("lookbook_one_clicked");
      });
    });


      //The following is under development script for the slideshow

    $('.test1knapp').click(function() {

      $(".test2")[0].scrollIntoView({
          behavior: "smooth", // or "auto" or "instant"
          block: "start" // or "end"
      });

    $('.test2knapp').click(function() {

      $(".test3")[0].scrollIntoView({
          behavior: "smooth", // or "auto" or "instant"
          block: "start" // or "end"
      });
      });

    $('.test3knapp').click(function() {

      $(".test1")[0].scrollIntoView({
          behavior: "smooth", // or "auto" or "instant"
          block: "start" // or "end"
      });
      });

    });
