class Player {
    constructor(name, totalCoins, status) {
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = false;
        this.gameActive = true;
    }
    setName(namePicked) {
        this.name = namePicked;
    }
    gotHit() {
        if (this.hasStar){
            this.hasStar = false;
        } else if (this.status === "Powered Up") {
            this.status = "Big";
        } else if (this.status === "Big") {
            this.status = "Small";
        } else if (this.status === "Small") {
            this.status = "Dead";
            this.gameActive = false;
        }
    }
    gotPowerup() {
        if (this.status === "Small") {
            this.status = "Big";
        } else if (this.status === "Big") {
            this.status = "Powered Up";
        } else if (this.status === "Powered Up") {
            console.log(`You have a Star`);
            this.hasStar = true;
        }
    }
    addCoin() {
        this.totalCoins++;
    }
    print() {
        console.log(`Name: ${this.name} \nStatus: ${this.status} \nTotal Coins: ${this.totalCoins}`)
    }
}

const player1 = new Player("Me", 0, "Small");

console.log(`haha ${this.name}, just kidding you have to be Luigi`);
player1.setName("Luigi");

const start = setInterval(() => {
        let num = Math.floor(Math.random() * 3);
        if(num === 0) {
            player1.gotHit();
        } else if (num === 1) {
            player1.gotPowerup();
        } else if (num === 2) {
            player1.addCoin();
        }
        player1.print();
        if(!player1.gameActive){
            clearInterval(start);
        }
    }
, 1000);



