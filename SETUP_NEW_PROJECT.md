# 🚀 How to Start a New Project from This Boilerplate

This guide will help you create a new project using this boilerplate as a starting point.

## Method 1: Clone and Setup (Recommended)

### Step 1: Clone the Boilerplate

```bash
# Clone the boilerplate repository
git clone <your-boilerplate-repo-url> my-new-project
cd my-new-project
```

### Step 2: Remove Existing Git History

```bash
# Remove the existing git repository
rm -rf .git

# Or on Windows PowerShell:
Remove-Item -Recurse -Force .git
```

### Step 3: Update Project Information

Update `package.json` with your new project details:

```json
{
  "name": "my-new-project",
  "version": "1.0.0",
  "description": "Your project description",
  "author": "Your Name",
  // ... rest of the config
}
```

### Step 4: Update README.md

Replace the boilerplate README with your project-specific documentation.

### Step 5: Initialize New Git Repository

```bash
# Initialize a new git repository
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit from boilerplate"

# Add your remote repository (if you have one)
git remote add origin <your-new-repo-url>
git branch -M main
git push -u origin main
```

### Step 6: Install Dependencies

```bash
# Install all dependencies
yarn install
# or
npm install
```

### Step 7: Setup Environment Variables

```bash
# Copy the example environment file
cp env.example .env.local

# Edit .env.local with your project-specific values
```

### Step 8: Update Project-Specific Files

1. **Update `package.json`**:
   - Change `name` to your project name
   - Update `description`
   - Update `author`
   - Remove or update `keywords`

2. **Update `README.md`**:
   - Replace with your project documentation
   - Update installation instructions
   - Add your project-specific features

3. **Update `LICENSE`** (if needed):
   - Update copyright year and name

4. **Update `env.example`**:
   - Add/remove environment variables specific to your project

5. **Clean up test pages** (optional):
   - Remove or update `pages/component-test.tsx` if not needed
   - Remove or update `pages/test.tsx` if not needed

### Step 9: Start Development

```bash
# Start the development server
yarn dev
# or
npm run dev
```

Visit `http://localhost:3000` to see your application.

---

## Method 2: Use as Template (GitHub)

If your boilerplate is on GitHub:

1. **Create a new repository** on GitHub
2. **Use the template feature**:
   - Click "Use this template" button on your boilerplate repo
   - Create a new repository from the template
   - Clone your new repository

3. Follow steps 3-9 from Method 1

---

## Method 3: Copy Files Manually

If you prefer to copy files manually:

```bash
# Create a new directory
mkdir my-new-project
cd my-new-project

# Copy all files from boilerplate (excluding .git and node_modules)
# On Windows PowerShell:
Copy-Item -Path "..\boiler-next\*" -Destination "." -Recurse -Exclude ".git","node_modules",".next","out"

# On Mac/Linux:
cp -r ../boiler-next/* . --exclude=.git --exclude=node_modules --exclude=.next --exclude=out
```

Then follow steps 2-9 from Method 1.

---

## Quick Setup Script

You can create a setup script to automate the process. Create `setup-new-project.sh`:

```bash
#!/bin/bash

# Get project name from user
read -p "Enter your new project name: " PROJECT_NAME

# Create new directory
mkdir "../$PROJECT_NAME"
cd "../$PROJECT_NAME"

# Copy all files (excluding .git, node_modules, .next, out)
rsync -av --exclude='.git' --exclude='node_modules' --exclude='.next' --exclude='out' ../boiler-next/ .

# Remove git history
rm -rf .git

# Initialize new git repo
git init
git add .
git commit -m "Initial commit from boilerplate"

# Update package.json (requires manual edit or use sed)
echo "Please update package.json with your project details"

# Install dependencies
yarn install

echo "✅ Project setup complete! Don't forget to:"
echo "1. Update package.json"
echo "2. Update README.md"
echo "3. Create .env.local from env.example"
echo "4. Update LICENSE if needed"
```

---

## Checklist for New Project

- [ ] Clone/copy boilerplate
- [ ] Remove `.git` folder
- [ ] Update `package.json` (name, description, author)
- [ ] Update `README.md`
- [ ] Update `LICENSE` (if needed)
- [ ] Create `.env.local` from `env.example`
- [ ] Initialize new git repository
- [ ] Install dependencies (`yarn install`)
- [ ] Remove/update test pages if needed
- [ ] Update API endpoints in `constants/index.ts`
- [ ] Update theme colors in `theme.ts` (if needed)
- [ ] Test the application (`yarn dev`)
- [ ] Push to your new repository

---

## Important Notes

1. **Environment Variables**: Always create `.env.local` from `env.example` and never commit `.env.local` to git.

2. **API Configuration**: Update the API base URL in `services/api.ts` or via `NEXT_PUBLIC_API_URL` environment variable.

3. **Authentication**: The boilerplate includes a generic auth system. Update `context/AuthContext.tsx` to connect to your actual API.

4. **Theme Customization**: Customize colors, fonts, and styles in `theme.ts` to match your brand.

5. **Component Cleanup**: Remove test pages (`component-test.tsx`, `test.tsx`) if you don't need them in production.

---

## Troubleshooting

### Issue: Dependencies not installing
```bash
# Clear cache and reinstall
rm -rf node_modules yarn.lock
yarn install
```

### Issue: TypeScript errors
```bash
# Check TypeScript configuration
yarn type-check
```

### Issue: Build errors
```bash
# Clear Next.js cache
rm -rf .next
yarn build
```

---

## Next Steps After Setup

1. **Connect to your API**: Update API endpoints and authentication
2. **Customize Theme**: Update colors, fonts, and styling
3. **Add Your Pages**: Create your application pages
4. **Setup CI/CD**: Configure deployment pipeline
5. **Add Tests**: Set up testing framework (Jest, React Testing Library)

Happy coding! 🎉

