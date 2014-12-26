var CaptionMaker;
(function (CaptionMaker) {
    var Font = (function () {
        function Font() {
        }
        Font.prototype.render = function (context) {
            context.font = this.size + "px " + this.name;
            context.fillStyle = this.color;
            context.fillText(this.text, this.x, this.y);
        };
        return Font;
    })();
    CaptionMaker.Font = Font;
})(CaptionMaker || (CaptionMaker = {}));
var CaptionMaker;
(function (CaptionMaker) {
    var Image = (function () {
        function Image() {
            this.placeholder = document.createElement("img");
        }
        Object.defineProperty(Image.prototype, "src", {
            set: function (_src) {
                this.placeholder.src = _src;
            },
            enumerable: true,
            configurable: true
        });

        Image.prototype.render = function (context) {
            context.drawImage(this.placeholder, 0, 0);
        };
        return Image;
    })();
    CaptionMaker.Image = Image;
})(CaptionMaker || (CaptionMaker = {}));
var CaptionMaker;
(function (CaptionMaker) {
    var Renderer = (function () {
        function Renderer(canvas) {
            this.context = canvas.getContext('2d');
            this.width = canvas.width;
            this.height = canvas.height;
        }
        Renderer.prototype.render = function (callback) {
            var _this = this;
            var func = function () {
                _this.context.clearRect(0, 0, _this.width, _this.height);
                callback(_this.context);

                requestAnimationFrame(func);
            };

            func();
        };
        return Renderer;
    })();
    CaptionMaker.Renderer = Renderer;
})(CaptionMaker || (CaptionMaker = {}));
angular.module('CaptionMaker', []).controller('CaptionMakerController', [
    '$scope', function ($scope) {
        var canvas = $("#canvas")[0];
        $scope.renderer = new CaptionMaker.Renderer(canvas);
        $scope.image = new CaptionMaker.Image();
        $scope.font = new CaptionMaker.Font();

        $scope.image.src = 'images/caption0.jpg';

        $scope.renderer.render(function (context) {
            $scope.image.render(context);
            $scope.font.render(context);
        });

        $scope.fonts = [
            "sanserif",
            "serif",
            "Arial",
            "Meiryo",
            "MS UI Gothic",
            "MS Gothic",
            "MS Mincho",
            "Osaka",
            "Hiragino Kaku Gothic Pro",
            "Hiragino Maru Gothic Pro",
            "YuGothic",
            "Yu Gothic",
            "YuMincho",
            "Yu Mincho"
        ];
    }]);
//# sourceMappingURL=index.js.map
;
