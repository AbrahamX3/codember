import { readFileContent } from "./lib/utils";

const fileContent = await readFileContent("./src/challenges/2/data.txt");

async function solution(data: string) {}

const result = await solution(fileContent);
console.log(result);
