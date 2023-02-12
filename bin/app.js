#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commands_1 = __importDefault(require("./commands"));
const user_name_command_1 = __importDefault(require("./commands/user-name-command"));
////creating a box to show messages
commands_1.default.execute([
    new user_name_command_1.default()
]);
