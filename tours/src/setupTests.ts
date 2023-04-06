// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import { server } from "../__mock__/mockServer";

// Start mock server before any test
beforeAll(() => server.listen());

// Reset handlers to intial stage after each time run
// So that any dynamically added handlers will not effect other tests.
afterEach(() => server.resetHandlers());

// Close mock server after all tests.
afterAll(() => server.close());
