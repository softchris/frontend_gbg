
///<reference path="External"/>
///<reference path="lib"/>



libadd(2, 2);
var p = new Point();
p.getX();

interface ITest{
	test2(): number;
}

class Test implements ITest{
	prop: number;
	constructor(){
		this.prop = 11;
	}

	test():number{
		return 1;		
	}

	test2(){
		return 1;
	}

}

var i = new ImportClass;
i.test();
