"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Player = (function () {
    function Player() {
    }
    Object.defineProperty(Player.prototype, "b64pic", {
        get: function () {
            return btoa(this.picture);
        },
        enumerable: true,
        configurable: true
    });
    return Player;
}());
exports.Player = Player;
//# sourceMappingURL=Player.js.map