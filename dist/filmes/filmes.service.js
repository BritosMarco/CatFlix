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
exports.FilmesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const create_filme_dto_1 = require("./dto/create-filme.dto");
let FilmesService = class FilmesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async listAllFilmes() {
        return this.prisma.filme.findMany();
    }
    async createFilme(post) {
        var _a, _b;
        const participantes = (_a = post.participantes) === null || _a === void 0 ? void 0 : _a.map((participante) => ({
            id: participante,
        }));
        const generos = (_b = post.generos) === null || _b === void 0 ? void 0 : _b.map((genero) => ({
            id: genero,
        }));
        return this.prisma.filme.create({ data: {
                nome: post.nome,
                lancamento: post.lancamento,
                imagem: post.imagem,
                duracao: post.duracao,
                participantes: {
                    connect: participantes,
                },
                generos: {
                    connect: generos,
                },
            },
            include: {
                participantes: true,
                generos: true,
            },
        });
    }
    async deleteOneFilme(where) {
        return this.prisma.filme.delete({ where });
    }
    async updateOneFilme(id, data) {
        var _a, _b;
        const participantes = (_a = data.participantes) === null || _a === void 0 ? void 0 : _a.map((participante) => ({
            id: participante,
        }));
        const generos = (_b = data.generos) === null || _b === void 0 ? void 0 : _b.map((genero) => ({
            id: genero,
        }));
        return await this.prisma.filme.update({
            data: Object.assign(Object.assign({}, data), { participantes: {
                    connect: participantes,
                }, generos: {
                    connect: generos,
                } }),
            include: {
                generos: true,
                participantes: true,
            },
            where: { id },
        });
    }
};
FilmesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FilmesService);
exports.FilmesService = FilmesService;
//# sourceMappingURL=filmes.service.js.map