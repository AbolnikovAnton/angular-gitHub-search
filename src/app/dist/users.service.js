"use strict";
exports.__esModule = true;
exports.UsersService = void 0;
require("rxjs/add/operator/map");
var operators_1 = require("rxjs/operators");
var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
    }
    UsersService.prototype.getUser = function (username) {
        return this.http
            .get("https://api.github.com/users/" + username)
            .pipe(operators_1.map(function (response) { return response.json(); }));
    };
    return UsersService;
}());
exports.UsersService = UsersService;
