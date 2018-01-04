function sendDataToServer() {
            var data = {};
            data.name = document.getElementById("applicationName").value;
            data.email = document.getElementById("applicationEmail").value;
            data.telephone = document.getElementById("applicationTelephone").value;
            
            var fullData = JSON.stringify(data);
            
            var XMR = new XMLHttpRequest();
            XMR.open("POST", "server.js", true);
            XMR.send(fullData);
        }