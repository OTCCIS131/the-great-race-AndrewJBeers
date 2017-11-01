$(function () {
    let vm = new Vue({
        el: '#app',
        data: {
            raced: false,
            racing: false,
            winner: null,
            howl: 0,
            calcifer: 0,
            soHal: 200,
            soCal: 200,
            sophie: 0,
            interval: null,
           
        },
        computed: {

            sophieStyle(){
                return{
                    right: this.sophie + 'vw'
                }
            },
            calciferStyle(){
                return{
                    left: this.calcifer + 'vw' 
                }
            },
            sophHowlStyle(){
                return{
                    right: this.soHal + 'vw'
                }
            },
            howlStyle(){
                return{
                    left: this.howl + 'vw'
                }
            },
            sophCalStyle(){
                return{
                    right: this.soCal + 'vw'
                }
            }

        },
        methods: {
            
            move(){
                this.howl += Math.random() >= .5 ? 1 : 0
                this.calcifer += Math.random() >= .5 ? 1 : 0 
                this.winCheck()
            },
            winCheck(){
                if (this.calcifer == this.howl) 
                    return

                if (this.calcifer > 84){
                    this.racing = false
                    calcifer.winner = true
                    this.won()
                    this.raced = true
                    this.calcifer = 200
                    this.howl = 50
                    this.soCal = 0
                    this.sophie = 200
                    
                }
                if (this.howl > 84){
                    this.racing = false
                    howl.winner = true
                    this.won()
                    this.raced = true
                    this.howl = 200
                    this.calcifer = 50
                    this.soHal = 0
                    this.sophie = 200
                }
            },
            startRace(){
              
                if (this.raced == true){
                    this.reset()
                    this.raced = false
                }
                else if (this.racing == false)
                {
                    this.raced = false
                    this.racing = true
                    this.interval = setInterval(() =>{this.move()},50)
                }
            },
            won(){
                clearInterval(this.interval)
            },
            reset(){
                    this.howl = 0
                    this.calcifer = 0
                    this.soCal = 200
                    this.soHal = 200
                    this.sophie = 0
            }
        }
    })
})
