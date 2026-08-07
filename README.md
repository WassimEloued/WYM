# 🚗 WYM — AI-Powered Car Rental Platform

> **Startup Project — Summer 2026**

WYM is an **AI-powered car rental marketplace and SaaS platform** connecting customers with rental agencies through online reservations, fleet management, secure digital services, intelligent recommendations, and AI-powered assistance.

Our goal is to make car rental **simpler for customers and smarter for rental agencies**.

---

## 🌍 Vision

WYM aims to modernize the car rental industry by creating a complete digital ecosystem where:

- 👤 Customers can easily find and reserve vehicles
- 🏢 Rental agencies can manage their business digitally
- 🤖 AI assists customers in choosing the right vehicle
- 🧠 AI helps agencies manage their daily operations
- 🔐 Intelligent verification improves platform security
- 🛒 Agencies can sell vehicles they no longer need through the marketplace
- 📱 Customers and agencies can access WYM from web and mobile applications

---

# ✨ Core Features

## 👤 Customer Platform

### 🚗 Vehicle Discovery

Customers can:

- Search available vehicles
- Filter by price, location, brand, category, and features
- View detailed vehicle information
- Check real-time availability
- Compare rental offers
- View agency information
- Read reviews and ratings

### 📅 Online Reservations

- Select rental dates
- Check vehicle availability
- Make reservations
- Manage upcoming reservations
- View reservation history
- Receive booking notifications

### 💳 Online Payments

WYM is designed to support online payment solutions suitable for the Tunisian market.

Potential integrations include:

- Flouci
- Konnect
- Monetique Tunisie

---

# 🤖 WYM AI

Artificial Intelligence is one of the core components of WYM.

AI is designed to assist both **customers and rental agencies**, making the platform more intelligent and easier to use.

---

## 💬 AI Customer Assistant

### **WYM AI Concierge**

The WYM AI Concierge is an intelligent chatbot designed to help customers throughout their rental journey.

Customers can communicate naturally with the AI to:

- 🔎 Find suitable vehicles
- 🚗 Get vehicle recommendations
- 💰 Find vehicles within their budget
- 📅 Find cars available for specific dates
- 📍 Find vehicles near a specific location
- 🧳 Recommend vehicles based on their trip
- ⚙️ Compare vehicle features
- ❓ Answer questions about rentals
- 📋 Explain booking procedures
- 💳 Help with payment-related questions
- 📄 Explain required rental documents
- 🏢 Provide information about rental agencies

### 🧠 AI Vehicle Recommendations

Instead of forcing customers to manually search through hundreds of vehicles, WYM can analyze their requirements and recommend suitable cars.

Example:

> "I need a car for 5 people, around 100 TND per day, for a weekend in Hammamet."

The AI can analyze the available vehicles and recommend the most suitable options.

The recommendation system can consider:

- Budget
- Number of passengers
- Rental duration
- Location
- Vehicle category
- Fuel type
- Transmission
- Customer preferences
- Availability

---

# 🏢 Agency Platform

WYM provides rental agencies with a complete management environment.

Agencies can:

- 🚗 Manage their fleet
- ➕ Add vehicles
- ✏️ Edit vehicle information
- 📸 Upload vehicle images
- 💰 Set rental prices
- 📅 Manage availability
- 📋 Manage reservations
- 👥 Manage customers
- 📊 Monitor business activity
- ⭐ Manage reviews
- 🏪 Manage their agency profile
- 🛒 Sell unwanted vehicles through the marketplace

---

# 🤖 AI Rental Operations Agent

### **WYM AI Business Agent**

The WYM AI Business Agent is an intelligent assistant designed specifically for rental agencies.

Instead of being only a chatbot, the AI Agent is designed to **help agencies perform their daily work**.

The agent can assist with:

### 📊 Business Assistance

- Analyze rental activity
- Summarize daily operations
- Identify popular vehicles
- Identify vehicles with low demand
- Analyze booking trends
- Help understand revenue trends

### 🚗 Fleet Assistance

The AI Agent can help agencies understand their fleet by:

- Identifying underused vehicles
- Suggesting vehicles that may need maintenance
- Helping optimize vehicle availability
- Identifying frequently rented vehicles
- Suggesting fleet improvements

### 💰 Pricing Assistance

The AI Agent can assist agencies with pricing decisions by analyzing:

- Vehicle category
- Rental duration
- Demand
- Availability
- Historical bookings
- Seasonal trends

Example:

> "Which cars should I promote this weekend?"

The AI Agent can analyze the agency's available fleet and provide recommendations.

### 📅 Reservation Assistance

The AI Agent can help agencies:

- Understand upcoming reservations
- Identify booking conflicts
- Summarize today's rentals
- Highlight important reservations
- Assist with customer booking questions

### 🧑‍💼 Daily Work Assistant

The AI Agent can provide an agency with a daily summary such as:

> **Good morning!**
>
> You have 8 vehicles currently rented.
>
> 3 vehicles are available today.
>
> 2 vehicles have reservations starting tomorrow.
>
> Vehicle X has received significantly fewer bookings this month.
>
> You have 4 customer requests waiting for a response.

The objective is to turn WYM into an **AI assistant for the agency's daily operations**.

---

# 🪪 AI Verification & Security

WYM can use AI-powered document analysis to assist with customer verification.

### Identity Verification

AI-assisted verification can analyze identity documents and help verify submitted information.

### Driving License Verification

The system can analyze driving licenses and extract information such as:

- Driver identity
- License number
- Issue date
- Expiration date
- License categories
- Eligibility information

### 🔐 Intelligent Security

AI can assist in detecting:

- Inconsistent information
- Suspicious documents
- Potential verification issues
- Unusual registration activity

> AI-assisted verification does not replace required legal, regulatory, or human verification procedures.

---

# 🛒 Vehicle Marketplace

WYM also includes a marketplace for vehicles.

When a rental agency no longer wants to keep a vehicle in its fleet, it can publish the vehicle on the WYM Marketplace.

### Agency

The agency can:

- Select a vehicle
- Publish it for sale
- Add a price
- Add images
- Add vehicle information
- Manage inquiries

### Buyer

Users can:

- Browse vehicles for sale
- Search and filter listings
- View vehicle details
- Contact the seller
- Submit inquiries

---

# 💬 Communication

WYM is designed to make communication between customers and agencies easier.

Potential communication features include:

- In-platform messaging
- Notifications
- WhatsApp integration
- AI-assisted customer support
- Agency AI assistant

---

# 🔐 Authentication & Security

WYM includes secure authentication and authorization mechanisms.

Planned security features include:

- User registration
- Login
- JWT authentication
- Role-based access control
- Customer verification
- Driving-license verification
- Secure API endpoints
- Protected user data
- Secure payment processing

---

# 👥 User Roles

WYM is designed around multiple types of users.

### 👤 Customer

Can:

- Search vehicles
- Receive AI recommendations
- Make reservations
- Make payments
- Manage their account
- Communicate with agencies
- Use the AI Customer Assistant
- Verify identity and driving license

### 🏢 Rental Agency

Can:

- Manage fleet
- Manage reservations
- Manage customers
- Publish vehicles
- Sell vehicles
- Use the AI Business Agent
- Analyze business activity
- Communicate with customers

### 🛡️ Administrator

Can:

- Manage users
- Manage agencies
- Manage vehicles
- Manage marketplace listings
- Monitor platform activity
- Manage reported content
- Monitor verification processes

---

# 🏗️ Platform Architecture

```text
                         ┌────────────────────────┐
                         │       WYM Platform     │
                         └────────────┬───────────┘
                                      │
               ┌──────────────────────┼──────────────────────┐
               │                      │                      │
               ▼                      ▼                      ▼
       ┌───────────────┐      ┌───────────────┐      ┌───────────────┐
       │   Customers   │      │    Agencies   │      │ Administrators│
       └───────┬───────┘      └───────┬───────┘      └───────────────┘
               │                      │
               ▼                      ▼
       ┌───────────────┐      ┌────────────────┐
       │ AI Concierge  │      │ AI Business    │
       │               │      │ Agent          │
       │ Recommendations│     │ Operations     │
       └───────┬───────┘      └────────┬───────┘
               │                       │
               └───────────┬───────────┘
                           ▼
                 ┌─────────────────────┐
                 │     WYM Backend     │
                 │     Spring Boot     │
                 └──────────┬──────────┘
                            │
                            ▼
                 ┌─────────────────────┐
                 │     PostgreSQL      │
                 └─────────────────────┘
