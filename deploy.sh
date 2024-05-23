#!/bin/bash

# Ensure script stops on first error
set -e

sudo apt-get update && sudo apt-get upgrade -y

# Configuration variables
SERVER="192.168.1.18"
USER="administrator"

sudo mkdir -p /var/www/web

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


# Deploy files to server t
echo "Deploying files to server..."
scp -P $PORT -r build/* $USER@$SERVER:$REMOTE_PATH


# Setting permissions on the server
echo "Setting permissions..."
ssh -p $PORT $USER@$SERVER 'sudo chown -R www-data:www-data /var/www/&& sudo chmod -R 755 /var/www/'

echo "Done!"
