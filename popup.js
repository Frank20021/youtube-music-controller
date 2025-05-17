document.addEventListener('DOMContentLoaded', function() {
  const playPauseButton = document.getElementById('playPause');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  const currentSongElement = document.getElementById('current-song');

  // Function to execute commands on YouTube Music
  async function executeCommand(command) {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab.url.includes('music.youtube.com')) {
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: (cmd) => {
          switch (cmd) {
            case 'playPause':
              const playPauseSelectors = [
                'tp-yt-paper-icon-button.play-pause-button',
                'ytmusic-player-bar .play-pause-button',
                'ytmusic-player-bar #play-pause-button',
                'ytmusic-player-bar [aria-label="Pause"]',
                'ytmusic-player-bar [aria-label="Play"]'
              ];
              for (const selector of playPauseSelectors) {
                const button = document.querySelector(selector);
                if (button) {
                  button.click();
                  break;
                }
              }
              break;
            case 'next':
              const nextSelectors = [
                'tp-yt-paper-icon-button.next-button',
                'ytmusic-player-bar .next-button',
                'ytmusic-player-bar #next-button',
                'ytmusic-player-bar [aria-label="Next"]'
              ];
              for (const selector of nextSelectors) {
                const button = document.querySelector(selector);
                if (button) {
                  button.click();
                  break;
                }
              }
              break;
            case 'prev':
              const prevSelectors = [
                'tp-yt-paper-icon-button.previous-button',
                'ytmusic-player-bar .previous-button',
                'ytmusic-player-bar #previous-button',
                'ytmusic-player-bar [aria-label="Previous"]'
              ];
              for (const selector of prevSelectors) {
                const button = document.querySelector(selector);
                if (button) {
                  button.click();
                  break;
                }
              }
              break;
          }
        },
        args: [command]
      });
    }
  }

  // Update current song info
  async function updateCurrentSong() {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab.url.includes('music.youtube.com')) {
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: () => {
          const titleSelectors = [
            '.title.style-scope.ytmusic-player-bar',
            'ytmusic-player-bar .title',
            'ytmusic-player-bar .song-title',
            'ytmusic-player-bar .yt-formatted-string'
          ];
          for (const selector of titleSelectors) {
            const titleElement = document.querySelector(selector);
            if (titleElement) {
              return titleElement.textContent;
            }
          }
          return 'No song playing';
        }
      }, (results) => {
        if (results && results[0]) {
          currentSongElement.textContent = results[0].result;
        }
      });
    }
  }

  // Add event listeners
  playPauseButton.addEventListener('click', () => executeCommand('playPause'));
  prevButton.addEventListener('click', () => executeCommand('prev'));
  nextButton.addEventListener('click', () => executeCommand('next'));

  // Update song info every second
  setInterval(updateCurrentSong, 1000);
  updateCurrentSong();
}); 