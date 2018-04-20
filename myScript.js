<script>
        function generateUser(){
            var e = document.getElementById("selectNat")
            var nat = e.options[e.selectedIndex].value
            console.log(nat)
                        // Checking which gender is needed
                        var gender = document.querySelector('input[name="gender"]:checked').value;
                        var myUrl = 'https://randomuser.me/api/?nat=' +  nat + '&gender=' + gender
                        console.log(gender)
                        

                        // Getting the user and fill in the fields
                        $.ajax({
                            type: 'GET',
                            url: myUrl,
                            success: function(data) {
                                var anrede = data["results"][0]["name"]["title"]
                                var vorname = data["results"][0]["name"]["first"]
                                var nachname = data["results"][0]["name"]["last"]
                                var land = data["results"][0]["nat"]
                                var stadt = data["results"][0]["location"]["city"]

                                // Chankging the country and streetnames to uppercase
                                stadt = stadt.split(' ')
                                for (var i = 0; i < stadt.length; i++) {
                                    stadt[i] = stadt[i].charAt(0).toUpperCase() + stadt[i].slice(1)
                                }  
                                var straße = data["results"][0]["location"]["street"]
                                straße = straße.split(' ',)
                                for (var i = 0; i < straße.length; i++) {
                                    straße[i] = straße[i].charAt(0).toUpperCase() + straße[i].slice(1)
                                }    

                                var email = data["results"][0]["name"]["first"] + "-" 
                                + data["results"][0]["name"]["last"] 
                                + data["results"][0]["nat"]
                                +"@mailtest.diconium.com"

                                document.getElementById("txtTitle").innerHTML = "Anrede: " + anrede.charAt(0).toUpperCase() + anrede.slice(1)
                                document.getElementById("txtFirstName").innerHTML = "Vorname: " + vorname.charAt(0).toUpperCase() + vorname.slice(1)
                                document.getElementById("txtLastName").innerHTML = "Nachname: " + nachname.charAt(0).toUpperCase() + nachname.slice(1)
                                document.getElementById("txtLand").innerHTML = "Land: "  + land
                                document.getElementById("txtStadt").innerHTML = "Stadt: "  + stadt.join(" ")
                                document.getElementById("txtStraße").innerHTML = "Straße: "  + straße.join(" ")
                                document.getElementById("txtPlz").innerHTML = "PLZ: "  + data["results"][0]["location"]["postcode"]
                                document.getElementById("txtEmail").innerHTML = "Email: " + email
                                document.getElementById("txtPsw").innerHTML = "Passwort: Test1234!"
                            }
                        });
                    }

                    function clearUser(){
                        document.getElementById("txtTitle").innerHTML = ""
                        document.getElementById("txtFirstName").innerHTML = ""
                        document.getElementById("txtLastName").innerHTML = ""
                        document.getElementById("txtLand").innerHTML = ""
                        document.getElementById("txtStadt").innerHTML = ""
                        document.getElementById("txtStraße").innerHTML = ""
                        document.getElementById("txtPlz").innerHTML = ""
                        document.getElementById("txtEmail").innerHTML = "" 
                        document.getElementById("txtPsw").innerHTML = ""
                    }

                    window.onload = function(){
                      crear_select();
                  }
              </script>