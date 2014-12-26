var ZWSim;
(function (ZWSim) {
    var Weapon = (function () {
        function Weapon() {
            this.acc = 0;
            this.cri = 0;
            this.deter = 0;
            this.parry = 0;
            this.pie = 0;
            this.skill = 0;
            this.spell = 0;

            this.link = undefined;
        }
        Weapon.prototype.set = function (json) {
            this.il = json.il;
            this.max_acc = json.acc;
            this.max_cri = json.cri;
            this.max_deter = json.deter;
            this.max_parry = json.parry;
            this.max_pie = json.pie;
            this.max_skill = json.skill;
            this.max_spell = json.spell;
        };

        Weapon.prototype.sum = function () {
            return this.acc + this.cri + this.deter + this.parry + this.pie + this.skill + this.spell;
        };

        Weapon.prototype.link_to = function (link) {
            this.link = link;
        };

        Weapon.prototype.refresh = function () {
            if (this.link != undefined) {
                this.link.assoc(this);
                this.link.refresh();
            }
        };

        Weapon.prototype.assoc = function (from) {
            this.acc = Math.floor(from.acc * this.max_acc / from.max_acc);
            this.cri = Math.floor(from.cri * this.max_cri / from.max_cri);
            this.deter = Math.floor(from.deter * this.max_deter / from.max_deter);
            this.parry = Math.floor(from.parry * this.max_parry / from.max_parry);
            this.pie = Math.floor(from.pie * this.max_pie / from.max_pie);
            this.skill = Math.floor(from.skill * this.max_skill / from.max_skill);
            this.spell = Math.floor(from.spell * this.max_spell / from.max_spell);

            var _rate = this.il / from.il;
            this.acc = Math.floor(from.acc * _rate);
            this.cri = Math.floor(from.cri * _rate);
            this.deter = Math.floor(from.deter * _rate);
            this.parry = Math.floor(from.parry * _rate);
            this.pie = Math.floor(from.pie * _rate);
            this.skill = Math.floor(from.skill * _rate);
            this.spell = Math.floor(from.spell * _rate);
        };
        return Weapon;
    })();
    ZWSim.Weapon = Weapon;
})(ZWSim || (ZWSim = {}));
angular.module('ZWSim', []).controller('ZWSimController', [
    '$scope', '$http', function ($scope, $http) {
        var $uri = "parameters.json";

        $scope.novus = new ZWSim.Weapon();
        $scope.nexus = new ZWSim.Weapon();
        $scope.zw = new ZWSim.Weapon();

        $scope.novus.link_to($scope.nexus);
        $scope.nexus.link_to($scope.zw);

        $http({
            method: 'GET',
            url: $uri
        }).success(function (data, status, header, config) {
            $scope.novus.set(data.novus);
            $scope.nexus.set(data.nexus);
            $scope.zw.set(data.zw);
        });
    }]);
//# sourceMappingURL=index.js.map
;
{"version":3,"file":"index.js","sourceRoot":"","sources":["../../source_typescript/weapon.ts","../../source_typescript/index.ts"],"names":["ZWSim","ZWSim.Weapon","ZWSim.Weapon.constructor","ZWSim.Weapon.set","ZWSim.Weapon.sum","ZWSim.Weapon.link_to","ZWSim.Weapon.refresh","ZWSim.Weapon.assoc"],"mappings":"AAAA,IAAO,KAAK;AA8EX,CA9ED,UAAO,KAAK;IACXA;QAoBCC;YACCC,IAAIA,CAACA,GAAGA,GAAGA,CAACA;YACZA,IAAIA,CAACA,GAAGA,GAAGA,CAACA;YACZA,IAAIA,CAACA,KAAKA,GAAGA,CAACA;YACdA,IAAIA,CAACA,KAAKA,GAAGA,CAACA;YACdA,IAAIA,CAACA,GAAGA,GAAGA,CAACA;YACZA,IAAIA,CAACA,KAAKA,GAAGA,CAACA;YACdA,IAAIA,CAACA,KAAKA,GAAGA,CAACA;;YAEdA,IAAIA,CAACA,IAAIA,GAAGA,SAASA;QACtBA,CAACA;QAEDD,uBAAAA,UAAKA,IAAIA;YACRE,IAAIA,CAACA,EAAEA,GAAGA,IAAIA,CAACA,EAAEA;YACjBA,IAAIA,CAACA,OAAOA,GAAGA,IAAIA,CAACA,GAAGA;YACvBA,IAAIA,CAACA,OAAOA,GAAGA,IAAIA,CAACA,GAAGA;YACvBA,IAAIA,CAACA,SAASA,GAAGA,IAAIA,CAACA,KAAKA;YAC3BA,IAAIA,CAACA,SAASA,GAAGA,IAAIA,CAACA,KAAKA;YAC3BA,IAAIA,CAACA,OAAOA,GAAGA,IAAIA,CAACA,GAAGA;YACvBA,IAAIA,CAACA,SAASA,GAAGA,IAAIA,CAACA,KAAKA;YAC3BA,IAAIA,CAACA,SAASA,GAAGA,IAAIA,CAACA,KAAKA;QAC5BA,CAACA;;QAEDF,uBAAAA;YACCG,OAAOA,IAAIA,CAACA,GAAGA,GAAGA,IAAIA,CAACA,GAAGA,GAAGA,IAAIA,CAACA,KAAKA,GAAGA,IAAIA,CAACA,KAAKA,GAAGA,IAAIA,CAACA,GAAGA,GAAGA,IAAIA,CAACA,KAAKA,GAAGA,IAAIA,CAACA,KAAKA;QAC1FA,CAACA;;QAEDH,2BAAAA,UAASA,IAAYA;YACpBI,IAAIA,CAACA,IAAIA,GAAGA,IAAIA;QACjBA,CAACA;;QAEDJ,2BAAAA;YACCK,IAAIA,IAAIA,CAACA,IAAIA,IAAIA,SAASA,CAAEA;gBAC3BA,IAAIA,CAACA,IAAIA,CAACA,KAAKA,CAAEA,IAAIA,CAAEA;gBACvBA,IAAIA,CAACA,IAAIA,CAACA,OAAOA,CAACA,CAACA;aACnBA;QACFA,CAACA;;QAEDL,yBAAAA,UAAOA,IAAWA;YACjBM,IAAIA,CAACA,GAAGA,GAAGA,IAAIA,CAACA,KAAKA,CAAEA,IAAIA,CAACA,GAAGA,GAAGA,IAAIA,CAACA,OAAOA,GAAGA,IAAIA,CAACA,OAAOA,CAAEA;YAC/DA,IAAIA,CAACA,GAAGA,GAAGA,IAAIA,CAACA,KAAKA,CAAEA,IAAIA,CAACA,GAAGA,GAAGA,IAAIA,CAACA,OAAOA,GAAGA,IAAIA,CAACA,OAAOA,CAAEA;YAC/DA,IAAIA,CAACA,KAAKA,GAAGA,IAAIA,CAACA,KAAKA,CAAEA,IAAIA,CAACA,KAAKA,GAAGA,IAAIA,CAACA,SAASA,GAAGA,IAAIA,CAACA,SAASA,CAAEA;YACvEA,IAAIA,CAACA,KAAKA,GAAGA,IAAIA,CAACA,KAAKA,CAAEA,IAAIA,CAACA,KAAKA,GAAGA,IAAIA,CAACA,SAASA,GAAGA,IAAIA,CAACA,SAASA,CAAEA;YACvEA,IAAIA,CAACA,GAAGA,GAAGA,IAAIA,CAACA,KAAKA,CAAEA,IAAIA,CAACA,GAAGA,GAAGA,IAAIA,CAACA,OAAOA,GAAGA,IAAIA,CAACA,OAAOA,CAAEA;YAC/DA,IAAIA,CAACA,KAAKA,GAAGA,IAAIA,CAACA,KAAKA,CAAEA,IAAIA,CAACA,KAAKA,GAAGA,IAAIA,CAACA,SAASA,GAAGA,IAAIA,CAACA,SAASA,CAAEA;YACvEA,IAAIA,CAACA,KAAKA,GAAGA,IAAIA,CAACA,KAAKA,CAAEA,IAAIA,CAACA,KAAKA,GAAGA,IAAIA,CAACA,SAASA,GAAGA,IAAIA,CAACA,SAASA,CAAEA;;YAEvEA,IAAIA,KAAKA,GAAWA,IAAIA,CAACA,EAAEA,GAAGA,IAAIA,CAACA,EAAEA;YACrCA,IAAIA,CAACA,GAAGA,GAAGA,IAAIA,CAACA,KAAKA,CAAEA,IAAIA,CAACA,GAAGA,GAAGA,KAAKA,CAAEA;YACzCA,IAAIA,CAACA,GAAGA,GAAGA,IAAIA,CAACA,KAAKA,CAAEA,IAAIA,CAACA,GAAGA,GAAGA,KAAKA,CAAEA;YACzCA,IAAIA,CAACA,KAAKA,GAAGA,IAAIA,CAACA,KAAKA,CAAEA,IAAIA,CAACA,KAAKA,GAAGA,KAAKA,CAAEA;YAC7CA,IAAIA,CAACA,KAAKA,GAAGA,IAAIA,CAACA,KAAKA,CAAEA,IAAIA,CAACA,KAAKA,GAAGA,KAAKA,CAAEA;YAC7CA,IAAIA,CAACA,GAAGA,GAAGA,IAAIA,CAACA,KAAKA,CAAEA,IAAIA,CAACA,GAAGA,GAAGA,KAAKA,CAAEA;YACzCA,IAAIA,CAACA,KAAKA,GAAGA,IAAIA,CAACA,KAAKA,CAAEA,IAAIA,CAACA,KAAKA,GAAGA,KAAKA,CAAEA;YAC7CA,IAAIA,CAACA,KAAKA,GAAGA,IAAIA,CAACA,KAAKA,CAAEA,IAAIA,CAACA,KAAKA,GAAGA,KAAKA,CAAEA;QAC9CA,CAACA;QACFN,cAACA;IAADA,CAACA,IAAAD;IA5EDA,sBA4ECA;AACFA,CAACA,yBAAA;AC1ED,OAAO,CAAC,MAAM,CAAE,OAAO,EAAE,EAAE,CAAE,CAC3B,UAAU,CAAE,iBAAiB,EAAE;IAAE,QAAQ,EAAE,OAAO,EAAE,UAAE,MAAM,EAAE,KAAK;QACnE,IAAI,IAAI,GAAG,iBAAiB;;QAE5B,MAAM,CAAC,KAAK,GAAG,IAAI,KAAK,CAAC,MAAM,CAAC,CAAC;QACjC,MAAM,CAAC,KAAK,GAAG,IAAI,KAAK,CAAC,MAAM,CAAC,CAAC;QACjC,MAAM,CAAC,EAAE,GAAG,IAAI,KAAK,CAAC,MAAM,CAAC,CAAC;;QAE9B,MAAM,CAAC,KAAK,CAAC,OAAO,CAAE,MAAM,CAAC,KAAK,CAAE;QACpC,MAAM,CAAC,KAAK,CAAC,OAAO,CAAE,MAAM,CAAC,EAAE,CAAE;;QAEjC,KAAK,CAAC;YACL,MAAM,EAAE,KAAK;YACb,GAAG,EAAE,IAAI;SACT,CAAC,CAAC,OAAO,CAAE,UAAU,IAAI,EAAE,MAAM,EAAE,MAAM,EAAE,MAAM;YACjD,MAAM,CAAC,KAAK,CAAC,GAAG,CAAE,IAAI,CAAC,KAAK,CAAE;YAC9B,MAAM,CAAC,KAAK,CAAC,GAAG,CAAE,IAAI,CAAC,KAAK,CAAE;YAC9B,MAAM,CAAC,EAAE,CAAC,GAAG,CAAE,IAAI,CAAC,EAAE,CAAE;QACzB,CAAC,CAAC;IAEH,CAAC,CAAC,CAAC"}
;
