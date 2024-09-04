import mongoose from 'mongoose'
import { json2csv } from 'json-2-csv'

import Survey from '../../models/survey.js'
import strategies from '../../data/strategies.js'
import settings from '../../data/settings.js'

mongoose.connect(process.env.MONGODB_URI)

const exportResponses = async (request, response) => {
  const surveys = await Survey.find()

  const fieldNames = [
    'id',
    'timestamp',
    'ip',
    'userAgent',
    'language',
    ...strategies.map((strategy) => strategy.key),
    'userComment',
  ]

  const csv = await json2csv(surveys, { keys: fieldNames })

  response.statusCode = 200
  response.setHeader('Content-Type', 'text/csv')
  response.setHeader(
    'content-disposition',
    'attachment; filename='+ settings.dbCollectionName +'.csv'
  )
  response.end(csv)
}

export default exportResponses
