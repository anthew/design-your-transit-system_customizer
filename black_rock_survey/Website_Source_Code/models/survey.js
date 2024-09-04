import mongoose from 'mongoose'
import strategies from '../data/strategies.js'
import settings from '../data/settings.js'

const strategyModels = strategies.reduce((memo, strategy) => {
  memo[strategy.key] = Boolean
  return memo
}, {})

const surveySchema = new mongoose.Schema({
  id: String,
  timestamp: String,
  ip: String,
  userAgent: String,
  language: String,
  ...strategyModels,
  userComment: String,
})

export default mongoose.models.survey || mongoose.model('survey', surveySchema, settings.dbCollectionName)
