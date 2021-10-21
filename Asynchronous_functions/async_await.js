const { readdir, readFile, writeFile } = require("fs");

/*

Old JavaScript used to have callbacks for promises.
The problem was it quickly becomes unreadable due to n-level nesting.

Example:

NOTE: BELOW CODE IS ONLY DEMONSTRAION> IT PROBABLY WON'T WORK>
*/

// readdir reads a directory and returns list of files asynchronously
readdir(someDirectory, (err, files) => {
  if (err) throw err;
  // now loop throw all files returned by readdir
  files.forEach((filename) => {
    readFile(filename, (err, values) => {
      // readFile reads the contents of a file asynchronously
      if (err) throw err;

      writeFile(
        someFile,
        `${values} + This file was modified at: ${new Date()}`,
        (err, someDataBeingReturned) => {
          // writeFile writes the contents to a file asynchronously
          if (err) throw err;

          console.log(`Successfully updated file: ${someFile}`);
        }
      );
    });
  });
});

/*

As you can see nesting keeps deepening.
So, to solve that, a new approach was used. but that too had flaws.

Example:

NOTE: BELOW CODE IS ONLY DEMONSTRAION> IT PROBABLY WON'T WORK>
*/

readdir(someDirectory)
  .then((files) => {
    files.forEach((fileName) => {
      readFile(fileName).then((values) => {
        writeFile(
          someFile,
          `${values} + This file was modified at: ${new Date()}`
        ).then((someData) => {
          console.log(`Successfully updated file: ${someFile}`);
        });
      });
    });
  })
  .catch((err) => {
    throw err;
  });

/*

As you can see here too nesting keeps deepening.
But it was better than the callback approach
So, to solve that, a new approach was used. 
But we all know, nothing human made is perfect, so this too has issues.

Example:

NOTE: BELOW CODE IS ONLY DEMONSTRAION> IT PROBABLY WON'T WORK>
*/

const asynchronousFunction = async () => {
  const files = await readdir(someDirectory);

  const promisesForReadFile = files.forEach((fileName) => readFile(fileName)); // This here loops through and gets all the promises and stores them in an array
  const resolvedPromisesForRead = await Promise.all(promisesForReadFile); // Promise.all() // resolves all the promises

  const promisesForWriteFile = resolvedPromisesForRead.forEach((fileName) =>
    writeFile(fileName, `${values} + This file was modified at: ${new Date()}`)
  );
  const resolvedPromisesForWrite = await Promise.all(promisesForWriteFile);

  console.log("Process complete");
};

asynchronousFunction();

/*

As you can see, this follows synchronous way of writing code. which is way more readable and clean.
But this now requires try catch. which then again becomes try catch hell.

In the end, all we can do is try to make things as better as possible. And that's innovation.

I hope you learned something new and good.

Happy Coding !!!





Author: https://github.com/officialabdulrehman


*/
