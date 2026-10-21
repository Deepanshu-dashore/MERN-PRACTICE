/**
 * String helper utility module
 */

function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function slugify(text) {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-');
}

function truncate(str, max = 30) {
    if (str.length <= max) return str;
    return str.slice(0, max) + '...';
}

module.exports = {
    capitalize,
    slugify,
    truncate
};
