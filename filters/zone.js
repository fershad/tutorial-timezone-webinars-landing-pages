module.exports = function(time, zone) {
    let locale = zone.locale || "en-US";
    let liveTime= new Date(time);
    let localeTime = liveTime.toLocaleString(locale, { timeZone: zone.location});
    return localeTime;
  }