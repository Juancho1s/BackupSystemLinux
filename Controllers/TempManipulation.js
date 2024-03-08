const { exec } = require("child_process");
const e = require("express");

class TempManipulation {
  static commandExecution(req, res, next) {
    const command1 = `sudo ../myScripts/cronManager.sh remove ${req.body["dropdownFrequency"]} /home/juan/myScripts/backUp.sh ${req.body["dropdownDirectory"]}`;
    const command2 = `sudo ../myScripts/cronManager.sh add ${req.body["dropdownFrequency"]} /home/juan/myScripts/backUp.sh ${req.body["dropdownDirectory"]}`;

    try {
      exec(command1);
      exec(command2);
      res.redirect("/");
    } catch (error) {
      console.log("There was something wrong: " + error);
      res.redirect("/");
    }
  }
}

module.exports = TempManipulation;
