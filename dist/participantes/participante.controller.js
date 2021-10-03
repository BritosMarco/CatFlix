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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticipanteController = void 0;
const common_1 = require("@nestjs/common");
const create_participante_dto_1 = require("./dto/create.participante.dto");
const participante_service_1 = require("./participante.service");
let ParticipanteController = class ParticipanteController {
    constructor(participanteService) {
        this.participanteService = participanteService;
    }
    async findMany() {
        return this.participanteService.listAllParticipante();
    }
    async create(createParticipante) {
        return this.participanteService.createParticipante(createParticipante);
    }
    async update(updateParticipante, id) {
        return this.participanteService.updateOneParticipante(id, updateParticipante);
    }
    async delete(id) {
        return this.participanteService.deleteOneParticipante({ id: Number(id) });
    }
};
__decorate([
    (0, common_1.Get)('/lista'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ParticipanteController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('/create'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_participante_dto_1.CreateParticipanteDto]),
    __metadata("design:returntype", Promise)
], ParticipanteController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/update/:id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_participante_dto_1.CreateParticipanteDto, Number]),
    __metadata("design:returntype", Promise)
], ParticipanteController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ParticipanteController.prototype, "delete", null);
ParticipanteController = __decorate([
    (0, common_1.Controller)('participante'),
    __metadata("design:paramtypes", [participante_service_1.ParticipanteService])
], ParticipanteController);
exports.ParticipanteController = ParticipanteController;
//# sourceMappingURL=participante.controller.js.map