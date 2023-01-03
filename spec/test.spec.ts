import dropboxV2Api from "dropbox-v2-api";
import fs from "fs";
import {
  accessToken,
  expiredAccessToken,
  dropboxPath,
  incorrectDropboxPath,
  fileName,
} from "./test-constants";
import { dict } from "./models";
describe("dropbox testing:", () => {
  let dropbox: typeof dropboxV2Api;
  let expiredDropbox: typeof dropboxV2Api;

  beforeAll(() => {
    dropbox = dropboxV2Api.authenticate({
      token: accessToken,
    });
    expiredDropbox = dropboxV2Api.authenticate({
      token: expiredAccessToken,
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
      (err: dict, result: dict, response: dict) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe(fileName);
        done();
      }
    );
  });

  it("upload file with expired token", (done) => {
    expiredDropbox(
      {
        resource: "files/upload",
        parameters: {
          path: dropboxPath,
        },
        readStream: fs.createReadStream("test-files/test.txt"),
      },
      (err: dict, result: dict, response: dict) => {
        expect(response.statusCode).toBe(401);
        expect(response.body.error_summary).toContain("expired_access_token/");
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
      (err: dict, result: dict, response: dict) => {
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
      (err: dict, result: dict, response: dict) => {
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
      (err: dict, result: dict, response: dict) => {
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
      (err: dict, result: dict, response: dict) => {
        expect(response.statusCode).toBe(409);
        expect(response.body.error_summary).toContain("path_lookup/not_found/");
        done();
      }
    );
  });
});
