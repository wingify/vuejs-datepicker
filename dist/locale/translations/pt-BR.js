var Language=function(t,e,o,r){this.language=t,this.months=e,this.monthsAbbr=o,this.days=r,this.rtl=!1,this.ymd=!1,this.yearSuffix=""},prototypeAccessors={language:{configurable:!0},months:{configurable:!0},monthsAbbr:{configurable:!0},days:{configurable:!0}};prototypeAccessors.language.get=function(){return this._language},prototypeAccessors.language.set=function(t){if("string"!=typeof t)throw new TypeError("Language must be a string");this._language=t},prototypeAccessors.months.get=function(){return this._months},prototypeAccessors.months.set=function(t){if(12!==t.length)throw new RangeError("There must be 12 months for "+this.language+" language");this._months=t},prototypeAccessors.monthsAbbr.get=function(){return this._monthsAbbr},prototypeAccessors.monthsAbbr.set=function(t){if(12!==t.length)throw new RangeError("There must be 12 abbreviated months for "+this.language+" language");this._monthsAbbr=t},prototypeAccessors.days.get=function(){return this._days},prototypeAccessors.days.set=function(t){if(7!==t.length)throw new RangeError("There must be 7 days for "+this.language+" language");this._days=t},Object.defineProperties(Language.prototype,prototypeAccessors);var ptBR=new Language("Brazilian",["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],["Dom","Seg","Ter","Qua","Qui","Sex","Sab"]);export default ptBR;
