window.onload = function() { init() };

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1zVkzynb9dbNc7Ri6D4XrWkYSaUBCEfKSZZTBR3HHaCo/pubhtml';

  function init() {
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: build,
                     simpleSheet: true } );
  }



  function build(data){
    console.log("sucessfully processed");
    // console.log(data[0]);

    for (i in data){
      console.log(data[i].title);
    }

    var photoData = data;
    buildGallery(photoData);

  }

  function buildGallery(photoData){
    for (x in photoData){
      console.log(photoData[x]);
      $('.append-inputs').append('<input type="checkbox" id="pic-' + eval("x +1") + '" /><label for="pic-' + eval("x+ 1") + '" class="lightbox"><img src="assets/' + photoData[x].file_name + '"/></label>');


      $('.grid').append('<label for="pic-' + eval("x + 1") + '" class="grid-item"><img src="assets/' + photoData[x].file_name +'"/><p class="pic-title">' + photoData[x].title  + '</p><p class="pic-sub">' + photoData[x].subtitle + '</p><p class="pic-credit">' + photoData[x].credit + '</p></label>');
        }
  }
