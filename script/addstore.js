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
})


// if(document.getElementById("storeName").value == ''){
    // console.log("")
// } 
// if(document.getElementById("storeRate").value == ''){
    // console.log("")
// } 
// if(document.getElementById("storeAddress").value == ''){
    // console.log("")
// } 


addStore = () =>{
    storeName = document.getElementById("storeName").value
	storeRate = document.getElementById("storeRate").value
	storeAddress = document.getElementById("storeAddress").value

	console.log(con.query('insert into supermercado  (id,nome,avaliacao,endereco) values (default,"'+storeName+'",'+storeRate+',"'+storeAddress+'"'+')').sql)


};
document.getElementById('addStoreButton').addEventListener('click',()=>{
    addStore()
})
document.getElementById('menu').addEventListener('click',()=>{
    document.location.href = '../index.html'
})