var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database:"sup",
    insecureAuth : true
});
con.connect(function(err) {
    if (err) throw err;
        console.log("Connected!");
        con.query("select * from supermecados", function (err, result) {
            
            for(i in result){
                tr = document.createElement('tr')
                for(a in result[i]){
                    td = document.createElement('td')
                    td.innerHTML = result[i][a]
                    tr.appendChild(td)
                }
                document.getElementById('store_list').appendChild(tr)    
            }
    });
});
document.getElementById('show_stores').addEventListener('click',()=>{
    document.getElementById('store_conteiner').className ="card column"
    document.getElementById('menu').className ="hide"
})
document.getElementById('hide_stores').addEventListener('click',()=>{
    document.getElementById('store_conteiner').className ='hide'
    document.getElementById('menu').className ="card column"
})
document.getElementById("addStore").addEventListener('click',()=>{
    document.location.href="./pages/index.html"
})

