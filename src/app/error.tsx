"use client";

// components/ErrorBoundary.tsx
import React, { Component, ErrorInfo } from 'react';
import Link from 'next/link';

interface State {
  hasError: boolean;
}

interface Props {
  children: React.ReactNode;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // You can log the error to an error reporting service here
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={styles.container}>
          <h1 style={styles.header}>Something Went Wrong</h1>
          <p style={styles.message}>
            Oops! An unexpected error occurred. Please try again later.
          </p>
          <Link href="/">
            <a style={styles.link}>Go Back to Home</a>
          </Link>
        </div>
      );
    }

    return this.props.children;
  }
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f7f7f7',
    textAlign: 'center',
  },
  header: {
    fontSize: '3rem',
    color: '#e74c3c',
  },
  message: {
    fontSize: '1.2rem',
    color: '#333',
  },
  link: {
    marginTop: '20px',
    fontSize: '1.2rem',
    color: '#3498db',
    textDecoration: 'underline',
  },
};

export default ErrorBoundary;
