const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const axios = require("axios");

const contestCont = async (req, res) => {
    axios.get("https://kontests.net/api/v1/all").then((response) => {
      const contests = response.data;
      return res.status(200).json({
        contests: contests,
      });
    });
  }

const compileCont = async (req, res) => {
    const { code, language, input } = req.body;
    console.log(code, language, input);
    const compileUrl = "https://judge0-ce.p.rapidapi.com/submissions";
    await axios
      .request({
        method: "POST",
        url: compileUrl,
        params: { base64_encoded: "false", fields: "*" },
        headers: {
          "Content-Type": "application/json",
          "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
          "x-rapidapi-key": "a2c6754f15msh7fbc3a77f87af08p135901jsn8c82bc01a4a0",
        },
        data: {
          language_id: language,
          source_code: code,
          stdin: input,
        },
      })
      .then((response) => {
        console.log(response.data);
        axios
          .request({
            method: "GET",
            url: `${compileUrl}/${response.data.token}`,
            params: { base64_encoded: "false", fields: "*" },
            headers: {
              "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
              "x-rapidapi-key": "a2c6754f15msh7fbc3a77f87af08p135901jsn8c82bc01a4a0",
            },
          })
          .then((response) => {
            console.log(response.data);
            return res.status(200).json({
              output: response.data,
            });
          })
          .catch((err) => {
            return res.status(500).json({
              error: err.message,
            });
          });
      })
      .catch((err) => {
        return res.status(500).json({
          error: err.message,
        });
      });
  }

  module.exports = { contestCont, compileCont}