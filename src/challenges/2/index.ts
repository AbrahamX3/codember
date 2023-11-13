import { readFileContent } from "~/lib/utils";

const fileContent = await readFileContent("./src/challenges/2/data.txt");

async function solution(data: string) {
  const symbols = data.split("");
  const result: number[] = [];
  let count = 0;

  symbols.forEach((symbol) => {
    switch (symbol) {
      case "#":
        count++;
        break;
      case "@":
        count--;
        break;
      case "*":
        count *= count;
        break;
      case "&":
        result.push(count);
        break;
    }
  });

  return result.join("");
}

const result = await solution(fileContent);
console.log(result);
