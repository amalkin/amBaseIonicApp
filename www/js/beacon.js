var uuidsToMonitor;

AttendeaseBeacons.notifyServer(theServerToPostTo, 900); // 900 seconds

AttendeaseBeacons.notifyServerAuthToken(theAuthToken);

uuidsToMonitor = ["E2C56DB5-DFFB-48D2-B060-D0F5A71096E0", "B9407F30-F5F8-466E-AFF9-25556B57FE6D"];

AttendeaseBeacons.monitor(uuidsToMonitor, function() {
	return setInterval((function() {
		return AttendeaseBeacons.getBeacons(function(beacons) {
			if (_.isEmpty(beacons)) {
				return console.log("No beacons found.");
			} else {
				return _.each(beacons, function(beacon) {
					return console.log("" + beacon.uuid + " (" + beacon.major + ", " + beacon.minor + ") " + beacon.proximityString + " (" + beacon.accuracy + " meters)");
				});
			}
		});
	}), 3000);
});