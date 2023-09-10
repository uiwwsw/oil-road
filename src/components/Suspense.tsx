// https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=YOUR_CLIENT_ID

import { Component, HTMLAttributes, ReactNode, Suspense } from "react";
import { SWRConfig } from "swr";

interface SuspenseWrapperProps extends HTMLAttributes<HTMLElement> {
  loading?: ReactNode
  error?: string
}
interface ErrorBoundaryProps {
  fallback?: string
  children?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?:Error
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true , error};
  }

  public componentDidCatch(error: Error, errorInfo: unknown) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) return <h1>{`${this.props.fallback} ${this.state.error?.message ?? this.state.error}`}</h1>

    return this.props.children;
  }
}


const SuspenseWrapper = ({children,error='에러가났습니다요.', loading = <>loading...</> }: SuspenseWrapperProps) => {
  return <SWRConfig value={{ suspense: true,onError: (edd) => {
    // if (error.status !== 403 && error.status !== 404) {
    //   // We can send the error to Sentry,
    //   // or show a notification UI.
    // }
    console.log(1111, edd)
  } }} >
  <ErrorBoundary fallback={error}>
    <Suspense fallback={loading}>
      {children}
    </Suspense>
  </ErrorBoundary>
</SWRConfig>
};

export default SuspenseWrapper;
