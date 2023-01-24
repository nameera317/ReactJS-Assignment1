$.ajax({
url: 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D',
method: "GET",
dataType: "json",
success: function(data){
    var tb = document.getElementById("table-body");
    var detailsInfo = document.getElementById('info-content');
    let activeUserId = null;
    var id;
    let userData = filteredUserData = [];
    for(var i=0; i<data.length; i++) {
        var product=data[i];
        var main = document.createElement("tr");
        function onRowClick(e){
          const prevActiveUser = document.getElementsByClassName('active')[0];
          prevActiveUser.classList.remove('active');
          this.classList.add("active");
          clickId = this.childNodes[0].innerText;
          for(var i=0; i<data.length; i++) {
            var product = data[i];
            if(product.id == clickId){
              detailsInfo.innerHTML = `
              <div><b>User selected:</b>${product.firstName} ${product.lastName}</div>
              <div><b>Description: </b><textarea cols="50" rows="5" readonly>${product.description}</textarea></div>
              <div><b>Address:</b> ${product.address.streetAddress}</div>
              <div><b>City:</b> ${product.address.city}</div>
              <div><b>State:</b> ${product.address.state}</div>
              <div><b>Zip:</b> ${product.address.zip}</div>`
        }}
     
        }
        main.addEventListener('click', onRowClick);
         var c1 = document.createElement("td");
         c1.innerText = product.id;
         c1.classList.add("column1");
         var c2 = document.createElement("td");
         c2.innerText = product.firstName;
         c2.classList.add("column2");
         var c3 = document.createElement("td");
         c3.innerText = product.lastName;
         c3.classList.add("column3");
         var c4 = document.createElement("td");
         c4.innerText = product.email;
         c4.classList.add("column4");
         var c5 = document.createElement("td");
         c5.innerText = product.phone;
         c5.classList.add("column5");
         main.append(c1,c2,c3,c4,c5);
         tb.append(main);
         if (i === 2) {
            activeUserId = product.id;
            main.classList.add('active');
        }  
       
    }
    var search = document.getElementById('search-box');
    var searchInput;
    var tr = document.getElementsByTagName("tr");
    var mark = document.createElement('mark');

function onSearchInput(e) {
  searchInput= e.target.value.toLowerCase();
  for(var i=0; i<tr.length; i++) {
    if(tr[i].innerHTML.toLowerCase().includes(searchInput)){
      
      tr[i].style.display = "block";

    } 
    else {
      tr[i].style.display = "none";
    }
  }
}

search.addEventListener('keyup', onSearchInput);

   
    
}})



