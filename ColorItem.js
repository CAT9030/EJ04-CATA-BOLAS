
//new Rojo = random()*4;
//new Verde = random()*4;
//new Azul = random()*4;

class ColorItem {
    constructor(r,g,b,x,y){
        this.r = r;
        this.g = g;
        this.b  = b;
        this.x = x;
        this.y = y;
        this.vel = 1;
        this.mov = 0;
        this.mov = parseInt(random(0,2));
    }


    


    mostrar(){
        fill(this.r, this.g, this.b);
        ellipse(this.x,this.y,30);
        
    }



    mover(){
        //switch para movimiento aleatorio
        switch(this.mov){
            case 0:
                this.x +=  this.vel;
                this.y +=  this.vel; 
        
                if(this.x <= 0 || this.y >= 400 || this.y <= 0 || this.x >= 400){
                    this.vel *= -1;
                }
            break;

            case 1:
                this.x +=  this.vel;
                this.y -=  this.vel; 
        
                if(this.x <= 0 || this.y >= 400 || this.y <= 0 || this.x >= 400){
                    this.vel *= -1;
                }
            break;

            case 2:
                this.x -=  this.vel;
                this.y +=  this.vel; 
        
                if(this.x <= 0 || this.y >= 400 || this.y <= 0 || this.x >= 400){
                    this.vel *= -1;
                }
            break;

        }
        

    }

   
}