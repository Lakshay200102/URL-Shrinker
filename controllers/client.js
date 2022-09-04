const express = require("express");
const url = require("../models/url");

exports.getHomePage = async (req, res) => {
  const shortUrls = await url.find();
  res.render("index", { shortUrls: shortUrls });
};

exports.postUrl = async (req, res) => {
  const urlExist = await url.findOne({ fullUrl: req.body.fullUrl });
  console.log(urlExist);
  if (urlExist === null) {
    await url.create({
      fullUrl: req.body.fullUrl,
    });
    res.redirect("/");
  }
  res.redirect("/");
  // return ;
};

exports.getUrl = async (req, res) => {
  const shortUrl = await url.findOne({ shortUrl: req.params.shorturl });
  if (shortUrl === null) {
    res.redirect("/");
    return;
  }
  shortUrl.clicks++;
  shortUrl.save();

  res.redirect(shortUrl.fullUrl);
};
