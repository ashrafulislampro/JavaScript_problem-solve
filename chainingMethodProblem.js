let ladder = {
    step: 0,
    up(){
        return this.step++;
    },
    up(){
        return this.step++;
    }
    ,
    down(){
        return this.step--;
    },
    showStep: function(){
    alert(this.step);
    },
    down(){
        return this.step--;
    }
}
ladder.up().up();
// ladder.up();
ladder.showStep();
ladder.down();
ladder.showStep();
ladder.down();
ladder.showStep();