export interface Letter {
  letter: string;
  template: boolean;

  status?: "yeah" | "kinda" | "nah";
}

export function mergeTemplateAndText(template: string, text: string): Letter[] {
  const textChars = text.split("");
  const templateChars = template.split("");

  const result: Letter[] = [];

  templateChars.forEach((char, index) => {
    if (char.toUpperCase() != char.toLowerCase()) {
      result.push({
        letter: textChars.shift() || " ",
        template: false,
      });
    } else {
      result.push({
        letter: char,
        template: true,
      });
    }
  });

  return result;
}

export function getResult(correct: string, text: string): Letter[] {
  const result: Letter[] = [];

  text.split("").forEach((char, index) => {
    let status: "yeah" | "kinda" | "nah";

    if (char === correct[index]) {
      status = "yeah";
    } else if (correct.includes(char)) {
      status = "kinda";
    } else {
      status = "nah";
    }
    result.push({
      letter: char,
      template: false,
      status,
    });
  });

  return result;
}

export function generateEmojiGrid(data: Letter[][], index: number) {
  let grid =
    `Channle ${index} ${data.length}/n (https://channle.dino.icu)\n\n` +
    data
      .map((row) => {
        return row
          .map((cell) => {
            switch (cell.status) {
              case "yeah":
                return "🟩";
              case "kinda":
                return "🟧";
              case "nah":
                return "⬛️";
            }
          })
          .join("");
      })
      .join("\n");

  return grid;
}
