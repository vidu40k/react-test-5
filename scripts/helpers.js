const toPascalCase = text => {
    return text.replace(/(^\w|_\w)/g, match => match.replace("_", "").toUpperCase());
};

const toCamelCase = text => {
    return text.charAt(0).toLowerCase() + text.slice(1);
};

module.exports = {
    toPascalCase,
    toCamelCase
};
