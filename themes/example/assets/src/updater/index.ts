/* This magically finds node_modules, but annoyingly that has to be in the project root
 * It won't find anything in the theme root, so it's unclear how themes are meant to ship behavior that depends on external modules */
import $ from 'jquery'

function update(id: string, msg: string): void {
    const e = $("#" + id)
    e.text(msg)
}

export default update
