const express = require("express");
const SERVICE = require('../services/admin');


module.exports.addData = async (req, res) => {
    let payload = req.body;
    try {
      const data = await SERVICE.addData(payload);
      res.status(200).json({status: 200, message: 'Success', data: {}});
    } catch (error) {
      console.log(error)
      res.status(400).json({status: 400, message: 'Error', data: {}});
    }
  };