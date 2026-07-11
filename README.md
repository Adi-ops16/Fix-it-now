# Assignment 4 API Documentation

This project is a production-style service platform API for customers, technicians, bookings, payments, services, categories, availability, and reviews.

## Base URL
- Local: http://localhost:3000
- API prefix: /api

## Authentication
Most protected routes require an access token in an `accessToken` cookie.

Roles used by the API:
- `CUSTOMER`
- `TECHNICIAN`
- `ADMIN`

## Common Response Format
All responses follow a consistent envelope:

```json
{
  "success": true,
  "code": 200,
  "message": "Success message",
  "data": {},
  "meta": {}
}
```

## Query Parameters
Common pagination and filtering query params:
- `page` – page number (default: 1)
- `limit` – page size (default: 10)
- `sortOrder` – `asc` or `desc`
- `sortBy` – field name to sort by
- `searchTerms` – free-text search
- `category_id` – filter by category
- `technician_id` – filter by technician
- `location` – filter by location
- `booking_status` – filter bookings by status

## API Endpoints

| Module | Method | Route | Auth | Description |
|---|---|---|---|---|
| Auth | POST | `/api/auth/login` | Public | Login a customer/technician/admin account |
| Customers | POST | `/api/customers` | Public | Create a customer account |
| Customers | GET | `/api/customers` | Admin | Get all customers |
| Customers | GET | `/api/customers/me` | Admin / Customer / Technician | Get authenticated user profile |
| Customers | PATCH | `/api/customers/status` | Admin | Ban or activate a customer account |
| Customers | PATCH | `/api/customers/:id` | Public | Update customer profile |
| Customers | DELETE | `/api/customers/:id` | Public | Delete customer account |
| Technicians | GET | `/api/technician` | Public | Get all technicians |
| Technicians | GET | `/api/technician/:id` | Public | Get technician profile |
| Technicians | POST | `/api/technician/register` | Customer | Register as a technician |
| Technicians | PATCH | `/api/technician/profile` | Technician | Update technician profile |
| Categories | GET | `/api/categories` | Public | List categories |
| Categories | POST | `/api/categories` | Admin | Create category |
| Categories | PATCH | `/api/categories/:id` | Admin | Update category |
| Categories | DELETE | `/api/categories/:id` | Admin | Delete category |
| Services | GET | `/api/services` | Public | List services with filtering/pagination |
| Services | GET | `/api/services/my-services` | Technician | List services owned by the authenticated technician |
| Services | GET | `/api/services/:serviceId` | Public | Get service details |
| Services | POST | `/api/services` | Technician | Create a service |
| Services | PATCH | `/api/services/:serviceId` | Technician | Update your own service |
| Services | DELETE | `/api/services/:serviceId` | Technician | Delete your own service |
| Availability | GET | `/api/technician/availability` | Public | Get technician availability template |
| Availability | PUT | `/api/technician/availability` | Technician | Set technician availability |
| Bookings | GET | `/api/bookings` | Customer / Technician | Get bookings for the authenticated user |
| Bookings | GET | `/api/bookings/all` | Admin | Get all bookings |
| Bookings | GET | `/api/bookings/:bookingId` | Customer | Get booking details |
| Bookings | POST | `/api/bookings` | Customer | Create a booking |
| Bookings | PATCH | `/api/bookings/status` | Admin / Customer / Technician | Update booking status |
| Payments | GET | `/api/payment/history` | Customer / Technician | Get payment history |
| Payments | POST | `/api/payment/checkout` | Customer | Create Stripe checkout session |
| Payments | POST | `/api/payment/webhook` | Public | Stripe webhook endpoint |
| Reviews | POST | `/api/reviews` | Customer | Create a review for a completed booking |
| Reviews | GET | `/api/reviews/technician/:technicianId` | Public | Get all reviews for a technician |
| Reviews | GET | `/api/reviews/booking/:bookingId` | Public | Get review by booking |
| Reviews | PATCH | `/api/reviews/:reviewId` | Customer | Update your own review |
| Reviews | DELETE | `/api/reviews/:reviewId` | Customer | Delete your own review |

## Request Body Notes

### Auth Login
```json
{
  "email": "string",
  "password": "string"
}
```

### Customer Create
```json
{
  "name": "string",
  "email": "string",
  "password": "string",
  "photo_url": "string|null"
}
```

### Technician Register
```json
{
  "bio": "string",
  "experience_year": 0,
  "hourly_rate": 0,
  "location": "string",
  "is_available": true
}
```

### Service Create
```json
{
  "title": "string",
  "description": "string",
  "price": 100,
  "estimated_time": 60,
  "category_id": 1,
  "location": "string|null"
}
```

### Booking Create
```json
{
  "service_id": 1,
  "work_date": "YYYY-MM-DD",
  "work_startTime": "HH:mm"
}
```

### Review Create
```json
{
  "booking_id": "uuid",
  "rating": 5,
  "comment": "optional string"
}
```

### Availability Set
```json
{
  "availability": [
    {
      "weekday": "MONDAY",
      "start_time": "09:00",
      "end_time": "17:00"
    },
    {
      "weekday": "TUESDAY",
      "start_time": "09:00",
      "end_time": "17:00"
    }
  ]
}
```

> Frontend must send all 7 weekdays in a single request. The API expects exactly one entry per weekday and rejects duplicates or incomplete schedules.

## Validation Rules
- Customer name must be at least 2 characters.
- Customer email must be a valid email.
- Customer password must be at least 6 characters.
- Service title must be at least 5 characters.
- Service description must be at least 20 characters.
- Booking date cannot be in the past.
- Booking time must follow `HH:mm` format.
- Review rating must be between 1 and 5.
- Review comment max length is 500 characters.

## Business Rules
- A review can only be created for a booking that is already `COMPLETED`.
- One review per booking.
- Only the customer who created a review can update or delete it.
- Services can only be updated or deleted by the technician who owns them.
- Bookings are only payable when their status is `ACCEPTED` and the booking time has not passed.
- Technician availability must be submitted as a full 7-day schedule.

## Error Handling
Validation and authorization errors return structured responses with appropriate HTTP status codes:
- `400` – invalid request or validation errors
- `401` – unauthorized
- `403` – forbidden
- `404` – not found
- `409` – conflict

## Notes for Production Use
- Configure a real `DATABASE_URL` and Stripe secrets in environment variables.
- Use HTTPS in production and secure cookies.
- Add rate limiting, logging, and monitoring for public endpoints.
- Consider adding pagination metadata and response caching for large datasets.
