#!/bin/bash

# Ensure script stops on first error
set -e

# Configuration variables
SERVER="192.168.1.18"
USER="administrator"
REMOTE_PATH="/var/www/web"
PORT="22" # Change this to the alternative port if needed

# Checkout to git main (or correct branch name)
echo "Switching to main branch..."
git checkout main

# Pull latest changes
echo "Pulling latest changes..."
git pull origin main

# Build the React app
echo "Building the app..."
npm install
npm run build

# Ensure the remote directory exists
echo "Creating remote directory if it does not exist..."
ssh -p $PORT $USER@$SERVER "mkdir -p $REMOTE_PATH || true"

# Check if directory creation was successful
if ! ssh -p $PORT $USER@$SERVER "[ -d $REMOTE_PATH ]"; then
    echo "Error: Remote directory $REMOTE_PATH does not exist or could not be created."
    exit 1
fi

# Deploy files to server
echo "Deploying files to server..."
scp -P $PORT -r dist/* $USER@$SERVER:$REMOTE_PATH || { echo "Error: Failed to upload files."; exit 1; }

# Setting permissions on the server
echo "Setting permissions..."
ssh -p $PORT $USER@$SERVER "sudo chown -R www-data:www-data $REMOTE_PATH && sudo chmod -R 755 $REMOTE_PATH" || { echo "Error: Failed to set permissions."; exit 1; }

echo "Done!"
