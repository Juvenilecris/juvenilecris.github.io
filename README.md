# Personal Homepage - Ningning Wang

A beautiful, responsive personal homepage designed for GitHub Pages with elegant green/blue theme and dark/light mode support.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between themes with persistent preference storage
- **Modern UI**: Clean, elegant design with smooth animations and transitions
- **Complete Sections**:
  - About section with profile photo and social media links
  - Education timeline
  - Research interests
  - News & Blog section
  - Publications & Projects showcase
  - Photo gallery
- **Interactive Elements**: Hover effects, smooth scrolling, and modal gallery
- **SEO Optimized**: Semantic HTML structure and meta tags

## File Structure

```
juvenilecris.github.io/
├── index.html          # Main HTML file
├── styles.css          # CSS styles with theme support
├── script.js           # JavaScript for interactivity
├── README.md           # This file
├── profile.jpg         # Your profile photo (add this)
├── icon/               # Social media icons
│   ├── Arxiv.svg
│   ├── dblp_.svg
│   ├── github-fill.svg
│   ├── Google scholar.svg
│   ├── openreview.png
│   ├── QQ.svg
│   ├── 小红书.svg
│   ├── 知乎.svg
│   └── 邮箱.svg
└── photos/             # Life photos
    └── photo1.jpg
```

## Setup Instructions

### 1. Add Your Profile Photo
- Add your profile photo as `profile.jpg` in the root directory
- Recommended size: 300x300px or larger (square aspect ratio)
- The image will be automatically cropped to fit

### 2. Update Personal Information
Edit the following sections in `index.html`:

#### About Section
```html
<h1>Ningning Wang (王宁宁)</h1>
<h2>Graduate Student | AI Researcher</h2>
<p class="current-status">
    Senior Student, Dalian University of Technology<br>
    B.Eng. in Artificial Intelligence<br>
    Admitted to USTC for Master's in Information & Communication Engineering
</p>
```

#### Social Media Links
Update the social media links in the `.social-links` section:
```html
<a href="YOUR_GITHUB_URL" class="social-link" title="GitHub">
    <img src="icon/github-fill.svg" alt="GitHub">
</a>
<a href="YOUR_SCHOLAR_URL" class="social-link" title="Google Scholar">
    <img src="icon/Google scholar.svg" alt="Google Scholar">
</a>
<!-- Add more links as needed -->
```

#### Education Timeline
Update your education information:
```html
<div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <h3>University of Science and Technology of China (USTC)</h3>
        <p class="degree">Master's in Information & Communication Engineering</p>
        <p class="period">2024 - Present (Gap Year)</p>
        <p class="status">Admitted</p>
    </div>
</div>
```

#### Research Interests
Update your research areas:
```html
<div class="research-card">
    <h3>Vision-Language Models (VLM)</h3>
    <p>Application and development of multimodal AI systems that understand both visual and textual information.</p>
</div>
```

#### News & Blog
Add your news and blog posts:
```html
<div class="news-item">
    <span class="news-type news-tag">News</span>
    <h3 class="news-title">Your News Title</h3>
    <p class="news-date">December 2024</p>
</div>
```

#### Publications & Projects
Add your publications and projects:
```html
<div class="pub-item">
    <div class="pub-thumbnail">
        <img src="path/to/paper/thumbnail.jpg" alt="Publication">
    </div>
    <div class="pub-content">
        <h4 class="pub-title">Your Paper Title</h4>
        <p class="pub-authors">Ningning Wang, et al.</p>
        <p class="pub-venue">ICML 2024</p>
        <p class="pub-abstract">Your paper abstract...</p>
        <div class="pub-links">
            <a href="ARXIV_LINK" class="pub-link">
                <img src="icon/Arxiv.svg" alt="ArXiv" class="link-icon">
                ArXiv
            </a>
            <a href="CODE_LINK" class="pub-link">
                <img src="icon/github-fill.svg" alt="Code" class="link-icon">
                Code
            </a>
        </div>
    </div>
</div>
```

### 3. Add More Photos
- Add more photos to the `photos/` directory
- Update the gallery section in `index.html` to include them
- Recommended aspect ratio: 4:3

### 4. Customize Colors (Optional)
To change the color scheme, edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2D5A27;      /* Main green color */
    --secondary-color: #1E40AF;    /* Secondary blue color */
    --accent-color: #059669;       /* Accent green color */
    /* ... other variables */
}
```

## Deployment to GitHub Pages

1. Push all files to your GitHub repository
2. Go to repository Settings > Pages
3. Select "Deploy from a branch" and choose "main" branch
4. Your site will be available at `https://juvenilecris.github.io`

## Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- Lazy loading for images
- Smooth animations with CSS transforms
- Optimized font loading
- Minimal JavaScript footprint
- Responsive images

## Customization Tips

1. **Add more sections**: Copy the existing section structure and modify
2. **Change fonts**: Update the Google Fonts import in `index.html`
3. **Add animations**: Use CSS animations or JavaScript for more effects
4. **SEO optimization**: Add meta tags and structured data
5. **Analytics**: Add Google Analytics or other tracking codes

## Support

If you need help customizing the website, feel free to:
- Modify the HTML structure for different layouts
- Update CSS for different styling
- Add more JavaScript functionality as needed

The website is designed to be easily maintainable and customizable for your specific needs.
