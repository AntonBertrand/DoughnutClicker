var Doughnuts = Number(0);
var multiplier = 1;
var shopGrid = document.getElementById("shopInterface");
var shopFlag = false;
setInterval(function() {
    document.getElementById(`count`).innerHTML = Doughnuts;
}, 100);


var shopFlag = true;
            
            function adddoughnut(){
                Doughnuts = (Doughnuts) + 1 * multiplier;
                document.getElementById('doughnutImg').classList.add("shake");
                setTimeout(function()
                {document.getElementById('doughnutImg').classList.remove("shake");}
                , 100);
            }

            var nightMode = false;

            function switchMode(){

                nightMode = !nightMode;
                if(nightMode){
                    document.body.style.backgroundColor = "rgb(27, 27, 27)";
                    document.body.style.color = "white";
                } else {
                    document.body.style.backgroundColor = "lightgray";
                    document.body.style.color = "black";
                }
            }

            function goShop(){
                if (shopFlag) {
                    var doughnut = document.getElementById("imgDiv");
                    doughnut.style.display = "block";
                    var shopGrid = document.getElementById("shopInterface");
                    shopGrid.style.display = "none";
                    shopFlag = false;
                } else {
                    var doughnut = document.getElementById("imgDiv");
                    doughnut.style.display = "none";
                    var shopGrid = document.getElementById("shopInterface");
                    shopGrid.style.display = "block";
                    shopFlag = true;
                }
                
            }

            function printer1() {
                if (Doughnuts < 1000) {
                    alert("Insufficient Doughnuts. You're too broke. You need 1,000 Doughnuts.");
                } else {
                    setInterval(function() {Doughnuts+=1}, 2000);
                    alert("Doughnut Printer Purchased!");
                    Doughnuts = Doughnuts - 1000;
                }
            }

            function printer2() {
                if (Doughnuts < 2500) {
                    alert("Insufficient Doughnuts. You're too broke. You need 2,500 Doughnuts.");
                } else {
                    setInterval(function() {Doughnuts+=3}, 1000);
                    alert("Doughnut Printer Purchased!");
                    Doughnuts = Doughnuts - 2500;
                }
            }

            function clicker1(){

                if (Doughnuts < 250) {
                    alert("Insufficient Doughnuts. You need 250 Doughnuts.");
                } else {
                    alert("Level 1 Super Clicker Purchased!");
                    multiplier = 2;
                    Doughnuts = Doughnuts - 250;
                    document.getElementById(`clickerLevel`).innerHTML = "Level 1";

                }
            }

            function clicker2(){
                if (Doughnuts < 800) {
                    alert("Insufficient Doughnuts. You need 800 Doughnuts.");
                } else {
                    alert("Level 2 Super Clicker Purchased!");
                    multiplier = 4;
                    Doughnuts = Doughnuts - 800;
                    document.getElementById(`clickerLevel`).innerHTML = "Level 2";
                }
            }

            function clicker3(){
                if (Doughnuts < 1800) {
                    alert("Insufficient Doughnuts. You need 1,800 Doughnuts.");
                } else {
                    alert("Level 3 Super Clicker Purchased!");
                    multiplier = 8;
                    Doughnuts = Doughnuts - 1800;
                    document.getElementById(`clickerLevel`).innerHTML = "Level 3";
                }
            }

            function clicker4(){
                if (Doughnuts < 3500) {
                    alert("Insufficient Doughnuts. You need 3,500 Doughnuts.");
                } else {
                    alert("Level 4 Super Clicker Purchased!");
                    multiplier = 16;
                    Doughnuts = Doughnuts - 3500;
                    document.getElementById(`clickerLevel`).innerHTML = "Level 4";
                }
            }

            function clicker5(){
                if (Doughnuts < 10000) {
                    alert("Insufficient Doughnuts. You need 10,000 Doughnuts.");
                } else {
                    alert("Level 5 Super Clicker Purchased!");
                    multiplier = 32;
                    Doughnuts = Doughnuts - 10000;
                    document.getElementById(`clickerLevel`).innerHTML = "Level 5!!";
                }
            }

            function random1(){
                if (Doughnuts < 500) {
                    alert("Insufficient Doughnuts. You need 500 Doughnuts.");
                } else {
                    alert("Random Doughnut Purchased!");
                    Doughnuts = Doughnuts - 500;
                    var randomNum = Math.floor(Math.random() * 7) + 1;
                    console.log(randomNum);

                    switch(randomNum) {
                        case 1:
                            document.getElementById("doughnutImg").src="doughnutImg.png";
                        break;

                        case 2:
                            document.getElementById("doughnutImg").src="doughnutImg2.png";
                        break;

                        case 3:
                            document.getElementById("doughnutImg").src="doughnutImg3.png";
                        break;

                        case 4:
                            document.getElementById("doughnutImg").src="doughnutImg4.png";
                        break;

                        case 5:
                            document.getElementById("doughnutImg").src="doughnutImg5.png";
                        break;

                        case 6:
                            document.getElementById("doughnutImg").src="doughnutImg6.png";
                        break;

                        case 7:
                            document.getElementById("doughnutImg").src="doughnutImg7.png";
                        break;

                        case 8:
                            document.getElementById("doughnutImg").src="doughnutImg8.png";
                        break;

                        case 9:
                            document.getElementById("doughnutImg").src="doughnutImg9.png";
                        break;

                        case 10:
                            document.getElementById("doughnutImg").src="doughnutImg10.png";
                        break;

                        default:
                        console.log("Error!");
                    }
                }
            }

            function cheatCode(){
                var input = prompt("Enter Cheat Code");
                if (input == "penis") {
                    input = prompt("How much points?") 
                    Doughnuts = Number(input);
                } else {
                    alert("Cheat code doesn't exist!");
                }
            }