

package io.hse24.demo.exceptions;

        import org.springframework.http.HttpStatus;
        import org.springframework.http.ResponseEntity;
        import org.springframework.web.bind.annotation.ControllerAdvice;
        import org.springframework.web.bind.annotation.ExceptionHandler;
        import org.springframework.web.bind.annotation.ResponseBody;

@ControllerAdvice
public class CapacityAdvice {

    @ResponseBody
    @ExceptionHandler(CapacityException.class)
    public final ResponseEntity<CapacityNotFoundResponse> capabilityNotFoundResponseResponseEntity(CapacityException ex){
        CapacityNotFoundResponse response = new CapacityNotFoundResponse(ex.getMessage());
        return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
    }

}