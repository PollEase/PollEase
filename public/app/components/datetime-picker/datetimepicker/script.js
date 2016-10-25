var items = [];
function addItem(value){
  //$('#datetimepicker').datetimepicker('update');
  //var item = getFormattedDate();
  items.push(value);
  bindRows();
}
function bindRows(){
  var rows = '';
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    rows += '<tr><td>' + item  +'</td></tr>';
  }
  $('tbody#results').html(rows);
}

window.onload = bindRows;
