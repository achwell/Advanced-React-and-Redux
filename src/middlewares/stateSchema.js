const schema = {
    "$schema": "http://json-schema.org/draft/2019-09/schema",
    "$id": "http://example.com/example.json",
    "title": "Root Schema",
    "type": "object",
    "default": {},
    "required": [
        "comments",
        "auth"
    ],
    "properties": {
        "comments": {
            "title": "The comments Schema",
            "type": "array",
            "default": [],
            "items": {
                "title": "A Schema",
                "type": "string",
                "examples": [
                    "Comment #1",
                    "Comment #2"
                ]
            },
            "examples": [
                ["Comment #1",
                    "Comment #2"
                ]
            ]
        },
        "auth": {
            "title": "The auth Schema",
            "type": "boolean",
            "default": false,
            "examples": [
                true
            ]
        }
    },
    "examples": [{
        "comments": [
            "Comment #1",
            "Comment #2"
        ],
        "auth": true
    }]
}
export default schema;