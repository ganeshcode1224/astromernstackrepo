//backend\models\KundliMatch.js  after api and saved to db v good code 

const mongoose = require("mongoose");

const lordSchema = new mongoose.Schema({
  id: Number,
  name: String,
  vedic_name: String,
});

const nakshatraSchema = new mongoose.Schema({
  id: Number,
  name: String,
  lord: lordSchema,
  pada: Number,
});

const rasiSchema = new mongoose.Schema({
  id: Number,
  name: String,
  lord: lordSchema,
});

const kootSchema = new mongoose.Schema({
  varna: String,
  vasya: String,
  tara: String,
  yoni: String,
  graha_maitri: String,
  gana: String,
  bhakoot: String,
  nadi: String,
});

const infoSchema = new mongoose.Schema({
  koot: kootSchema,
  nakshatra: nakshatraSchema,
  rasi: rasiSchema,
});

const gunaMilanSchema = new mongoose.Schema({
  total_points: Number,
  maximum_points: Number,
});

const messageSchema = new mongoose.Schema({
  type: String,
  description: String,
});

const kundliMatchSchema = new mongoose.Schema({
  girl_info: infoSchema,
  boy_info: infoSchema,
  message: messageSchema,
  guna_milan: gunaMilanSchema,
  createdAt: { type: Date, default: Date.now },
});

const KundliMatch = mongoose.model("KundliMatch", kundliMatchSchema);

module.exports = KundliMatch;
