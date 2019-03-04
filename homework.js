// -------------------------- Homework 16--------------------------
// -------------------------- Schcerbak Lyudmila --------------------------

// Задача 1. Создать наследника от Planet, который будет называться PlanetWithSatellite и будетпринимать, кроме name, название спутника (satelliteName). Переопределите методgetName для PlanetWithSatellite так, чтобы он возвращал ту же самую строчку +дополнительный текст 'The satellite is' + satelliteName.

/**
 * @desc Planet class
 * @param {string} name - Planet`s name
 */

function Planet(name) { 
    this.name = name; 
}

Planet.prototype.getName = function () {
    return 'Planet name is ' + this.name;
}

/**
 * @desc Planet and it's satellite class
 * @param {string} name - Planet`s name
 * @param {string} satelliteName - Satellite`s name
 */

function PlanetWithSatellite(name, satelliteName) {
    Planet.apply(this, arguments);
    this.satelliteName = satelliteName;
}

PlanetWithSatellite.prototype = Object.create(Planet.prototype);
PlanetWithSatellite.prototype.constructor = PlanetWithSatellite;

PlanetWithSatellite.prototype.getName = function() {
    let planetName = Planet.prototype.getName.apply(this);
    return planetName + '. The satellite is ' + this.satelliteName;
}

let earth = new PlanetWithSatellite('earth', 'moon');

// Задача 2. Создайте класс “Здание” (пусть у него будет имя, количество этажей, метод “получить количество этажей” и метод “установить количество этажей”). Создайте наследников этого класса: классы “Жилой дом” и “Торговый центр”. Используйте функциональное наследование  У жилого дома появится свойство “количество квартир на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 5, всегоКвартир: 5 * количествоКвартир} У торгового центра появится свойство “количество магазинов на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 3, всегоМагазинов: 3 * количествоМагазинов} От каждого класса создать экземпляр (дом, торговый центр)

/**
* @desc Building class
* @param {string} name - Building` name
* @param {number} numberOfFloors- Number`s of floors in this building
*/

function Building(name, numberOfFloors) {
    this.name = name;
    this.numberOfFloors = numberOfFloors;
}

Building.prototype.getNumberOfFloors = function () {
    return this.numberOfFloors;
}

Building.prototype.setNumberOfFloors = function (newNumberOfFloors) {
    this.numberOfFloors = newNumberOfFloors;
    return this.numberOfFloors;
}

/**
 * @desc House class
 * @param {string} name - House`s name
 * @param {number} numberOfFloors - Number of floors in the house
 * @param {number} numberOfFlats - Number of flats on the floor in the house
 */

function House(name, numberOfFloors, numberOfFlats) {
    Building.call(this, name, numberOfFloors);
    this.numberOfFloors = numberOfFloors;  
    this.numberOfFlats = numberOfFlats; 
    this.getNumberOfFloors = function () { 
        return { 
            floors: this.numberOfFloors,
            totalNumberOfFlats: this.numberOfFloors * this.numberOfFlats
        };
    }
}

let penthouse = new House('Penthouse', 9, 3);
console.log(penthouse.getNumberOfFloors());

/**
 * @desc Shopping center class
 * @param {string} name - Shopping center`s name
 * @param {number} numberOfFloors - Number of floors in the shopping center
 * @param {number} numberOfShops - Number of shops on the floor in the shopping center
 */

function ShoppingCenter(name, numberOfFloors, numberOfShops) {
    Building.call(this, name, numberOfFloors);
    this.numberOfFloors = numberOfFloors;
    this.numberOfShops = numberOfShops;
    this.getNumberOfFloors = function () {
        return {
            floors: this.numberOfFloors,
            totalNumberOfShops: this.numberOfFloors * this.numberOfShops
        };
    }
}

let rost = new ShoppingCenter('Rost', 5, 15);
console.log(rost.getNumberOfFloors());

// Задача 3. Создать класс “Мебель” с базовыми свойствами “имя”, “цена” и методом “получить информацию” (метод должен вывести имя и цену). Метод должен быть объявлен с помощью прототипов (Func.prototype...). Создать два экземпляра класса “Мебель”: экземпляр “ОфиснаяМебель” и “Мебель для дома”. Придумайте им по одному свойству, которые будут характерны только для этих экземпляров (например, для офисной мебели - наличие компьютерного стола или шредера). Метод “получить информацию” должен учитывать и добавленное вами новое свойство. Задача на переопределение метода у экземпляров класса.

/**
 * @desc Furniture class
 * @param {string} name - Furniture`s name
 * @param {number} price - Furniture`s price
 */

function Furniture(name, price) {
    this.name = name;
    this.price = price;
}

Furniture.prototype.getInformation = function () {
    return {
        "name of Futniture": this.name,
        "price of Furnitere": this.price
    };
}

/**
 * @desc Furniture for office class
 * @param {string} name - Furniture`s for office name
 * @param {number} price - Furniture`s for office price
 * @param {boolean} computerDesk - Has computer desk or no
 */

function FurnitureForOffice(name, price, computerDesk) {
    Furniture.call(this, name, price);
    this.name = name;
    this.price = price;
    this.computerDesk = computerDesk;

    FurnitureForOffice.prototype = Object.create(Furniture.prototype);
    FurnitureForOffice.prototype.constructor = FurnitureForOffice;
   
    this.getInformation = function () { 
        return { 
            "name of Futniture": this.name,
            "price of Furnitere": this.price,
            "existence of computer desk": this.computerDesk
        };
    }
}

let table = new FurnitureForOffice('office table', 199, true);
console.log(table.getInformation());

/**
 * @desc furniture for home class
 * @param {string} name - Furniture`s for home name
 * @param {number} price - Furniture`s for home price
 * @param {boolean} childrenBed - Has children bed or no
 */

function FurnitureForHome(name, price, childrenBed) {
    Furniture.call(this, name, price);
    this.name = name;
    this.price = price;
    this.childrenBed = childrenBed;

    FurnitureForHome.prototype = Object.create(Furniture.prototype);
    FurnitureForHome.prototype.constructor = FurnitureForHome;

    this.getInformation = function () { 
        return { 
            "name of Futniture": this.name,
            "price of Furnitere": this.price,
            "existence of children`s bed": this.childrenBed
        };
    }
}

let cupboard = new FurnitureForHome('cupboard', 1909, true);
console.log(cupboard.getInformation());

// Задача 4. Создать класс “Пользователь” с базовыми свойствами “имя”, “дата регистрации” и методом “получить информацию” (метод должен вывести имя и дату регистрации). Метод должен быть объявлен с помощью прототипов (Func.prototype...) Создать два наследника класса “Пользователь”: класс “Админ” и класс “Гость”. У класса “Админ” должно быть дополнительное свойство “суперАдмин” (может быть true/false, должно быть скрытым). Свойства определяются в момент вызова конструктора. У класса “Гость” должно быть свойство “срокДействия” (validDate, например), содержащее дату (например, одну неделю от момента регистрации). У классов-наследников метод “получить информацию” должен так же содержать информацию о дополнительных свойствах (“суперАдмин” и “срокДействия”)

/**
* @desc User class
* @param {string} name - User`s name
* @param {date} dateOfRegistration - Date of registration
*/

function User(name) {
    this.name = name;
    this.dateOfRegistration = new Date(Date.now());
}

User.prototype.getInformation = function () {
    return {
        "name": this.name,
        "date of registration": this.dateOfRegistration
    };
}

/**
 * @desc Admin class
 * @param {string} name - Admin`s name
 * @param {date} dateOfRegistration - Date of registration
 * @param {boolean} superAdmin - Has super admin rights or no
 */

function Admin(name, superAdmin) {
    User.call(this, name);
    this.name = name;
    this._superAdmin = superAdmin;
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

Admin.prototype.getInformation = function () {
    let information = User.prototype.getInformation.call(this);
    information.superAdmin = this._superAdmin;
    return information;
}

let ivanov = new Admin('Ivan', true);
console.log(ivanov.getInformation());

/**
 * @desc Guest class
 * @param {string} name - Guest`s name
 * @param {date} dateOfRegistration - Date of registration
 * @param {date} validDate - Period of validity
 */

function Guest(name) {
    User.call(this, name);
}

Guest.prototype = Object.create(User.prototype);
Guest.prototype.constructor = Guest;

Guest.prototype.getInformation = function () {
    let information = User.prototype.getInformation.call(this);
    let nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);
    information.validDate = nextWeek;
    return information;
}

let user20 = new Guest('Maks');
console.log(user20.getInformation());