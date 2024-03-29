function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // 
};

const app = Vue.createApp({
    data() {
        return {
            vidaPlayer: 100,
            vidaMonstruo: 100,
            contadorEspecial: 0,
            especialDisabled: true,
            controls: true,
            showResultado: false,
            //Mensajes Resultado
            win: false,
            lose: false,
            draw: false,
            //
            registro: [],
        }
    },
    methods: {
        ataqueMonstruo() {
            potenciaAtaque = random(8,15);
            this.vidaPlayer -= potenciaAtaque;

            this.registro.push(`
            <span class=log--monster>Monstruo</span>
             ataca con
             <span class='log--damage'>${potenciaAtaque}</span>`);
        },
        ataquePlayer() {
            this.contadorEspecial++;
            potenciaAtaque = random(5,12);
            this.vidaMonstruo -= potenciaAtaque;

            this.registro.push(`
            <span class=log--player>Vostede</span>
             ataca con
             <span class='log--damage'>${potenciaAtaque}</span>`);

            this.ataqueMonstruo();
        },
        ataqueEspecial() {
            this.especialDisabled = true;
            this.contadorEspecial = 0;
            potenciaAtaque = random(10, 25);
            this.vidaMonstruo -= potenciaAtaque;

            this.registro.push(`
            <span class=log--player>Vostede</span>
             ataque especial 
             <span class='log--damage'>${potenciaAtaque}</span>`);
            this.ataqueMonstruo();
            
        },
        curacion() {
            this.contadorEspecial++;
            cantidadCuracion = random(8, 20);
            this.vidaPlayer += cantidadCuracion;
            
            this.registro.push(`
            <span class=log--player>Vostede</span>
             se curó
             <span class='log--heal'>${cantidadCuracion}</span>`);
            
            this.ataqueMonstruo();
        },
        xogoNovo() {
            this.vidaMonstruo = 100;
            this.vidaPlayer = 100;
            this.controls = true;
            this.showResultado = false;

            this.win = false;
            this.lose = false;
            this.draw = false;

            this.registro = [];
        }
        
    },
    watch: {
        contadorEspecial() {
            if (this.contadorEspecial == 3) {
                this.especialDisabled = false;
            }
        },
        vidaPlayer() {
            if (this.vidaPlayer <= 0) {
                this.controls = false;
                this.showResultado = true;

                if ((this.vidaPlayer == 0) && (this.vidaMonstruo == 0)) {
                    this.draw = true;
                } else {
                    this.lose = true;
                }
                    
                
            }
        },
        vidaMonstruo() {
            if (this.vidaMonstruo <= 0) {
                this.controls = false;
                this.showResultado = true;

                if ((this.vidaPlayer == 0) && (this.vidaMonstruo == 0)) {
                    this.draw = true;
                } else {
                    this.win = true;
                }
            }
        }
    
    }

        
    
}).mount("#game")