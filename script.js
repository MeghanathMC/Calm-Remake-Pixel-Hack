// script.js

// Constants for mood recommendations
const MOOD_RECOMMENDATIONS = {
    'Anxious': "10-Minute Breathing Focus Session",
    'Stressed': "Body Scan for Stress Relief",
    'Tired': "Evening Wind Down Meditation",
    'Restless': "Progressive Muscle Relaxation"
};

// DOM Elements
const modal = document.getElementById('moodModal');
const aiMoodButton = document.getElementById('aiMoodButton');
const closeModalButton = document.getElementById('closeModal');
const moodButtons = document.querySelectorAll('.mood-button');

// Modal Functions
const openModal = () => {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
};

const closeModal = () => {
    modal.classList.remove('flex');
    modal.classList.add('hidden');
};

const handleMoodSelection = (event) => {
    const mood = event.target.getAttribute('data-mood');
    const recommendation = MOOD_RECOMMENDATIONS[mood];
    
    if (mood && recommendation) {
        alert(`Based on your ${mood} mood, we recommend: ${recommendation}`);
        closeModal();
    }
};

// Event Listeners
const initMoodFeature = () => {
    if (aiMoodButton) {
        aiMoodButton.addEventListener('click', openModal);
    }

    if (closeModalButton) {
        closeModalButton.addEventListener('click', closeModal);
    }

    moodButtons.forEach(button => {
        button.addEventListener('click', handleMoodSelection);
    });

    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initMoodFeature);
