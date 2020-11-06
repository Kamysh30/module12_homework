function ElectricDevices(name,mode,power){
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

    function ElectricKettle(name,brand,madeIn,power,mode){
        this.name = name;
        this.brand =  brand;
        this.madeIn = madeIn;
        this.power = power;
        this.mode = mode;
        this.getInfoMadeIn = function(){
            console.log(`это ${this.name} произведен в ${this.madeIn} компанией ${this.brand}`);
        }
    }


    ElectricKettle.prototype = new ElectricDevices();

    function MicrowaveOven(name,brand,color,madeIn,productionDate,power,mode){
        this.name = name;
        this.brand = brand;
        this.color = color;
        this.madeIn = madeIn;
        this.productionDate = productionDate;
        this.power = power;
        this.mode = mode;
        this.getProductionDate = function(){
            console.log(`это ${this.name} произведен в ${this.madeIn} компанией ${this.brand} в ${this.productionDate} году и имеет ${this.color} цвет`);
        }
    }
    MicrowaveOven.prototype = new ElectricDevices();

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