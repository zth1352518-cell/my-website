// ==================== 全局变量 ====================

let filesData = null;

// ==================== 初始化 ====================

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
    // 设置当前页面的导航激活状态
    setActiveNavLink();

    // 尝试加载文件数据
    loadFilesData();
});

// ==================== 导航栏功能 ====================

// 设置当前页面的导航激活状态
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ==================== 文件数据加载 ====================

// 加载文件数据
async function loadFilesData() {
    try {
        const response = await fetch('data/files.json');
        if (!response.ok) {
            throw new Error('无法加载文件数据');
        }
        filesData = await response.json();
        return filesData;
    } catch (error) {
        console.error('加载文件数据失败:', error);
        showErrorMessage('无法加载文件列表，请稍后刷新页面重试');
        return null;
    }
}

// ==================== 渲染文件页面 ====================

// 渲染文件下载页面
async function renderFilesPage() {
    const container = document.getElementById('files-container');

    if (!container) return;

    const data = await loadFilesData();

    if (!data || !data.categories || data.categories.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📭</div>
                <div class="empty-state-text">暂无文件，正在整理中...</div>
            </div>
        `;
        return;
    }

    let html = '';

    // 遍历每个分类
    data.categories.forEach(category => {
        if (!category.files || category.files.length === 0) {
            return; // 跳过空分类
        }

        html += `
            <section class="files-section">
                <div class="category-header">
                    <span class="category-icon">${category.icon || '📁'}</span>
                    <h2 class="category-title">${category.name}</h2>
                </div>
                <div class="files-grid">
        `;

        // 渲染该分类下的所有文件
        category.files.forEach(file => {
            html += createFileCard(file);
        });

        html += `
                </div>
            </section>
        `;
    });

    container.innerHTML = html;
}

// 创建单个文件卡片
function createFileCard(file) {
    const fileIcon = getFileIcon(file.type);
    const fileSize = file.size || '未知大小';
    const fileDate = formatDate(file.date);

    return `
        <div class="file-card">
            <div class="file-icon ${fileIcon}"></div>
            <div class="file-name">${escapeHtml(file.name)}</div>
            <div class="file-description">${escapeHtml(file.description || '暂无描述')}</div>
            <div class="file-meta">
                <span>${file.type || '文件'}</span>
                <span>•</span>
                <span>${fileSize}</span>
                <span>•</span>
                <span>${fileDate}</span>
            </div>
            <button class="file-download-btn" onclick="window.open('${escapeHtml(file.link)}', '_blank')">
                下载文件
            </button>
        </div>
    `;
}

// ==================== 工具函数 ====================

// 根据文件类型获取图标类名
function getFileIcon(type) {
    if (!type) return 'default';

    const typeLower = type.toLowerCase();

    const iconMap = {
        'pdf': 'pdf',
        'doc': 'doc',
        'docx': 'doc',
        'ppt': 'ppt',
        'pptx': 'ppt',
        'zip': 'zip',
        'rar': 'zip',
        '7z': 'zip',
        'exe': 'exe',
        'msi': 'exe',
        'jpg': 'image',
        'jpeg': 'image',
        'png': 'image',
        'gif': 'image',
        'svg': 'image',
        'mp4': 'video',
        'mkv': 'video',
        'avi': 'video',
        'mov': 'video'
    };

    return iconMap[typeLower] || 'default';
}

// 格式化日期
function formatDate(dateString) {
    if (!dateString) return '未知日期';

    try {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    } catch (error) {
        return dateString;
    }
}

// HTML 转义，防止 XSS 攻击
function escapeHtml(text) {
    if (!text) return '';

    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// 显示错误消息
function showErrorMessage(message) {
    const container = document.getElementById('files-container');
    if (container) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">⚠️</div>
                <div class="empty-state-text">${escapeHtml(message)}</div>
            </div>
        `;
    }
}

// ==================== 平滑滚动 ====================

// 为所有锚点链接添加平滑滚动效果
document.addEventListener('click', function(e) {
    const link = e.target.closest('a');
    if (link && link.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// ==================== 搜索功能（预留） ====================

// 文件搜索功能（可在后续扩展）
function searchFiles(keyword) {
    if (!filesData || !filesData.categories) {
        return [];
    }

    const results = [];
    const keywordLower = keyword.toLowerCase();

    filesData.categories.forEach(category => {
        if (category.files) {
            category.files.forEach(file => {
                if (file.name?.toLowerCase().includes(keywordLower) ||
                    file.description?.toLowerCase().includes(keywordLower)) {
                    results.push({
                        ...file,
                        categoryName: category.name
                    });
                }
            });
        }
    });

    return results;
}

// ==================== 导出函数供全局使用 ====================

// 使函数可以在全局作用域中调用
window.renderFilesPage = renderFilesPage;
window.searchFiles = searchFiles;
