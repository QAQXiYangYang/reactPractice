var replace = require("replace");

function modify(){
    replace({
        regex: "132132131",
        replacement: "132132131",
        paths: ['.'],
        recursive: true,
        silent: true,
    });

}
module.exports = {
    modify : modify,
}