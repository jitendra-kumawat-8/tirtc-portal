# Next.js MUI Boilerplate

A comprehensive, production-ready Next.js boilerplate with Material-UI, TypeScript, and modern React patterns. Built with best practices and ready for rapid development.

## 🚀 Features

- **Next.js 12+** with TypeScript support
- **Material-UI (MUI) v5** with custom theme and Poppins font
- **React Hook Form** integration with custom headless form components
- **Axios** with interceptors for API calls
- **Generic Authentication System** ready to connect to your API
- **Modal & Snackbar Context** for global state management
- **Navigation Provider** with collapsible sidebar
- **Responsive Design** with mobile-first approach
- **Custom Component Library** with comprehensive testing page
- **Utility Functions** for common operations
- **Type Definitions** for better TypeScript support
- **Constants** for consistent configuration

## 🎨 Design System

### Typography

The boilerplate uses a consistent three-font system with distinct font types:

- **Primary (Poppins, sans-serif)** - Used for headings, buttons, and primary UI elements
- **Secondary (Inter, sans-serif)** - Used for subtitles, captions, and secondary text
- **Tertiary (Georgia, serif)** - Used for body text, form inputs, and general content

All typography throughout the application is restricted to these three font families for consistency and performance. The combination of sans-serif and serif fonts creates a clear visual hierarchy.

### Color Palette

- Primary: `#2563EB` (Blue)
- Secondary: `#7C3AED` (Purple)
- Success: `#10B981` (Green)
- Warning: `#F59E0B` (Orange)
- Error: `#EF4444` (Red)
- Info: `#3B82F6` (Light Blue)

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd nextjs-mui-boilerplate

# Install dependencies
npm install
# or
yarn install

# Copy environment variables
cp env.example .env.local

# Run the development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🏗️ Project Structure

```
├── components/
│   ├── HFComponents/          # Headless Form Components
│   │   ├── HFTextField.tsx
│   │   ├── HFCheckbox.tsx
│   │   ├── HFCheckboxes.tsx
│   │   ├── HFAutocomplete.tsx
│   │   ├── HFDatePicker.tsx
│   │   ├── HFDocumentUpload.tsx
│   │   └── fileToBase64.ts
│   ├── GenericModal.tsx       # Generic Modal Component
│   ├── ConfirmDialog.tsx      # Confirmation Dialog
│   ├── GlobalModal.tsx        # Global Modal Handler
│   └── SidePanel.tsx          # Navigation Sidebar
├── context/
│   ├── AuthContext.tsx        # Authentication Context
│   ├── ModalContext.tsx       # Modal Management Context
│   └── NavigationProvider.tsx # Navigation State Management
├── hooks/
│   └── useConfirmDialog.tsx   # Confirmation Dialog Hook
├── pages/
│   ├── _app.tsx              # App Configuration
│   ├── _document.tsx         # Document Configuration
│   ├── index.tsx             # Landing Page
│   ├── dashboard.tsx         # Dashboard Page
│   └── component-test.tsx    # Component Testing Page
├── services/
│   └── api.ts               # Axios instance with interceptors
├── utils/
│   └── index.ts             # Common utility functions
├── constants/
│   └── index.ts             # Application constants
├── types/
│   └── index.ts             # TypeScript type definitions
├── styles/
│   └── globals.css          # Global Styles
├── theme.ts                 # MUI Theme Configuration
├── env.example              # Environment variables example
└── package.json
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file based on `env.example`:

```bash
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3001/api

# App Configuration
NEXT_PUBLIC_APP_NAME=Next.js MUI Boilerplate
NEXT_PUBLIC_APP_VERSION=1.0.0

# Feature Flags
NEXT_PUBLIC_ENABLE_ANALYTICS=false
NEXT_PUBLIC_ENABLE_DEBUG_MODE=false
```

### Authentication Setup

The boilerplate includes a generic authentication system. To connect to your API:

1. Update the `authAPI` object in `context/AuthContext.tsx`:

```typescript
export const authAPI = {
  login: async (credentials: LoginVars): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>(
      "/auth/login",
      credentials
    );
    return response.data;
  },
  // ... other methods
};
```

2. Update the User interface in `types/index.ts` to match your API response:

```typescript
export interface User {
  id: string;
  email: string;
  name: string;
  role?: string;
  // Add your custom fields here
}
```

### API Configuration

The axios instance in `services/api.ts` is configured with:

- Automatic token injection via request interceptors
- 401 error handling with automatic logout
- Configurable base URL via environment variables
- Request/response logging for debugging

### Theme Customization

Modify `theme.ts` to customize colors, typography, and component styles:

```typescript
const palette = {
  primary: {
    main: "#YOUR_PRIMARY_COLOR",
    // ... other variants
  },
  // ... other colors
};
```

### Font Family Customization

The theme uses three font families for consistency with distinct font types:

```typescript
const fontFamily = {
  primary: "Poppins, sans-serif", // Headings, buttons, primary UI
  secondary: "Inter, sans-serif", // Subtitles, captions
  tertiary: "Georgia, serif", // Body text, form inputs
};
```

## 🧪 Component Testing

Visit `/component-test` to see all available components in action:

- **Typography & Buttons**: All MUI typography variants and button styles
- **Form Controls**: Text fields, checkboxes, radios, switches, sliders
- **Data Display**: Chips, avatars, badges, lists, tables
- **Navigation**: Breadcrumbs, pagination, steppers
- **Feedback**: Alerts, dialogs, snackbars
- **Layout**: Accordions, tooltips
- **HFComponents**: Custom headless form components

## 📝 Headless Form Components

The boilerplate includes custom headless form components built with React Hook Form:

### HFTextField

```typescript
<HFTextField
  name="email"
  label="Email"
  rules={{ required: "Email is required" }}
/>
```

### HFCheckbox

```typescript
<HFCheckbox name="agree" label="I agree to terms" />
```

### HFAutocomplete

```typescript
<HFAutocomplete
  name="country"
  label="Country"
  options={[
    { label: "USA", value: "usa" },
    { label: "Canada", value: "canada" },
  ]}
/>
```

### HFDatePicker

```typescript
<HFDatePicker name="birthDate" label="Date of Birth" />
```

### HFDocumentUpload

```typescript
<HFDocumentUpload name="resume" label="Upload Resume" />
```

## 🔐 Authentication Usage

```typescript
import { useAuth } from "../context/AuthContext";

function MyComponent() {
  const { user, loginUser, logout, isAuthenticated } = useAuth();

  const handleLogin = () => {
    loginUser({
      email: "user@example.com",
      password: "password",
      rememberMe: true,
    });
  };

  if (!isAuthenticated) {
    return <div>Please log in</div>;
  }

  return (
    <div>
      <h1>Welcome, {user?.name}!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
```

## 🎭 Modal System Usage

```typescript
import { useModal } from "../context/ModalContext";
import { MODAL_TYPES } from "../components/GlobalModal";

function MyComponent() {
  const { showModal } = useModal();

  const handleOpenModal = () => {
    showModal(MODAL_TYPES.GENERIC_MODAL, {
      title: "My Modal",
      children: <div>Modal content here</div>,
      actions: (
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button variant="outlined">Cancel</Button>
          <Button variant="contained">Save</Button>
        </Box>
      ),
    });
  };

  return <button onClick={handleOpenModal}>Open Modal</button>;
}
```

## 🛠️ Utility Functions

The boilerplate includes common utility functions in `utils/index.ts`:

### Date Utilities

```typescript
import { formatDate } from "../utils";

formatDate("2023-12-25", "long"); // "December 25, 2023"
formatDate("2023-12-25", "relative"); // "2d ago"
```

### Storage Utilities

```typescript
import { storage } from "../utils";

storage.set("user", userData, true); // persistent storage
const user = storage.get("user");
storage.remove("user");
```

### Validation Utilities

```typescript
import { isValidEmail, isValidPassword } from "../utils";

isValidEmail("user@example.com"); // true
isValidPassword("StrongPass123"); // true
```

## 📊 API Integration

The boilerplate uses axios with interceptors for API calls:

```typescript
import apiClient from "../services/api";

// GET request
const response = await apiClient.get("/users");

// POST request
const newUser = await apiClient.post("/users", userData);

// PUT request
const updatedUser = await apiClient.put(`/users/${id}`, userData);

// DELETE request
await apiClient.delete(`/users/${id}`);
```

## 🎨 Customization

### Adding New Pages

1. Create a new file in the `pages` directory
2. Import necessary components and hooks
3. Use the existing layout components for consistency

### Adding New Components

1. Create components in the `components` directory
2. Follow the existing naming conventions
3. Use TypeScript interfaces for props
4. Add to the component test page for testing

### Adding New API Endpoints

1. Update the `API_ENDPOINTS` constant in `constants/index.ts`
2. Use the `apiClient` instance for making requests
3. Add proper error handling

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

### Other Platforms

The boilerplate is configured for static export (`next.config.js`):

```bash
npm run build
# or
yarn build
```

## 📚 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the component test page at `/component-test`
2. Review the existing code examples
3. Check the TypeScript definitions in `types/index.ts`
4. Refer to the utility functions in `utils/index.ts`

## 🎯 What's Included

✅ **Complete Authentication System** - Login, signup, logout, profile management  
✅ **Modal & Snackbar System** - Global state management for UI feedback  
✅ **Navigation System** - Collapsible sidebar with routing  
✅ **Form Components** - Complete set of headless form components  
✅ **API Integration** - Axios with interceptors and error handling  
✅ **TypeScript Support** - Full type definitions and interfaces  
✅ **Utility Functions** - Common helper functions  
✅ **Constants** - Application-wide constants and configuration  
✅ **Theme System** - Customizable MUI theme with three-font system  
✅ **Responsive Design** - Mobile-first approach  
✅ **Component Testing** - Comprehensive component showcase  
✅ **Environment Configuration** - Easy setup with environment variables  
✅ **Production Ready** - Optimized for deployment

This boilerplate provides everything you need to start building a modern React application with Next.js and Material-UI!
