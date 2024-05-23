#!/bin/bash

# Ensure script stops on first error
set -e

# Checkout to git master
echo "Switching to main branch..."
git checkout main

# Pull latest changes
echo "Pulling latest changes..."
git pull origin main

# Build the React app
echo "Building the app..."
npm install
npm run build

# Deploy files to server
echo "Deploying files to server..."
scp -r build/* user@192.168.1.45:/var/www/192.168.1.45

echo "Setting permissions..."
ssh user@192.168.1.45 'sudo chown -R www-data:www-data /var/www/192.168.1.45 && sudo chmod -R 755 /var/www/192.168.1.45'

echo "Done!"