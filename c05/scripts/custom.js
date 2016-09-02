$(function () {

  /**
   * 05-02　データからテーブルを生成する
   */
  //テーブルを表示する
  function renderTable(data) {
    $(data).each(function () {
      var shop = this;

      var $name = $('<td></td>').text(shop.name);
      var $address = $('<td></td>').text(shop.address);
      var $tel = $('<td></td>').text(shop.tel);
      var $solar = $('<td></td>')
        .html(getImage('solar', shop.solar));
      var $kids = $('<td></td>')
        .html(getImage('kids', shop.kids));
      var $natural = $('<td></td>')
        .html(getImage('natural', shop.natural));

      $('<tr></tr>')
      .append($name)
      .append($address)
      .append($tel)
      .append($solar)
      .append($kids)
      .append($natural)
      .appendTo('#shop');
    });
  }

  /**
   * 05-03　データに合わせてアイコン画像を切り替える
   */
  //画像を返す
  function getImage(type, number) {
    var num = parseInt(number);
    var suffix = '';
    if (num) {
      suffix = 'yes';
    } else {
      suffix = 'no';
    }
    var fileName = type + '-' + suffix + '.png';
    var path = 'images/' + fileName;
    return $('<img>').attr('src', path);
  }

  /**
  * 05-01 JSONデータを取得する
  */
  //データをロードする
  var shopdata;
  $.get('shopdata.json', function (data) {
    shopdata = data;
    renderTable(shopdata);
    //console.log(shopdata);
  })
  .fail(function () {
    alert('店舗データをダウンロードできませんでした。しばらく経ってからまたお試しください。');
  });
});