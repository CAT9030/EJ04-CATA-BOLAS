class App {
    constructor(){
        this.colores = [];
        for(let i=0; i<12; i++){
            this.colores[i] = new ColorItem (255,0,290, random(0,400), random(0,400));
        }
}

mostrar(){
    for(let i=0; i<this.colores.length; i++){
        let a = this.colores[i];
        a.mostrar();
        a.mover();
    }
}

}