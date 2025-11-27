DATA.JSON 

[ 

{"id":1,"first_name":"Shirl","last_name":"Faltin","email":"sfaltin0@icio.us"}, 

{"id":2,"first_name":"Deane","last_name":"Kaines","email":"dkaines1@indiatimes.com"}, 

{"id":3,"first_name":"Brianna","last_name":"Guiden","email":"bguiden2@sciencedaily.com"}, 

{"id":4,"first_name":"Arvy","last_name":"Sneezum","email":"asneezum3@typepad.com"}, 

{"id":5,"first_name":"Andee","last_name":"Witherow","email":"awitherow4@abc.net.au"}, 

{"id":6,"first_name":"Eduino","last_name":"Bertholin","email":"ebertholin5@un.org"}, 

{"id":7,"first_name":"Zelig","last_name":"Eck","email":"zeck6@sciencedirect.com"}, 

{"id":8,"first_name":"Jacquelin","last_name":"Klemenz","email":"jklemenz7@shareasale.com"}, 

{"id":9,"first_name":"Quintina","last_name":"Cato","email":"qcato8@erecht24.de"}, 

{"id":10,"first_name":"Sheryl","last_name":"Ayton","email":"sayton9@ca.gov"} 

] 

 

SECOND.JS 

const express = require('express'); 

const data = require('./data.json'); 

 

const app = express(); 

const PORT = 3000; 

 

app.get('/', (req, res) => { 

    res.json(data); 

}); 

 

app.get('/class/:id', (req, res) => { 

    const studId = Number(req.params.id); 

    const student = data.filter((student) => student.id == studId); 

    res.json(student); 

    console.log(req.params); 

}); 

 

app.listen(PORT, () => { 

    console.log(The server is running on port number ${PORT}); 

    console.log('json data captured successfully'); 

}); 