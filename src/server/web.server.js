import { resolve } from "dns";
import { rejects } from "assert";

const express = require("express");

export default class WebServer {
    constructor() {
        this.app = express();
        this.app.use(express.static("dist/public"));
    }

    start() {
        return new Promise((resolve, reject) => {
            try {
                this.server = this.app.listen(3000, () => {
                    console.log('http://localhost:3000/')
                    resolve()
                });
            } catch (e) {
                console.error(e);
                reject(e);
            }
        })
    }

    stop () {
        return new Promise((resolve, reject) => {
          try {
            this.server.close(() => {
              resolve()
            })
          } catch (e) {
            console.error(e.message)
            reject(e)
          }
        })
      }
}