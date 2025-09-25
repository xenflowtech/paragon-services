# Paragon Services Website

A professional website for Paragon Services - Freight Forwarding & Customs Clearance Experts.

## Features

- **Responsive Design**: Works on all devices
- **Multi-page Navigation**: Home, Services, Industries, About, Contact
- **Quote Request System**: Popup modal for quote requests
- **Contact Form**: Functional contact form with email forwarding
- **Video Background**: Hero section with video background
- **Professional Styling**: Modern, professional design

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Email Configuration

To enable email functionality, you need to set up Gmail App Password:

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account Settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
3. **Create .env file** in the project root:
   ```bash
   # Create .env file with your email configuration
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your_gmail_app_password_here
   PORT=5000
   ```
   
   Or set environment variables:
   ```bash
   # Windows
   set EMAIL_USER=your-email@gmail.com
   set EMAIL_PASSWORD=your_app_password_here
   
   # Mac/Linux
   export EMAIL_USER=your-email@gmail.com
   export EMAIL_PASSWORD=your_app_password_here
   ```

### 3. Run the Application

#### Development Mode (Frontend + Backend)
```bash
npm run dev
```
This runs both the React frontend (port 3000) and Express backend (port 5000)

#### Frontend Only
```bash
npm start
```

#### Backend Only
```bash
npm run server
```

### 4. Build for Production
```bash
npm run build
```

## Email Configuration

The application sends emails to:
- **From**: paraservs498@gmail.com
- **To**: paraservs498@gmail.com (company email)

### Email Templates

#### Quote Request Email
- Subject: "New Quote Request - [Customer Name]"
- Includes: Name, Email, Phone, Company, Service, Origin, Destination, Cargo Type, Weight, Message

#### Contact Form Email
- Subject: "New Contact Form Submission - [Customer Name]"
- Includes: Name, Email, Phone, Company, Service, Message

## API Endpoints

- `POST /api/quote-request` - Handle quote request submissions
- `POST /api/contact-form` - Handle contact form submissions

## File Structure

```
paragon-services/
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Footer.tsx      # Footer component
│   │   ├── QuoteModal.tsx  # Quote request modal
│   │   └── ...
│   ├── pages/              # Page components
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── Contact.tsx
│   │   └── ...
│   └── App.tsx            # Main app component
├── server.js              # Express backend server
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## Technologies Used

- **Frontend**: React, TypeScript, CSS3
- **Backend**: Node.js, Express
- **Email**: Nodemailer
- **Routing**: React Router DOM

## Contact Information

- **Lahore Office**: 20-F, KHAN TOWER, DEFENCE CHOWK, WALTON ROAD, LAHORE CANTT
- **Lahore Phone**: 042-36686620-1
- **Lahore Email**: parasevslhr@yahoo.com
- **Karachi Office**: F-7, 6th FLOOR, OCEAN CENTRE, OPP. CUSTOM HOUSE, KARACHI
- **Karachi Phone**: 021-32205730, 32210501
- **Karachi Email**: paraservs498@gmail.com
- **CEO**: Zahid Sharif Butt - 0300-8480287
