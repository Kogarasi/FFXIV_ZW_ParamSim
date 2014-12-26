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
