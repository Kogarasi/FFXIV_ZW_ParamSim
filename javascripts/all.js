var ZWSim;
(function (ZWSim) {
    var Parameter = (function () {
        function Parameter() {
            this.reset();
        }
        Parameter.prototype.reset = function () {
            this.acc = 0;
            this.cri = 0;
            this.deter = 0;
            this.parry = 0;
            this.pie = 0;
            this.skill = 0;
            this.spell = 0;
        };
        return Parameter;
    })();
    ZWSim.Parameter = Parameter;
})(ZWSim || (ZWSim = {}));
var ZWSim;
(function (ZWSim) {
    var Weapon = (function () {
        function Weapon() {
            this.now = new ZWSim.Parameter();
            this.max = new ZWSim.Parameter();
            this.nexus = new ZWSim.Parameter();
            this.zw = new ZWSim.Parameter();
        }
        Weapon.prototype.set = function (json) {
            this.max.acc = json.novus.acc;
            this.max.cri = json.novus.cri;
            this.max.deter = json.novus.deter;
            this.max.parry = json.novus.parry;
            this.max.pie = json.novus.pie;
            this.max.skill = json.novus.skill;
            this.max.spell = json.novus.spell;

            this.now.reset();
            this.nexus.reset();
            this.zw.reset();

            this.data = json;
        };

        Weapon.prototype.compute = function () {
            this.nexus.acc = Math.floor((this.data.nexus.acc - this.data.novus.acc) * (this.now.acc / this.max.acc));
            this.nexus.cri = Math.floor((this.data.nexus.cri - this.data.novus.cri) * (this.now.cri / this.max.cri));
            this.nexus.deter = Math.floor((this.data.nexus.deter - this.data.novus.deter) * (this.now.deter / this.max.deter));
            this.nexus.parry = Math.floor((this.data.nexus.parry - this.data.novus.parry) * (this.now.parry / this.max.parry));
            this.nexus.skill = Math.floor((this.data.nexus.skill - this.data.novus.skill) * (this.now.skill / this.max.skill));
            this.nexus.spell = Math.floor((this.data.nexus.spell - this.data.novus.spell) * (this.now.spell / this.max.spell));
            this.nexus.pie = Math.floor((this.data.nexus.pie - this.data.novus.pie) * (this.now.pie / this.max.pie));

            this.zw.acc = Math.floor((this.data.zw.acc - this.data.novus.acc) * (this.now.acc / this.max.acc));
            this.zw.cri = Math.floor((this.data.zw.cri - this.data.novus.cri) * (this.now.cri / this.max.cri));
            this.zw.deter = Math.floor((this.data.zw.deter - this.data.novus.deter) * (this.now.deter / this.max.deter));
            this.zw.parry = Math.floor((this.data.zw.parry - this.data.novus.parry) * (this.now.parry / this.max.parry));
            this.zw.skill = Math.floor((this.data.zw.skill - this.data.novus.skill) * (this.now.skill / this.max.skill));
            this.zw.spell = Math.floor((this.data.zw.spell - this.data.novus.spell) * (this.now.spell / this.max.spell));
            this.zw.pie = Math.floor((this.data.zw.pie - this.data.novus.pie) * (this.now.pie / this.max.pie));
        };
        return Weapon;
    })();
    ZWSim.Weapon = Weapon;
})(ZWSim || (ZWSim = {}));
angular.module('ZWSim', []).controller('ZWSimController', [
    '$scope', '$http', function ($scope, $http) {
        var $uri = "parameters.json";

        $scope.weapon = new ZWSim.Weapon();
        $scope.weapon_type = "dps";

        $scope.type_changed = function () {
            $scope.weapon.set($scope.param[$scope.weapon_type]);
        };

        $http({
            method: 'GET',
            url: $uri
        }).success(function (data, status, header, config) {
            $scope.param = data;
            $scope.type_changed();
        });
    }]);
//# sourceMappingURL=index.js.map
;
{"version":3,"file":"index.js","sourceRoot":"","sources":["../../source_typescript/parameter.ts","../../source_typescript/weapon.ts","../../source_typescript/index.ts"],"names":["ZWSim","ZWSim.Parameter","ZWSim.Parameter.constructor","ZWSim.Parameter.reset","ZWSim.Weapon","ZWSim.Weapon.constructor","ZWSim.Weapon.set","ZWSim.Weapon.compute"],"mappings":"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CAAEA,CAACA,IAAIA,CAACA,IAAIA,CAACA,EAAEA,CAACA,GAAGA,GAACA,IAAIA,CAACA,IAAIA,CAACA,KAAKA,CAACA,GAAGA,CAACA,GAAGA,CAACA,IAAIA,CAACA,GAAGA,CAACA,GAAGA,GAACA,IAAIA,CAACA,GAAGA,CAACA,GAAGA,CAACA,CAAEA;YAChGA,IAAIA,CAACA,EAAEA,CAACA,KAAKA,GAAGA,IAAIA,CAACA,KAAKA,CAAEA,CAACA,IAAIA,CAACA,IAAIA,CAACA,EAAEA,CAACA,KAAKA,GAACA,IAAIA,CAACA,IAAIA,CAACA,KAAKA,CAACA,KAAKA,CAACA,GAAGA,CAACA,IAAIA,CAACA,GAAGA,CAACA,KAAKA,GAACA,IAAIA,CAACA,GAAGA,CAACA,KAAKA,CAACA,CAAEA;YAC1GA,IAAIA,CAACA,EAAEA,CAACA,KAAKA,GAAGA,IAAIA,CAACA,KAAKA,CAAEA,CAACA,IAAIA,CAACA,IAAIA,CAACA,EAAEA,CAACA,KAAKA,GAACA,IAAIA,CAACA,IAAIA,CAACA,KAAKA,CAACA,KAAKA,CAACA,GAAGA,CAACA,IAAIA,CAACA,GAAGA,CAACA,KAAKA,GAACA,IAAIA,CAACA,GAAGA,CAACA,KAAKA,CAACA,CAAEA;YAC1GA,IAAIA,CAACA,EAAEA,CAACA,KAAKA,GAAGA,IAAIA,CAACA,KAAKA,CAAEA,CAACA,IAAIA,CAACA,IAAIA,CAACA,EAAEA,CAACA,KAAKA,GAACA,IAAIA,CAACA,IAAIA,CAACA,KAAKA,CAACA,KAAKA,CAACA,GAAGA,CAACA,IAAIA,CAACA,GAAGA,CAACA,KAAKA,GAACA,IAAIA,CAACA,GAAGA,CAACA,KAAKA,CAACA,CAAEA;YAC1GA,IAAIA,CAACA,EAAEA,CAACA,KAAKA,GAAGA,IAAIA,CAACA,KAAKA,CAAEA,CAACA,IAAIA,CAACA,IAAIA,CAACA,EAAEA,CAACA,KAAKA,GAACA,IAAIA,CAACA,IAAIA,CAACA,KAAKA,CAACA,KAAKA,CAACA,GAAGA,CAACA,IAAIA,CAACA,GAAGA,CAACA,KAAKA,GAACA,IAAIA,CAACA,GAAGA,CAACA,KAAKA,CAACA,CAAEA;YAC1GA,IAAIA,CAACA,EAAEA,CAACA,GAAGA,GAAGA,IAAIA,CAACA,KAAKA,CAAEA,CAACA,IAAIA,CAACA,IAAIA,CAACA,EAAEA,CAACA,GAAGA,GAACA,IAAIA,CAACA,IAAIA,CAACA,KAAKA,CAACA,GAAGA,CAACA,GAAGA,CAACA,IAAIA,CAACA,GAAGA,CAACA,GAAGA,GAACA,IAAIA,CAACA,GAAGA,CAACA,GAAGA,CAACA,CAAEA;QACjGA,CAACA;QACFH,cAACA;IAADA,CAACA,IAAAJ;IAjDDA,sBAiDCA;AACFA,CAACA,yBAAA;ACjDD,OAAO,CAAC,MAAM,CAAE,OAAO,EAAE,EAAE,CAAE,CAC3B,UAAU,CAAE,iBAAiB,EAAE;IAAE,QAAQ,EAAE,OAAO,EAAE,UAAE,MAAM,EAAE,KAAK;QACnE,IAAI,IAAI,GAAG,iBAAiB;;QAE5B,MAAM,CAAC,MAAM,GAAG,IAAI,KAAK,CAAC,MAAM,CAAC,CAAC;QAClC,MAAM,CAAC,WAAW,GAAG,KAAK;;QAE1B,MAAM,CAAC,YAAY,GAAG;YACrB,MAAM,CAAC,MAAM,CAAC,GAAG,CAAE,MAAM,CAAC,KAAK,CAAE,MAAM,CAAC,WAAW,CAAE,CAAE;QACxD,CAAC;;QAED,KAAK,CAAC;YACL,MAAM,EAAE,KAAK;YACb,GAAG,EAAE,IAAI;SACT,CAAC,CAAC,OAAO,CAAE,UAAU,IAAI,EAAE,MAAM,EAAE,MAAM,EAAE,MAAM;YAEjD,MAAM,CAAC,KAAK,GAAG,IAAI;YACnB,MAAM,CAAC,YAAY,CAAC,CAAC;QACtB,CAAC,CAAC;IAEH,CAAC,CAAC,CAAC"}
;
