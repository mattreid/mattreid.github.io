# Recipe Site

A static, mobile-friendly recipe website that can be hosted on GitHub Pages. Features serving adjustment, ingredient scaling, and easy recipe management via JSON files.

## Features

- 📱 **Mobile Responsive** - Works perfectly on phones, tablets, and desktop
- 🔄 **Serving Adjustment** - Easily scale recipes up or down with automatic ingredient calculations
- ✅ **Interactive Ingredients** - Check off ingredients as you cook
- 🔍 **Search Functionality** - Find recipes by title, description, or ingredients
- 🖼️ **Image Support** - Beautiful recipe images
- ⏱️ **Timing Information** - Prep time, cook time, and total time
- 🔗 **Recipe Sources** - Links to original recipe sources
- 📝 **Easy Recipe Management** - Add new recipes via simple JSON format

## Quick Start

1. **Clone or download this repository**
2. **Add your recipes** to `recipes.json` (see format below)
3. **Deploy to GitHub Pages** or any static hosting service

## Adding New Recipes

To add a new recipe, edit `recipes.json` and add an object with the following structure:

```json
{
    "id": "unique-recipe-id",
    "title": "Recipe Title",
    "description": "Brief description of the recipe",
    "image": "https://example.com/image.jpg",
    "prepTime": "15 min",
    "cookTime": "30 min",
    "servings": 4,
    "source": "https://original-recipe-url.com",
    "ingredients": [
        "1 cup flour",
        "2 eggs",
        "1/2 cup milk"
    ],
    "instructions": [
        "First instruction step",
        "Second instruction step",
        "Third instruction step"
    ]
}
```

### Recipe Fields

- **id**: Unique identifier (used for URLs)
- **title**: Recipe name
- **description**: Brief description
- **image**: URL to recipe image (or local path)
- **prepTime**: Preparation time (e.g., "15 min", "1 hour")
- **cookTime**: Cooking time (e.g., "30 min", "45 min")
- **servings**: Number of servings the recipe makes
- **source**: Link to original recipe (optional)
- **ingredients**: Array of ingredient strings
- **instructions**: Array of instruction steps

## Customization

### Styling

All styles are in `styles.css`. The design uses CSS custom properties (variables) for easy theming:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #f59e0b;
    /* ... other variables */
}
```

### Images

You can use:
- External URLs (like the examples)
- Local images in the same directory
- Images in a subfolder (e.g., `images/recipe.jpg`)

## Deployment to GitHub Pages

1. **Create a new GitHub repository** or use an existing one
2. **Upload all files** to the repository
3. **Go to Settings > Pages** in your repository
4. **Select source**: Deploy from a branch
5. **Select branch**: `main` and `/ (root)`
6. **Save** and wait a few minutes
7. Your site will be available at `https://yourusername.github.io/repository-name`

## Local Development

Since this is a static site, you can:

1. **Use any local server**:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (if you have http-server)
   npx http-server
   
   # VS Code Live Server extension
   ```

2. **Open `index.html` directly** in your browser (some features may not work due to CORS)

## Browser Support

- Chrome/Chromium 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## File Structure

```
recipe-site/
├── index.html          # Main HTML file
├── styles.css          # All styles
├── app.js             # JavaScript functionality
├── recipes.json       # Recipe data
├── README.md          # This file
└── images/            # Your recipe images (optional)
```

## Contributing

Feel free to:
- Add new recipes
- Improve the design
- Add new features
- Fix bugs

## License

MIT License - feel free to use this for your own recipe sites!
