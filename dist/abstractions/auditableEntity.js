"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const appbaseEntity_1 = require("./appbaseEntity");
const class_validator_1 = require("class-validator");
class AuditableEntity extends appbaseEntity_1.AppBaseEntity {
}
__decorate([
    typeorm_1.Column(),
    class_validator_1.IsIP(),
    __metadata("design:type", String)
], AuditableEntity.prototype, "ipUpdate", void 0);
exports.AuditableEntity = AuditableEntity;
//# sourceMappingURL=auditableEntity.js.map