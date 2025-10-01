# Ningning Wang - Personal Homepage

A beautiful, responsive personal homepage for GitHub Pages.

## Features

- 🎨 **Modern Design**: Clean layout with green/blue color scheme
- 🌙 **Dark/Light Mode**: Toggle between themes
- 📱 **Responsive**: Works on all devices
- ⚡ **Fast Loading**: Optimized performance
- 📚 **Publications**: Showcase research papers
- 🎯 **Projects**: Professional project display
- 📰 **News**: Latest updates
- 📸 **Gallery**: Personal photos

## Quick Setup

### 1. Add Your Profile Photo
- Replace `profile.jpg` with your photo (300x300px recommended)

### 2. Add Your Photos
- Add photos to the `photos/` folder
- Update photo list in `script.js` under `GalleryManager`

### 3. Update Your Information
Edit `script.js` to customize:

#### Publications
```javascript
// In PublicationManager class
{
    title: "Your Paper Title",
    authors: "Your Name, Co-author",
    venue: "Conference Name",
    year: "2024",
    abstract: "Your abstract...",
    links: {
        arxiv: "https://arxiv.org/abs/your-paper",
        code: "https://github.com/yourusername/repo",
        pdf: "path/to/paper.pdf",
        bibtex: "path/to/bibtex.bib"
    }
}
```

#### Projects
```javascript
// In ProjectManager class
{
    title: "Your Project",
    description: "Project description...",
    image: "project.jpg",
    links: {
        demo: "https://demo-url.com",
        code: "https://github.com/yourusername/repo"
    }
}
```

#### Social Links
```javascript
// In SocialLinksManager class
{
    name: "Email",
    icon: "icon/邮箱.svg",
    url: "mailto:your.email@example.com"
}
```

## Deploy to GitHub Pages

1. **Upload files** to your GitHub repository
2. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select source branch (usually `main`)
   - Save settings
3. **Your site** will be at `https://yourusername.github.io`

## Files Structure

```
juvenilecris.github.io/
├── index.html          # Main page
├── styles.css          # Styling
├── script.js           # Interactive features
├── 404.html            # Error page
├── README.md           # This file
├── profile.jpg         # Your profile photo
├── photos/             # Your photos folder
└── icon/               # Social media icons
    ├── 邮箱.svg
    ├── github-fill.svg
    ├── Google scholar.svg
    ├── dblp_.svg
    ├── openreview.png
    ├── 知乎.svg
    ├── 小红书.svg
    ├── QQ.svg
    └── Arxiv.svg
```

## Customization

- **Colors**: Edit CSS variables in `styles.css`
- **Content**: Update `script.js` with your information
- **Photos**: Add to `photos/` folder and update `GalleryManager`

## License

MIT License - feel free to use and modify!
