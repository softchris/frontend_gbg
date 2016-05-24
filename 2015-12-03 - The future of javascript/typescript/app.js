var ImportClass = (function () {
    function ImportClass() {
    }
    ImportClass.prototype.test = function () {
        console.log("test");
    };
    return ImportClass;
})();
///<reference path="External"/>
///<reference path="lib"/>
libadd(2, 2);
var p = new Point();
p.getX();

var Test = (function () {
    function Test() {
        this.prop = 11;
    }
    Test.prototype.test = function () {
        return 1;
    };
    return Test;
})();

var i = new ImportClass;
i.test();
//# sourceMappingURL=app.js.map
