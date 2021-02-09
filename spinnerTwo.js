const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
let time = 100;

for (const position of spinner) {
  setTimeout(() => {
    process.stdout.write(position);
  }, time);
  time += 100;
}