define(["require","app/drawer","app/about","app/install","app/chrono","app/laps_history"],function(e){var t=e("app/drawer");e("app/about"),e("app/install");var n=e("app/chrono"),r=e("app/laps_history");n.setLapHandler(r.addLapTime),t.setDeleteButtonHandler(r.clearLapTimes)})