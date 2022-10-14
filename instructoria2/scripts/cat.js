"use strict";
//var parametro1 = process.argv[2];
//console.log(parametro1);
Object.defineProperty(exports, "__esModule", { value: true });
exports.cli = void 0;
function cli(args) {
    const message = args.join(' ');
    console.log(message);
}
exports.cli = cli;
