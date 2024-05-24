#!/bin/bash

# Ensure script stops on first error
set -e

# Configuration variables
SERVER="192.168.1.18"
USER="administrator"
REMOTE_PATH="/var/www/web"
PORT="22" # Change this to the alternative port if needed
PASSWORD="your_password" # Replace with your sudo password

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
sshpass -p "$PASSWORD" ssh -p $PORT $USER@$SERVER "mkdir -p $REMOTE_PATH || true"

# Deploy files to server
echo "Deploying files to server..."
scp -P $PORT -r dist/* $USER@$SERVER:$REMOTE_PATH

echo "Done!"
