class ElectricDevices{
    constructor(name,mode,power){
    this.name = name;
    this.mode = mode;
    this.power = power;
    this.getPower = function(){
        if(this.mode == 1){
            console.log(`это ${this.name} потребляет ${this.power} ватт`);
        }else{
            console.log(`Устройство ${this.name} не подключено к сети`);
        }
    }

    this.getMode = function(){
        if(this.mode == 1){
            console.log(`Устройство ${this.name} включено в сеть`)
        }else{
            console.log(`Устройство ${this.name} не включено в сеть`)
        }
    }

    this.flagOn = function(){
        this.mode = 1;
    }

    this.flagOff = function(){
        this.mode = 0;
    }
}
}
    class ElectricKettle extends ElectricDevices{
        constructor(name,brand,madeIn,power,mode){
        super(name,mode,power);
        this.brand =  brand;
        this.madeIn = madeIn;
        
        
        this.getInfoMadeIn = function(){
            console.log(`это ${this.name} произведен в ${this.madeIn} компанией ${this.brand}`);
        }
    }
    }

    

    class MicrowaveOven extends ElectricDevices{
        constructor(name,brand,color,madeIn,productionDate,power,mode){
       super(name,mode,power);
        this.brand = brand;
        this.color = color;
        this.madeIn = madeIn;
        this.productionDate = productionDate;
      
        
        this.getProductionDate = function(){
            console.log(`это ${this.name} произведен в ${this.madeIn} компанией ${this.brand} в ${this.productionDate} году и имеет ${this.color} цвет`);
        }
    }
}
    

    const electricKettle = new ElectricKettle('Электрический чайник','Home Club','China','600','1');
    const microwaveOven = new MicrowaveOven('Микроволновая печь','Midea','Белый','Belarus','2018','1200','0');

    electricKettle.getMode();
    electricKettle.getPower();
    electricKettle.flagOn();
    
    electricKettle.getInfoMadeIn();
    
    microwaveOven.getMode();
   
    microwaveOven.getProductionDate();

    function powerConsumption(...obj){
        let consumption = 0;
        for(let i = 0; i < obj.length; i++){
            if(obj[i]['mode'] == 1){
                consumption += obj[i]['power'];
            }
        }
        console.log(`расход энергии : ${consumption} ватт`)
    }
    powerConsumption(electricKettle,microwaveOven);