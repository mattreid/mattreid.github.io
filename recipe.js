class RecipeDetail {
    constructor() {
        this.recipes = [];
        this.currentRecipe = null;
        this.originalServings = null;
        this.updatedIngredients = [];
        this.init();
    }

    async init() {
        await this.loadRecipes();
        this.loadRecipeFromURL();
    }

    async loadRecipes() {
        try {
            const response = await fetch('recipes.json');
            this.recipes = await response.json();
        } catch (error) {
            console.error('❌ Error loading recipes:', error);
            // Fallback to sample recipes if recipes.json doesn't exist
            this.recipes = this.getSampleRecipes();
        }
        
        this.loadRecipeFromURL();
    }

    getSampleRecipes() {
        return [
            {
                id: "chocolate-chip-cookies",
                title: "Classic Chocolate Chip Cookies",
                description: "Soft and chewy chocolate chip cookies that are perfect for any occasion.",
                image: "https://images.unsplash.com/photo-1596797038534-2a0472b6a2a5?w=400",
                prepTime: "15 min",
                cookTime: "12 min",
                servings: 24,
                complexity: 2,
                source: "https://www.allrecipes.com/recipe/10813/best-chocolate-chip-cookies/",
                ingredients: [
                    "2 1/4 cups all-purpose flour",
                    "1 tsp baking soda",
                    "1 tsp salt",
                    "1 cup butter, softened",
                    "3/4 cup granulated sugar",
                    "3/4 cup packed brown sugar",
                    "2 large eggs",
                    "2 tsp vanilla extract",
                    "2 cups chocolate chips"
                ],
                instructions: [
                    "Preheat oven to 375°F (190°C).",
                    "In a small bowl, mix flour, baking soda, and salt.",
                    "In a large bowl, cream together butter and both sugars until fluffy.",
                    "Beat in eggs one at a time, then stir in vanilla.",
                    "Gradually blend in the flour mixture.",
                    "Stir in chocolate chips.",
                    "Drop rounded tablespoons of dough onto ungreased cookie sheets.",
                    "Bake for 9 to 11 minutes or until golden brown.",
                    "Cool on baking sheet for 2 minutes before removing to a wire rack."
                ]
            },
            {
                id: "spaghetti-carbonara",
                title: "Authentic Spaghetti Carbonara",
                description: "Classic Italian pasta dish with eggs, cheese, and pancetta.",
                image: "https://images.unsplash.com/photo-1612874742237-65262208899b?w=400",
                prepTime: "10 min",
                cookTime: "20 min",
                servings: 4,
                complexity: 3,
                source: "https://www.seriouseats.com/spaghetti-carbonara-recipe",
                ingredients: [
                    "1 lb spaghetti",
                    "6 oz pancetta or guanciale, diced",
                    "4 large eggs",
                    "1 cup grated Pecorino Romano cheese",
                    "1/2 cup grated Parmesan cheese",
                    "Freshly ground black pepper",
                    "Salt for pasta water"
                ],
                instructions: [
                    "Bring a large pot of salted water to boil and cook spaghetti according to package directions.",
                    "While pasta cooks, cook pancetta in a large skillet until crispy, about 8-10 minutes.",
                    "In a bowl, whisk together eggs, Pecorino Romano, Parmesan, and plenty of black pepper.",
                    "When pasta is al dente, reserve 1 cup pasta water, then drain.",
                    "Add hot pasta to the skillet with pancetta (heat off).",
                    "Pour egg mixture over pasta and toss quickly, adding pasta water as needed to create a creamy sauce.",
                    "Serve immediately with extra cheese and black pepper."
                ]
            },
            {
                id: "chicken-stir-fry",
                title: "Quick Chicken Stir Fry",
                description: "A fast and healthy weeknight dinner with vegetables and tender chicken.",
                image: "https://images.unsplash.com/photo-1512058564366-18510be2f191?w=400",
                prepTime: "15 min",
                cookTime: "15 min",
                servings: 4,
                complexity: 2,
                source: "https://www.foodnetwork.com/recipes/food-network-kitchen/chicken-stir-fry-3362541",
                ingredients: [
                    "1 lb boneless chicken breast, cut into bite-sized pieces",
                    "2 tbsp soy sauce",
                    "1 tbsp cornstarch",
                    "2 tbsp vegetable oil",
                    "1 bell pepper, sliced",
                    "1 broccoli head, cut into florets",
                    "2 cloves garlic, minced",
                    "1 tbsp fresh ginger, minced",
                    "1/4 cup chicken broth",
                    "2 tbsp oyster sauce",
                    "1 tsp sesame oil"
                ],
                instructions: [
                    "Marinate chicken in soy sauce and cornstarch for 10 minutes.",
                    "Heat vegetable oil in a large skillet or wok over high heat.",
                    "Add chicken and stir-fry until golden and cooked through, about 5-6 minutes.",
                    "Remove chicken and set aside.",
                    "Add bell pepper and broccoli to the same skillet, stir-frying for 3-4 minutes.",
                    "Add garlic and ginger, cook for 30 seconds until fragrant.",
                    "Return chicken to the skillet along with chicken broth and oyster sauce.",
                    "Stir everything together and cook for 2-3 minutes.",
                    "Drizzle with sesame oil and serve over rice."
                ]
            },
            {
                id: "banana-bread",
                title: "Moist Banana Bread",
                description: "A classic banana bread recipe that's perfect for using up overripe bananas.",
                image: "https://images.unsplash.com/photo-1604906566336-3a55b1d576c9?w=400",
                prepTime: "15 min",
                cookTime: "60 min",
                servings: 12,
                complexity: 1,
                source: "https://www.baking-sense.com/2019/03/19/the-best-banana-bread-recipe/",
                ingredients: [
                    "3 ripe bananas, mashed",
                    "1/3 cup melted butter",
                    "1 tsp baking soda",
                    "Pinch of salt",
                    "3/4 cup sugar",
                    "1 large egg, beaten",
                    "1 tsp vanilla extract",
                    "1 1/2 cups all-purpose flour"
                ],
                instructions: [
                    "Preheat oven to 350°F (175°C). Grease a 9x5 inch loaf pan.",
                    "In a large bowl, mash the bananas with a fork until smooth.",
                    "Stir melted butter into the mashed bananas.",
                    "Mix in baking soda and salt.",
                    "Stir in sugar, beaten egg, and vanilla extract.",
                    "Mix in flour until just combined.",
                    "Pour batter into prepared loaf pan.",
                    "Bake for 60-65 minutes, or until a toothpick inserted into center comes out clean.",
                    "Cool in pan for 10 minutes, then turn out onto a wire rack to cool completely."
                ]
            },
            {
                id: "greek-salad",
                title: "Traditional Greek Salad",
                description: "Fresh and colorful Mediterranean salad with feta cheese and olives.",
                image: "https://images.unsplash.com/photo-1525373612132-b3e820b87cea?w=400",
                prepTime: "20 min",
                cookTime: "0 min",
                servings: 6,
                complexity: 1,
                source: "https://www.greekcookbook.com/recipes/greek-salad-recipe/",
                ingredients: [
                    "2 large tomatoes, cut into wedges",
                    "1 cucumber, sliced",
                    "1 red onion, thinly sliced",
                    "1 green bell pepper, cut into rings",
                    "1 cup Kalamata olives",
                    "8 oz feta cheese, cubed",
                    "1/4 cup extra virgin olive oil",
                    "2 tbsp red wine vinegar",
                    "1 tsp dried oregano",
                    "Salt and pepper to taste"
                ],
                instructions: [
                    "Cut tomatoes into wedges and place in a large bowl.",
                    "Slice cucumber and add to the bowl.",
                    "Thinly slice red onion and add to vegetables.",
                    "Cut green bell pepper into rings and add to the salad.",
                    "Add Kalamata olives to the bowl.",
                    "Gently fold in cubed feta cheese.",
                    "In a small bowl, whisk together olive oil, red wine vinegar, and oregano.",
                    "Pour dressing over salad and toss gently.",
                    "Season with salt and pepper to taste.",
                    "Let salad sit for 15 minutes before serving to allow flavors to meld."
                ]
            },
            {
                id: "sweet-potato-curry",
                title: "Sweet Potato Curry",
                description: "A hearty and flavorful curry with sweet potatoes, quinoa, and lentils in a coconut milk base.",
                image: "https://images.unsplash.com/photo-15652967697491-3a55b1d576c9?w=400",
                prepTime: "20 min",
                cookTime: "50 min",
                servings: 6,
                complexity: 3,
                source: "https://www.shelikesfood.com/one-pot-coconut-curry-quinoa-lentil-sweet-potatoes/#tasty-recipes-9904-jump-target",
                ingredients: [
                    "4 cups small diced sweet potato",
                    "1 cup quinoa, rinsed",
                    "1 cup brown lentils",
                    "1 (15 ounce) can of beans (black, pinto, etc) [optional]",
                    "1 yellow onion, diced",
                    "1 (15 ounce) can coconut milk",
                    "4 cups vegetable broth",
                    "2 teaspoons curry powder",
                    "1 teaspoon salt",
                    "1 teaspoon ground ginger",
                    "1 teaspoon ground corriander",
                    "1 teaspoon granulated garlic",
                    ".5 teaspoon black pepper"
                ],
                instructions: [
                    "Add all ingredients to a large pot and stir until combined. Bring mixture to a boil, reduce to a simmer and simmer covered until liquid has absorbed and quinoa, lentils and sweet potato are cooked through, 50-60 minutes.",
                    "You will want to uncover the pot and give it a good stir every so often to make sure nothing is sticking to the bottom and that there is enough liquid. If for some reason you run out of liquid, you can add in a little bit more broth, or water.",
                    "Garnish with chopped cashews, fresh cilantro, or pickled red onions, if desired.",
                    "Add-ons: If you want to make it more hearty, you can add a can of beans (black, pinto, etc), some tempeh cut into bite sized pieces, TVP, or pea crumbles."
                ]
            }
        ];
    }

    loadRecipeFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const recipeId = urlParams.get('id');
        
        if (!recipeId) {
            this.showRecipeNotFound();
            return;
        }
        
        if (!this.recipes || this.recipes.length === 0) {
            this.showRecipeNotFound();
            return;
        }
        
        const recipe = this.recipes.find(r => r.id === recipeId);
        
        if (recipe) {
            this.currentRecipe = recipe;
            this.originalServings = recipe.servings;
            
            // Update page title and header title
            document.title = `${recipe.title} - Recipe`;
            const pageTitleEl = document.getElementById('pageTitle');
            if (pageTitleEl) {
                pageTitleEl.textContent = recipe.title;
            }
            
            this.renderRecipeDetail(recipe);
            
            // Initialize ingredients for scaling after DOM is rendered
            setTimeout(() => {
                this.updateIngredients(1); // Initialize with scale factor of 1
            }, 50);
        } else {
            this.showRecipeNotFound();
        }
    }

    getComplexityDisplay(complexity) {
        const level = complexity || 3;
        let color;
        if (level <= 2) {
            color = 'green';
        } else if (level <= 3) {
            color = 'gray';
        } else {
            color = 'red';
        }
        return `<span style="color: ${color}">${level}</span>`;
    }

    cleanSourceUrl(url) {
        // Remove jump/anchor links from the displayed URL
        const cleanUrl = url.split('#')[0];
        
        // On mobile screens (width <= 768px), show just the domain without www and .com
        if (window.innerWidth <= 768) {
            try {
                const urlObj = new URL(cleanUrl);
                let hostname = urlObj.hostname;
                // Remove www. and .com/.net/.org etc.
                hostname = hostname.replace(/^www\./, '');
                hostname = hostname.replace(/\.(com|net|org|io|co|us|uk|ca|au|de|fr|it|es|jp|cn|in|br|mx|ru)$/i, '');
                return hostname;
            } catch (e) {
                return cleanUrl;
            }
        }
        
        return cleanUrl;
    }

    showRecipeNotFound() {
        const detailContainer = document.getElementById('recipeDetail');
        detailContainer.innerHTML = `
            <div class="recipe-detail-page">
                <div class="recipe-detail-content">
                    <h1 class="recipe-detail-title">Recipe Not Found</h1>
                    <p class="recipe-detail-description">
                        Sorry, the recipe you're looking for doesn't exist or has been moved.
                    </p>
                    <a href="index.html" class="source-link">← Back to Recipe List</a>
                </div>
            </div>
        `;
    }

    renderRecipeDetail(recipe) {
        // Only render if recipe exists and has ingredients
        if (!recipe || !recipe.ingredients || recipe.ingredients.length === 0) {
            this.showRecipeNotFound();
            return;
        }
        
        const detailContainer = document.getElementById('recipeDetail');
        detailContainer.innerHTML = `
            <div class="recipe-detail-page">
                ${recipe.image && recipe.image.startsWith('https://') ? 
                    `<div class="recipe-detail-header">
                        <img src="${recipe.image}" alt="${recipe.title}" class="recipe-detail-image" onerror="this.parentElement.removeChild(this);">
                    </div>` : 
                    '<div class="recipe-detail-header" style="height: 200px; background: var(--bg-light);"></div>'
                }
                <div class="recipe-detail-content">
                    <p class="recipe-detail-description">${recipe.description}</p>
                    
                    <div class="recipe-category">
                        <span class="category-tag clickable" onclick="recipeDetail.filterByCategory('${recipe.category || 'Uncategorized'}')">${recipe.category || 'Uncategorized'}</span>
                        ${recipe.tags ? recipe.tags.map(tag => 
                            `<span class="tag">${tag}</span>`
                        ).join('') : ''}
                    </div>
                    
                    <div class="recipe-timing">
                        <div class="timing-item">
                            <span>🔪</span>
                            <span>Prep: ${recipe.prepTime}</span>
                        </div>
                        <div class="timing-item">
                            <span>🔥</span>
                            <span>Cook: ${recipe.cookTime}</span>
                        </div>
                        <div class="timing-item">
                            <span>⏰</span>
                            <span>Total: ${this.calculateTotalTime(recipe.prepTime, recipe.cookTime)}</span>
                        </div>
                        <div class="timing-item">
                            <span>🧠</span>
                            <span>Complexity: ${this.getComplexityDisplay(recipe.complexity || 3)}</span>
                        </div>
                    </div>

                    <div class="serving-adjuster">
                        <label for="servingCount">Servings: <span class="serving-count" id="servingCount">${recipe.servings}</span></label>
                        <div class="serving-presets">
                            <button class="preset-btn" onclick="recipeDetail.setServings(${Math.round(recipe.servings * 0.5)})">.5x</button>
                            <button class="preset-btn active" onclick="recipeDetail.setServings(${recipe.servings})">1x</button>
                            <button class="preset-btn" onclick="recipeDetail.setServings(${recipe.servings * 2})">2x</button>
                            <button class="preset-btn" onclick="recipeDetail.setServings(${recipe.servings * 3})">3x</button>
                        </div>
                        <span id="originalServings" style="display: none;">${this.originalServings}</span>
                    </div>

                    <div class="recipe-section">
                        <h2 class="section-title">🥘 Ingredients</h2>
                        <ul class="ingredients-list" id="ingredientsList">
                            ${this.renderIngredients(this.updatedIngredients || this.currentRecipe.ingredients)}
                        </ul>
                    </div>

                    <div class="recipe-section">
                        <h2 class="section-title">📝 Instructions</h2>
                        <ol class="instructions-list">
                            ${this.renderInstructions(recipe.instructions)}
                        </ol>
                    </div>

                    ${recipe.notes ? `
                        <div class="recipe-section">
                            <h2 class="section-title">📌 Notes</h2>
                            ${Array.isArray(recipe.notes) ? `
                                <ul class="notes-list">
                                    ${recipe.notes.map(note => `<li class="note-item">${note}</li>`).join('')}
                                </ul>
                            ` : `<p>${recipe.notes}</p>`}
                        </div>
                    ` : ''}
                </div>

                ${recipe.source ? `
                    <div class="recipe-source">
                        <h3 class="section-title">🔗 Source: <a href="${recipe.source}" target="_blank" class="source-link">${this.cleanSourceUrl(recipe.source)}</a></h3>
                    </div>
                ` : ''}
            </div>
        `;

        this.setupIngredientCheckboxes();
    }

    renderIngredients(ingredients) {
        let html = '';
        let ingredientIndex = 0;
        
        ingredients.forEach((ingredient, index) => {
            if (typeof ingredient === 'string') {
                // Regular ingredient (backward compatible)
                html += `<li class="ingredient-item" data-index="${ingredientIndex}">
                    <input type="checkbox" class="ingredient-checkbox">
                    <span class="ingredient-text">${ingredient}</span>
                </li>`;
                ingredientIndex++;
            } else if (typeof ingredient === 'object' && ingredient.group && ingredient.items) {
                // Grouped ingredients
                html += `
                    <div class="ingredient-group">
                        <h3 class="group-header">${ingredient.group}</h3>
                        <ul class="group-ingredients-list">
                            ${ingredient.items.map(item => `
                                <li class="ingredient-item" data-index="${ingredientIndex}">
                                    <input type="checkbox" class="ingredient-checkbox">
                                    <span class="ingredient-text">${item}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                `;
                ingredientIndex += ingredient.items.length;
            }
        });
        
        return html;
    }

    renderInstructions(instructions) {
        return instructions.map((instruction, index) => 
            `<li class="instruction-item">
                ${instruction}
            </li>`
        ).join('');
    }

    setupIngredientCheckboxes() {
        const ingredientItems = document.querySelectorAll('.ingredient-item');
        
        ingredientItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const checkbox = item.querySelector('.ingredient-checkbox');
                if (checkbox) {
                    checkbox.checked = !checkbox.checked;
                    
                    // Update text styling
                    const text = item.querySelector('.ingredient-text');
                    if (checkbox.checked) {
                        text.classList.add('checked');
                    } else {
                        text.classList.remove('checked');
                    }
                }
            });
        });
    }

    setServings(servings) {
        if (!this.currentRecipe) return;

        const servingCountEl = document.getElementById('servingCount');
        const roundedServings = Math.max(1, Math.round(servings));
        
        servingCountEl.textContent = roundedServings;
        
        const scaleFactor = roundedServings / this.originalServings;
        this.updateIngredients(scaleFactor);
        
        // Update preset button active states
        this.updatePresetButtons(roundedServings);
    }

    updatePresetButtons(currentServings) {
        const presetButtons = document.querySelectorAll('.preset-btn');
        const originalServings = this.originalServings;
        
        presetButtons.forEach(button => {
            button.classList.remove('active');
        });
        
        // Check which preset matches the current servings
        if (Math.round(currentServings) === Math.round(originalServings * 0.5)) {
            presetButtons[0]?.classList.add('active'); // Half
        } else if (Math.round(currentServings) === Math.round(originalServings)) {
            presetButtons[1]?.classList.add('active'); // Default
        } else if (Math.round(currentServings) === Math.round(originalServings * 2)) {
            presetButtons[2]?.classList.add('active'); // Double
        } else if (Math.round(currentServings) === Math.round(originalServings * 3)) {
            presetButtons[3]?.classList.add('active'); // Triple
        }
    }

    updateIngredients(scaleFactor) {
        const ingredientsList = document.getElementById('ingredientsList');
        if (!ingredientsList) {
            console.error('❌ Ingredients list element not found - retrying...');
            // Retry after a short delay
            setTimeout(() => {
                const retryList = document.getElementById('ingredientsList');
                if (retryList) {
                    this.updatedIngredients = this.scaleIngredients(this.currentRecipe.ingredients, scaleFactor);
                    retryList.innerHTML = this.renderIngredients(this.updatedIngredients);
                    this.setupIngredientCheckboxes();
                    console.log('✅ Ingredients list found on retry');
                } else {
                    console.error('❌ Ingredients list still not found after retry');
                }
            }, 100);
            return;
        }
        
        this.updatedIngredients = this.scaleIngredients(this.currentRecipe.ingredients, scaleFactor);
        ingredientsList.innerHTML = this.renderIngredients(this.updatedIngredients);
        this.setupIngredientCheckboxes();
    }

    scaleIngredients(ingredients, scaleFactor) {
        return ingredients.map(ingredient => {
            if (typeof ingredient === 'string') {
                // Scale regular ingredient
                return this.scaleIngredient(ingredient, scaleFactor);
            } else if (typeof ingredient === 'object' && ingredient.group && ingredient.items) {
                // Scale grouped ingredients
                return {
                    group: ingredient.group,
                    items: ingredient.items.map(item => this.scaleIngredient(item, scaleFactor))
                };
            }
            return ingredient;
        });
    }

    scaleIngredient(ingredient, scaleFactor) {
        if (scaleFactor === 1) return ingredient;
        
        // Multi-pattern approach for better ingredient scaling
        const patterns = [
            // Pattern 1: Standard measurements (amount + unit + description)
            /^(\d+\s+\d+\/\d+|\d+\/\d+|\d*\.?\d+|\d*[¼½¾\u2153\u2154])\s*(tsp|teaspoon|tbsp|tablespoon|cup|cups|oz|ounce|ounces|lb|pound|pounds|g|gram|grams|kg|kilogram|kilograms|ml|milliliter|milliliters|l|liter|liters|fl\s*oz|fluid\s*ounce|pinch|dash|clove|cloves|can|cans)(?:\s+of)?\b\s*(.*)$/i,
            // Pattern 2: Whole ingredients with count (4 cloves garlic, 2 carrots)
            /^(\d+\s+\d+\/\d+|\d+\/\d+|\d*\.?\d+|\d*[¼½¾\u2153\u2154])\s*(clove|cloves|carrot|carrots|onion|onions|garlic|clove|cloves|stalk|stalks|rib|ribs|pepper|peppers|potato|potatoes|tomato|tomatoes|leaf|leaves|piece|pieces)\b\s*(.*)$/i,
            // Pattern 3: Canned goods with size (1 (15-ounce) can tomatoes)
            /^(\d+)\s*\(([^)]+)\)\s*(can|cans|jar|jars|bottle|bottles)(?:\s+of)?\s*(.*)$/i,
            // Pattern 4: Simple count items (1 medium onion, 2 large eggs)
            /^(\d+\s+\d+\/\d+|\d+\/\d+|\d*\.?\d+|\d*[¼½¾\u2153\u2154])\s*(small|medium|large|extra\s+large)?\s*([a-z]+(?:\s+[a-z]+)?)\s*(.*)$/i
        ];
        
        for (const pattern of patterns) {
            const match = ingredient.match(pattern);
            if (match) {
                return this.processIngredientMatch(match, scaleFactor);
            }
        }
        
        // If no pattern matches, return original ingredient
        return ingredient;
    }
    
    processIngredientMatch(match, scaleFactor) {
        const [fullMatch, amount, ...captures] = match;
        const rest = captures[captures.length - 1] || '';
        
        let originalAmount = this.parseAmount(amount);
        const scaledAmount = originalAmount * scaleFactor;
        const formattedAmount = this.formatAmount(scaledAmount);
        
        // Reconstruct the ingredient based on the pattern that matched
        if (captures.length === 3) {
            // Standard format: amount + unit + rest
            return `${formattedAmount} ${captures[0]}${rest ? ' ' + rest : ''}`;
        } else if (captures.length === 2) {
            // Simple format: amount + item + rest
            return `${formattedAmount} ${captures[0]}${rest ? ' ' + rest : ''}`;
        } else if (captures.length === 4) {
            // Canned goods: amount + size + container + rest
            return `${formattedAmount} (${captures[1]}) ${captures[2]}${rest ? ' ' + rest : ''}`;
        } else if (captures.length === 5) {
            // Size + item: amount + size + item + rest
            const size = captures[1] ? captures[1] + ' ' : '';
            return `${formattedAmount} ${size}${captures[2]}${rest ? ' ' + rest : ''}`;
        }
        
        return fullMatch;
    }
    
    parseAmount(amount) {
        // Handle mixed numbers (e.g., "2 1/4" or "2 ¼")
        if (amount.includes(' ') && (amount.includes('/') || /[¼½¾\u2153\u2154]/.test(amount))) {
            const parts = amount.split(' ');
            const wholeNumber = parseInt(parts[0]);
            const fraction = parts[1];
            
            let fractionValue;
            if (fraction.includes('/')) {
                const fractionParts = fraction.split('/');
                fractionValue = parseInt(fractionParts[0]) / parseInt(fractionParts[1]);
            } else {
                fractionValue = this.parseUnicodeFraction(fraction);
            }
            
            return wholeNumber + fractionValue;
        }
        // Handle simple fractions (e.g., "1/2")
        else if (amount.includes('/')) {
            const fractionParts = amount.split('/');
            return parseInt(fractionParts[0]) / parseInt(fractionParts[1]);
        }
        // Handle Unicode fractions (e.g., "¼", "½", "¾")
        else if (/[¼½¾\u2153\u2154]/.test(amount)) {
            return this.parseUnicodeFraction(amount);
        }
        // Handle decimals and whole numbers
        else {
            return parseFloat(amount);
        }
    }

    calculateTotalTime(prepTime, cookTime) {
        // Simple time calculation - this could be enhanced
        const prepMinutes = this.parseTime(prepTime);
        const cookMinutes = this.parseTime(cookTime);
        const totalMinutes = prepMinutes + cookMinutes;
        
        if (totalMinutes < 60) {
            return `${totalMinutes} min`;
        } else {
            const hours = Math.floor(totalMinutes / 60);
            const minutes = totalMinutes % 60;
            return minutes > 0 ? `${hours}h ${minutes}m` : `${hours}h`;
        }
    }

    parseTime(timeString) {
        // Parse time strings like "15 min", "1 hour", "2h 30m"
        const match = timeString.match(/(\d+)\s*(hour|hr|h|min|minute|m)/i);
        if (!match) return 0;
        
        const amount = parseInt(match[1]);
        const unit = match[2].toLowerCase();
        
        if (unit.startsWith('h')) {
            return amount * 60;
        } else {
            return amount;
        }
    }


    calculateTotalTime(prepTime, cookTime) {
        // Simple time calculation - this could be enhanced
        const prepMinutes = this.parseTime(prepTime);
        const cookMinutes = this.parseTime(cookTime);
        const totalMinutes = prepMinutes + cookMinutes;
        
        if (totalMinutes < 60) {
            return `${totalMinutes} min`;
        } else {
            const hours = Math.floor(totalMinutes / 60);
            const minutes = totalMinutes % 60;
            return minutes > 0 ? `${hours}h ${minutes}m` : `${hours}h`;
        }
    }

    parseTime(timeString) {
        // Parse time strings like "15 min", "1 hour", "2h 30m"
        const match = timeString.match(/(\d+)\s*(hour|hr|h|min|minute|m)/i);
        if (!match) return 0;
        
        const amount = parseInt(match[1]);
        const unit = match[2].toLowerCase();
        
        if (unit.startsWith('h')) {
            return amount * 60;
        } else {
            return amount;
        }
    }

    filterByCategory(category) {
        // Navigate to main page with category filter
        window.location.href = `index.html?category=${encodeURIComponent(category)}`;
    }

    decimalToFraction(decimal) {
        // Common cooking fractions with their decimal equivalents
        const commonFractions = [
            { fraction: '1/8', decimal: 0.125 },
            { fraction: '1/4', decimal: 0.25 },
            { fraction: '1/3', decimal: 0.333 },
            { fraction: '3/8', decimal: 0.375 },
            { fraction: '1/2', decimal: 0.5 },
            { fraction: '2/3', decimal: 0.666 },
            { fraction: '3/4', decimal: 0.75 },
            { fraction: '7/8', decimal: 0.875 }
        ];

        // Round to nearest common fraction
        let closestFraction = null;
        let smallestDifference = Infinity;

        for (const { fraction, decimal: fracDecimal } of commonFractions) {
            const difference = Math.abs(decimal - fracDecimal);
            if (difference < smallestDifference) {
                smallestDifference = difference;
                closestFraction = fraction;
            }
        }

        // If very close to a common fraction (within 0.02), use it
        if (smallestDifference < 0.02) {
            return closestFraction;
        }

        // For very small numbers, use the fraction if close enough
        if (decimal < 0.1 && smallestDifference < 0.05) {
            return closestFraction;
        }

        // Otherwise, return as decimal with appropriate precision
        if (decimal < 1) {
            return decimal.toFixed(2).replace(/\.?0+$/, '');
        } else {
            return Math.round(decimal).toString();
        }
    }

    parseUnicodeFraction(unicodeFraction) {
        const unicodeToDecimal = {
            '¼': 0.25,
            '½': 0.5,
            '¾': 0.75,
            '\u2153': 0.333,
            '\u2154': 0.666
        };
        
        // Handle cases like "2¼" (whole number + unicode fraction)
        const match = unicodeFraction.match(/^(\d*)([¼½¾\u2153\u2154])$/);
        if (match) {
            const wholeNumber = match[1] ? parseInt(match[1]) : 0;
            const fractionChar = match[2];
            return wholeNumber + unicodeToDecimal[fractionChar];
        }
        
        // Handle standalone unicode fractions
        return unicodeToDecimal[unicodeFraction] || 0;
    }

    formatAmount(amount) {
        if (amount >= 1) {
            const wholeNumber = Math.floor(amount);
            const decimalPart = amount - wholeNumber;
            
            if (decimalPart > 0.05) {
                // Convert decimal part to fraction
                const fraction = this.decimalToFraction(decimalPart);
                return `${wholeNumber} ${fraction}`;
            } else {
                return wholeNumber.toString();
            }
        } else {
            // Less than 1, just use fraction or decimal
            return this.decimalToFraction(amount);
        }
    }
}

// Initialize the recipe detail page when DOM is loaded
let recipeDetail;
document.addEventListener('DOMContentLoaded', () => {
    recipeDetail = new RecipeDetail();
});
