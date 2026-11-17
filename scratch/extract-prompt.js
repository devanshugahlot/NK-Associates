import fs from 'fs';
import readline from 'readline';

const rl = readline.createInterface({
  input: fs.createReadStream('C:/Users/dell/.gemini/antigravity/brain/cbd725b6-19e8-4f7f-a957-427749865cd0/.system_generated/logs/transcript_full.jsonl')
});

rl.on('line', (line) => {
  if (line.includes('"step_index":1636')) {
    const data = JSON.parse(line);
    fs.writeFileSync('scratch/prompt10.txt', data.content, 'utf8');
    console.log('Saved prompt 10, length:', data.content.length);
    process.exit(0);
  }
});
