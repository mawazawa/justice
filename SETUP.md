# JusticeOS Setup Guide

## 🚀 Getting Started

This project integrates Clerk authentication and Supabase database. Follow these steps to set up the integrations.

## 📋 Prerequisites

- Node.js 18+
- Bun package manager
- Clerk account (https://clerk.com)
- Supabase account (https://supabase.com)

## 🔧 Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```bash
# Clerk Authentication (Get from https://dashboard.clerk.com)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key_here
CLERK_SECRET_KEY=sk_test_your_clerk_secret_key_here

# Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# Supabase Database (Get from https://app.supabase.com)
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here
```

## 🗄️ Supabase Setup

1. Create a new project at https://app.supabase.com
2. Go to Settings > API to get your project URL and keys
3. Go to the SQL Editor and run the schema from `supabase-schema.sql`

## 🔐 Clerk Setup

1. Create an account at https://clerk.com
2. Create a new application
3. Copy the publishable key and secret key
4. Configure the sign-in/sign-up URLs in your Clerk dashboard:
   - Sign-in URL: `/sign-in`
   - Sign-up URL: `/sign-up`
   - After sign-in URL: `/dashboard`
   - After sign-up URL: `/dashboard`

## 🏃‍♂️ Running the Project

```bash
# Install dependencies
bun install

# Run the development server
bun run dev
```

## ✨ Features Included

- **Clerk Authentication**: Complete user authentication with sign-in/sign-up modals
- **Supabase Database**: PostgreSQL database with RLS policies
- **User Dashboard**: Protected dashboard page for authenticated users
- **Waitlist Integration**: Email collection saved to Supabase
- **Profile Management**: User profiles linked to Clerk users
- **Case Management**: Basic case tracking system

## 🔗 API Routes

The project includes middleware for protecting routes and API endpoints for:
- User authentication
- Database operations
- Email collection
- Case management

## 🎯 Next Steps

1. Set up your Clerk and Supabase accounts
2. Configure the environment variables
3. Run the Supabase schema
4. Start the development server
5. Test the authentication flow

The landing page now has fully functional authentication and database integration!
