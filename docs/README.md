# 📱 ދުޢާ ފޮތް - GitHub Pages Deployment

## 🌐 Live URL
https://phalko202.github.io/dua-app/

## 📋 Files in this folder (docs/)

- `index.html` - Main app (works on all devices including iOS)
- `manifest.json` - PWA configuration 
- `service-worker.js` - Offline support
- `duas-export.json` - Your duas data (IMPORTANT!)
- `icons/` - App icons folder

## ✅ How to Update

### Method 1: GitHub Desktop
1. Open GitHub Desktop
2. See changed files
3. Write commit message
4. Click "Commit to main"
5. Click "Push origin"
6. Wait 2 minutes, refresh website

### Method 2: GitHub Website
1. Go to https://github.com/phalko202/dua-app
2. Click `docs` folder
3. Click file you want to update
4. Click pencil icon (Edit)
5. Make changes
6. Click "Commit changes"

## 🔄 Export Duas from Admin Panel

1. Open `open-admin.bat`
2. Click "އެކްސްޕޯޓް ކުރޭ (Export All)"
3. Save as `duas-export.json`
4. Copy to this `docs` folder
5. Upload to GitHub (see Method 1 or 2 above)

## 📱 iOS Installation

1. Open Safari on iPhone
2. Go to: https://phalko202.github.io/dua-app/
3. Tap Share button
4. Tap "Add to Home Screen"
5. Tap "Add"
6. App icon appears on home screen!

## ✨ Features

- Works on iPhone (iOS)
- Works on Android
- Works offline after first visit
- Swipe left/right to navigate
- Audio playback
- Beautiful Dhivehi interface

## 🆘 Troubleshooting

**Problem:** No duas showing
**Solution:** Make sure `duas-export.json` is uploaded to `docs` folder on GitHub

**Problem:** Audio not playing
**Solution:** Click the audio button, iOS requires user interaction first

**Problem:** Can't add to home screen
**Solution:** Must use Safari on iOS (not Chrome)

---

Created: December 17, 2025
