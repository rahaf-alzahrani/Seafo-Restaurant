
function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[1];
      y = rows[i + 1].getElementsByTagName("TD")[1];
      // Check if the two rows should switch place:
      if (Number(x.innerHTML) > Number(y.innerHTML)) {
        // If so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}


function sortTable1() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[1];
      y = rows[i + 1].getElementsByTagName("TD")[1];
      // Check if the two rows should switch place:
      if (Number(x.innerHTML) < Number(y.innerHTML)) {
        // If so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}



function sortTablee() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable1");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[1];
      y = rows[i + 1].getElementsByTagName("TD")[1];
      // Check if the two rows should switch place:
      if (Number(x.innerHTML) > Number(y.innerHTML)) {
        // If so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}


function sortTable11() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable1");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[1];
      y = rows[i + 1].getElementsByTagName("TD")[1];
      // Check if the two rows should switch place:
      if (Number(x.innerHTML) < Number(y.innerHTML)) {
        // If so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}



function sortTableee() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable3");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[1];
      y = rows[i + 1].getElementsByTagName("TD")[1];
      // Check if the two rows should switch place:
      if (Number(x.innerHTML) > Number(y.innerHTML)) {
        // If so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}


function sortTable111() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable3");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[1];
      y = rows[i + 1].getElementsByTagName("TD")[1];
      // Check if the two rows should switch place:
      if (Number(x.innerHTML) < Number(y.innerHTML)) {
        // If so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}





items = [];
total = 0;
function addItem(name, id) {
  var qty = document.getElementById(id).value;
  if (!qty || isNaN(qty)) {
    alert('Please enter quantity.');
    return;
  }
  var price = parseInt(document.getElementById('price-' + id).innerText);

  document.querySelector(".orderlist div").innerHTML += ('<p>' + qty + 'x ' + name);
  items.push({
    name, qty
  });
  
  total += (qty * price);
  document.getElementById('orderTotal').value = total;
  

}

function order() {
  var number = document.getElementById("tablenumber").value;
  if (!number || isNaN(number)) {
    alert('Please enter table number.');
    return;
  }

  var orders = JSON.parse(localStorage.getItem('orders') || '[]');
  var orderNumber = parseInt(localStorage.getItem('orderNumber') || '1');
  var order = {
    items,
    table: number,
    number: orderNumber,
    total,
  };
  orders.push(order);

  localStorage.setItem('orders', JSON.stringify(orders));
  localStorage.setItem('orderNumber', ++orderNumber);
  removeTable(parseInt(number) - 1);
  document.querySelector(".orderlist div").innerHTML = '';
  document.getElementById('orderTotal').value = null;
  addOrderToOrdersTable(order);
}

function removeTable(number) {
  var tables = document.getElementById('tablenumber');
  tables.removeChild(tables.children[number]);
  
}

function addTable(number) {
  var tables = document.getElementById('tablenumber');
  var option = document.createElement('option');
  option.innerText = option.value = number;
  tables.insertBefore(option, tables.children[number]);
  
}

function addOrderToOrdersTable(order) {
  document.getElementById('orders-table-body').innerHTML += '<tr id="order-sum-' + order.number + '"><td>' + order.table + '</td><td>' 
   +"/" + order.number + '</td><td>SAR ' + order.total 
    + '</td><td><input class="print" type="button" onclick="printt(\'' + order.number + '\')" value="Print"></td></tr>';
}
var TA=[];
var items;
var TT;
var SS=[];

function printt(orderNumber) {
  alert("printing invoice")
  
  var orders = JSON.parse(localStorage.getItem('orders') || '[]');
  var order = orders.find(c => c.number == orderNumber);
  var w ;
	w = window.open();
	w.document.write("TableNO: \n"+document.getElementById('order-sum-' + orderNumber).innerHTML);
  w.document.write("1XOysters  1xGreen Salad \n");
	w.print();
	w.close();
  document.getElementById('order-sum-' + orderNumber).remove();
  addTable(parseInt(order.table));
  orders = orders.filter(c => c.number != orderNumber);
  localStorage.setItem('orders', JSON.stringify(orders));
  //----------------Delete---------------
   TA=localStorage.getItem("reservedT"); 
  for (var i=0; i<=TA.length; i++)
  {
    if ( TA[i] != order.table && /\d/.test(TA[i]) ){
        SS[i]=TA[i];}
  }
  
  for (var i=0; i<=SS.length; i++)
    if (/\d/.test(SS[i]) || SS[i] == ',')
        SS[i]=TA[i]; 
        
        document.location.reload();
        
  items = window.localStorage.setItem("reservedT",JSON.stringify(SS));
  
  }
  

window.onload = function () {
  var orders = JSON.parse(localStorage.getItem('orders') || '[]');
  for (var i = 0; i < orders.length; i++) {
    addOrderToOrdersTable(orders[i]);
    removeTable(parseInt(orders[i].table));
  }
};

$("#button1").on('change',function() {
  if (parseInt($("#button1").val()) > 0 ) {
    $('#submitButton').show()
  } else {
    $('#submitButton').hide()
  }
});



