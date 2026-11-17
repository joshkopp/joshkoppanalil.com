const {parse}=require('./voice-parse.js');
const cases=[
['send maya 20 for pizza','pay',20,['maya'],'🍕 Pizza'],
['Send $20 to Maya for pizza.','pay',20,['maya'],'🍕 Pizza'],
['pay jordan twenty five dollars','pay',25,['jordan'],''],
['Pay @jordan_r $12.50 for the movie tickets','pay',12.5,['jordan_r'],'🎟️ Movie tickets'],
['request twelve fifty from jordan','request',12.5,['jordan'],''],
['Request 40 dollars from Sam for groceries','request',40,['sam'],'🍽️ Groceries'],
['Maya owes me 15 for coffee','request',15,['maya'],'☕ Coffee'],
['split 60 for dinner with maya and jordan','split',60,['maya','jordan'],'🍽️ Dinner'],
['Split $90 with Maya, Jordan and Sam for the Airbnb','split',90,['maya','jordan','sam'],'✈️ Airbnb'],
["What's my balance?",'balance',null,[],''],
['how much money do i have','balance',null,[],''],
['who paid me','activity',null,[],''],
['Read my payments','activity',null,[],''],
['send a hundred and ten dollars to alex chen','pay',110,['alex chen'],''],
['give sam five hundred bucks for rent','pay',500,['sam'],'🏠 Rent'],
['send maya 5 dollars and 50 cents','pay',5.5,['maya'],''],
['venmo jordan 8','pay',8,['jordan'],''],
['Hey Monyx, can you send Priya 30 bucks for the Uber?','pay',30,['priya'],'🚗 Uber'],
['send maya money','pay',null,['maya'],''],
['tip alex 3.75','pay',3.75,['alex'],''],
['pay back jordan 1,200','pay',1200,['jordan'],''],
['send fifty cents to maya','pay',0.5,['maya'],''],
['request a couple bucks from maya','request',2,['maya'],''],
['charge sam 20','request',20,['sam'],''],
['What is the weather','unknown',null,['what is weather'],''],
['pay maya -5','pay',null,['maya'],''],
['add money','topup',null,[],''],
['top up my balance','topup',null,[],''],
];
let bad=0;
for(const [s,i,a,p,n] of cases){const r=parse(s);const ok=r.intent===i&&r.amount===a&&JSON.stringify(r.people)===JSON.stringify(p)&&r.note===n;if(!ok){bad++;console.log('FAIL',JSON.stringify(s),'→',JSON.stringify(r));}}
console.log(cases.length-bad,'/',cases.length,'pass');
