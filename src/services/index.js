import delay from 'delay';

export async function echo(text) {
  await delay(100 + Math.random() * 2900);
  return text;
}
