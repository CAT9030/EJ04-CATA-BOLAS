class App {
    constructor(){
        this.bolas = [];
        for(let i=0; i<12; i++){
            const randomPosX= Math.floor(Math.random()*300+50)
            const randomPosY= Math.floor(Math.random()*300+50)
            this.bolas.push(this.getRandomInstance(randomPosX,randomPosY));
        }



}


mostrar(){
    for(let i=0; i<this.bolas.length; i++){
        let a = this.bolas[i];
        a.mostrar();
        a.mover();
    }
}

}