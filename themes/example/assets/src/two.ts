/* resolved realtive to this file
 * for absolute resolution (realtive to /assets), drop the ./ */
import update from './updater'

setTimeout (function() {
    update("two", "live update two")
}, 3000);
