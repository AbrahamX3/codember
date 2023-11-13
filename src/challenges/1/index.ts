import { readFileContent } from "~/lib/utils";

const data = await readFileContent("./src/challenges/1/data.txt");

async function solution(data: string) {
  const stringCount = new Map<string, number>();
  const words = data.split(" ");

  for (const word of words) {
    stringCount.set(word, (stringCount.get(word) || 0) + 1);
  }

  let mergedString = "";

  stringCount.forEach((count, word) => {
    mergedString += `${word}${count}`;
  });

  return mergedString;
}

const result = await solution(data);
console.log(result);
