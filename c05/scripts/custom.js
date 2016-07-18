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
      var $solar = $('<td></td>').text(shop.solar);
      var $kids = $('<td></td>').text(shop.kids);
      var $natural = $('<td></td>').text(shop.natural);

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
   * 05-01　JSONデータを取得する
  */
  //データをロードする
  var shopdata;
  $.get('shopdata.json', function (data) {
    shopdata = data;
    renderTable(shopdata);
    //console.log(shopdata);
  })
  .fail(function () {
    alert('店舗データをダウンロードできませんでした。しばらく経ってからまたお試しください。')
  });
});