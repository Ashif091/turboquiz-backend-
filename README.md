# Quiz API Documentation

This API allows users to create quizzes, add questions to quizzes, retrieve quiz data, and manage quizzes and questions.

## Key Feature

When adding, updating, or deleting quizzes or questions, the API returns the updated data. This makes it easy for frontend applications to update their state without additional API calls.

## Base URL

`http://turboquizapi.onrender.com`

## Endpoints

### GET /quiz
Retrieve a list of all quizzes.

### POST /quiz/create
Create a new quiz.

### POST /quiz/:id/questions
Add a question to a specific quiz.

### GET /quiz/:id
Retrieve a specific quiz with its questions.

### DELETE /quiz/:id
Delete a specific quiz and all its associated questions.

### DELETE /quiz/:id/:Q_id
Delete a specific question from a quiz.

## Data Models

### Quiz Schema
```
{
  name: { type: String, required: true },
  status: { type: Boolean, required: true, default: true },
  timestamps: true
}
```

### Question Schema
```
{
  quiz_id: { type: Schema.Types.ObjectId, required: true, ref: 'Quiz' },
  question: { type: String, required: true },
  options: {
    type: [String],
    required: true,
    validate: {
      validator: function (v: string[]) {
        return v.length === 4;
      },
      message: 'Options array must have exactly 4 elements',
    },
  },
  correct_option: { type: String, required: true },
  timestamps: true
}
```

## Notes

- All requests should include appropriate headers (e.g., Content-Type: application/json).
- Authentication may be required for certain endpoints (not specified in the provided information).
- Error responses will include appropriate HTTP status codes and error messages.

For detailed information about request and response structures for each endpoint, please refer to the full API documentation.