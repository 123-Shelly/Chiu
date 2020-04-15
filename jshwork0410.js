let proDuct = 
{
  boxlunch: [
	  { name: "蒜香鹹酥雞便當",
			price: 85,
			kcal: 651 },
		{ name: "烤雞起司肉醬焗飯",
			price: 75,
			kcal: 578 },
		{ name: "鹹蛋黃炒飯",
			price: 85,
			kcal: 622 }
	],

  riceball: [
	  { name: "香鬆紫米風味飯糰",
		  price: 45,
		  kcal: 488 },
		{ name: "鮭魚海帶芽飯糰",
		  price: 33,
		  kcal: 187 },
		{ name: "蔥鹽燒肉飯糰",
		  price: 30,
		  kcal: 210 }
	],

  sandwich: [
	  { name: "招牌百匯三明治",
		  price: 69,
		  kcal: 298 },
		{ name: "焗烤起司鮪魚三明治",
		  price: 45,
		  kcal: 262 },
		{ name: "蛋沙拉三明治",
		  price: 39,
		  kcal: 295 }
	],

	bread: [
	  { name: "岩石巧克力風味麵包",
		  price: 39,
		  kcal: 440 },
		{ name: "蜜糖杏仁可頌",
		  price: 39,
		  kcal: 463 },
		{ name: "煉乳牛奶麵包",
		  price: 35,
		  kcal: 338 }
	],

	cafe: [
	  { name: "大杯熱美式",
		  price: 45,
		  kcal: 13,
		  spec: "large" },
		{ name: "中杯熱美式",
		  price: 35,
		  kcal: 10,
		  spec: "medium" },
		{ name: "大杯冰美式",
		  price: 45,
		  kcal: 16 ,
		  spec: "large" },
		{ name: "中杯冰美式",
		  price: 35,
		  kcal: 10,
		  spec: "medium" },
		{ name: "大杯熱拿鐵",
		  price: 55,
		  kcal: 182,
		  spec: "large" },
		{ name: "中杯熱拿鐵",
		  price: 45,
		  kcal: 132,
		  spec: "medium" },
		{ name: "大杯冰拿鐵",
		  price: 55,
		  kcal: 138,
		  spec: "large" },
		{ name: "中杯冰拿鐵",
		  price: 45,
		  kcal: 114,
		  spec: "medium" }
	]

}



// 飯糰同品項二件79折
function discountRiceball(x, name) {
	let p
	for (let f of proDuct.riceball){
		if(name == f.name){ 
		p = f.price
	  }
	}
	let y = Math.floor( x / 2)
  let z = x % 2
  let amount = Math.round( y * p * 2 * 0.79 + z * p * 1 )
  return amount
}

console.log(discountRiceball(5, "香鬆紫米風味飯糰" ));



// 三明治加中杯飲料特價79元
function discountBreakfast( nameone, nametwo) {
	for (let f of proDuct.sandwich){

		if(nameone == f.name){ 
			for (let f2 of proDuct.cafe){
				if(nametwo == f2.name && f2.spec == "medium"){ 
					return  79

				}
			} 
	  } else if(nametwo == f.name){
	  	for (let f2 of proDuct.cafe){
				if(nameone== f2.name && f2.spec == "medium"){ 
					return  79
				}
			}
		}else{
	    return "未折扣"
	  }
	}
}

console.log(discountBreakfast("招牌百匯三明治", "中杯冰美式" ));
console.log(discountBreakfast("蜜糖杏仁可頌", "中杯冰拿鐵" ));



// 便當搭配咖啡省10元
function discountBoxlunchCafe( nameone, nametwo ){
	let b
	let c
	for (let i of proDuct.boxlunch){
		if(nameone == i.name){
			for(let j of proDuct.cafe){
				if(nametwo == j.name){
				b = i.price + j.price - 10
			  return b
	      }
			}
	  }
		else if(nametwo == i.name){
		  for(let k of proDuct.cafe){
				if(nameone == k.name){
				c = i.price + k.price - 10
			  return c
	      } 
	    }
	  } 
  }

  return "未折扣"
}

console.log(discountBoxlunchCafe("大杯冰美式","蒜香鹹酥雞便當"));
console.log(discountBoxlunchCafe("烤雞起司肉醬焗飯","大杯冰美式"));
console.log(discountBoxlunchCafe("煉乳牛奶麵包","大杯冰美式"));


