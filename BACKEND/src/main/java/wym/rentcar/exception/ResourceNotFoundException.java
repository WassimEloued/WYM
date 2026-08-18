package wym.rentcar.exception;

// If you already have an equivalent exception in your project, delete this
// file and reuse yours instead — just update the imports in the services.
public class ResourceNotFoundException extends RuntimeException {
    public ResourceNotFoundException(String message) {
        super(message);
    }
}
