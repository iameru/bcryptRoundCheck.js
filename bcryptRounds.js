const bcrypt = require("bcrypt");
const os = require("os");

pw = "Our AverageE Joe'Zz Pasword123!";

function timeBcryptHash(round) {
  const start = new Date();
  bcrypt.hashSync(pw, round);
  const stop = new Date();

  return stop - start;
}

//-- maxtime in miliseconds
function main(maxtime = 1234) {
  console.log(
    `trying for bcryptcosts with maxtime: ${maxtime / 1000} seconds to hash`
  );

  const rounds = Array.from({ length: 20 }, (_, i) => i + 4);

  rounds.map((round) => {
    const timedResult = timeBcryptHash(round);

    // found the sweetspot?
    if (timedResult > maxtime) {
      const retryRound = round - 1;

      console.log("rechecking last valid round");

      console.log("-------------- Result -----------------");
      for (i = 0; i < 3; i++) {
        const timedResult = timeBcryptHash(retryRound);
        console.log(
          `hashed ${retryRound} rounds in ${timedResult} miliseconds`
        );
      }
      console.log(
        `${retryRound} rounds mean ${
          2 ** retryRound
        } iterations / bcrypt factor`
      );
      console.log("");

      process.exit(0);
    }
    console.log(`hashed ${round} rounds in ${timedResult} miliseconds`);
  });
}

function mashineInfo() {
  console.log(`OS: ${os.platform()}`);
  console.log(`KERNEL: ${os.release()}`);

  const cpuList = os.cpus().reduce((acc, cpu) => {
    if (!acc.includes(cpu.model)) {
      acc.push(cpu.model);
    }
    return acc;
  }, []);

  console.log(`CPU\'s: ${cpuList.join(" - ")}`);
  console.log("-------------------------------");
}
mashineInfo();
main();
