//module//Man2//
(function(window){
    function Man2(name){
        this.name = name;
        this.speak = function(){
            console.log('I can speak');
        };
        this.walk = function(){
            console.log(this.name + ' is walking ');
        };
    }
    window.Man2 = Man2;
})(window);
