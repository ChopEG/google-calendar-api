const express = require('express');
const router = express.Router();

/**
 * Description: Calendar group routes
 */
router.get(
    ['/calendars/:calendarId', '/calendars'],
    [rootRequire('app/controllers/CalendarController').show]
);


module.exports = router;