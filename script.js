// Documentation Data - UPDATE THIS FOR NEW RELEASES
// Example releases data in script.js
const releases = [
    {
        version: '1.1.0',
        date: '2025-02-01',
        title: 'New Update',
        description: 'What changed',
        features: ['Feature 1', 'Feature 2'],
        fixes: ['Bug fix 1'],
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1twk6FGi8WRFEN6Rv5fFogQuYfosqJhES'
    }
];

function loadReleasesPage() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = '<h1 class="section-title">Releases</h1>';
    
    releases.forEach(release => {
        const releaseCard = document.createElement('div');
        releaseCard.className = 'release-card';
        
        // Release header
        const releaseHeader = document.createElement('div');
        releaseHeader.className = 'release-header';
        releaseHeader.innerHTML = `
            <div>
                <div class="release-version">v${release.version}</div>
                <div class="release-date">${release.date}</div>
            </div>
        `;
        
        // Download button
        const downloadBtn = document.createElement('a');
        downloadBtn.href = release.downloadUrl;
        downloadBtn.className = 'download-btn';
        downloadBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download v${release.version}
        `;
        downloadBtn.target = '_blank';
        
        releaseHeader.appendChild(downloadBtn);
        releaseCard.appendChild(releaseHeader);
        
        // Release content
        const releaseContent = document.createElement('div');
        
        const title = document.createElement('h3');
        title.className = 'release-title';
        title.textContent = release.title;
        releaseContent.appendChild(title);
        
        const description = document.createElement('p');
        description.className = 'release-description';
        description.textContent = release.description;
        releaseContent.appendChild(description);
        
        // ADD THE WARNING HERE - after the main content but before feature lists
        const warningNote = document.createElement('p');
        warningNote.className = 'download-warning';
        warningNote.innerHTML = '⚠️ TeraBox may have slow downloads and ads for free users';
        releaseContent.appendChild(warningNote);
        
        // Add features list, fixes, etc.
        if (release.features && release.features.length > 0) {
            const featuresSection = document.createElement('div');
            featuresSection.className = 'changelog-section';
            featuresSection.innerHTML = '<h4>New Features</h4><ul></ul>';
            
            release.features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                featuresSection.querySelector('ul').appendChild(li);
            });
            releaseContent.appendChild(featuresSection);
        }
        
        releaseCard.appendChild(releaseContent);
        mainContent.appendChild(releaseCard);
    });
}

const documentation = {
    gettingStarted: {
        title: 'Getting Started',
        sections: [
            {
                heading: 'Introduction',
                content: 'TertiaLearn Sign Language Translator is an innovative application that bridges communication gaps by translating sign language gestures into text and speech in real-time.'
            },
            {
                heading: 'System Requirements',
                list: [
                    'Android 8.0 or higher / iOS 12.0 or higher',
                    'Camera with minimum 720p resolution',
                    'At least 2GB RAM',
                    '100MB free storage space',
                    'Internet connection for initial setup'
                ]
            },
            {
                heading: 'Installation',
                steps: [
                    'Download the latest version from the releases page',
                    'Open the APK/IPA file on your device',
                    'Allow installation from unknown sources (Android)',
                    'Follow the on-screen installation instructions',
                    'Launch TertiaLearn and grant camera permissions'
                ]
            }
        ]
    },
    features: [
        {
            name: 'Real-time Translation',
            description: 'Instantly translates sign language gestures into text and speech using advanced computer vision and machine learning algorithms.'
        },
        {
            name: 'Gesture Recognition',
            description: 'Accurately recognizes a wide range of sign language gestures with high precision and minimal latency.'
        },
        {
            name: 'Multi-language Support',
            description: 'Supports multiple sign language systems including ASL, BSL, and more (depending on version).'
        },
        {
            name: 'Offline Mode',
            description: 'Basic translation features work offline after initial model download.'
        },
        {
            name: 'Learning Mode',
            description: 'Interactive tutorials to help users learn sign language gestures.'
        },
        {
            name: 'History & Favorites',
            description: 'Save frequently used translations and review conversation history.'
        }
    ],
    usage: [
        {
            title: 'Basic Translation',
            steps: [
                'Open the TertiaLearn app',
                'Position your hand in front of the camera',
                'Ensure good lighting and clear background',
                'Perform the sign language gesture',
                'View the translated text on screen',
                'Tap the speaker icon to hear the translation'
            ]
        },
        {
            title: 'Learning Mode',
            steps: [
                'Navigate to the Learning section',
                'Select a category (Alphabets, Common Phrases, etc.)',
                'Watch the demonstration video',
                'Practice the gesture in front of the camera',
                'Receive real-time feedback on accuracy'
            ]
        },
        {
            title: 'Settings Configuration',
            steps: [
                'Go to Settings menu',
                'Adjust camera sensitivity',
                'Select preferred sign language system',
                'Enable/disable audio feedback',
                'Customize UI theme and text size'
            ]
        }
    ],
    api: [
        {
            method: 'POST',
            endpoint: '/api/translate',
            description: 'Translate sign language gesture from image',
            parameters: [
                { name: 'image', type: 'File', required: true, description: 'Image file containing sign language gesture' },
                { name: 'language', type: 'String', required: false, description: 'Target sign language (default: ASL)' }
            ],
            response: {
                translation: 'Hello',
                confidence: 0.95,
                timestamp: '2025-01-15T10:30:00Z'
            }
        },
        {
            method: 'GET',
            endpoint: '/api/gestures',
            description: 'Get list of supported gestures',
            parameters: [],
            response: {
                gestures: ['hello', 'thank you', 'yes', 'no'],
                total: 250
            }
        }
    ],
    troubleshooting: [
        {
            problem: 'Camera not working',
            solutions: [
                'Check if camera permissions are granted in device settings',
                'Restart the application',
                'Ensure no other app is using the camera',
                'Update to the latest app version'
            ]
        },
        {
            problem: 'Poor recognition accuracy',
            solutions: [
                'Ensure adequate lighting conditions',
                'Position hand clearly in frame',
                'Remove cluttered backgrounds',
                'Calibrate camera in Settings',
                'Clean camera lens'
            ]
        },
        {
            problem: 'App crashes on startup',
            solutions: [
                'Clear app cache and data',
                'Reinstall the application',
                'Check if device meets minimum requirements',
                'Update device operating system'
            ]
        }
    ]
};

// Page Rendering Functions
function renderHome() {
    return `
        <div class="hero">
            <h1>TertiaLearn Sign Language Translator</h1>
            <p class="hero-description">Breaking communication barriers with AI-powered sign language translation</p>
            <div class="hero-buttons">
                <a href="#" class="btn btn-primary" onclick="navigateTo('releases'); return false;">Download Latest</a>
                <a href="https://github.com/Aleazar0252/App" class="btn btn-secondary" target="_blank">View on GitHub</a>
            </div>
        </div>

        <div class="card-grid">
            <div class="card">
                <div class="card-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                    </svg>
                </div>
                <h3>Documentation</h3>
                <p>Complete guides and API references to help you get started</p>
                <a href="#" class="card-link" onclick="navigateTo('getting-started'); return false;">
                    Read docs →
                </a>
            </div>

            <div class="card">
                <div class="card-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#9333ea" stroke-width="2">
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                </div>
                <h3>API Reference</h3>
                <p>Integrate TertiaLearn into your own applications</p>
                <a href="#" class="card-link" onclick="navigateTo('api'); return false;" style="color: #9333ea;">
                    View API →
                </a>
            </div>

            <div class="card">
                <div class="card-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polygon points="10 8 16 12 10 16 10 8"></polygon>
                    </svg>
                </div>
                <h3>Releases</h3>
                <p>Download the latest version and view changelog</p>
                <a href="#" class="card-link" onclick="navigateTo('releases'); return false;" style="color: #16a34a;">
                    See releases →
                </a>
            </div>
        </div>

        <div class="quick-start">
            <h2>Quick Start</h2>
            <ol class="step-list">
                <li class="step-item">
                    <span class="step-number">1</span>
                    <span>Download the latest release from the releases page</span>
                </li>
                <li class="step-item">
                    <span class="step-number">2</span>
                    <span>Install the app on your device and grant necessary permissions</span>
                </li>
                <li class="step-item">
                    <span class="step-number">3</span>
                    <span>Open the app and start translating sign language in real-time</span>
                </li>
            </ol>
        </div>
    `;
}

function renderGettingStarted() {
    let html = '<div class="content-section"><h1 class="section-title">Getting Started</h1>';
    
    documentation.gettingStarted.sections.forEach(section => {
        html += '<div class="content-box">';
        html += `<h2>${section.heading}</h2>`;
        
        if (section.content) {
            html += `<p>${section.content}</p>`;
        }
        
        if (section.list) {
            html += '<ul class="feature-list">';
            section.list.forEach(item => {
                html += `<li class="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                    <span>${item}</span>
                </li>`;
            });
            html += '</ul>';
        }
        
        if (section.steps) {
            html += '<ol class="step-list">';
            section.steps.forEach((step, i) => {
                html += `<li class="step-item">
                    <span class="step-number">${i + 1}</span>
                    <span>${step}</span>
                </li>`;
            });
            html += '</ol>';
        }
        
        html += '</div>';
    });
    
    html += '</div>';
    return html;
}

function renderFeatures() {
    let html = '<div class="content-section"><h1 class="section-title">Features</h1>';
    html += '<div class="card-grid">';
    
    documentation.features.forEach(feature => {
        html += `<div class="card">
            <h3 style="color: #2563eb;">${feature.name}</h3>
            <p>${feature.description}</p>
        </div>`;
    });
    
    html += '</div></div>';
    return html;
}

function renderUsage() {
    let html = '<div class="content-section"><h1 class="section-title">Usage Guide</h1>';
    
    documentation.usage.forEach(guide => {
        html += '<div class="content-box">';
        html += `<h2>${guide.title}</h2>`;
        html += '<ol class="step-list">';
        
        guide.steps.forEach((step, i) => {
            html += `<li class="step-item">
                <span class="step-number" style="background-color: #9333ea;">${i + 1}</span>
                <span>${step}</span>
            </li>`;
        });
        
        html += '</ol></div>';
    });
    
    html += '</div>';
    return html;
}

function renderAPI() {
    let html = '<div class="content-section"><h1 class="section-title">API Documentation</h1>';
    
    documentation.api.forEach(endpoint => {
        html += '<div class="api-endpoint">';
        html += '<div class="api-header">';
        html += `<span class="api-method method-${endpoint.method.toLowerCase()}">${endpoint.method}</span>`;
        html += `<code class="api-path">${endpoint.endpoint}</code>`;
        html += '</div>';
        html += `<p>${endpoint.description}</p>`;
        
        if (endpoint.parameters.length > 0) {
            html += '<h3>Parameters:</h3>';
            html += '<div class="param-box">';
            endpoint.parameters.forEach(param => {
                html += '<div class="param-item">';
                html += `<code class="param-name">${param.name}</code>`;
                html += `<span class="param-type">${param.type}</span>`;
                if (param.required) {
                    html += '<span class="param-required">required</span>';
                }
                html += `<p class="param-description">${param.description}</p>`;
                html += '</div>';
            });
            html += '</div>';
        }
        
        html += '<h3>Response Example:</h3>';
        html += `<pre class="code-block"><code>${JSON.stringify(endpoint.response, null, 2)}</code></pre>`;
        html += '</div>';
    });
    
    html += '</div>';
    return html;
}

function renderTroubleshooting() {
    let html = '<div class="content-section"><h1 class="section-title">Troubleshooting</h1>';
    
    documentation.troubleshooting.forEach(issue => {
        html += '<div class="content-box">';
        html += '<div style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1rem;">';
        html += `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>`;
        html += `<h2>${issue.problem}</h2>`;
        html += '</div>';
        html += '<h3>Solutions:</h3>';
        html += '<ul class="feature-list">';
        
        issue.solutions.forEach(solution => {
            html += `<li class="feature-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
                <span>${solution}</span>
            </li>`;
        });
        
        html += '</ul></div>';
    });
    
    html += '</div>';
    return html;
}

function renderReleases() {
    let html = '<div class="content-section"><h1 class="section-title">Release History</h1>';
    
    releases.forEach(release => {
        html += '<div class="release-card">';
        html += '<div class="release-header">';
        html += '<div>';
        html += `<h2 class="release-version">v${release.version}</h2>`;
        html += `<p class="release-date">${release.date}</p>`;
        html += '</div>';
        html += `<a href="${release.downloadUrl}" class="download-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download
        </a>`;
        html += '</div>';
        
        html += `<h3 class="release-title">${release.title}</h3>`;
        html += `<p class="release-description">${release.description}</p>`;
        
        if (release.features.length > 0) {
            html += '<div class="changelog-section">';
            html += '<h4>✨ New Features:</h4>';
            html += '<ul class="feature-list">';
            release.features.forEach(feature => {
                html += `<li class="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                    <span>${feature}</span>
                </li>`;
            });
            html += '</ul></div>';
        }
        
        if (release.fixes.length > 0) {
            html += '<div class="changelog-section">';
            html += '<h4>🐛 Bug Fixes:</h4>';
            html += '<ul class="feature-list">';
            release.fixes.forEach(fix => {
                html += `<li class="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                    <span>${fix}</span>
                </li>`;
            });
            html += '</ul></div>';
        }
        
        html += '</div>';
    });
    
    html += '</div>';
    return html;
}

// Navigation
function navigateTo(page) {
    const mainContent = document.getElementById('mainContent');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Update active nav link
    navLinks.forEach(link => {
        if (link.dataset.page === page) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Render content
    let content = '';
    switch(page) {
        case 'home':
            content = renderHome();
            break;
        case 'getting-started':
            content = renderGettingStarted();
            break;
        case 'features':
            content = renderFeatures();
            break;
        case 'usage':
            content = renderUsage();
            break;
        case 'api':
            content = renderAPI();
            break;
        case 'troubleshooting':
            content = renderTroubleshooting();
            break;
        case 'releases':
            content = renderReleases();
            break;
        default:
            content = renderHome();
    }
    
    mainContent.innerHTML = content;
    
    // Close mobile menu if open
    document.getElementById('sidebar').classList.remove('active');
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Load home page by default
    navigateTo('home');
    
    // Setup navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.dataset.page;
            navigateTo(page);
        });
    });
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.getElementById('sidebar');
    
    mobileMenuBtn.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
});