const express = require("express");
const app = express();
const ADMIN = require('../collection/admin/db-schema')
const mongoose = require("mongoose")

module.exports.addData = async(payloadData) => {
    const admin = new ADMIN(payloadData)
    const adminSaved = await admin.save(payloadData)
    console.log(adminSaved)
}