#!/bin/bash

# Create models directory if it doesn't exist
mkdir -p public/models

# Download the model
curl -L "https://raw.githubusercontent.com/pmndrs/gltfjsx/master/examples/src/components/Scene.js" -o public/models/space.gltf

echo "Model downloaded successfully!" 