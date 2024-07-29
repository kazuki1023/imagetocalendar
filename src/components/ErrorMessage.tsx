interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div className="flex justify-center items-center w-full h-full text-red-500">
    <p>Error: {message}</p>
  </div>
);

export default ErrorMessage;
