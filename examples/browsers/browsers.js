var sg = require('../lib/sendgrid.js').SendGrid(process.env.SENDGRID_API_KEY)

##################################################
# Retrieve email statistics by browser.  #
# GET /browsers/stats #

var emptyRequest = require('sendgrid-rest').request
var request = JSON.parse(JSON.stringify(emptyRequest))
request.queryParams["end_date"] = '2016-04-01'
  request.queryParams["aggregated_by"] = 'day'
  request.queryParams["browsers"] = 'test_string'
  request.queryParams["limit"] = 'test_string'
  request.queryParams["offset"] = 'test_string'
  request.queryParams["start_date"] = '2016-01-01'
request.method = 'GET'
request.path = '/v3/browsers/stats'
sg.API(request, function (response) {
  console.log(response.statusCode)
  console.log(response.responseBody)
  console.log(response.responseHeaders)
})

