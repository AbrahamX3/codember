import { readFileContent } from "~/lib/utils";

const fileContent = await readFileContent("./src/challenges/3/data.txt");

async function solution(data: string) {
  const split_lines = data.split("\r\n");

  let invalidCount = 0;

  const results = split_lines.map((line) => {
    const [range, letterWithColon, key] = line.split(" ");
    const letter = letterWithColon[0];
    const [min, max] = range.split("-").map(Number);

    const count = key
      .split("")
      .reduce((counter, char) => (char === letter ? counter + 1 : counter), 0);

    if (count >= min && count <= max) {
      return null;
    } else {
      invalidCount++;
      return {
        number: invalidCount,
        key,
      };
    }
  });

  return results.filter(Boolean);
}

const result = await solution(fileContent);
console.log(result);
