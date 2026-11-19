/* Old Monyx links (monyx.pro/#pay/josh, #claim/…, #home) went straight to the
   wallet. The wallet now lives in app/, so send those links there. */
(function () {
  var h = location.hash;
  if (/^#(home|pay|send|claim|login|signup|invest|activity|me|tx|done)(\/|$)/.test(h)) location.replace('app/' + h);
})();
