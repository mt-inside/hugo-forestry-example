/* resolved realtive to /assets
 * for resolution relative to this file, use ./ */
import update from 'src/updater'

setTimeout (function() {
    update("one", "live update one")
}, 1000);
