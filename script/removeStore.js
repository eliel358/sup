var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database:"sup",
    insecureAuth : true
});
console.log(10)
removeStore = ()=>{
	
}

con.connect(function(err) {
    if (err) throw err;
        console.log("Connected!");
        
})
con.query("select * from supermercado", function (err, result) {
            if(result.length == 0){
				p = document.createElement('p')
				p.innerHTML = 'Não há lojas para remover'
				document.getElementById('conteinerRemove').appendChild(p) 
				document.getElementById('store_list').remove()
			}
			for(i in result){
				tr = document.createElement('tr')
				document.getElementById('store_list').appendChild(tr)
				for(a in result[i]){
					td = document.createElement('td')
					td.innerHTML = result[i][a]
					tr.appendChild(td)
				}
				buttonRemove = document.createElement('Button')
				buttonRemove.className = 'removeButton'
				buttonRemove.onclick = ()=>{
					con.query("delete from supermercado where id = "+result[i].id)
					document.location.reload()
				}
				buttonRemove.innerHTML = 'Remover'
				tr.appendChild(buttonRemove)
			}
    });
	
document.getElementById('menu').addEventListener('click',()=>{
	document.location.href = '../index.html'
})