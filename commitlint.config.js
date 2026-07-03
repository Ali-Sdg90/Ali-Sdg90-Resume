export default {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "header-max-length": [2, "always", 200],
        "body-max-line-length": [0, "always", 100],
    },
    ignores: [(message) => /^chore\(release\): bump version to /.test(message)],
};
