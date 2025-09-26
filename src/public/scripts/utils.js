export function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
  
    // Change this to div.childNodes to support multiple top-level nodes.
    return div.firstChild;
}

/**
 * Converts an epoch timestamp (seconds or milliseconds) to a JavaScript Date object.
 * @param {number|string} epoch - The timestamp (in seconds or milliseconds).
 * @returns {Date|null} A Date object, or null if invalid.
 */
export function toDate(epoch) {
    if (typeof epoch === 'string') {
        epoch = Number(epoch);
    }

    if (!Number.isFinite(epoch)) return null;

    // If it's in seconds, convert to milliseconds
    if (epoch < 1e12) {
        epoch *= 1000;
    }

    const date = new Date(epoch);
    return isNaN(date.getTime()) ? null : date;
}

/**
 * Converts an epoch timestamp to a human-readable date string.
 * - If less than 1 hour ago → "X minutes ago"
 * - If less than 24 hours → "X hours ago"
 * - If less than 30 days → "X days ago"
 * - Else → "Mon, Day, Year"
 * 
 * @param {number|string} epoch - Timestamp in seconds or milliseconds
 * @returns {string}
 */
export function formatTimestamp(epoch) {
    if (typeof epoch === 'string') epoch = Number(epoch);
    if (!Number.isFinite(epoch)) return '';

    // Convert to ms if in seconds
    if (epoch < 1e12) epoch *= 1000;

    const now = Date.now();
    const diff = now - epoch;

    const MINUTE = 60 * 1000;
    const HOUR = 60 * MINUTE;
    const DAY = 24 * HOUR;
    const MONTH = 30 * DAY;

    if (diff < HOUR) {
        const mins = Math.floor(diff / MINUTE);
        return `${mins <= 0 ? 1 : mins} minute${mins === 1 ? '' : 's'} ago`;
    } else if (diff < DAY) {
        const hours = Math.floor(diff / HOUR);
        return `${hours} hour${hours === 1 ? '' : 's'} ago`;
    } else if (diff < MONTH) {
        const days = Math.floor(diff / DAY);
        return `${days} day${days === 1 ? '' : 's'} ago`;
    } else {
        const date = new Date(epoch);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${months[date.getMonth()]}, ${date.getDate()}, ${date.getFullYear()}`;
    }
}