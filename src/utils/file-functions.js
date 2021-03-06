// this function accesses the file system
// it returns a promise

export const getAllFiles = (dir) => {
    return fs.readdirAsync(dir).then(fileNamesArr => {
        const fileStatPromises = fileNamesArr.map(fileName => {
        return fs.statAsync(dir + '/' + fileName)
        .then(stats => {
            const file = {};
            file.filePath = dir + '/' + fileName;
            file.isDirectory = !stats.isFile();
            return file;
        });
        });
        return Promise.all(fileStatPromises);
  });
};
