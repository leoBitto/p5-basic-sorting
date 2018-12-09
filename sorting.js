class Visualsort{
    constructor(n){
        this.data = [];
        for(var i=0; i<n; i++){
            this.data.push(floor(random(0,height)));
        }
    }
    insertion(){
        for(var i=0; i<this.data.length; i++){
        //for(var i=this.data.length; i>0; i--){
            for(var j=i; j>=0; j--){
                if(this.data[j]<this.data[i]){
                    let t = this.data[j];
                    this.data[j] = this.data[i];
                    this.data[i] = t;
                }
                this.draw();
            }
        }
    }
    selection(){
        //for(var i=0; i<this.data.length; i++){
        for(var i=this.data.length; i>=0; i--){
            for(var j=i; j<this.data.length; j++){
                if(this.data[j]>this.data[i]){
                    let t = this.data[j];
                    this.data[j] = this.data[i];
                    this.data[i] = t;
                }
                this.draw();
            }
        }
    }
    bubble(){
        //for(var i=this.data.length; i>0; i--){
        for(var i=0; i<=this.data.length; i++){
            for(var j=0; j<i-1; j++){
                if(this.data[j+1]>this.data[j]){
                    let t = this.data[j+1];
                    this.data[j+1] = this.data[j];
                    this.data[j] = t;
                }
                this.draw();
            }
        }
    }
    draw(){
        let w = width/this.data.length;
        for(var i=0; i<this.data.length; i++){
            let value = this.data[i];
            fill(190);
            rect(w*i, height, w, -value);
        }
    }
}