// Mock Data
const mockComplaints = [
  {
    id: 'CMP-001',
    title: 'Large pothole on Main Street',
    category: 'Pothole',
    description: 'A deep pothole near the intersection that\'s causing traffic issues',
    location: 'Main Street, Downtown',
    latitude: 28.7041,
    longitude: 77.1025,
    status: 'Open',
    priority: 'High',
    reportedBy: 'Raj Kumar',
    reportedDate: '2025-11-03',
    supportCount: 24,
    timestamp: '2025-11-03T14:30:00Z',
    comments: [
      { author: 'Priya Singh', text: 'This is really dangerous!', date: '2025-11-03T15:45:00Z' },
      { author: 'Anonymous', text: 'Please fix this soon', date: '2025-11-03T16:20:00Z' }
    ]
  },
  {
    id: 'CMP-002',
    title: 'Garbage pile near park',
    category: 'Garbage',
    description: 'Trash accumulation near Central Park, creating unhygienic conditions',
    location: 'Central Park Avenue',
    latitude: 28.7128,
    longitude: 77.0855,
    status: 'In Progress',
    priority: 'High',
    reportedBy: 'Anita Sharma',
    reportedDate: '2025-11-02',
    supportCount: 18,
    assignedOfficial: 'Officer Gupta',
    timestamp: '2025-11-02T09:15:00Z',
    comments: []
  },
  {
    id: 'CMP-003',
    title: 'Broken streetlight - MG Road',
    category: 'Streetlight',
    description: 'Street lamp damaged and not functioning at night',
    location: 'MG Road, Sector 5',
    latitude: 28.6692,
    longitude: 77.1092,
    status: 'Resolved',
    priority: 'Medium',
    reportedBy: 'Vikram Malhotra',
    reportedDate: '2025-10-28',
    resolvedDate: '2025-11-01',
    supportCount: 12,
    assignedOfficial: 'Officer Patel',
    timestamp: '2025-10-28T18:00:00Z',
    comments: []
  },
  {
    id: 'CMP-004',
    title: 'Water leakage - Residential Block',
    category: 'Water',
    description: 'Main water pipe leaking for past 3 days causing water wastage',
    location: 'Sector 7, Block B',
    latitude: 28.6139,
    longitude: 77.1056,
    status: 'In Progress',
    priority: 'High',
    reportedBy: 'Neha Dubey',
    reportedDate: '2025-11-01',
    supportCount: 31,
    assignedOfficial: 'Officer Singh',
    timestamp: '2025-11-01T10:30:00Z',
    comments: []
  },
  {
    id: 'CMP-005',
    title: 'Drainage blockage near school',
    category: 'Drainage',
    description: 'Clogged drainage causing stagnant water and mosquito breeding',
    location: 'School Road, Near Public School',
    latitude: 28.6350,
    longitude: 77.1250,
    status: 'Open',
    priority: 'Medium',
    reportedBy: 'Arun Kumar',
    reportedDate: '2025-11-03',
    supportCount: 8,
    timestamp: '2025-11-03T11:45:00Z',
    comments: []
  },
  {
    id: 'CMP-006',
    title: 'Overgrown vegetation on sidewalk',
    category: 'Other',
    description: 'Plants and bushes blocking pedestrian walkway',
    location: 'Park Lane, Corner',
    latitude: 28.6500,
    longitude: 77.1180,
    status: 'Open',
    priority: 'Low',
    reportedBy: 'Meena Patel',
    reportedDate: '2025-11-02',
    supportCount: 5,
    timestamp: '2025-11-02T13:20:00Z',
    comments: []
  },
  {
    id: 'CMP-007',
    title: 'Multiple potholes on Central Avenue',
    category: 'Pothole',
    description: 'Several deep potholes making the road unsafe for vehicles',
    location: 'Central Avenue',
    latitude: 28.7200,
    longitude: 77.1100,
    status: 'Open',
    priority: 'High',
    reportedBy: 'Suresh Rao',
    reportedDate: '2025-11-03',
    supportCount: 42,
    timestamp: '2025-11-03T16:00:00Z',
    comments: []
  },
  {
    id: 'CMP-008',
    title: 'Streetlight malfunction - Market Area',
    category: 'Streetlight',
    description: 'Three consecutive street lights not working at night',
    location: 'Market Street',
    latitude: 28.6800,
    longitude: 77.0950,
    status: 'In Progress',
    priority: 'Medium',
    reportedBy: 'Harish Verma',
    reportedDate: '2025-11-01',
    supportCount: 15,
    assignedOfficial: 'Officer Kapoor',
    timestamp: '2025-11-01T19:30:00Z',
    comments: []
  },
  {
    id: 'CMP-009',
    title: 'Garbage not collected for 5 days',
    category: 'Garbage',
    description: 'Waste accumulation in residential area, severe odor issue',
    location: 'Residential Colony, Phase 2',
    latitude: 28.6600,
    longitude: 77.1300,
    status: 'Open',
    priority: 'High',
    reportedBy: 'Rashmi Gupta',
    reportedDate: '2025-11-03',
    supportCount: 28,
    timestamp: '2025-11-03T08:00:00Z',
    comments: []
  },
  {
    id: 'CMP-010',
    title: 'Water connection issue - Sector 8',
    category: 'Water',
    description: 'No water supply for 2 days in entire sector',
    location: 'Sector 8',
    latitude: 28.6400,
    longitude: 77.1400,
    status: 'Resolved',
    priority: 'High',
    reportedBy: 'Deepak Kumar',
    reportedDate: '2025-10-31',
    resolvedDate: '2025-11-02',
    supportCount: 35,
    assignedOfficial: 'Officer Nair',
    timestamp: '2025-10-31T07:00:00Z',
    comments: []
  }
];

const categories = [
  { name: 'Pothole', icon: '🛣️', color: '#EF4444' },
  { name: 'Garbage', icon: '🗑️', color: '#8B5CF6' },
  { name: 'Streetlight', icon: '💡', color: '#F59E0B' },
  { name: 'Water', icon: '💧', color: '#06B6D4' },
  { name: 'Drainage', icon: '🚰', color: '#10B981' },
  { name: 'Other', icon: '⭕', color: '#6366F1' }
];

const statusColors = {
  'Open': '#EF4444',
  'In Progress': '#F59E0B',
  'Resolved': '#22C55E'
};

// State Management
let currentUser = null;
let currentPage = 'landing-page';
let filteredComplaints = [...mockComplaints];
let supportedIssues = [];
let wizardStep = 1;
let wizardData = {};
let map = null;
let officialMap = null;

// Page Navigation
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  currentPage = pageId;
  
  if (pageId === 'citizen-dashboard') {
    initCitizenDashboard();
  } else if (pageId === 'official-dashboard') {
    initOfficialDashboard();
  }
}

// Authentication
function showAuthModal(type) {
  const modal = document.getElementById('authModal');
  const citizenAuth = document.getElementById('citizenAuth');
  const officialAuth = document.getElementById('officialAuth');
  
  if (type === 'citizen') {
    citizenAuth.style.display = 'block';
    officialAuth.style.display = 'none';
  } else {
    citizenAuth.style.display = 'none';
    officialAuth.style.display = 'block';
  }
  
  modal.classList.add('active');
}

function closeModal() {
  document.getElementById('authModal').classList.remove('active');
}

function switchAuthTab(tab) {
  document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
  
  if (tab === 'quick') {
    document.querySelector('.auth-tab:first-child').classList.add('active');
    document.getElementById('quickAccessForm').classList.add('active');
  } else {
    document.querySelector('.auth-tab:last-child').classList.add('active');
    document.getElementById('signupForm').classList.add('active');
  }
}

function quickAccess() {
  currentUser = { type: 'citizen', name: 'Anonymous', anonymous: true };
  closeModal();
  showPage('citizen-dashboard');
  showToast('Welcome! You can now report issues.', 'success');
}

function citizenSignup() {
  currentUser = { type: 'citizen', name: 'Citizen User', anonymous: false };
  closeModal();
  showPage('citizen-dashboard');
  showToast('Account created successfully!', 'success');
}

function officialLogin() {
  const officialId = document.getElementById('officialId').value;
  const email = document.getElementById('officialEmail').value;
  
  if (officialId && email) {
    currentUser = { type: 'official', name: 'Officer ' + officialId.split('-')[1], id: officialId };
    closeModal();
    showPage('official-dashboard');
    showToast('Welcome, ' + currentUser.name + '!', 'success');
  } else {
    showToast('Please fill in all fields', 'error');
  }
}

function logout() {
  currentUser = null;
  showPage('landing-page');
  showToast('Logged out successfully', 'info');
}

// Citizen Dashboard
function initCitizenDashboard() {
  renderFeaturedCarousel();
  renderIssuesGrid();
  initMap();
  
  const fab = document.getElementById('fab');
  fab.classList.add('show');
}

function showCitizenView(view) {
  document.querySelectorAll('.citizen-view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.sidebar-menu .menu-item').forEach(m => m.classList.remove('active'));
  
  if (view === 'feed') {
    document.getElementById('citizenFeed').classList.add('active');
    document.querySelector('.sidebar-menu .menu-item:nth-child(1)').classList.add('active');
  } else if (view === 'map') {
    document.getElementById('citizenMap').classList.add('active');
    document.querySelector('.sidebar-menu .menu-item:nth-child(2)').classList.add('active');
    if (map) {
      setTimeout(() => map.invalidateSize(), 100);
    }
  }
}

function renderFeaturedCarousel() {
  const container = document.getElementById('featuredCarousel');
  const featured = mockComplaints.filter(c => c.supportCount > 20).slice(0, 5);
  
  container.innerHTML = featured.map(complaint => `
    <div class="carousel-item" onclick="showComplaintDetails('${complaint.id}')">
      <div class="issue-image" style="background: linear-gradient(135deg, ${getCategoryColor(complaint.category)}, ${getCategoryColor(complaint.category)}88);"></div>
      <div class="issue-content">
        <div class="issue-header">
          <span class="issue-category">${getCategoryIcon(complaint.category)} ${complaint.category}</span>
          <span class="status-badge ${complaint.status.toLowerCase().replace(' ', '-')}">${complaint.status}</span>
        </div>
        <h3 class="issue-title">${complaint.title}</h3>
        <p class="issue-description">${complaint.description}</p>
        <div class="issue-meta">
          <span class="issue-location">📍 ${complaint.location}</span>
          <span class="issue-support">👍 ${complaint.supportCount}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function renderIssuesGrid() {
  const grid = document.getElementById('issuesGrid');
  
  grid.innerHTML = filteredComplaints.map(complaint => `
    <div class="issue-card" onclick="showComplaintDetails('${complaint.id}')">
      <div class="issue-image" style="background: linear-gradient(135deg, ${getCategoryColor(complaint.category)}, ${getCategoryColor(complaint.category)}88);"></div>
      <div class="issue-content">
        <div class="issue-header">
          <span class="issue-category">${getCategoryIcon(complaint.category)} ${complaint.category}</span>
          <span class="status-badge ${complaint.status.toLowerCase().replace(' ', '-')}">${complaint.status}</span>
        </div>
        <h3 class="issue-title">${complaint.title}</h3>
        <p class="issue-description">${complaint.description}</p>
        <div class="issue-meta">
          <span class="issue-location">📍 ${complaint.location}</span>
          <button class="support-btn ${supportedIssues.includes(complaint.id) ? 'supported' : ''}" onclick="event.stopPropagation(); toggleSupport('${complaint.id}')">
            👍 ${complaint.supportCount}
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function showMyComplaints() {
  document.querySelectorAll('.citizen-view').forEach(v => v.classList.remove('active'));
  document.getElementById('myComplaints').classList.add('active');
  document.querySelectorAll('.sidebar-menu .menu-item').forEach(m => m.classList.remove('active'));
  document.querySelector('.sidebar-menu .menu-item:nth-child(3)').classList.add('active');
  
  const list = document.getElementById('myComplaintsList');
  const userComplaints = mockComplaints.filter(c => currentUser && c.reportedBy === currentUser.name).slice(0, 3);
  
  if (userComplaints.length === 0) {
    list.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 3rem;">You haven\'t reported any issues yet. Click "Report New Issue" to get started!</p>';
  } else {
    list.innerHTML = userComplaints.map(complaint => `
      <div class="list-item" onclick="showComplaintDetails('${complaint.id}')">
        <div class="list-item-content">
          <div class="issue-header">
            <span class="issue-category">${getCategoryIcon(complaint.category)} ${complaint.category}</span>
            <span class="status-badge ${complaint.status.toLowerCase().replace(' ', '-')}">${complaint.status}</span>
          </div>
          <h3 class="issue-title">${complaint.title}</h3>
          <p class="issue-description">${complaint.description}</p>
          <div class="issue-meta">
            <span>📍 ${complaint.location}</span>
            <span>📅 ${formatDate(complaint.reportedDate)}</span>
          </div>
        </div>
      </div>
    `).join('');
  }
}

function filterMyComplaints() {
  showMyComplaints();
}

// Map Functions
function initMap() {
  if (map) return;
  
  const mapElement = document.getElementById('map');
  if (!mapElement) return;
  
  map = L.map('map').setView([28.6139, 77.2090], 12);
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);
  
  mockComplaints.forEach(complaint => {
    const color = statusColors[complaint.status];
    const marker = L.circleMarker([complaint.latitude, complaint.longitude], {
      radius: 8,
      fillColor: color,
      color: '#fff',
      weight: 2,
      opacity: 1,
      fillOpacity: 0.8
    }).addTo(map);
    
    marker.bindPopup(`
      <strong>${complaint.title}</strong><br>
      ${complaint.category}<br>
      Status: ${complaint.status}
    `);
  });
}

function toggleHeatmap() {
  showToast('Heatmap view updated', 'info');
}

// Filters
function applyFilters() {
  const statusFilter = document.getElementById('statusFilter').value;
  const categoryFilter = document.getElementById('categoryFilter').value;
  
  filteredComplaints = mockComplaints.filter(complaint => {
    const statusMatch = statusFilter === 'all' || complaint.status === statusFilter;
    const categoryMatch = categoryFilter === 'all' || complaint.category === categoryFilter;
    return statusMatch && categoryMatch;
  });
  
  renderIssuesGrid();
}

// Support Function
function toggleSupport(id) {
  const index = supportedIssues.indexOf(id);
  if (index > -1) {
    supportedIssues.splice(index, 1);
    mockComplaints.find(c => c.id === id).supportCount--;
    showToast('Support removed', 'info');
  } else {
    supportedIssues.push(id);
    mockComplaints.find(c => c.id === id).supportCount++;
    showToast('Thanks for your support!', 'success');
  }
  renderIssuesGrid();
}

// Report Modal
function openReportModal() {
  document.getElementById('reportModal').classList.add('active');
  wizardStep = 1;
  wizardData = {};
  updateWizardUI();
  renderCategoryGrid();
}

function closeReportModal() {
  document.getElementById('reportModal').classList.remove('active');
}

function renderCategoryGrid() {
  const grid = document.getElementById('categoryGrid');
  grid.innerHTML = categories.map(cat => `
    <div class="category-option" onclick="selectCategory('${cat.name}')">
      <div class="category-icon">${cat.icon}</div>
      <div class="category-name">${cat.name}</div>
    </div>
  `).join('');
}

function selectCategory(category) {
  wizardData.category = category;
  document.querySelectorAll('.category-option').forEach(opt => opt.classList.remove('selected'));
  event.target.closest('.category-option').classList.add('selected');
}

function nextStep() {
  if (wizardStep === 1 && !wizardData.category) {
    showToast('Please select a category', 'error');
    return;
  }
  
  wizardStep++;
  updateWizardUI();
  
  if (wizardStep === 5) {
    renderReview();
  }
}

function prevStep() {
  wizardStep--;
  updateWizardUI();
}

function updateWizardUI() {
  document.querySelectorAll('.wizard-step').forEach((step, index) => {
    if (index < wizardStep) {
      step.classList.add('active');
    } else {
      step.classList.remove('active');
    }
  });
  
  document.querySelectorAll('.wizard-panel').forEach((panel, index) => {
    if (index + 1 === wizardStep) {
      panel.classList.add('active');
    } else {
      panel.classList.remove('active');
    }
  });
  
  document.getElementById('prevBtn').style.display = wizardStep > 1 ? 'block' : 'none';
  document.getElementById('nextBtn').style.display = wizardStep < 5 ? 'block' : 'none';
  document.getElementById('submitBtn').style.display = wizardStep === 5 ? 'block' : 'none';
  
  if (wizardStep === 2) {
    setupPhotoUpload();
  }
}

function setupPhotoUpload() {
  const uploadArea = document.getElementById('uploadArea');
  const photoInput = document.getElementById('photoInput');
  
  uploadArea.onclick = () => photoInput.click();
  
  photoInput.onchange = (e) => {
    const file = e.target.files[0];
    if (file) {
      wizardData.photo = file;
      const preview = document.getElementById('photoPreview');
      preview.innerHTML = `<img src="${URL.createObjectURL(file)}" alt="Preview">`;
    }
  };
}

function renderReview() {
  const title = document.getElementById('issueTitle').value;
  const description = document.getElementById('issueDescription').value;
  const location = document.getElementById('locationInput').value;
  
  wizardData.title = title;
  wizardData.description = description;
  wizardData.location = location;
  
  const review = document.getElementById('reviewContent');
  review.innerHTML = `
    <div class="review-item">
      <div class="review-label">Category</div>
      <div class="review-value">${wizardData.category || 'Not selected'}</div>
    </div>
    <div class="review-item">
      <div class="review-label">Title</div>
      <div class="review-value">${title || 'Not provided'}</div>
    </div>
    <div class="review-item">
      <div class="review-label">Description</div>
      <div class="review-value">${description || 'Not provided'}</div>
    </div>
    <div class="review-item">
      <div class="review-label">Location</div>
      <div class="review-value">${location || 'Not provided'}</div>
    </div>
    <div class="review-item">
      <div class="review-label">Photo</div>
      <div class="review-value">${wizardData.photo ? 'Uploaded' : 'No photo'}</div>
    </div>
  `;
}

function submitReport() {
  const newComplaint = {
    id: 'CMP-' + String(mockComplaints.length + 1).padStart(3, '0'),
    title: wizardData.title || 'New Issue',
    category: wizardData.category,
    description: wizardData.description || 'No description',
    location: wizardData.location || 'Location not specified',
    latitude: 28.6 + Math.random() * 0.2,
    longitude: 77.0 + Math.random() * 0.2,
    status: 'Open',
    priority: 'Medium',
    reportedBy: currentUser ? currentUser.name : 'Anonymous',
    reportedDate: new Date().toISOString().split('T')[0],
    supportCount: 0,
    timestamp: new Date().toISOString(),
    comments: []
  };
  
  mockComplaints.unshift(newComplaint);
  filteredComplaints = [...mockComplaints];
  
  closeReportModal();
  showToast('Issue reported successfully!', 'success');
  renderIssuesGrid();
  renderFeaturedCarousel();
}

// Character Counter
document.addEventListener('DOMContentLoaded', () => {
  const textarea = document.getElementById('issueDescription');
  if (textarea) {
    textarea.addEventListener('input', (e) => {
      const count = e.target.value.length;
      document.getElementById('charCount').textContent = count;
    });
  }
});

// Complaint Details
function showComplaintDetails(id) {
  const complaint = mockComplaints.find(c => c.id === id);
  if (!complaint) return;
  
  const modal = document.getElementById('detailsModal');
  const content = document.getElementById('complaintDetails');
  
  content.innerHTML = `
    <div style="background: linear-gradient(135deg, ${getCategoryColor(complaint.category)}, ${getCategoryColor(complaint.category)}88); height: 250px; border-radius: var(--radius-lg); margin-bottom: 1.5rem;"></div>
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
      <span class="issue-category" style="font-size: 1rem;">${getCategoryIcon(complaint.category)} ${complaint.category}</span>
      <span class="status-badge ${complaint.status.toLowerCase().replace(' ', '-')}" style="font-size: 0.9rem;">${complaint.status}</span>
    </div>
    <h2 style="margin-bottom: 1rem;">${complaint.title}</h2>
    <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">${complaint.description}</p>
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 1.5rem; padding: 1rem; background: var(--bg-secondary); border-radius: var(--radius-md);">
      <div>
        <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.25rem;">Location</div>
        <div style="font-weight: 600;">📍 ${complaint.location}</div>
      </div>
      <div>
        <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.25rem;">Reported Date</div>
        <div style="font-weight: 600;">📅 ${formatDate(complaint.reportedDate)}</div>
      </div>
      <div>
        <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.25rem;">Priority</div>
        <div style="font-weight: 600; color: ${complaint.priority === 'High' ? 'var(--error-color)' : complaint.priority === 'Medium' ? 'var(--warning-color)' : 'var(--success-color)'};">⚠️ ${complaint.priority}</div>
      </div>
      <div>
        <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.25rem;">Support</div>
        <div style="font-weight: 600;">👍 ${complaint.supportCount} people</div>
      </div>
    </div>
    ${complaint.assignedOfficial ? `
      <div style="padding: 1rem; background: var(--bg-secondary); border-radius: var(--radius-md); margin-bottom: 1rem;">
        <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.5rem;">Assigned To</div>
        <div style="font-weight: 600;">${complaint.assignedOfficial}</div>
      </div>
    ` : ''}
    <button class="btn-primary btn-full" onclick="closeDetailsModal()">Close</button>
  `;
  
  modal.classList.add('active');
}

function closeDetailsModal() {
  document.getElementById('detailsModal').classList.remove('active');
}

// Official Dashboard
function initOfficialDashboard() {
  renderOfficialStats();
  renderRecentActivity();
}

function showOfficialView(view) {
  document.querySelectorAll('.official-view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.sidebar-menu .menu-item').forEach(m => m.classList.remove('active'));
  
  const viewMap = {
    'overview': 0,
    'manage': 1,
    'map': 2,
    'analytics': 3,
    'summary': 4
  };
  
  document.getElementById('official' + view.charAt(0).toUpperCase() + view.slice(1)).classList.add('active');
  document.querySelector(`.sidebar-menu .menu-item:nth-child(${viewMap[view] + 1})`).classList.add('active');
  
  if (view === 'manage') {
    renderComplaintsTable();
  } else if (view === 'map') {
    initOfficialMap();
  } else if (view === 'analytics') {
    renderAnalytics();
  } else if (view === 'summary') {
    populateSummarySelect();
  }
}

function renderOfficialStats() {
  const stats = document.getElementById('officialStats');
  const openCount = mockComplaints.filter(c => c.status === 'Open').length;
  const inProgressCount = mockComplaints.filter(c => c.status === 'In Progress').length;
  const resolvedCount = mockComplaints.filter(c => c.status === 'Resolved').length;
  
  stats.innerHTML = `
    <div class="stat-card" onclick="filterOfficialComplaints('all')">
      <div class="stat-number">${mockComplaints.length}</div>
      <div class="stat-label">Total Issues</div>
    </div>
    <div class="stat-card" onclick="filterOfficialComplaints('Open')">
      <div class="stat-number" style="color: var(--error-color);">${openCount}</div>
      <div class="stat-label">Open Issues</div>
    </div>
    <div class="stat-card" onclick="filterOfficialComplaints('In Progress')">
      <div class="stat-number" style="color: var(--warning-color);">${inProgressCount}</div>
      <div class="stat-label">In Progress</div>
    </div>
    <div class="stat-card" onclick="filterOfficialComplaints('Resolved')">
      <div class="stat-number" style="color: var(--success-color);">${resolvedCount}</div>
      <div class="stat-label">Resolved</div>
    </div>
  `;
}

function renderRecentActivity() {
  const list = document.getElementById('recentActivityList');
  const recent = mockComplaints.slice(0, 5);
  
  list.innerHTML = recent.map(complaint => `
    <div class="activity-item">
      <div class="activity-info">
        <div class="activity-title">${complaint.title}</div>
        <div class="activity-time">${formatDate(complaint.reportedDate)} - ${complaint.location}</div>
      </div>
      <span class="status-badge ${complaint.status.toLowerCase().replace(' ', '-')}">${complaint.status}</span>
    </div>
  `).join('');
}

function filterOfficialComplaints(status) {
  showOfficialView('manage');
}

function renderComplaintsTable() {
  const table = document.getElementById('complaintsTable');
  
  table.innerHTML = `
    <thead>
      <tr>
        <th>ID</th>
        <th>Category</th>
        <th>Title</th>
        <th>Location</th>
        <th>Status</th>
        <th>Priority</th>
        <th>Date</th>
        <th>Support</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      ${mockComplaints.map(c => `
        <tr>
          <td><strong>${c.id}</strong></td>
          <td>${getCategoryIcon(c.category)} ${c.category}</td>
          <td>${c.title}</td>
          <td>${c.location}</td>
          <td><span class="status-badge ${c.status.toLowerCase().replace(' ', '-')}">${c.status}</span></td>
          <td><span class="priority-${c.priority.toLowerCase()}">${c.priority}</span></td>
          <td>${formatDate(c.reportedDate)}</td>
          <td>👍 ${c.supportCount}</td>
          <td>
            <button class="btn-secondary" style="padding: 0.5rem 1rem; font-size: 0.85rem;" onclick="updateComplaintStatus('${c.id}')">Update</button>
          </td>
        </tr>
      `).join('')}
    </tbody>
  `;
}

function updateComplaintStatus(id) {
  const complaint = mockComplaints.find(c => c.id === id);
  if (complaint) {
    if (complaint.status === 'Open') {
      complaint.status = 'In Progress';
      complaint.assignedOfficial = currentUser.name;
    } else if (complaint.status === 'In Progress') {
      complaint.status = 'Resolved';
      complaint.resolvedDate = new Date().toISOString().split('T')[0];
    }
    showToast('Status updated successfully', 'success');
    renderComplaintsTable();
    renderOfficialStats();
  }
}

function initOfficialMap() {
  if (officialMap) {
    setTimeout(() => officialMap.invalidateSize(), 100);
    return;
  }
  
  const mapElement = document.getElementById('officialMapContainer');
  if (!mapElement) return;
  
  officialMap = L.map('officialMapContainer').setView([28.6139, 77.2090], 12);
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(officialMap);
  
  mockComplaints.forEach(complaint => {
    const color = statusColors[complaint.status];
    const marker = L.circleMarker([complaint.latitude, complaint.longitude], {
      radius: 10,
      fillColor: color,
      color: '#fff',
      weight: 2,
      opacity: 1,
      fillOpacity: 0.8
    }).addTo(officialMap);
    
    marker.bindPopup(`
      <strong>${complaint.title}</strong><br>
      ${complaint.category}<br>
      Status: ${complaint.status}<br>
      Priority: ${complaint.priority}
    `);
  });
}

function renderAnalytics() {
  renderCategoryChart();
  renderTrendsChart();
}

function renderCategoryChart() {
  const ctx = document.getElementById('categoryChart');
  if (!ctx) return;
  
  const categoryCounts = {};
  categories.forEach(cat => {
    categoryCounts[cat.name] = mockComplaints.filter(c => c.category === cat.name).length;
  });
  
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: Object.keys(categoryCounts),
      datasets: [{
        data: Object.values(categoryCounts),
        backgroundColor: categories.map(c => c.color)
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}

function renderTrendsChart() {
  const ctx = document.getElementById('trendsChart');
  if (!ctx) return;
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Oct 28', 'Oct 29', 'Oct 30', 'Oct 31', 'Nov 01', 'Nov 02', 'Nov 03'],
      datasets: [{
        label: 'Issues Reported',
        data: [2, 3, 1, 2, 3, 2, 4],
        borderColor: '#FF6B35',
        backgroundColor: 'rgba(255, 107, 53, 0.1)',
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1
          }
        }
      }
    }
  });
}

function populateSummarySelect() {
  const select = document.getElementById('summaryComplaintSelect');
  select.innerHTML = mockComplaints.map(c => `
    <option value="${c.id}">${c.id} - ${c.title}</option>
  `).join('');
}

function generateSummary() {
  const complaintId = document.getElementById('summaryComplaintSelect').value;
  const language = document.getElementById('languageSelect').value;
  const length = document.getElementById('summaryLength').value;
  
  const complaint = mockComplaints.find(c => c.id === complaintId);
  if (!complaint) return;
  
  let summary = '';
  
  if (language === 'hi') {
    summary = `शिकायत संख्या: ${complaint.id}\nश्रेणी: ${complaint.category}\nस्थान: ${complaint.location}\nस्थिति: ${complaint.status}\n\nविवरण: ${complaint.description}\n\nप्राथमिकता: ${complaint.priority}\nसमर्थन गिनती: ${complaint.supportCount}`;
  } else {
    summary = `Complaint ID: ${complaint.id}\nCategory: ${complaint.category}\nLocation: ${complaint.location}\nStatus: ${complaint.status}\n\nDescription: ${complaint.description}\n\nPriority: ${complaint.priority}\nSupport Count: ${complaint.supportCount}\n\nReported by: ${complaint.reportedBy}\nDate: ${complaint.reportedDate}`;
  }
  
  const output = document.getElementById('summaryOutput');
  output.innerHTML = `
    <div style="margin-bottom: 1rem; display: flex; justify-content: space-between; align-items: center;">
      <strong>Generated Summary (${language.toUpperCase()})</strong>
      <button class="btn-secondary" style="padding: 0.5rem 1rem; font-size: 0.85rem;" onclick="copySummary()">Copy</button>
    </div>
    <div>${summary}</div>
  `;
}

function copySummary() {
  showToast('Summary copied to clipboard!', 'success');
}

function exportComplaints() {
  showToast('Exporting complaints to CSV...', 'info');
  setTimeout(() => {
    showToast('Export completed!', 'success');
  }, 1000);
}

// Helper Functions
function getCategoryIcon(category) {
  const cat = categories.find(c => c.name === category);
  return cat ? cat.icon : '⭕';
}

function getCategoryColor(category) {
  const cat = categories.find(c => c.name === category);
  return cat ? cat.color : '#6366F1';
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 1) return 'Today';
  if (diffDays === 2) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

// Toast Notifications
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      ${type === 'success' ? '<polyline points="20 6 9 17 4 12"/>' : 
        type === 'error' ? '<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>' :
        '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>'}
    </svg>
    <span>${message}</span>
  `;
  
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// User Menu Toggle
function toggleUserMenu() {
  const dropdown = document.getElementById('userDropdown');
  dropdown.classList.toggle('active');
}

function toggleNotifications() {
  showToast('You have 3 new updates', 'info');
}

// Help Widget
function toggleHelp() {
  const panel = document.getElementById('helpPanel');
  const content = document.getElementById('helpContent');
  panel.classList.toggle('active');
  
  if (panel.classList.contains('active')) {
    const helpTopics = currentUser && currentUser.type === 'official' ? [
      'Managing complaints',
      'Understanding dashboard metrics',
      'Using the summary generator',
      'Bulk actions tutorial',
      'Performance analytics'
    ] : [
      'How to report an issue',
      'Tracking your complaints',
      'Privacy and data protection',
      'Frequently asked questions',
      'Contact support'
    ];
    
    content.innerHTML = helpTopics.map(topic => `
      <div class="help-topic">${topic}</div>
    `).join('');
  }
}

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.user-menu')) {
    const dropdown = document.getElementById('userDropdown');
    if (dropdown) dropdown.classList.remove('active');
  }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  showPage('landing-page');
});