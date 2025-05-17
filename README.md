# YouTube Music Controller

A Chrome extension with Django backend for controlling YouTube Music playback.

## Features

- Play/Pause control
- Next/Previous track controls
- Current song display
- Clean and simple interface
- Django backend for extended functionality

## Project Structure

```
youtube_music_controller/
├── chrome_extension/          # Chrome extension files
│   ├── manifest.json
│   ├── popup.html
│   ├── popup.js
│   └── icons/
├── django_backend/           # Django project files
│   ├── manage.py
│   ├── youtube_music_controller/
│   └── api/
└── README.md
```

## Installation

### Chrome Extension
1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode" in the top right corner
3. Click "Load unpacked" and select the `chrome_extension` directory

### Django Backend
1. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Run migrations:
   ```bash
   python manage.py migrate
   ```
4. Start the server:
   ```bash
   python manage.py runserver
   ```

## Usage

1. Start the Django backend server
2. Install the Chrome extension
3. Navigate to [YouTube Music](https://music.youtube.com)
4. Use the extension controls to manage playback

## Development

### Chrome Extension
- Modify files in the `chrome_extension` directory
- Reload the extension in Chrome to see changes

### Django Backend
- Add new API endpoints in `api/views.py`
- Update models in `api/models.py`
- Run migrations when models change

## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 