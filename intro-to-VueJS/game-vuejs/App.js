new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns:[]
    },
    methods: {

        //this fucntion executes when we click on start game button
        startGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns=[];
        },


        //function to attack normally
        attack: function () {

            // console.log("attacked");
            var damage = this.calculateDamage(3, 10)
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer:true,
                text: "Player hits Monster for "+damage
            });
            if (this.checkWin()) {
                return;
            }

            this.monsterAttack();



        },

        //function to use some special power to use some special attack
        specialAttack: function () {
            var damage= this.calculateDamage(10,20);
            this.monsterHealth-=damage;
            this.turns.unshift({
                isPlayer:true,
                text: "Player hits Monster hard for "+damage
            });
            if(this.checkWin()){
                return;
            }

            this.monsterAttack();


        },
        //function to heal your self
        heal: function () {
            
            if(this.playerHealth<=90)
            {
                this.playerHealth+=10;
                
            }else{
                this.playerHealth=100;
            }
            this.turns.unshift({
                isPlayer:true,
                text: "Player heals for "+10
            });
            this.monsterAttack();
            
        },

        //function for giving up on game
        giveUp: function () {
            this.gameIsRunning = false;
            this.monsterHealth = 100;
            this.playerHealth = 100;
            alert("You Have Lost! Try again");
        },
        monsterAttack:function () {
            damage=this.calculateDamage(5,12);
            this.playerHealth-=damage; 
            this.turns.unshift({
                isPlayer:false,
                text: "Monster hits Player for "+damage
            });
            this.checkWin();
        },
        //this fucntion calculates damage and returns it to attack fucntion
        calculateDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },


        // this fucntion checks if we won the game or lost
        checkWin: function () {
            if (this.monsterHealth <= 0) {
                if (confirm("You won! Start new Game?")) {
                    this.startGame();

                } else {
                    this.gameIsRunning = false;
                }

                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm("You lost! Start new Game?")) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;

        }
    }
})