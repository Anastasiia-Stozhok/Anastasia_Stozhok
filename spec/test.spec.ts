const dropboxV2Api = require("dropbox-v2-api");
const fs = require("fs");
const {
  accessToken,
  dropboxPath,
  incorrectDropboxPath,
  fileName,
} = require("./test-constants");

describe("dropbox testing:", () => {
  let dropbox: typeof dropboxV2Api;

  beforeAll(() => {
    dropbox = dropboxV2Api.authenticate({
      token: accessToken,
    });
  }, 3000);

  it("upload file", (done) => {
    dropbox(
      {
        resource: "files/upload",
        parameters: {
          path: dropboxPath,
        },
        readStream: fs.createReadStream("test-files/test.txt"),
      },
      (err, result, response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe(fileName);
        done();
      }
    );
  });

  it("get file metadata", (done) => {
    dropbox(
      {
        resource: "files/get_metadata",
        parameters: {
          path: dropboxPath,
          include_media_info: false,
        },
      },
      (err, result, response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe(fileName);
        done();
      }
    );
  });

  it("get missing file metadata", (done) => {
    dropbox(
      {
        resource: "files/get_metadata",
        parameters: {
          path: incorrectDropboxPath,
          include_media_info: false,
        },
      },
      (err, result, response) => {
        expect(response.statusCode).toBe(409);
        expect(response.body.error_summary).toContain("path/not_found/");
        done();
      }
    );
  });

  it("delete file", (done) => {
    dropbox(
      {
        resource: "files/delete_v2",
        parameters: {
          path: dropboxPath,
        },
      },
      (err, result, response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.metadata.name).toBe(fileName);
        done();
      }
    );
  });

  it("delete missing file", (done) => {
    dropbox(
      {
        resource: "files/delete_v2",
        parameters: {
          path: incorrectDropboxPath,
        },
      },
      (err, result, response) => {
        expect(response.statusCode).toBe(409);
        expect(response.body.error_summary).toContain("path_lookup/not_found/");
        done();
      }
    );
  });
});
