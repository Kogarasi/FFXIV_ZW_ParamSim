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
            this.zw_new = new ZWSim.Parameter();
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
            this.zw_new.reset();

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

            this.zw.acc = Math.floor((this.data.zw.acc - this.data.novus.acc) * (this.now.acc / this.max.acc));
            this.zw.cri = Math.floor((this.data.zw.cri - this.data.novus.cri) * (this.now.cri / this.max.cri));
            this.zw.deter = Math.floor((this.data.zw.deter - this.data.novus.deter) * (this.now.deter / this.max.deter));
            this.zw.parry = Math.floor((this.data.zw.parry - this.data.novus.parry) * (this.now.parry / this.max.parry));
            this.zw.skill = Math.floor((this.data.zw.skill - this.data.novus.skill) * (this.now.skill / this.max.skill));
            this.zw.spell = Math.floor((this.data.zw.spell - this.data.novus.spell) * (this.now.spell / this.max.spell));
            this.zw.pie = Math.floor((this.data.zw.pie - this.data.novus.pie) * (this.now.pie / this.max.pie));

            this.zw_new.acc = Math.floor((this.data.zw_new.acc - this.data.novus.acc) * (this.now.acc / this.max.acc));
            this.zw_new.cri = Math.floor((this.data.zw_new.cri - this.data.novus.cri) * (this.now.cri / this.max.cri));
            this.zw_new.deter = Math.floor((this.data.zw_new.deter - this.data.novus.deter) * (this.now.deter / this.max.deter));
            this.zw_new.parry = Math.floor((this.data.zw_new.parry - this.data.novus.parry) * (this.now.parry / this.max.parry));
            this.zw_new.skill = Math.floor((this.data.zw_new.skill - this.data.novus.skill) * (this.now.skill / this.max.skill));
            this.zw_new.spell = Math.floor((this.data.zw_new.spell - this.data.novus.spell) * (this.now.spell / this.max.spell));
            this.zw_new.pie = Math.floor((this.data.zw_new.pie - this.data.novus.pie) * (this.now.pie / this.max.pie));

            this.zw_new.acc -= this.zw.acc;
            this.zw_new.cri -= this.zw.cri;
            this.zw_new.deter -= this.zw.deter;
            this.zw_new.parry -= this.zw.parry;
            this.zw_new.skill -= this.zw.skill;
            this.zw_new.spell -= this.zw.spell;
            this.zw_new.pie -= this.zw.pie;

            this.zw.acc -= this.nexus.acc;
            this.zw.cri -= this.nexus.cri;
            this.zw.deter -= this.nexus.deter;
            this.zw.parry -= this.nexus.parry;
            this.zw.skill -= this.nexus.skill;
            this.zw.spell -= this.nexus.spell;
            this.zw.pie -= this.nexus.pie;
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
