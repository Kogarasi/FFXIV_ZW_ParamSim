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
{"version":3,"file":"index.js","sourceRoot":"","sources":["../../source_typescript/interface/surface.ts","../../source_typescript/font.ts","../../source_typescript/image.ts","../../source_typescript/renderer.ts","../../source_typescript/index.ts"],"names":["CaptionMaker","CaptionMaker.Font","CaptionMaker.Font.constructor","CaptionMaker.Font.render","CaptionMaker.Image","CaptionMaker.Image.constructor","CaptionMaker.Image.render","CaptionMaker.Renderer","CaptionMaker.Renderer.constructor","CaptionMaker.Renderer.render"],"mappings":"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"}
;
