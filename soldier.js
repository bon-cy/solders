const soldier = {
    name: 'Халк',
    health: 10,
    weapon: {
        weaponName: 'ПП',
        bullets: 30,
    },
    clip: 3,

    Shoot: function() {
        if (this.weapon.bullets <= 0) {
            console.log(
                "Обоима пуста.Перезаредитесь."
            )
        }
        this.weapon.bullets--
            console.log("bah-bah")

    },


    recharge: function() {
        if (this.clip <= 0) {
            console.log("не осталось припасов")
        } else {
            whis.weapon.bullets = 30
            this.clip--
                console.log("Перезарядка...")
        }
    },



    hurt: function() {
        this.health--
            if (this.health <= 0) {
                console.log("ты проиграл")
            }
    },

};