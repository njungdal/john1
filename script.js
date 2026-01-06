// DOM Elements
const backBtn = document.getElementById('backBtn');
const channelList = document.getElementById('channelList');
const bibleContent = document.getElementById('bibleContent');
const videoContent = document.getElementById('videoContent');
const meditationContent = document.getElementById('meditationContent');
const contentTitle = document.getElementById('contentTitle');
const verses = document.getElementById('verses');
const meditationText = document.getElementById('meditationText');
const saveMeditation = document.getElementById('saveMeditation');
const clearMeditation = document.getElementById('clearMeditation');
const saveStatus = document.getElementById('saveStatus');

// Current view state
let currentView = 'channelList';

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    setupChannelListeners();
    setupBackButton();
    setupMeditationButtons();
    loadMeditation();
});

// Setup channel card listeners
function setupChannelListeners() {
    const channelCards = document.querySelectorAll('.channel-card');

    channelCards.forEach(card => {
        card.addEventListener('click', () => {
            const channel = card.getAttribute('data-channel');
            navigateToChannel(channel);
        });
    });
}

// Navigate to a specific channel
function navigateToChannel(channel) {
    // Hide all content sections
    hideAllContent();

    // Show back button
    backBtn.style.display = 'flex';

    // Show appropriate content based on channel
    if (channel.startsWith('chapter')) {
        showBibleChapter(channel);
        currentView = 'bible';
    } else if (channel === 'video') {
        showVideo();
        currentView = 'video';
    } else if (channel === 'meditation') {
        showMeditation();
        currentView = 'meditation';
    }

    // Scroll to top
    window.scrollTo(0, 0);
}

// Show Bible chapter content
function showBibleChapter(chapterKey) {
    const chapterData = bibleData[chapterKey];

    if (!chapterData) {
        console.error('Chapter data not found:', chapterKey);
        return;
    }

    // Set title
    contentTitle.textContent = chapterData.title;

    // Clear previous verses
    verses.innerHTML = '';

    // Add verses
    chapterData.verses.forEach(verse => {
        const verseElement = document.createElement('div');
        verseElement.className = 'verse';

        const verseNumber = document.createElement('span');
        verseNumber.className = 'verse-number';
        verseNumber.textContent = verse.number;

        const verseText = document.createElement('span');
        verseText.className = 'verse-text';
        verseText.textContent = verse.text;

        verseElement.appendChild(verseNumber);
        verseElement.appendChild(verseText);
        verses.appendChild(verseElement);
    });

    // Show bible content
    bibleContent.style.display = 'block';
}

// Show video content
function showVideo() {
    videoContent.style.display = 'block';
}

// Show meditation content
function showMeditation() {
    meditationContent.style.display = 'block';
    loadMeditation();
}

// Hide all content sections
function hideAllContent() {
    channelList.style.display = 'none';
    bibleContent.style.display = 'none';
    videoContent.style.display = 'none';
    meditationContent.style.display = 'none';
}

// Show channel list
function showChannelList() {
    hideAllContent();
    channelList.style.display = 'flex';
    backBtn.style.display = 'none';
    currentView = 'channelList';
    window.scrollTo(0, 0);
}

// Setup back button
function setupBackButton() {
    backBtn.addEventListener('click', () => {
        showChannelList();
    });
}

// Setup meditation buttons
function setupMeditationButtons() {
    saveMeditation.addEventListener('click', () => {
        saveMeditationToStorage();
    });

    clearMeditation.addEventListener('click', () => {
        if (confirm('묵상 내용을 초기화하시겠습니까?')) {
            meditationText.value = '';
            localStorage.removeItem('meditation');
            showSaveStatus('묵상 내용이 초기화되었습니다.', 'success');
        }
    });
}

// Save meditation to localStorage
function saveMeditationToStorage() {
    const text = meditationText.value;

    try {
        localStorage.setItem('meditation', text);
        const now = new Date();
        const timeString = now.toLocaleString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        showSaveStatus(`저장되었습니다 (${timeString})`, 'success');
    } catch (error) {
        console.error('Failed to save meditation:', error);
        showSaveStatus('저장에 실패했습니다.', 'error');
    }
}

// Load meditation from localStorage
function loadMeditation() {
    try {
        const savedText = localStorage.getItem('meditation');
        if (savedText) {
            meditationText.value = savedText;
        }
    } catch (error) {
        console.error('Failed to load meditation:', error);
    }
}

// Show save status message
function showSaveStatus(message, type) {
    saveStatus.textContent = message;
    saveStatus.className = `save-status ${type}`;

    // Clear status after 3 seconds
    setTimeout(() => {
        saveStatus.textContent = '';
        saveStatus.className = 'save-status';
    }, 3000);
}

// Handle browser back button
window.addEventListener('popstate', (event) => {
    if (currentView !== 'channelList') {
        event.preventDefault();
        showChannelList();
    }
});

// Auto-save meditation every 30 seconds
setInterval(() => {
    if (currentView === 'meditation' && meditationText.value.trim()) {
        const currentText = meditationText.value;
        const savedText = localStorage.getItem('meditation');

        // Only auto-save if content has changed
        if (currentText !== savedText) {
            try {
                localStorage.setItem('meditation', currentText);
                console.log('Auto-saved meditation');
            } catch (error) {
                console.error('Failed to auto-save meditation:', error);
            }
        }
    }
}, 30000); // 30 seconds
