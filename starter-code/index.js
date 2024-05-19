// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            return this.name + " has died.";
        } else {
            return this.name + " has received damage of " + damage;
        }
    }

    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            return "A Saxon has died in combat.";
        } else {
            return "A Saxon has received " + damage + " points of damage.";
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let saxon = this.saxonArmy[saxonIndex];

        let message = saxon.receiveDamage(viking.attack());

        if (saxon.health <= 0) {
            this.saxonArmy.splice(saxonIndex, 1);
        }

        return message;
    }

    saxonAttack() {
        let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let viking = this.vikingArmy[vikingIndex];

        let message = viking.receiveDamage(saxon.attack());

        if (viking.health <= 0) {
            this.vikingArmy.splice(vikingIndex, 1);
        }

        return message;
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survive another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}

// Initialize instances
const soldier = new Soldier(10, 5);
const viking = new Viking("Paco", 20, 5);
const saxon = new Saxon(15, 3);

const viking1 = new Viking("Paco1", 19, 5);
const viking2 = new Viking("Paco2", 18, 6);
const viking3 = new Viking("Paco3", 20, 7);
const viking4 = new Viking("Paco4", 19, 4);
const viking5 = new Viking("Paco5", 18, 5);

const saxon1 = new Saxon(15, 4);
const saxon2 = new Saxon(17, 8);
const saxon3 = new Saxon(16, 4);
const saxon4 = new Saxon(25, 5);
const saxon5 = new Saxon(11, 3);

const war1 = new War();
war1.addViking(viking1);
war1.addViking(viking2);
war1.addViking(viking3);
war1.addViking(viking4);
war1.addViking(viking5);

war1.addSaxon(saxon1);
war1.addSaxon(saxon2);
war1.addSaxon(saxon3);
war1.addSaxon(saxon4);
war1.addSaxon(saxon5);

// Logging results
console.log(soldier);
console.log(soldier.attack());
soldier.receiveDamage(3);
console.log(soldier.health + " life the soldier");

console.log(viking);
console.log(viking.attack());
console.log(viking.battleCry());
console.log(viking.receiveDamage(9));
console.log(viking.receiveDamage(13));
console.log(viking.health);

console.log(saxon);
console.log(saxon.attack());
console.log(saxon.receiveDamage(3));
console.log(saxon.receiveDamage(12));
console.log(saxon.health);

// The battle
for (let i = 0; i < war1.saxonArmy.length; i++) {
    console.log(war1.saxonArmy[i] + " is saxon");
    console.log(war1.vikingArmy[i] + " is viking");
}

console.log(war1.vikingAttack());
console.log(war1.showStatus());
console.log(war1.saxonArmy.length + " this is what we have left of the army, my friend viking");
console.log(war1.saxonAttack());
console.log(war1.showStatus());
console.log(war1.vikingArmy.length + " this is what we have left of the army, my friend saxon");

console.log(war1.vikingAttack());
console.log(war1.showStatus());
console.log(war1.saxonArmy.length + " this is what we have left of the army, my friend viking");
console.log(war1.saxonAttack());
console.log(war1.showStatus());
console.log(war1.vikingArmy.length + " this is what we have left of the army, my friend saxon");

console.log(war1.vikingAttack());
console.log(war1.showStatus());
console.log(war1.saxonArmy.length + " this is what we have left of the army, my friend viking");
console.log(war1.saxonAttack());
console.log(war1.showStatus());
console.log(war1.vikingArmy.length + " this is what we have left of the army, my friend saxon");

console.log(war1.vikingAttack());
console.log(war1.showStatus());
console.log(war1.saxonArmy.length + " this is what we have left of the army, my friend viking");
console.log(war1.saxonAttack());
console.log(war1.showStatus());
console.log(war1.vikingArmy.length + " this is what we have left of the army, my friend saxon");

console.log(war1.vikingAttack());
console.log(war1.showStatus());
console.log(war1.saxonArmy.length + " this is what we have left of the army, my friend viking");
