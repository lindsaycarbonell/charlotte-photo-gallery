window.onload = function() { init() };

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1zVkzynb9dbNc7Ri6D4XrWkYSaUBCEfKSZZTBR3HHaCo/pubhtml';

  function init() {
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: build,
                     simpleSheet: true } );
  }

// $(document).ready(function(){

// });

  var photoDate = "09/21/2016";
  var photos_date1 = [];
  var photos_date2 = [];

  function build(data){
    // console.log("sucessfully processed");
    // console.log(data[0]);

    for (i in data){
      // console.log(data[i]);
      if (data[i].date == "09/21/2016"){
        photos_date1.push(data[i]);
        // console.log('1');
        console.log("photos date 1: " + data[i].date);
      } else if (data[i].date == "09/22/2016"){
        photos_date2.push(data[i]);
        console.log("photos date 2: " + data[i].date);
      }
    }

    var photoData = data;
    buildGallery(photos_date1);

  }


  // var showHideTitle = "Show";


  function buildGallery(photoData){

    // console.log("BUILD");


    $('.append-inputs').empty();
    $('.grid').empty();

      for (x in photoData){
        // console.log(photoData[x].date);
        $('.append-inputs').append('<input type="checkbox" id="pic-' + eval("x +1") + '" /><label for="pic-' + eval("x+ 1") + '" class="lightbox"><img src="assets/' + photoData[x].file_name + '"/></label>');


        $('.grid').append('<label for="pic-' + eval("x + 1") + '" class="grid-item"><img src="assets/' + photoData[x].file_name +'"/><p class="pic-sub" data-id="' + photoData[x].id + '">' + photoData[x].subtitle + '</p><p class="pic-credit">' + photoData[x].credit + '</p></label>');
          }



          // $('.pic-title').on("click", function(){
          //   console.log("CLICK");
          //   var $this = $(this);
          //
          //   $this.toggleClass("show");
          //   if($this.hasClass("show")){
          //     $this.text("Hide caption");
          //     $('*[data-id="' + $this.id + '"]').hide();
          //   } else {
          //     $this.text("Show caption");
          //     $('*[data-id="' + $this.id + '"]').show();
          //   }
          //
          //
          // });

          $('.date-selector').off("click");


            $('.date-selector').on("click", function(){

              var thisDate = $(this).data('date');

                $('.date-selector').toggleClass("selected");


              // $(this).css('border-bottom', '3px solid #006687');
              console.log("toggled");

              if (thisDate == "09/21/2016"){
                buildGallery(photos_date1);
              } else if (thisDate == "09/22/2016"){
                buildGallery(photos_date2);
              }

            });




  }
