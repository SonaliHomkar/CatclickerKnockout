/*=============== Model =============*/
var cats = [
    {
        clickCount: 0,
        name: 'Tabby',
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
        imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
        nickName: ['Tilu', 'cutie', 'piti']
    },
    {
        clickCount: 0,
        name: 'Tiger',
        imgSrc: 'img/4154543904_6e2428c421_z.jpg',
        imgAttribution: 'https://www.flickr.com/photos/xshamx/4154543904',
        nickName: ['Pilu', 'sweeto', 'cutoo']
    },
    {
        clickCount: 0,
        name: 'Scaredy',
        imgSrc: 'img/22252709_010df3379e_z.jpg',
        imgAttribution: 'https://www.flickr.com/photos/kpjas/22252709',
        nickName: ['Silu', 'babloo', 'tabloo']
    },
    {
        clickCount: 0,
        name: 'Shadow',
        imgSrc: 'img/1413379559_412a540d29_z.jpg',
        imgAttribution: 'https://www.flickr.com/photos/malfet/1413379559',
        nickName: ['Chilu', 'zzzzz', 'myav']
    },
    {
        clickCount: 0,
        name: 'Sleepy',
        imgSrc: 'img/9648464288_2516b35537_z.jpg',
        imgAttribution: 'https://www.flickr.com/photos/onesharp/9648464288',
        nickName: ['Milu', 'tilli', 'duli']
    }
]

    




/*========= ViewModel ==========*/
var Cat = function (data) {
    // set our current cat to the first one in the list
    this.clickCount = data.clickCount;
    this.name = data.name;
    this.imgSrc = data.imgSrc;
    this.nickName = data.nickName;

    this.title = ko.computed(function () {
        var title;
        var count;
        count = data.clickCount;
        if (count < 10) {
            title = "NewBorn";
        }
        else if (count < 20) {
            title = "Teen";
        }
        else if (count < 30) {
            title = "Adult";
        }
        else {
            title = "Ninja";
        }
        return title;

    }, this);

};

var ViewModel = function (){
    var self = this;
    this.catList = ko.observableArray([]);
    
    cats.forEach(function (catItem) {
        self.catList.push(new Cat(catItem));
    });
    this.currentCat = ko.observable(this.catList()[0]);
       
    //this.catList[0])
  
    
    
    this.incrementCount = function () {
        //self.currentCat().clickCount(self.currentCat().clickCount() + 1);
        //this.currentCat().clickCount(this.currentCat().clickCount() + 1);
        //this.clickCount(this.clickCount() + 1);
        //self.clickCount(self.clickCount() + 1);
        alert(self.clickCount() + 1);
    };

    this.setCat = function (clickedCat) {
        self.currentCat(clickedCat);
    };



}
ko.applyBindings(new ViewModel());

    