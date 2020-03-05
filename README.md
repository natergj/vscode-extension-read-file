# Read File README

## Features

Basic extension used to read the contents of a file to be used as input to tasks and debug
configurations.

## Usage Example

One common scenario is the need to specify secrets in a project that relies on
environment variables for configuration. A private RSA key is a multi-line file
that is not easily referenced as an environment variable in a launch.json file.

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "program": "${workspaceFolder}/index.js",
            "env": {
                "PRIVATE_KEY": "${input:privateKey}"
            }
        }
    ],
    "inputs": [
        {
            "id": "privateKey",
            "type": "command",
            "command": "imnater.read-file.read",
            "args": {
                "filePath": "${workspaceFolder}/keys/id_rsa"
            }
        }
    ]
}
```

## Release Notes

### 1.0.0

Initial release
Read contents of file as input in launch.json and tasks.json files
