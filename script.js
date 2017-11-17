
// Loop for generating our button design with a new "a href" element with a classname of "knapp"

var x = document.getElementsByClassName("knapp");
var i;
for (i = 0; i < x.length; i++) {
  var knapptxt = x[i].textContent; x[i].innerHTML='<svg id="knapp" class="knappsvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 244 60"><path id="skugga" class="skugga" d="M234 10h8v48H10v-7.9"/><path id="rektangel" class="rektangel" d="M2 2h232v48H2z"/><path id="rektangelhover" class="rektangelhover" d="M2 2h232v48H2z"/><path id="pil" class="pil" d="M198.5 26.9h8.2v-2l2 2-2 2v-2"/><text class="txt">'+ knapptxt +'</text></svg>'

  ;}


  // below will be script for lookbook. Still under development


  $(function() {
    $(".lookbook").click(function(e) {
      let current = $(this);
      let hideButton = document.querySelector("#lookbookbtn");
      $(this).toggleClass("lookbook_clicked");
      $(this).siblings().toggleClass("lookbook_opacity");
      $('#lookbookbtn').fadeToggle('slow');
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



  // Symbols page


  let organicLast =
  document.getElementById('symbols_wrap_organic').lastElementChild;

  let organicText = 'Ekologisk bomull tillverkad av fibrer odlade utan miljöfarliga syntetiska kemikalier (bekämpningsmedel, gödningsmedel, växttillväxt-regulatorer). Fairtrade-certifiering gör det möjligt för småskaliga bomullsbönder i utvecklingsländer att förbättra sina jordbruksföretag och deras samhällsliv.';

  $('.symbol').click(function() {
    let dashWrapLast = document.querySelectorAll('.dashwrap');
    let symbolsText = document.querySelector('.symbols_text_organic');
    let symbolsIngress = document.querySelector('.symbols_ingress');

    let organicIngress = 'ALLA VÅRA KLÄDER ÄR EKOLOGISKA!';
    let qualityIngress = 'ALLA VÅRA KLÄDER HÅLLER HÖG STANDARD!';
    let fairIngress = 'ALLA VÅRA KLÄDER ÄR RÄTTVISA!';
    let veganIngress = 'ALLA VÅRA KLÄDER ÄR VEGANSKA!';

    let organicText = 'Ekologisk bomull tillverkad av fibrer odlade utan miljöfarliga syntetiska kemikalier (bekämpningsmedel, gödningsmedel, växttillväxtregulatorer). Fairtrade-certifiering gör det möjligt för småskaliga bomullsbönder i utvecklingsländer att förbättra sina jordbruksföretag och deras samhällsliv.';

    let qualityText = 'Hos oss handlar du hållbara plagg med kvalité. Vi har höga krav på god passform och hållbara produkter. Du kan gå rakryggad och stolt i våra plagg, inte bara för att du gör samhället en tjänst, utan också för att du ser galet snygg ut!';

    let fairText = 'Produkterna vi säljer är rättvist och etiskt producerade från liten fiber till färdigt plagg. Det innebär att dem som tillverkat kläderna har haft rätt till bra arbetstider och levnadslöner fria från slavkontrakt. Mode utan förlorare.';

    let veganText = 'Våra produkter är fria från läder, päls, ull och dun. Vi har dessutom nolltollerans mot att produkterna vi säljer tas fram med hjälp av djurförsök. För oss är det viktigt att du kan bära kläder med gott samvete och samtidigt bidra till en rättvis behandling av djur. Inga djur ska behöva lida för vårt behov att vara fashionabla!';

    if ($(this).hasClass('symbol_organic')) {

      symbolsIngress.style.opacity = '0';
      symbolsText.style.opacity = '0';
      setTimeout(function() {
        symbolsIngress.innerText = organicIngress;
        symbolsText.innerText = organicText;
        symbolsText.style.opacity = '1';
        symbolsIngress.style.opacity = '1';
      }, 500);
    }

    if ($(this).hasClass('symbol_quality')) {
      symbolsText.style.opacity = '0';
      symbolsIngress.style.opacity = '0';
      setTimeout(function() {
        symbolsIngress.innerText = qualityIngress;
        symbolsText.innerText = qualityText;
        symbolsText.style.opacity = '1';
        symbolsIngress.style.opacity = '1';
      }, 500);
    }

    if ($(this).hasClass('symbol_fair')) {
      symbolsText.style.opacity = '0';
      symbolsIngress.style.opacity = '0';
      setTimeout(function() {
        symbolsIngress.innerText = fairIngress;
        symbolsText.innerText = fairText;
        symbolsText.style.opacity = '1';
        symbolsIngress.style.opacity = '1';
      }, 500);
    }
    if ($(this).hasClass('symbol_vegan')) {
      symbolsText.style.opacity = '0';
      symbolsIngress.style.opacity = '0';
      setTimeout(function() {
        symbolsIngress.innerText = veganIngress;
        symbolsText.innerText = veganText;
        symbolsText.style.opacity = '1';
        symbolsIngress.style.opacity = '1';
      }, 500);
    }

    if (!$(this).hasClass('symbol_clicked')) {
      $(this).addClass('symbol_clicked');
      $('.symbol').not(this).removeClass('symbol_clicked');

    }

    $('.textdashmobile').removeClass('textdash_show');
    $('.symbol').removeClass('.textdash_show');
    $('.symbol').removeClass('.symbol_clicked');
    $('.symbols_dashes_webb').removeClass('webbdash_show');

    $(this).addClass('.symbol_clicked');
    let index = $(".symbol").index(this);

    let webbDash = $(".symbols_dashes_webb")[index];
    let mobileDash = $(".textdashmobile")[index];

    webbDash.classList.add('webbdash_show');
    mobileDash.classList.add('textdash_show');


      //DASHES----------------------!

      // OLD STUFF, LOOK UP
    // if ($(this).hasClass('symbol_clicked')) {
    //   if($(this).hasClass('symbol_organic')) {
    //     $('.textdashmobile').not(this).removeClass('textdash_show')
    //     $('.textdashmobile.dash_organic').toggleClass('textdash_show');
    //     $('.symbols_dashes_webb').not(this).removeClass('webbdash_show');
    //     $('.dashone_organic').addClass('webbdash_show');
    //
    //   } else if ($(this).hasClass('symbol_quality')) {
    //       $('.textdashmobile').not(this).removeClass('textdash_show');
    //       $('.textdashmobile.dash_quality').toggleClass('textdash_show');
    //       $('.symbols_dashes_webb').not(this).removeClass('webbdash_show');
    //       $('.dashtwo_quality').toggleClass('webbdash_show');
    //
    //   } else if ($(this).hasClass('symbol_fair')) {
    //       $('.textdashmobile').not(this).removeClass('textdash_show')
    //       $('.textdashmobile.dash_fair').toggleClass('textdash_show');
    //       $('.symbols_dashes_webb').not(this).removeClass('webbdash_show');
    //       $('.dashthree_fair').toggleClass('webbdash_show');
    //
    //   } else if ($(this).hasClass('symbol_vegan')) {
    //       $('.textdashmobile').not(this).removeClass('textdash_show')
    //       $('.textdashmobile.dash_vegan').toggleClass('textdash_show');
    //       $('.symbols_dashes_webb').not(this).removeClass('webbdash_show');
    //       $('.dashfour_vegan').toggleClass('webbdash_show');
    //   }
    //
    // }
  });
